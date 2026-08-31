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
| disclosure-1 (2026-08-31) | first progressive-disclosure measurement on plugin-kit's harness (Sonnet, fixture from `fixtures/make-fixture.ts`, `--allowed-tools Bash`): 35/54 expectations; `references/session-log.md` recall 0/2 → `signpost`; over-fetch 0/6. Failures cluster on: the closing note not being the whole reply (4/4), a question opening a session (1/2), a commit recorded into another conversation's session or a new one instead of the open one (2/2), an Outcome claiming work the transcript lacks (1/2), the unrecorded HEAD commit missing from Findings (2/2) | — | — |
| disclosure-2 (2026-08-31) | the same measurement after `2815b00` (iteration-5 SKILL.md and tool: the brief is the whole reply, `list --brief` prints unrecorded commits, entry appends to the joined session): 36/54; reference recall still 0/2 → `signpost`; over-fetch 0/6. Left: the reply wrapped in prose instead of the template alone (5 runs), `entry` opening a new session instead of appending to the open one (2/2), the closing note over 60 words (4/4) | — | — |

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
