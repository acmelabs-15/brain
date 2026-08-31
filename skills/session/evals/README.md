# Evals — what was measured, iteration by iteration

Three evals (`evals.json`): **rehydrate** — a question at the start of a conversation must yield
the brief in the template with `Session: none` and nothing on disk changed; **record-commit** — a
commit must get its entry appended, filled, gated and committed as `docs(session)`; **end-leave**
/ **end-close** — leaving must keep the session open with a handoff, closing must write the
Outcome and flip the status. Every run's transcript, grading, timing and the aggregated benchmark
are under `results/iteration-N/`.

| Iteration | What changed | Pass (with skill) | Baseline |
| --- | --- | --- | --- |
| 1 | first draft measured against the pre-skill CLAUDE.md procedure | see `results/iteration-1/benchmark.md` | snapshot |
| 2 | plan/session model (open/closed sessions, join before the first commit) | `results/iteration-2/benchmark.md` | snapshot |
| 3 | value-only entries (`Also:`, `Session-entry: none`), the tool as a subcommand CLI | `results/iteration-3/benchmark.md` | snapshot |
| 4 | transcript-evidence expectations; the injected state lines verified in a real conversation | 25/27 | 23/27 |

`tier-sweep/` holds the same evals measured on Haiku, Sonnet and Opus. `trigger/tiers/` holds the
trigger set measured against the **pre-plugin** description; `trigger/tiers-2/` (2026-08-31) is the
current description on Haiku and Sonnet, full 3 runs per query: Haiku 2/10 should-fire, Sonnet 5/10,
hard negatives 13/13 declined on both. Every miss is a situation the tool creates, in the user's
words (the append says up to date, the gate stays NOT ready, a warning about another session's file,
the released marker after a tag, a skeleton for a commit you did not make, "was X verified",
"stepping away — make sure nothing slipped", "catch me up"); the description names modes and
artifacts, not those situations. The next candidate is a clause naming them, selected by
`optimize-description.ts` on a held-out split, measured on Haiku. The iteration after the move into this plugin — the tool
finding the repo on its own, `start PLAN-NNN`, `init` — is not yet measured: it is `iteration-5`,
and its fixture is any git repo after `session init`.
