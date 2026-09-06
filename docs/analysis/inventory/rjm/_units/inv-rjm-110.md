---
unit: inv-rjm-110
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-110

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/gof-pattern-selection.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/matrix-building-examples.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/multidimensional-cva.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/pattern-mapping-guide.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-coplien-multi-paradigm-design-md.md` (5017 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-gof-pattern-selection-md.md` (5027 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-matrix-building-examples-md.md` (5715 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-multidimensional-cva-md.md` (4067 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-pattern-mapping-guide-md.md` (5883 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These 5 files represent the reference library for `.claude/skills/cva-analysis/`, which covers Commonality Variability Analysis (CVA) for natural abstraction discovery.
- Frontmatter in 3 files (`coplien-multi-paradigm-design.md`, `gof-pattern-selection.md`, `multidimensional-cva.md`) contains `source: wiki/concepts/...` paths that do not exist in the repository (`missing-path` defect).
- The references form a cohesive cluster: `pattern-mapping-guide.md` provides reading strategies; `gof-pattern-selection.md` provides GoF decision rules; `matrix-building-examples.md` provides full C#/.NET implementations; `multidimensional-cva.md` handles N-dimensional variability (Strategy hierarchies vs Bridge); and `coplien-multi-paradigm-design.md` grounds the methodology in James O. Coplien's 1999 Multi-Paradigm Design.

## Blocked or uncertain
none

## Time and size
Approximate source read: 31,701 bytes (~7,925 tokens).
Approximate output written: 25,709 bytes (~6,427 tokens) across 5 cards and this unit report.
