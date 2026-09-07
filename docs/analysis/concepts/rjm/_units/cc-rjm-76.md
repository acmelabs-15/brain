---
unit: cc-rjm-76
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-76

## Files assigned
- [x] sources/rjm/.claude/agents/qa.md
- [x] sources/rjm/.claude/agents/quality-auditor.md
- [x] sources/rjm/.claude/agents/retrospective.md
- [x] sources/rjm/.claude/skills/adr-review/references/artifacts.md
- [x] sources/rjm/.claude/skills/adr-review/scripts/detect_adr_changes.py
- [x] sources/rjm/.claude/skills/analyze/SKILL.md
- [x] sources/rjm/.claude/skills/analyze/scripts/analyze.py
- [x] sources/rjm/.claude/skills/business-strategy/SKILL.md
- [x] sources/rjm/.claude/skills/code-qualities-assessment/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/analyze_skill_placement.py
- [x] sources/rjm/.claude/skills/golden-principles/SKILL.md
- [x] sources/rjm/.claude/skills/pipeline-validator/SKILL.md
- [x] sources/rjm/.claude/skills/quality-grades/SKILL.md
- [x] sources/rjm/.claude/skills/quality-grades/scripts/check_grade_changes.py
- [x] sources/rjm/.claude/skills/quality-grades/scripts/grade_domains.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/review/references/reliability.md
- [x] sources/rjm/.claude/skills/review/references/roadmap.md
- [x] sources/rjm/.claude/skills/review/references/security.md
- [x] sources/rjm/.claude/skills/review/references/spec-compliance.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py
- [x] sources/rjm/.claude/skills/slo-designer/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/validation-authority/SKILL.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/agent-catalog.md
- [x] sources/rjm/docs/getting-started.md
- [x] sources/rjm/docs/technical-guardrails.md
- [x] sources/rjm/scripts/sync/detect_spec_drift.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] sources/rjm/templates/agents/qa.shared.md
- [x] sources/rjm/templates/agents/quality-auditor.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/pre-pr-quality-gate.md (1599 bytes)
- docs/analysis/concepts/rjm/ci-environment-test-validation.md (1386 bytes)
- docs/analysis/concepts/rjm/fail-safe-pattern-verification.md (1400 bytes)
- docs/analysis/concepts/rjm/test-implementation-alignment.md (1448 bytes)
- docs/analysis/concepts/rjm/coverage-threshold-validation.md (1377 bytes)
- docs/analysis/concepts/rjm/pr-description-validation.md (1804 bytes)
- docs/analysis/concepts/rjm/pre-pr-validation-report.md (1474 bytes)
- docs/analysis/concepts/rjm/verdict-decision-logic.md (1302 bytes)
- docs/analysis/concepts/rjm/qa-report-length-bounds.md (1369 bytes)
- docs/analysis/concepts/rjm/two-phase-verification.md (1399 bytes)
- docs/analysis/concepts/rjm/test-commands.md (1228 bytes)
- docs/analysis/concepts/rjm/pass-handoff.md (1321 bytes)
- docs/analysis/concepts/rjm/failure-handoff.md (1357 bytes)
- docs/analysis/concepts/rjm/infrastructure-handoff.md (1406 bytes)
- docs/analysis/concepts/rjm/quality-auditor.md (1779 bytes)
- docs/analysis/concepts/rjm/quality-grades.md (2279 bytes)
- docs/analysis/concepts/rjm/code-qualities-assessment.md (2560 bytes)
- docs/analysis/concepts/rjm/review.md (2673 bytes)
- docs/analysis/concepts/rjm/architectural-layers.md (1343 bytes)
- docs/analysis/concepts/rjm/gap-tracking.md (1263 bytes)
- docs/analysis/concepts/rjm/trend-analysis.md (1276 bytes)
- docs/analysis/concepts/rjm/a-f-domain-grading.md (1276 bytes)
- docs/analysis/concepts/rjm/role-support.md (792 bytes)
- docs/analysis/concepts/rjm/serena-write-memory.md (994 bytes)
- docs/analysis/concepts/rjm/serena-edit-memory.md (1008 bytes)
- docs/analysis/concepts/rjm/discovery.md (1639 bytes)
- docs/analysis/concepts/rjm/grading.md (1144 bytes)
- docs/analysis/concepts/rjm/reporting.md (1203 bytes)
- docs/analysis/concepts/rjm/recommendations.md (2434 bytes)
- docs/analysis/concepts/rjm/reflector.md (1233 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-76.md (6259 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (all 30 cards), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Pre-PR quality gating and verification protocol concepts (`pre-pr-quality-gate`, `ci-environment-test-validation`, `fail-safe-pattern-verification`, `test-implementation-alignment`, `coverage-threshold-validation`, `pr-description-validation`, `pre-pr-validation-report`, `verdict-decision-logic`, `qa-report-length-bounds`, `two-phase-verification`, `test-commands`, `pass-handoff`, `failure-handoff`, `infrastructure-handoff`) span `.claude/agents/qa.md` and `templates/agents/qa.shared.md`.
- Quality auditing, grading rubrics, and assessment skills (`quality-auditor`, `quality-grades`, `code-qualities-assessment`, `review`, `architectural-layers`, `gap-tracking`, `trend-analysis`, `a-f-domain-grading`) establish repo-wide quality governance across domains.
- `role-support`, `serena-write-memory`, and `serena-edit-memory` are classified as `kind: name-only` per D-023; Serena MCP tools are marked `implementation_in_scope: false` as external memory infrastructure.
- Lifecycle audit phases (`discovery`, `grading`, `reporting`, `recommendations`) define sequential stages of quality audit workflows, with `recommendations` and `discovery` also spanning strategy, SLO design, ADR review, and multi-axis code reviews.
- `reflector` functions as the alternate role designation for the retrospective agent (`.claude/agents/retrospective.md:9`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 34 cited source files and inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 work unit report.
