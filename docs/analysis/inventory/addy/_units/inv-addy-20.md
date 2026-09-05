---
unit: inv-addy-20
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-20

## Files assigned
- [x] sources/addy-external/doubt-driven-development.md

## Outputs produced
- docs/analysis/inventory/addy/external-doubt-driven-development-md.md (9375 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/doubt-driven-development.md` is the website catalog page (`https://skills.addy.ie/skills/doubt-driven-development/`) corresponding to `skills/doubt-driven-development/SKILL.md` (unit inv-addy-12). It links to `skills/doubt-driven-development/SKILL.md` and displays Build-phase relationships with `commands/build.toml` (`/build`), `skills/incremental-implementation/SKILL.md`, `skills/test-driven-development/SKILL.md`, and `skills/context-engineering/SKILL.md`.
- Three `doc-drift` defects were identified and recorded comparing the web page against `sources/addy/skills/doubt-driven-development/SKILL.md` (expanded summary including 5-step loop, condensed "Use when" criteria, and omission of specialized sections `Loading Constraints`, `Cross-model escalation`, and `Interaction with Other Skills` from the 6-part anatomy).
- An `orphan` defect was recorded because no in-scope repository file links to or invokes this external documentation URL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,625 tokens (26,502 bytes source file + ~5,000 tokens of reference SKILL.md/commands for cross-checks). Approximate tokens of output written: ~2,350 tokens (9,375 bytes inventory card).
