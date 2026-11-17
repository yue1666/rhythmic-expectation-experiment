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

**Source code is available, but this repository is not yet a complete runnable deployment.** The following runtime resources have not been transferred to GitHub and are needed to run the entry-point pages as written:

- `jspsych/dist/` (jsPsych library and referenced plugins/CSS)
- `sounds/metronome_90bpm.m4a`
- `images/expectation_material.png`

The complete local ZIP package was prepared separately. The missing assets need to be uploaded with the same relative paths before running or publishing the experiment.

The original experimental logic has been retained. Browser compatibility, timing precision, sound playback, and CSV exports have **not** been validated on a public deployment.

## Research and privacy notes

- Experimental instructions, including expectation-induction materials, may be visible in this public repository once all assets are uploaded.
- Do not add participants' CSV files or personal data to this repository.
- This code repository is for research portfolio review; it is not a data-collection server.
- The project uses jsPsych, a third-party library subject to its own license.
