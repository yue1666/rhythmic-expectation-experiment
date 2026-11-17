# Rhythmic auditory expectation experiment

Japanese-language browser experiment based on jsPsych 8.2.3.

## Files

- `A.html`: neutral rhythm-description condition
- `B.html`: expectation-induction condition
- `modules/`: experiment scripts
- `sounds/metronome_90bpm.m4a`: audio-only copy of the original 90 BPM MP4 soundtrack (AAC stream copied without re-encoding)
- `images/`: condition-specific instruction material

Open the hosted `A.html` or `B.html` in a browser. At completion, the program attempts to download `experiment_data.csv` to the participant's device. No server-side submission is implemented.

**Research warning**: The condition materials are visible to anyone who can access this repository. Test audio playback, responses, browser compatibility and CSV exports before using the hosted version for data collection. Timing and browser behavior were not experimentally validated as part of packaging.

The jsPsych distribution is included under its original license (`jspsych/license.txt`).

> Repository upload status: source files are being transferred. Some binary assets may be added separately; do not treat this repository as a validated live experiment until all referenced assets are present.
