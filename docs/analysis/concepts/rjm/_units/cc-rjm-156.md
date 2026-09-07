---
unit: cc-rjm-156
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-156

## Files assigned
- [x] sources/rjm/.claude/skills/observability/SKILL.md
- [x] sources/rjm/.claude/skills/observability/scripts/query_logs.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/SKILL.md
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/__init__.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/counts.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/envelope.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/filters.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/patterns.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/scan.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/walking.py
- [x] sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/agent-catalog.md
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/github_core/api.py
- [x] sources/rjm/scripts/github_core/output.py
- [x] sources/rjm/scripts/maintenance/detect_unlanded_commits.py
- [x] sources/rjm/scripts/sync/detect_spec_drift.py
- [x] sources/rjm/scripts/validate_skill_output.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_unreachable_code.py
- [x] sources/rjm/templates/agents/dependency-auditor.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/summary-sessions.md (1097 bytes)
- docs/analysis/concepts/rjm/summary-tools.md (1082 bytes)
- docs/analysis/concepts/rjm/slow-threshold-ms.md (1068 bytes)
- docs/analysis/concepts/rjm/query-agent-logs.md (1059 bytes)
- docs/analysis/concepts/rjm/find-slow-tool-calls.md (1078 bytes)
- docs/analysis/concepts/rjm/show-agent-errors.md (1057 bytes)
- docs/analysis/concepts/rjm/summarize-session-performance.md (1141 bytes)
- docs/analysis/concepts/rjm/analyze-tool-usage.md (1072 bytes)
- docs/analysis/concepts/rjm/schema-json.md (916 bytes)
- docs/analysis/concepts/rjm/query-logs-py.md (886 bytes)
- docs/analysis/concepts/rjm/prometheus-recording-rules-md.md (1044 bytes)
- docs/analysis/concepts/rjm/otel-migration-reference-md.md (1043 bytes)
- docs/analysis/concepts/rjm/agent-metrics-skill.md (1083 bytes)
- docs/analysis/concepts/rjm/orphan-ref-validator.md (2360 bytes)
- docs/analysis/concepts/rjm/scan-py.md (1206 bytes)
- docs/analysis/concepts/rjm/filters-py.md (896 bytes)
- docs/analysis/concepts/rjm/test-scan-py.md (1067 bytes)
- docs/analysis/concepts/rjm/spec-from-file-location.md (1128 bytes)
- docs/analysis/concepts/rjm/sys-modules.md (1082 bytes)
- docs/analysis/concepts/rjm/package.md (1058 bytes)
- docs/analysis/concepts/rjm/scan.md (1959 bytes)
- docs/analysis/concepts/rjm/skill-ref-re.md (1195 bytes)
- docs/analysis/concepts/rjm/issue-feature-review.md (1376 bytes)
- docs/analysis/concepts/rjm/decision-rigor.md (1256 bytes)
- docs/analysis/concepts/rjm/testing-002-test-first-development.md (1171 bytes)
- docs/analysis/concepts/rjm/req-009.md (1536 bytes)
- docs/analysis/concepts/rjm/skills-dir.md (1301 bytes)
- docs/analysis/concepts/rjm/enumerate-skills.md (1061 bytes)
- docs/analysis/concepts/rjm/enumerate-sibling-artifacts.md (1126 bytes)
- docs/analysis/concepts/rjm/adr-056.md (1815 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-156.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-156 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-156 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-156.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
