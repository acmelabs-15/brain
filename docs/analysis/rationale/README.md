# Rationale record — why the method is the way it is

This folder is the project's memory of *why*. `DECISIONS.md` records what was decided, one entry each, append-only. `METHOD.md` records how the work is done. Neither has room for the analysis, the measurements, the false starts and the arguments that led to each rule. That is what lives here.

Everything in this folder was written between 2026-09-02 and 2026-09-05 by Peter and his assistant (Claude, in Cowork), outside the project's sessions, and installed by the reset kit (D-016), the record kit (D-019) and the go kit (D-021). It is an **input** under METHOD §2 (it is under `docs/analysis/`), so a session may read it — but nothing here changes a rule: where this folder and `METHOD.md` or `DECISIONS.md` disagree, those two files win and the disagreement is a defect to report in the handoff.

Provenance rule for this folder: transcripts, logs and captures of earlier conversations were the *evidence* for several documents here. They were read outside the project. They are not inputs to any session and the fence (§2, `DO-NOT-READ.md`) still forbids reading them.

## How to read it

| file | what it answers | status of its content |
|---|---|---|
| `01-timeline.md` | What happened, session by session, from the first kit (2026-09-02) to the reset (2026-09-05) — including the runs that went wrong and why | record |
| `02-constraints-and-goals.md` | The standing constraints Peter set, in his words where recorded: zero quality compromise, one paste per conversation, parallelism over token cutting, what he does and does not care about | binding — every later document obeys these |
| `03-duplication-ledger.md` | Why identical bytes are read once and every difference is read in full; the measurements across all three packages; the coverage defect it uncovered (rjm agents) | adopted → D-012, METHOD §2.4, R11 |
| `04-token-efficiency-research.md` | The full research on caching and token efficiency across harnesses, each claim tagged by source class; which items were withdrawn and why | research; two items withdrawn |
| `05-adopted-mechanisms.md` | The five zero-quality-cost mechanisms M1–M5 as specified before they were built | adopted → D-015; M4 became D-010 |
| `06-delegation-teamwork-boost-subagents.md` | The full Teamwork / Boost / subagent audit; why Teamwork fits and Boost does not (before Phase 7); what state is machine-readable | adopted → D-014, then amended by D-017 (see preface) |
| `07-model-choice.md` | Gemini 3.1 Pro (high) versus 3.8 Flash (high): the evidence, and why 3.8 Flash high runs the project | decided 2026-09-04 |
| `08-context-ceilings.md` | Where long-context recall degrades for each candidate model; how `context-ceilings.json` was derived; the distinction between strict knee, plateau and the project's governing ceiling | adopted → `context-ceilings.json`, D-010 |
| `09-instrument-and-driver.md` | The statusline port as the context instrument (`ctx-log.jsonl`), `budget.ts` as the calculation, `await-run.ts` and `drive.ts`; why each exists | adopted → D-010, D-018 |
| `10-tooling-history.md` | Every script in `scripts/synthesis/`, why it exists, and the bugs found on the way (phantom check-offs, the rjm resolver, the matt external pages, the unit grouping, the deleted log) | record |
| `11-experiment-and-reset.md` | The dynamic-batching experiment as it actually ran (sessions 013–014), what it measured, what it got wrong, and why the analysis was reset rather than repaired | record → D-010, D-016; the measurements themselves are in `../dynamic-batching-experiment.md` |
| `12-open-questions.md` | What is still unproven and how each probe is decided | live — updated when a probe lands |
| `13-test-series-and-final-parameters.md` | The headless test series (sessions 000–007, 2026-09-05): every context reading, every run's shape and wall time, what broke, the final parameters, and the run blocks verbatim | record → D-021 |

The measurements that D-010 rests on are **not** duplicated here; they are in `docs/analysis/dynamic-batching-experiment.md` (§7 results, §9 findings), which sessions append to.

## Reading order for a newcomer

`02` (the constraints) → `01` (the story) → `11` (the experiment and the reset) → `13` (the test series and why the production method looks as it does) → then whichever of `03`–`10` the question at hand needs.
