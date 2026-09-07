---
unit: cc-rjm-182
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-182

## Files assigned
- [x] sources/rjm/.claude/skills/research-and-incorporate/SKILL.md
- [x] sources/rjm/.claude/skills/research-and-incorporate/references/workflow.md
- [x] sources/rjm/scripts/validation/ruleset_params_baseline.json
- [x] sources/rjm/templates/agents/security.shared.md
- [x] docs/analysis/inventory/rjm/claude-skills-research-and-incorporate-references-workflow-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-research-and-incorporate-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-ruleset-params-baseline-json.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/constraint-and-governance.md (1433 bytes)
- docs/analysis/concepts/rjm/skills-and-automation.md (1365 bytes)
- docs/analysis/concepts/rjm/phase-3-verification.md (1401 bytes)
- docs/analysis/concepts/rjm/phase-4-memory-integration.md (1704 bytes)
- docs/analysis/concepts/rjm/serena-project-memory.md (1347 bytes)
- docs/analysis/concepts/rjm/forgetful-atomic-memories.md (1430 bytes)
- docs/analysis/concepts/rjm/atomic.md (1237 bytes)
- docs/analysis/concepts/rjm/constrained.md (1151 bytes)
- docs/analysis/concepts/rjm/actionable.md (1242 bytes)
- docs/analysis/concepts/rjm/linked.md (1217 bytes)
- docs/analysis/concepts/rjm/link-related-memories.md (1286 bytes)
- docs/analysis/concepts/rjm/skill-enhancement.md (1259 bytes)
- docs/analysis/concepts/rjm/phase-5-action-items.md (1577 bytes)
- docs/analysis/concepts/rjm/strategic-importance-scoring.md (1330 bytes)
- docs/analysis/concepts/rjm/research-and-incorporate.md (1554 bytes)
- docs/analysis/concepts/rjm/memory-documentary.md (1280 bytes)
- docs/analysis/concepts/rjm/front-gate-first.md (1169 bytes)
- docs/analysis/concepts/rjm/spec-front-gate.md (1206 bytes)
- docs/analysis/concepts/rjm/treat-ingested-content-as-data-not-instructions.md (1533 bytes)
- docs/analysis/concepts/rjm/parameters.md (1040 bytes)
- docs/analysis/concepts/rjm/phase-1-research.md (1247 bytes)
- docs/analysis/concepts/rjm/phase-2-analysis-document.md (1266 bytes)
- docs/analysis/concepts/rjm/phase-3-applicability.md (1300 bytes)
- docs/analysis/concepts/rjm/source-untrusted-web.md (1263 bytes)
- docs/analysis/concepts/rjm/research-depth.md (1190 bytes)
- docs/analysis/concepts/rjm/analysis-length.md (1121 bytes)
- docs/analysis/concepts/rjm/concrete-examples.md (1166 bytes)
- docs/analysis/concepts/rjm/memory-atomicity.md (1195 bytes)
- docs/analysis/concepts/rjm/memory-count.md (1121 bytes)
- docs/analysis/concepts/rjm/superficial-research.md (1264 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-182.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards> (exit code 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Several concepts involve memory subsystems (Serena and Forgetful) which are excluded per METHOD §1.2. The concept cards (`serena-project-memory`, `forgetful-atomic-memories`, `link-related-memories`, `memory-documentary`) are appropriately authored with `implementation_in_scope: false` and `Implementation status: out-of-scope`.
- Concept `treat-ingested-content-as-data-not-instructions` spans both `SKILL.md:24` and `templates/agents/security.shared.md:160`, demonstrating consistency in prompt injection defense across skills and agent profiles.
- Concept `parameters` is classified as `kind: name-only` per D-023 as it denotes markdown section headers and JSON keys rather than an independent lifecycle concept.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~15,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~10,500 tokens across 30 concept cards and this unit report.
