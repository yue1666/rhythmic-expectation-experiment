const manipulation_check = {
  type: jsPsychSurveyMultiChoice,

  questions: [

    {
      prompt: "①「このリズムを聴くことで作業効率が上がる」という説明について、内容を理解できたと思う。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "understanding"
    },

    {
      prompt: "②「このリズムを聴くことで作業効率が上がる」という説明について、信頼できる内容だと思う。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "credibility"
    },

    {
      prompt: "③「このリズムを聴くことで作業効率が上がる」という説明について、実際に作業効率が上がると思う。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "expectation"
    },

    {
      prompt: "④「このリズムを聴くことで作業効率が上がる」という説明について、より集中しやすくなると思う。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "concentration_expectation"
    }

  ],

  button_label: "次へ",

  data: {
    section: "manipulation_check"
  }
};