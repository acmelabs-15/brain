# Evals — the plan skill's trigger set and what was measured

`trigger-eval.json` is the trigger set written for PLAN-001 Part 4 Task 2 (2026-08-31): 10
should-fire queries (8 continue phrasings — "work on PLAN-NNN", "catch me up", "where were we",
"pick it up where it left off", "what's next", "was X verified" — and 2 task-breakdown ones for
coverage) and 13 hard negatives, the session skill's territory as the sharpest source (record a
commit, close a session, the gate's NOT ready, another session's placeholders), plus changelog,
rundown, ADR, PRD, grilling, tickets, build, context setup, and a doc about the plan–session
mechanism. Drafted from `synthesize-scenarios.ts` (its draft leaned on task breakdown; curated by
hand), held to plugin-kit's `description-writing.md` and `description-optimization.md` standards.

## results/trigger/continue-1 (2026-08-31)

Full sweeps, `measure-triggering.ts --no-early-stop`, 3 runs per query, isolation verified in
every envelope. Sonnet is the measurement tier; the Haiku runs are `--tier-study` rows.

| Description | Sonnet should-fire | Sonnet negatives declined | Haiku should-fire | Haiku negatives declined |
| --- | --- | --- | --- | --- |
| old (237 chars, breakdown only) | 3/10 | 13/13 | 0/10 | 13/13 |
| cand1 (910 chars, first continue draft) | 9/10 | 11/13 — stole "close SES-NNN" and the mechanism doc at 3/3 | not run | not run |
| cand2 (983 chars, negatives name the record's artifacts) | 10/10 | 12/13 — the residual moved to "grill me on PLAN-003" (2/3) | not run | not run |
| **cand3 (994 chars, adopted)** | **10/10** | **13/13** | 7/10 | 11/13 |

The iteration is the textbook one from `description-writing.md`: the first negative clause killed
the leaks it named and the residual moved to an unnamed neighbour (grilling); naming it too closed
the set. Acceptance (PLAN-001 Part 4 Task 2): at least the session skill's old 5/10 should-fire on
Sonnet with hard negatives still declined — cand3 is 10/10 and 13/13, adopted into the
frontmatter. On Haiku (the tier-study rows) cand3's residual moves again: two negatives leak at
2/3 ("SES-006 placeholders", "implement task 1 now") and its two task-breakdown positives stop
firing — the cross-model shift `description-writing.md` § Three further cautions describes; the
old description fires on nothing there (0/10). Per-query rates, envelopes and logs are beside
this file under `results/trigger/continue-1/`
(`old|cand1|cand2|cand3`.`sonnet|haiku`.`results.json|envelope.json|log`).
