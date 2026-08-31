# skills/session/evals — the measured evidence

`evals.json` holds the three eval prompts (rehydrate from a question, record a commit, leave vs
close), each with checkable expectations; `trigger-eval.json` is the trigger set for the
description. `results/iteration-N/` is one measured run of every eval — with-skill and baseline
transcripts, `grading.json`, `timing.json`, `benchmark.json`, `feedback.json` — and is committed
because a number nobody can re-read is not evidence; fixture repositories (`**/repo/`) are not,
each carries its own `.git`. `results/skill-snapshot/` is the version the first iteration was
measured against; `tier-sweep/` and `trigger/` are the Haiku/Sonnet/Opus and description sweeps.

Run the loop with plugin-kit's skill-creator (`~/Dev/ACMElabs/plugin-kit/skills/skill-creator`):
the next iteration is `iteration-5`, its baseline stays the snapshot so the numbers compare, and
the fixture is a copy of a repo with a docs system (`session init` makes one from any git repo).
`README.md` here says what each iteration measured and what moved.
