---
unit: inv-addy-20
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-20

## Files assigned
- [x] `sources/addy-external/doubt-driven-development.md` (26502 bytes, 20 lines)

## Outputs produced
- `docs/analysis/inventory/addy/external-doubt-driven-development-md.md` (7900 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/doubt-driven-development.md` is an external documentation snapshot from `https://skills.addy.ie/skills/doubt-driven-development/` corresponding to `skills/doubt-driven-development/SKILL.md` (unit inv-addy-10).
- Categorization cross-check: `external/doubt-driven-development.md:5, 12` assigns the skill to `Build phase` (`addy:Build`) and links it to the `/build` command. In contrast, `skills/interview-me/SKILL.md:14` (unit inv-addy-10 / inv-addy-25) refers to `doubt-driven-development` as a "Define-phase" skill. The canonical repository index (`README.md:361`, `CLAUDE.md:23`, and `skills/using-agent-skills/SKILL.md:176`) confirms `Build` phase as the canonical placement.
- Command association: `/build` (`commands/build.toml:38`, `.claude/commands/build.md:39`) invokes `doubt-driven-development` conditionally during autonomous build mode (`/build auto`) when a task involves irreversible or high-risk changes (auth, data migrations, deletions).
- Related Build-phase skills featured on this external doc page connect to `incremental-implementation` (inv-addy-24), `test-driven-development` (inv-addy-32), and `context-engineering` (inv-addy-17).

## Blocked or uncertain
none

## Time and size
- Source read: 26502 bytes (~6625 tokens)
- Output written: 7900 bytes (~1975 tokens) for inventory card plus unit report
