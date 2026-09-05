# 11 · The experiment as it ran, what it got wrong, and why the analysis was reset

The measurements are in `../dynamic-batching-experiment.md` (§2 baseline, §7 results, §9 findings). This is the account around them: what was asked, what was tried, what turned out to be wrong, and the decisions each part led to.

## The question (session 011, Peter)

Not "when does the quota run out" but: **how much work can one conversation hold before context rot, and how much of that work can run in parallel** — as a calculation, so it stays true when costs change.

## Attempt 1 — the pre-reset runs (sessions 002–011) and why they could not answer it

Fifteen concurrent teams, each a full eight-role Teamwork stack per single unit; the interview answered by the agent with no verification field; no citation checked; teams editing shared state. They were fast and every audit said "VICTORY CONFIRMED". When `quote-check.ts` was written on 2026-09-04 and run over the 212 cards they produced: 18% of resolvable citations were not byte-exact and 82% of cards carried at least one — paraphrase in verbatim fields, off-by-one line numbers, terms cited at lines that do not contain them. There was also no context measurement of any kind, so nothing about "how much fits" could be learned from them.

→ D-012 (ledger), D-013 (tooling shipped, resolver fixed), D-014 (Teamwork per batch, verification field), D-015 (M1/M3/M5), and the decision to measure before writing a number anywhere.

## Attempt 2 — run 01 (session 013, 6 units)

The first run under the new contract. Result: 1,158 PASS / 0 FAIL across 92 cards. So the contract works: Worker runs `quote-check.ts` before returning, Auditor re-runs it, the primary agent re-runs it.

Two things went wrong that had nothing to do with the run: the conversation was **compacted by the harness three minutes after it started** (§9.4), and the compaction notice pointed the agent at its own transcript under `~/.gemini`, which it then spent several percent of context reading. Peter saw the compaction and objected. That produced the rule that a compaction is answered from disk, never from the transcript (§8.4), and the discovery that the `~/.gemini` archaeology was a fence violation the method had not anticipated.

The context readings for run 01 were "not observed" — the statusline was not yet logging into the workspace — and the log that did exist was later deleted by the kit that replaced the statusline (`10-tooling-history.md`, bug 7).

## Attempt 3 — session 014, three tries

1. **Provisional ceiling 16, reserve 5, start 11.5%** → `budget.ts` said STOP before dispatching anything. Correct arithmetic, wrong parameters. The 16 and the 5 were guesses; the lesson is in D-010: parameters are measured, never guessed.
2. **Two-message flow** (PROMPT.md, then the experiment instructions) → the agent asked Peter a question between the two; he missed it and cancelled. "Wait what? Why do I have to do that?" → constraint C5 and the single-paste prompt.
3. **One paste, ceiling 21, reserve 2** → run 02: 8 units, 1,003 PASS / 0 FAIL, from dispatch to close with no human action; peak 18.08%; `budget.ts` stopped the series on headroom. This is the conversation the capture analysed.

## What the capture showed (2026-09-04 evening; §9 of the experiment doc)

- **The cost model:** `used_end = S + Σ(R + n·u) + C` with S = 9.0, R = 4.6, u = 0.19, C = 2.9 — it reproduces the observed 18.08%. The session's own "0.53 per unit" was R spread over the units.
- **Run size barely moves the budget.** 0.19% per unit means a 16-unit run costs 1.5% more than an 8-unit one. The fixed costs are the constraint; the cuts that follow from the log (METHOD read once, unit table out of STATE, run read from files) bring two 16-unit runs under 21%.
- **Compaction is not a function of context used.** Session 013 compacted at ~10%; session 014 ran to 18% with none; the two run-01 workers that compacted held 29 and 55 files while every 1–6-file unit finished clean. So compaction is handled (§8.4) and unit caps gain a file count (§6.5); the "≈24%" belief is withdrawn.
- **5 of 22 minutes are unit work.** Everything else in a run is fixed and serial; workers all start together and the window is set by the largest unit. Bigger runs and simultaneous runs are the lever; the only unknown is the harness's concurrent-stream limit, found by the wall-time bound in the step-up rule.

→ D-010 as written; the k × n calculation; `Model: "inherit"`; `await-run.ts`; `drive.ts` (D-018).

## Why reset rather than repair (D-016)

The 212 pre-reset cards had no provenance record and an 18% failure rate; repairing them leaves every card's history unknown. The 109 clean cards from runs 01–02 were produced under the new contract — but against the old partition (different unit ids and file sets), the old manifest (no matt external pages, PNGs as rows), and with `Model: "flash"` whose effort is not documented. Keeping them would have put two partitions' worth of ids in one tree and made the memo records untrustworthy in a different way. 109 units of 416 is about one conversation's work under D-010. So the tree is clean, every card in it will have one provenance, and the only thing carried across is the measurement record.

## What Peter said at the end that shaped the final kit

- No more token cutting; nothing that risks quality (C1, C2).
- Parallelism yes, with a calculation (C4).
- Include the headless driver.
- Ceilings file: Opus 5, Sonnet 5, Fable 5.1 — not the 4.6 generation.
- The question that reframed the presentation: "so more parallelism is not going to help us at all here?" — the answer is the opposite, and it is now the first sentence of §9.9 in the experiment doc.
