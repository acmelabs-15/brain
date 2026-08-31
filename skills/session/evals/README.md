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
| disclosure-3 (2026-08-31) | the same measurement after `129705f` (iteration 6: join by Goal, Departures line, "the entire reply" at Done-when, eval 2 no longer expects the reference): 37/54 against 36/54; reference recall null (no longer expected) → `prune` (the harness's verdict for a file no scenario names — the file stays; see Task 7). Per scenario: 1 → 6/7, 6/7 (Findings names the unrecorded commit but not SES-005's placeholders); 2 → 4/7, 4/7 (**still opens SES-008** — the join-by-Goal branch was not followed; read `logs/run_2_*.json` to see why); 3 → 2/7, 3/7 (**regression**: both runs stopped and asked whether the ADR pass happened instead of closing — the Narrative says the pass has not started, the prompt says the review is done, and close step 2's "only work the log shows" made the model ask); 4 → **6/6, 6/6** (the closing note is now the entire reply — B and D worked) | — | — |
| disclosure-4 (2026-08-31) | the same measurement after `2116ff4` (iteration 7: join-before-open in step 7's table, Findings names another session's placeholders) and `976c5ff` (`close` stop condition, Outcome attribution): **35/54 against 37/54**. Per scenario: 1 → 4/7, 7/7; 2 → 2/7, 4/7 (**still opens SES-008** — both runs say "neither open session had a Goal covering a code fix"; the join rule needs the fix to be work SES-007 turned up, and the fixture's Narrative did not say so — fixed in the fixture for iteration 8, Peter's call); 3 → 3/7, 4/7; 4 → 5/6, 6/6 | — | — |
| description-2 (2026-08-31) | first description loop run on tool defaults (`evals/results/description-2/2026-08-31_023852/`, 23-query set split 14 train / 9 held-out): incumbent 13/14 train, 6/9 held-out; five iterations; best candidates 7/9 held-out, each flipping one different tool-situation query, one by a single attempt; the iteration-2 candidate is 1,027 characters (over the 1,024 limit). Nine timed-out queries are not attributable to an iteration. **Not adopted** — the gap is inside the noise; the description stays at its measured `tiers-2` figures | — | — |

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
