# Rhythmic Auditory Expectation Experiment

A Japanese-language, browser-based cognitive psychology experiment investigating how expectations induced by information about rhythmic auditory stimulation relate to arithmetic task performance and subjective experience.

## Study design

- **Group A (neutral description):** a silent arithmetic task followed by a task with rhythmic auditory stimulation, introduced with a neutral description.
- **Group B (expectation induction):** the same two task phases, with an expectation-inducing description and manipulation-check questions before the rhythmic condition.
- **Task:** single-digit addition, 180 seconds per task phase.
- **Recorded measures:** number of responses, accuracy, response times, and questionnaire responses.
- **Data export:** the browser attempts to download `experiment_data.csv` on completion. Participant data are not sent to this repository.

## Implementation

- HTML and JavaScript
- jsPsych 8.2.3
- Separate reusable scripts in `modules/`
- Local rhythmic audio stimulus and instruction image

`A.html` and `B.html` are the experiment entry points.

## Portfolio repository status

The repository contains both experiment entry-point pages, the supporting JavaScript modules, jsPsych runtime assets, the instruction image, and an audio file. Files are provided for academic portfolio review and source-code inspection.

**Audio fidelity note:** The hosted `sounds/metronome_90bpm.m4a` is a **re-encoded demonstration copy** (48 kbps mono AAC) made from the original stereo audio to permit direct transfer. Its duration remains 236.181 seconds and the intended rhythmic tempo is 90 BPM. Because its encoding and channels differ from the original recording, it should **not** be used as a substitute for the validated experimental stimulus or for reproducing the reported study. The original source audio is retained separately.

The original task logic has been retained. Browser compatibility, timing precision, sound playback, and CSV exports have **not** been independently validated on a public deployment. GitHub Pages is not enabled by this upload.

## Research and privacy notes

- Experimental instructions, including expectation-induction materials, may be visible in this public repository once all assets are uploaded.
- Do not add participants' CSV files or personal data to this repository.
- This code repository is for research portfolio review; it is not a data-collection server.
- The project uses jsPsych, a third-party library subject to its own license.
