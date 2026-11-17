const post_questionnaire_no_sound_intro = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">
      <p>実際に作業を行った後の感想について、以下の質問にお答えください。</p>
      <p>最も当てはまるものを一つ選び、〇をつけてください。</p>

      <p style="text-align:center;">スペースキーを押して進んでください。</p>
    </div>
  `,

  choices: [' '],

  data: {
    section: "post_questionnaire_no_sound_intro"
  }
};


const post_questionnaire_no_sound = {
  type: jsPsychSurveyLikert,

  questions: [
    {
      prompt: "①無音条件では、集中しやすかった。",
      name: "no_sound_concentration",

      labels: [
        "1. 全くそう思わない",
        "2. あまりそう思わない",
        "3. どちらともいえない",
        "4. ややそう思う",
        "5. とてもそう思う"
      ],

      required: true
    },

    {
      prompt: "②無音条件では、作業しやすかった。",
      name: "no_sound_work_ease",

      labels: [
        "1. 全くそう思わない",
        "2. あまりそう思わない",
        "3. どちらともいえない",
        "4. ややそう思う",
        "5. とてもそう思う"
      ],

      required: true
    }
  ],

  button_label: "次へ",

  data: {
    section: "post_questionnaire_no_sound"
  }
};