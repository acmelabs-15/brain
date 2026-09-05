---
unit: inv-matt-14
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-14

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/domain-modeling.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-domain-modeling-md.md` (8767 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-14 covers `external/domain-modeling.md` (361,293 bytes, 72 lines), the external HTML documentation snapshot for the `/domain-modeling` skill hosted at `https://aihero.dev/skills-domain-modeling`.
- Architectural relationships with other skills in Matt's package:
  - `grill-with-docs` and `wayfinder`: both skills drive `domain-modeling` underneath during interviews and roadmapping sessions. However, the documentation notes a recurrent execution failure mode: LLM coding agents frequently load `grilling` and omit `domain-modeling`, leaving `CONTEXT.md` untouched unless manually prompted.
  - `codebase-design`: closest sibling skill in the vocabulary layer. `domain-modeling` governs domain language and ubiquitous vocabulary, while `codebase-design` governs module shapes, interface depth, and architectural seams.
  - `triage`: uses `domain-modeling` to keep incoming issue tickets phrased in the domain's canonical vocabulary.
  - `improve-codebase-architecture`: calls `domain-modeling` as architectural refactoring decisions crystallize.
- Operational insights:
  - Emphasizes the two-tier bar: `CONTEXT.md` holds terms (what a thing is, rejected synonyms under `_Avoid_`) with an inline, low threshold, while `docs/adr/` records decisions requiring all three tests (hard to reverse, surprising without context, result of a real trade-off).
  - Identifies a major defect mode in LLM behavior: models treat write permission to `CONTEXT.md` as permission to log a running spec, ballooning the file into thousands of lines. The documented remediation is `/grill-with-docs make my CONTEXT.md more concise and remove any implementation details from it`.
  - Notes open feature requests in the repository: GitHub issue #717 (cross-referencing closed issues in the issue tracker rather than only codebase/ADRs) and GitHub issue #557 (splitting the glossary half and ADR half into separate skills to support custom ADR formats).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence card needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90,300 tokens (361,293 bytes raw HTML snapshot; ~3,000 words / ~4,000 tokens core article text); approximate tokens of output written: ~3,200 tokens across inventory card (8,767 bytes) and unit report (2,740 bytes).
