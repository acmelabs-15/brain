---
unit: inv-rjm-138
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-138

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/references/bitter-lesson-llms.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/references/common-solutions.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/references/integration-patterns.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/references/pricing-data.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/references/token-estimates.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/programming-advisor/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-bitter-lesson-llms-md.md (4600 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-common-solutions-md.md (9566 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-integration-patterns-md.md (5360 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-pricing-data-md.md (5646 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-token-estimates-md.md (5152 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-skill-md.md (9969 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Covers the entire `.claude/skills/programming-advisor` skill and its 5 reference documents (`bitter-lesson-llms.md`, `common-solutions.md`, `integration-patterns.md`, `pricing-data.md`, `token-estimates.md`).
- Defines clear boundary with `buy-vs-build-framework`: `programming-advisor` handles tactical library/SaaS checks vs vibe-coding, while delegating strategic, multi-year, high-budget (>$50K, partner/defer options) assessments to `buy-vs-build-framework`.
- Invoked by `.claude/skills/spec-generator/references/spec-prior-art-schema.md:189` as the dependency scrutiny gate during Step 4/Step 4a of the spec phase.
- Establishes a crucial security carve-out that overrides internal reuse-first: security-critical capabilities (auth, crypto, payments) must never reuse homegrown implementations over vetted third-party solutions.

## Blocked or uncertain
none

## Time and size
Approx 10,000 tokens of source read; approx 8,500 tokens of output written.
