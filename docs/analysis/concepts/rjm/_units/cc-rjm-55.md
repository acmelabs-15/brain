---
unit: cc-rjm-55
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-55

## Files assigned
- [x] sources/rjm/.agents/governance/SKILL-CREATION-CRITERIA.md
- [x] sources/rjm/.agents/governance/SKILL-PHASE-GATES.md
- [x] sources/rjm/.agents/governance/steering-committee-charter.md
- [x] sources/rjm/.claude/skills/context-optimizer/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/model-context-doctrine.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/analyze_skill_placement.py
- [x] sources/rjm/.claude/skills/dx-review/SKILL.md
- [x] sources/rjm/docs/skill-reference.md
- [x] sources/rjm/docs/third-party-license-attribution.md
- [x] sources/rjm/scripts/consensus/__init__.py
- [x] sources/rjm/scripts/validation/passive_context_budget.py
- [x] docs/analysis/inventory/rjm/agents-governance-skill-creation-criteria-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-skill-phase-gates-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-steering-committee-charter-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-model-context-doctrine-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-scripts-analyze-skill-placement-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-dx-review-skill-md.md
- [x] docs/analysis/inventory/rjm/docs-skill-reference-md.md
- [x] docs/analysis/inventory/rjm/docs-third-party-license-attribution-md.md
- [x] docs/analysis/inventory/rjm/scripts-consensus---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-passive-context-budget-py.md

## Outputs produced
- docs/analysis/concepts/rjm/skill-vs-agent-decision.md (1452 bytes)
- docs/analysis/concepts/rjm/skill-vs-passive-context.md (1418 bytes)
- docs/analysis/concepts/rjm/passive-context.md (2595 bytes)
- docs/analysis/concepts/rjm/token-budget.md (1232 bytes)
- docs/analysis/concepts/rjm/maintenance-burden-assessment.md (1390 bytes)
- docs/analysis/concepts/rjm/skill-retirement-criteria.md (1255 bytes)
- docs/analysis/concepts/rjm/skill-phase-gates.md (1274 bytes)
- docs/analysis/concepts/rjm/phase-gates.md (1454 bytes)
- docs/analysis/concepts/rjm/evidence-gate.md (1467 bytes)
- docs/analysis/concepts/rjm/verification-gate.md (1213 bytes)
- docs/analysis/concepts/rjm/documentation-gate.md (1206 bytes)
- docs/analysis/concepts/rjm/gate-placement-guidelines.md (1268 bytes)
- docs/analysis/concepts/rjm/script-enforced-gates.md (1301 bytes)
- docs/analysis/concepts/rjm/documentation-enforced-gates.md (1215 bytes)
- docs/analysis/concepts/rjm/hybrid-enforcement.md (1252 bytes)
- docs/analysis/concepts/rjm/gate-status.md (891 bytes)
- docs/analysis/concepts/rjm/compliance-checklist.md (1477 bytes)
- docs/analysis/concepts/rjm/skill-gate-matrix.md (1144 bytes)
- docs/analysis/concepts/rjm/agent-system-steering-committee-charter.md (1405 bytes)
- docs/analysis/concepts/rjm/agent-system-steering-committee.md (1599 bytes)
- docs/analysis/concepts/rjm/committee-composition.md (1336 bytes)
- docs/analysis/concepts/rjm/chair.md (1207 bytes)
- docs/analysis/concepts/rjm/architect-representative.md (1312 bytes)
- docs/analysis/concepts/rjm/security-representative.md (1325 bytes)
- docs/analysis/concepts/rjm/devops-representative.md (1324 bytes)
- docs/analysis/concepts/rjm/user-representative.md (1315 bytes)
- docs/analysis/concepts/rjm/quorum.md (1540 bytes)
- docs/analysis/concepts/rjm/meeting-cadence.md (1103 bytes)
- docs/analysis/concepts/rjm/new-agent-approval.md (1300 bytes)
- docs/analysis/concepts/rjm/approval-workflow.md (1176 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-55.md (this report)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` — exit code 0 (37 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-55 covers 30 concept cards spanning skill governance and creation criteria (.agents/governance/SKILL-CREATION-CRITERIA.md), phase gates and enforcement mechanisms (.agents/governance/SKILL-PHASE-GATES.md), steering committee charter and roles (.agents/governance/steering-committee-charter.md), passive context optimization (.claude/skills/context-optimizer/), and multi-agent consensus algorithms (scripts/consensus/).
- All 30 cards were absent prior to this unit and have been authored from scratch.
- Classification details:
  - 1 card classified as `kind: name-only` per D-023: `gate-status` (structured output token/label emitted by phase gates).
  - 29 cards classified as lifecycle concepts:
    - Gates: `token-budget`, `skill-phase-gates`, `phase-gates`, `evidence-gate`, `verification-gate`, `documentation-gate`, `new-agent-approval`
    - Roles: `agent-system-steering-committee`, `chair`, `architect-representative`, `security-representative`, `devops-representative`, `user-representative`
    - Techniques: `skill-vs-agent-decision`, `skill-vs-passive-context`, `maintenance-burden-assessment`, `quorum`, `approval-workflow`
    - Patterns: `passive-context`, `script-enforced-gates`, `documentation-enforced-gates`, `hybrid-enforcement`
    - Checklists: `skill-retirement-criteria`, `compliance-checklist`
    - References: `gate-placement-guidelines`, `skill-gate-matrix`, `agent-system-steering-committee-charter`, `committee-composition`, `meeting-cadence`
- All 38 occurrences across 11 source files and citing inventory cards recorded in `facts/cc-rjm-55.txt` are included in the cards' `Where used` tables with exact path, line number, role, and usage description.
- Definition quotes for all 30 cards were verified byte-exact against sources in `sources/rjm/` via `scripts/synthesis/quote-check.ts` (37 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and this unit report.
