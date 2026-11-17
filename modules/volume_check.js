const volume_check = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">

      <p>
      これからリズム音を提示します。
      </p>

      <p>
      音量は、ご自身が快適だと感じる範囲で調整してください。
      </p>

      <p>
      音量調整が終わりましたら、画面の空白部分を一度クリックし、スペースキーを押して次へ進んでください。
      </p>

      <br>

      <audio controls loop>
        <source src="sounds/metronome_90bpm.m4a" type="audio/mp4">
      </audio>

    </div>
  `,

  choices: "ALL_KEYS",

response_ends_trial: true,

data: {
  section: "volume_check"
}

};