const intro_page = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `
    <div class="page-text">
      <p>研究にご参加いただけるみなさまへ</p>

      <p>
        本研究にご協力いただきありがとうございます。<br>
        これから作業課題を行っていただきます。作業前に、みなさまの日頃のご様子や本日の体調についてお伺いします。<br>
        以下の項目について、あてはまるものを選んでください。
      </p>

      <p style="text-align:center;">スペースキーを押して進んでください。</p>
    </div>
  `,

  choices: [' '],

  data: {
    section: "intro"
  }
};