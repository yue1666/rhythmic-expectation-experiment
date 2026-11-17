const TASK_DURATION_SECONDS = 180;

const addition_instruction_no_sound = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">
      <p>これから一桁の加算課題を行います。</p>

      <p>
        画面に表示される計算式の答えを、できるだけ速く、正確に入力してください。
      </p>

      <p>
        答えを入力したら、スペースキーを押して次の問題に進んでください。
      </p>

      <p>
        課題は一定時間が経過すると自動的に終了します。
      </p>

      <p style="text-align:center;">スペースキーを押して開始してください。</p>
    </div>
  `,

  choices: [' '],

  data: {
    section: "addition_instruction_no_sound",
    condition: "no_sound"
  }
};

function createAdditionTask(conditionName) {
 


  return {
    type: jsPsychHtmlKeyboardResponse,

    stimulus: `
      <div id="problem"></div>
      <input id="answer" type="text" autocomplete="off" />
      <div id="hint">答えを入力してから、スペースキーを押してください。</div>
    `,

    choices: "NO_KEYS",

    data: {
      section: "addition_task",
      condition: conditionName
    },

    on_load: function() {
      let metronomeAudio = null;

if (conditionName !== "no_sound") {

  metronomeAudio = new Audio("sounds/metronome_90bpm.m4a");

  metronomeAudio.loop = true;

  metronomeAudio.play();

}

      let trialNumber = 0;
      let currentA = null;
      let currentB = null;
      let correctAnswer = null;
      let problemStartTime = null;
      let taskFinished = false;

      const responses = [];
      const taskStartTime = performance.now();
      const taskEndTime = taskStartTime + TASK_DURATION_SECONDS * 1000;

      const problemDiv = document.getElementById("problem");
      const input = document.getElementById("answer");

      function generateOneDigitProblem() {
        currentA = Math.floor(Math.random() * 10);
        currentB = Math.floor(Math.random() * 10);
        correctAnswer = currentA + currentB;
        trialNumber += 1;

        problemDiv.innerHTML = currentA + " + " + currentB + " = ?";
        input.value = "";
        input.focus();
        problemStartTime = performance.now();
      }

      function finishTask() {
        if (taskFinished) {
          return;
        }

        taskFinished = true;
        document.removeEventListener("keydown", keyHandler);

        const totalResponses = responses.length;

        const correctCount = responses.filter(function(r) {
          return r.correct;
        }).length;

        const errorCount = totalResponses - correctCount;

        const errorRate = totalResponses > 0
          ? errorCount / totalResponses
          : null;

        const rtList = responses.map(function(r) {
          return r.rt;
        });

        const meanRt = rtList.length > 0
          ? rtList.reduce(function(sum, rt) {
              return sum + rt;
            }, 0) / rtList.length
          : null;
if (metronomeAudio !== null) {

  metronomeAudio.pause();

  metronomeAudio.currentTime = 0;

}
        jsPsych.finishTrial({
          section: "addition_task_summary",
          condition: conditionName,
          duration_seconds: TASK_DURATION_SECONDS,
          total_responses: totalResponses,
          correct_count: correctCount,
          error_count: errorRate === null ? totalResponses - correctCount : errorCount,
          error_rate: errorRate,
          mean_rt: meanRt,
          responses: JSON.stringify(responses)
        });
      }

      function keyHandler(event) {
        if (event.code === "Space") {
          event.preventDefault();

          const now = performance.now();

          if (now >= taskEndTime) {
            finishTask();
            return;
          }

          const rawAnswer = input.value.trim();

          if (rawAnswer === "") {
            return;
          }

          const numericAnswer = Number(rawAnswer);
          const rt = now - problemStartTime;

          responses.push({
            trial_number: trialNumber,
            a: currentA,
            b: currentB,
            correct_answer: correctAnswer,
            given_answer: rawAnswer,
            numeric_answer: numericAnswer,
            correct: numericAnswer === correctAnswer,
            rt: rt
          });

          generateOneDigitProblem();
        }
      }

      document.addEventListener("keydown", keyHandler);
      generateOneDigitProblem();

      setTimeout(function() {
        finishTask();
      }, TASK_DURATION_SECONDS * 1000);
    }
  };
}