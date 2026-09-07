---
unit: cc-rjm-62
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-62

## Files assigned
- [x] sources/rjm/.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
- [x] sources/rjm/.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/steering/security-practices.md
- [x] sources/rjm/.claude/agents/implementer.md
- [x] sources/rjm/.claude/commands/spec.md
- [x] sources/rjm/.claude/skills/agent-harness-reference/references/official-hook-contracts.md
- [x] sources/rjm/.claude/skills/ai-agents-portability-campaign/SKILL.md
- [x] sources/rjm/.claude/skills/analyze/references/engineering-complexity-tiers.md
- [x] sources/rjm/.claude/skills/cva-analysis/SKILL.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/gof-pattern-selection.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/matrix-building-examples.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/multidimensional-cva.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/pattern-mapping-guide.md
- [x] sources/rjm/.claude/skills/golden-principles/references/design-solid-principles.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/data-intensive-applications.md
- [x] sources/rjm/.claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] sources/rjm/.claude/skills/steering-matcher/SKILL.md
- [x] sources/rjm/.claude/skills/steering-matcher/get_applicable_steering.py
- [x] sources/rjm/.claude/skills/steering-matcher/scripts/get_applicable_steering.py
- [x] sources/rjm/docs/customization.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_eval_agent_types.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter.py
- [x] sources/rjm/scripts/eval/_model_sweep_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_run_persistence.py
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/_scoring_engine.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval_run_rollup.py
- [x] sources/rjm/scripts/eval/examples/e2e-delivery-fixtures.json
- [x] sources/rjm/scripts/external_signals/acceptance_criteria.py
- [x] sources/rjm/scripts/metrics/kill_criteria.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_zero_collection_tests.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] sources/rjm/scripts/validation/instruction_budget_globs.py
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] sources/rjm/templates/agents/dependency-auditor.shared.md
- [x] sources/rjm/templates/agents/implementer.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/write-temp-then-rename.md (1466 bytes)
- docs/analysis/concepts/rjm/strategy.md (3070 bytes)
- docs/analysis/concepts/rjm/regexscorer.md (1790 bytes)
- docs/analysis/concepts/rjm/verdictscorer.md (1808 bytes)
- docs/analysis/concepts/rjm/astscorer.md (1658 bytes)
- docs/analysis/concepts/rjm/executionplan.md (1821 bytes)
- docs/analysis/concepts/rjm/apicallresult.md (1743 bytes)
- docs/analysis/concepts/rjm/runrecord.md (2165 bytes)
- docs/analysis/concepts/rjm/paired-bootstrap-ci.md (1930 bytes)
- docs/analysis/concepts/rjm/flakiness.md (1444 bytes)
- docs/analysis/concepts/rjm/report.md (2564 bytes)
- docs/analysis/concepts/rjm/deliberately-naive.md (1575 bytes)
- docs/analysis/concepts/rjm/security-review-protocol.md (1066 bytes)
- docs/analysis/concepts/rjm/task-004.md (998 bytes)
- docs/analysis/concepts/rjm/multi-tool-artifact-build-system.md (1598 bytes)
- docs/analysis/concepts/rjm/agentstop.md (1414 bytes)
- docs/analysis/concepts/rjm/erroroccurred.md (1581 bytes)
- docs/analysis/concepts/rjm/notification.md (1592 bytes)
- docs/analysis/concepts/rjm/subagentstart.md (1570 bytes)
- docs/analysis/concepts/rjm/userpromptsubmitted.md (1478 bytes)
- docs/analysis/concepts/rjm/userprompttransformed.md (1484 bytes)
- docs/analysis/concepts/rjm/applyto.md (1813 bytes)
- docs/analysis/concepts/rjm/copilot-instructions-md.md (1086 bytes)
- docs/analysis/concepts/rjm/cva.md (2817 bytes)
- docs/analysis/concepts/rjm/matcher.md (1553 bytes)
- docs/analysis/concepts/rjm/generate-artifact-py.md (1144 bytes)
- docs/analysis/concepts/rjm/schemaversion.md (2280 bytes)
- docs/analysis/concepts/rjm/directory-copy.md (1008 bytes)
- docs/analysis/concepts/rjm/eventremap.md (1202 bytes)
- docs/analysis/concepts/rjm/eventdrop.md (982 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0 (30 PASS, 0 FAIL)
- scripts/synthesis/coverage.ts, `bun scripts/synthesis/coverage.ts`, exit code 1 (0 empty required fields, 0 orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- REQ-003 and DESIGN-004 introduce several cross-tool generation and evaluation concepts that interface across multiple units (e.g. hook events shared between Copilot CLI and Claude Code, eval harness data models).
- Several concepts (`applyTo:`, `copilot-instructions.md`, `generate_<artifact>.py`, `directory-copy`, `eventRemap`, `eventDrop`, `SECURITY-REVIEW-PROTOCOL`, `TASK-004`) represent file patterns, configuration directives, or task labels rather than lifecycle concepts and are correctly categorized under `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~135,000 tokens across 46 source files and cited inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and unit report.
