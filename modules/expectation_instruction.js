const expectation_instruction = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">

      <p>
        これから提示するリズム音について、以下の説明を読んでください。
      </p>

      <div style="text-align:center; margin: 24px 0;">
        <img src="images/expectation_material.png" style="max-width: 700px; width: 90%;">
      </div>

  

    

      <p style="text-align:center;">
        スペースキーを押して進んでください。
      </p>

    </div>
  `,

  choices: [' '],

  data: {
    section: "expectation_instruction"
  }
};