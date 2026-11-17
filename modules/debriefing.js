const debriefing = {
  type: jsPsychHtmlKeyboardResponse,

  stimulus: `

    <div class="page-text">

      <p>
      実験へのご協力、ありがとうございました。
      </p>

      <p>
      本研究では、
      リズム音に対する説明や期待が、
      作業成績や主観的評価にどのような影響を与えるかを検討しています。
      </p>

      <p>
      実験中に提示された説明文は、
      実験条件の一部として設定されていました。
      </p>

      <p>
      本研究で得られたデータは、
      研究目的以外には使用されません。
      </p>

      <p>
      ご不明な点がありましたら、
      実験者までお問い合わせください。
      </p>

      <br>

      <p style="text-align:center;">
      スペースキーを押すと終了します。
      </p>

    </div>

  `,

  choices: [' '],

  data: {
    section: "debriefing"
  }
};