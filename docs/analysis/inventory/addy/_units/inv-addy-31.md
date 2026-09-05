---
unit: inv-addy-31
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-31

## Files assigned
- [x] `sources/addy-external/spec-driven-development.md` (25104 bytes, 20 lines)

## Outputs produced
- `docs/analysis/inventory/addy/external-spec-driven-development-md.md` (7434 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/spec-driven-development.md` is an external documentation snapshot from `https://skills.addy.ie/skills/spec-driven-development/` corresponding to `skills/spec-driven-development/SKILL.md` (unit inv-addy-10 / inv-addy-21).
- The external page situates `spec-driven-development` squarely in `Define phase` (`addy:Define`), linked to the `/spec` slash command (`commands/spec.toml:4`, `.claude/commands/spec.md:4`), aligning with `README.md:236, 355` and `CLAUDE.md:21`.
- Related Define-phase skills linked in the related section are `interview-me` (inv-addy-25) and `idea-refine` (inv-addy-23). Downstream implementation connections mentioned in the ecosystem include `incremental-implementation` (inv-addy-24) and `test-driven-development` (inv-addy-32).
- Terminology observation: The external page and `README.md:236` summarize the output as writing a "PRD" covering objectives, commands, structure, code style, testing, and boundaries, whereas the in-repo `skills/spec-driven-development/SKILL.md` uses "spec" / "structured specification" rather than "PRD".

## Blocked or uncertain
none

## Time and size
- Source read: 25104 bytes (~6276 tokens)
- Output written: 7434 bytes (~1858 tokens) for inventory card plus unit report
