const neutral_instruction = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">

      <p>
        これから、リズム音を提示します。
      </p>

      <p>
        音を聞きながら、先ほどと同じ加算課題に取り組んでください。
      </p>

      <p style="text-align:center;">
        スペースキーを押して進んでください。
      </p>

    </div>
  `,

  choices: [' '],

  data: {
    section: "neutral_instruction"
  }
};