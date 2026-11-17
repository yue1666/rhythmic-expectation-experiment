const pre_questionnaire = {
  type: jsPsychSurveyLikert,

  preamble: `
    <div class="page-text">
      <p>【事前アンケート】</p>

      <p>
        以下の質問について、最もあてはまるものを
        5つの選択肢の中から1つ選び、〇をつけてください。
      </p>
    </div>
  `,

  questions: [

    {
      prompt: "①あなたは日頃から、音楽を流しながら作業や勉強をしますか。",

      name: "music_habit",

      labels: [
        "1. 全くしない",
        "2. あまりしない",
        "3. ときどきする",
        "4. よくする",
        "5. いつもする"
      ],

      required: true
    },

    {
      prompt: "②作業中に音楽やリズム音が流れていた場合、何も聞こえないときに比べて、作業の効率はどのように変化すると感じますか。",

      name: "sound_belief",

      labels: [
        "1. すごく落ちる",
        "2. 少し落ちる",
        "3. 変わらない",
        "4. 少し上がる",
        "5. すごく上がる"
      ],

      required: true
    }

  ],

  button_label: "次へ",

  data: {
    section: "pre_questionnaire"
  }
};