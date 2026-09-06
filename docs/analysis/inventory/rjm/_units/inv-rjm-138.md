---
unit: inv-rjm-138
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-138

## Files assigned
- [x] .claude/skills/programming-advisor/references/bitter-lesson-llms.md
- [x] .claude/skills/programming-advisor/references/common-solutions.md
- [x] .claude/skills/programming-advisor/references/integration-patterns.md
- [x] .claude/skills/programming-advisor/references/pricing-data.md
- [x] .claude/skills/programming-advisor/references/token-estimates.md
- [x] .claude/skills/programming-advisor/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-bitter-lesson-llms-md.md (5032 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-common-solutions-md.md (4643 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-integration-patterns-md.md (4718 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-pricing-data-md.md (5346 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-references-token-estimates-md.md (5078 bytes)
- docs/analysis/inventory/rjm/claude-skills-programming-advisor-skill-md.md (9396 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-138.md (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Remediated Phase 1V finding: `claude-skills-programming-advisor-references-bitter-lesson-llms-md.md` records the `missing-path` defect pointing to non-existent `wiki/concepts/AI Strategy/The Bitter Lesson of Building with LLMs.md`.
- Delineates tactical boundary with `buy-vs-build-framework`: `programming-advisor` handles tactical package/library evaluations (<$50K, library vs glue code) and explicitly delegates multi-year TCO, core-vs-context classification, and weighted decision scoring to `buy-vs-build-framework` and its scripts (`calculate_tco.py`, `score_decision.py`, `score_vendor.py`).
- Integrated into upstream specification lifecycle: `.claude/skills/spec-generator/references/spec-prior-art-schema.md:189-191` executes `Skill(skill="programming-advisor")` as Step 4b "Dependency scrutiny" during `/spec` PRD generation whenever a build-with-dependency or buy verdict is reached.
- Security-sensitive carve-out: inverts the default reuse-first rule for authentication, cryptography, and payments to mandate established external providers (e.g. Auth0, Stripe), preventing homegrown compliance and security liabilities.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,043 tokens (40,174 bytes across 6 files).
Approximate tokens of output written: ~8,500 tokens (34,213 bytes across 6 cards + unit report).
