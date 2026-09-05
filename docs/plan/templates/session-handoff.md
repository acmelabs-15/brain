# Session handoff

One file per session at `docs/plan/sessions/NNN-<phase-slug>.md`, created at session start (METHOD.md §8.1 step 10) and completed at session end (§8.3). The next session reads this before doing anything.

```markdown
---
session: NNN
date: YYYY-MM-DD
phase_at_start: <n>
phase_at_end: <n>
units_completed: [<unit-ids>]
units_rolled_back: [<unit-ids>]
units_blocked: [<unit-ids>]
decisions_added: [D-NNN, ...]
needs_peter: yes | no
prefix_hash_start: <prefix-check.ts combined hash at §8.1>
prefix_hash_end: <at §8.3; must equal start>
context_used_start: <used % from `budget.ts --record start` (§8.1 step 9)>
context_used_peak: <peak % this conversation, from `budget.ts` at close>
runs: [<run-ids dispatched this session, with k × n>]
compactions: <0, or the `used` before each compaction notice (§8.4)>
---

# Session NNN — <phase name>

## Start state
Copied from STATE.md § Current position at session start. Result of the §8.1 step 6 last-unit check. Output of `coverage.ts` and `glossary-lint.ts`.

## What was done
One line per unit: id, what it covered, output path(s). One line per decision added.

## What the next session must know
Findings that change how later work should go and that do not live in any single output file. Examples: a source turned out to organise things differently than the manifest assumed; a concept family is larger than expected and should be split; a subagent repeatedly truncated on a certain kind of file.

## Blocked
Each blocked unit: what is blocked, why, what would unblock it. `none` if clean.

## Next action
The exact first thing the next session does after the §8.1 start protocol. Unit id and phase.

## For Peter
Questions, decisions needed, or things to review. `none` if nothing. If `needs_peter: yes`, this section is what the end-of-session message to Peter says.

## Scripts run
Every `scripts/synthesis/*.ts` invocation this session, one per line: command, exit code, one-line summary of its output. Commands and output, never claims.

## Context note
The `budget.ts --line` output at start, at each run-start / dispatched / verified, and at close (one line each — never the full block); the `budget.ts --measure` result and the `--set` stored; the verdict that ended dispatch (`STOP — …`) or the rot metric that did, with `used` at that moment; any probe taken and whether it was clean (wall time, FAIL count, 429s). The session ended by plan — if it did not, say why here.
```
