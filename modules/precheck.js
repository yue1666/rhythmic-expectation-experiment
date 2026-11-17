const precheck = {
  type: jsPsychSurveyMultiChoice,

  preamble: `
    <div class="page-text">
      <p>【実施前確認】</p>

      <p>
        以下の項目について、「はい」または「いいえ」のいずれかに〇をつけてください。
      </p>
    </div>
  `,

  questions: [

    {
      prompt: "①本日、実験参加に支障となる体調不良はありません。",
      name: "health_condition",

      options: [
        "はい",
        "いいえ"
      ],

      required: true
    },

    {
      prompt: "②現在、頭痛や耳の違和感など、音刺激の提示に支障となる症状はありません。",
      name: "sound_condition",

      options: [
        "はい",
        "いいえ"
      ],

      required: true
    }

  ],

  button_label: "次へ",

  data: {
    section: "precheck"
  }
};