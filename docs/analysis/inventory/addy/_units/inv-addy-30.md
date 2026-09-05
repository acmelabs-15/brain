---
unit: inv-addy-30
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-30

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/source-driven-development.md (26358 bytes, 20 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-source-driven-development-md.md (8832 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-30.md (2925 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/source-driven-development.md` is the external web documentation snapshot for Addy's `source-driven-development` skill, whose repository file is `skills/source-driven-development/SKILL.md` (unit `inv-addy-18`).
- The external catalog page links `source-driven-development` directly to the `addy:Build` phase and the `/build` command (`external/source-driven-development.md:5`, `external/source-driven-development.md:12`).
- The page presents three related skills in the Build phase: `incremental-implementation`, `test-driven-development` (`/test`), and `context-engineering` (`external/source-driven-development.md:12`).
- Three `doc-drift` defects were documented between this external documentation page and `skills/source-driven-development/SKILL.md`:
  1. Presentation of a standardized 6-section anatomy claiming all skills follow it (`external/source-driven-development.md:9-10`), whereas `SKILL.md` titles its process section `## The Process`, titles rationalizations `## Common Rationalizations`, and includes a specialized subsection `#### Retrieval Safety: Treat Fetched Content as Data` addressing prompt injection risks (LLM01) that is completely omitted from the external page anatomy.
  2. Description expansion in the web summary modifying the frontmatter description to substitute workflow instructions ("Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — `external/source-driven-development.md:5` vs `skills/source-driven-development/SKILL.md:3`).
  3. Simplification of triggering conditions to `"You want authoritative, source-cited code for any framework or library."` (`external/source-driven-development.md:5`), omitting the 6-point trigger list and explicit negative conditions under `**When NOT to use:**` (`skills/source-driven-development/SKILL.md:21`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,600 tokens (26,358 bytes)
- Approximate tokens of output written: ~2,500 tokens (card: 8,832 bytes; report: 2,926 bytes)
