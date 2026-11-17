const post_questionnaire_sound = {
  type: jsPsychSurveyMultiChoice,

  questions: [

    {
      prompt: "① 音が流れている条件では、集中しやすかった。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "sound_concentration"
    },

    {
      prompt: "② 音が流れている条件では、作業しやすかった。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "sound_task_ease"
    },

    {
      prompt: "③ この音は作業の邪魔になった。",
      options: [
        "全くそう思わない",
        "あまりそう思わない",
        "どちらともいえない",
        "ややそう思う",
        "とてもそう思う"
      ],
      required: true,
      name: "sound_disturbance"
    }

  ],

  button_label: "次へ",

  data: {
    section: "pre_questionnaire"
  }
};