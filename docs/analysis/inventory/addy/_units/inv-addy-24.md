---
unit: inv-addy-24
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-24

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/incremental-implementation.md (26461 bytes, 20 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-incremental-implementation-md.md (8828 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-24.md (2642 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/incremental-implementation.md` is the external web documentation snapshot for Addy's `incremental-implementation` skill, whose repository file is `skills/incremental-implementation/SKILL.md` (unit `inv-addy-12`).
- The external catalog page links `incremental-implementation` directly to the `addy:Build` phase and the `/build` command (`external/incremental-implementation.md:5`, `external/incremental-implementation.md:12`).
- The page presents three related skills in the Build phase: `test-driven-development` (`/test`), `context-engineering`, and `source-driven-development` (`external/incremental-implementation.md:12`).
- Three `doc-drift` defects were documented between this external documentation page and `skills/incremental-implementation/SKILL.md`:
  1. Description expansion in the web summary injecting feature flags, safe defaults, and rollbacks (`external/incremental-implementation.md:5` vs `skills/incremental-implementation/SKILL.md:3`).
  2. Simplification of triggering conditions to `"Any change touching more than one file."` (`external/incremental-implementation.md:5`), omitting the 4-part trigger list and explicit negative condition (`skills/incremental-implementation/SKILL.md:14-19`).
  3. Presentation of a standardized 6-section anatomy claiming all skills follow it (`external/incremental-implementation.md:9-10`), whereas `SKILL.md` splits process across multiple custom sections (`The Increment Cycle`, `Slicing Strategies`, `Implementation Rules`), titles rationalizations `Common Rationalizations`, and adds `See Also`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,600 tokens (26,461 bytes)
- Approximate tokens of output written: ~2,500 tokens (card: 8,828 bytes; report: ~1,820 bytes)
