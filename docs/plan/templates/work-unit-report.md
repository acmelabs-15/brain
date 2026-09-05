# Work-unit report

Written by the Worker that did the unit, as a unit deliverable under exclusive ownership (METHOD.md §6.3 item 5), to `docs/analysis/inventory/<pkg>/_units/<unit-id>.md` (Phase 1), `docs/analysis/concepts/<pkg>/_units/<unit-id>.md` (Phase 2), or `docs/plan/implementation/reports/<unit-id>.md` (Phase 7). The primary agent never writes it; `units.ts mark done` refuses a unit whose report is missing (R7).

```markdown
---
unit: <unit-id>
phase: 1 | 2 | 7
package: addy | matt | rjm | —
session: NNN
subagent_returned: complete | truncated | malformed
---

# Unit <unit-id>

## Files assigned
Every path, one per line, with `[x]` read in full or `[ ]` not read (with reason). A unit with any `[ ]` is not done.

## Outputs produced
Every file written, one per line, with byte count.

## Scripts executed
One per line: path, command, exit code. `none` if the unit had no scripts.

## Coverage self-check
- [ ] Every assigned file has an entry / card / artifact
- [ ] Every required field in every output is non-empty (`none` written where nothing to report)
- [ ] Every `path:line` cited was confirmed against the file
- [ ] Every referenced path was checked with `ls`
- [ ] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
Things another unit or a later phase must know that do not fit in any single entry: a concept that spans this unit and another; a source file that turned out to be in a different unit's scope; a defect whose root cause is in a file outside this unit.

## Blocked or uncertain
Anything the subagent could not resolve. `none` if clean.

## Time and size
Approximate tokens of source read; approximate tokens of output written.
```
