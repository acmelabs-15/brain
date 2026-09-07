---
unit: cc-rjm-27
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-27

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-057-prompt-behavioral-evaluation.md
- [x] sources/rjm/.agents/architecture/ADR-058-agent-eval-discipline.md
- [x] sources/rjm/.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
- [x] sources/rjm/.claude/skills/adr-review/references/issue-resolution.md
- [x] sources/rjm/.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/scripts/eval/_providers.py
- [x] sources/rjm/scripts/eval/_report_writer.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-e2e-delivery.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-prompt-change.py
- [x] sources/rjm/scripts/eval/eval-suite.py
- [x] sources/rjm/scripts/eval/examples/example-scenarios.json
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-057-prompt-behavioral-evaluation-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-058-agent-eval-discipline-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-design-design-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-requirements-req-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-tasks-task-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-issue-resolution-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-empirical-probe-toolkit-references-provenance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-empirical-probe-toolkit-skill-md.md
- [x] docs/analysis/inventory/rjm/contributing-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--providers-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-e2e-delivery-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-prompt-change-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-suite-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-scenarios-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md

## Outputs produced
- docs/analysis/concepts/rjm/model-drift-detection.md (1541 bytes)
- docs/analysis/concepts/rjm/scenario-based-llm-evaluation.md (1619 bytes)
- docs/analysis/concepts/rjm/scenarios.md (1611 bytes)
- docs/analysis/concepts/rjm/runner.md (1519 bytes)
- docs/analysis/concepts/rjm/before-after-comparison.md (1570 bytes)
- docs/analysis/concepts/rjm/acceptance-gate.md (2268 bytes)
- docs/analysis/concepts/rjm/regressions.md (980 bytes)
- docs/analysis/concepts/rjm/has-improvement.md (1218 bytes)
- docs/analysis/concepts/rjm/acceptance-gate-relaxation.md (1036 bytes)
- docs/analysis/concepts/rjm/security-critical-prompt-tier.md (1575 bytes)
- docs/analysis/concepts/rjm/security-critical.md (1450 bytes)
- docs/analysis/concepts/rjm/flakiness-protocol.md (2270 bytes)
- docs/analysis/concepts/rjm/default-runs.md (1049 bytes)
- docs/analysis/concepts/rjm/flakiness-block-threshold.md (1106 bytes)
- docs/analysis/concepts/rjm/scenario-adequacy.md (1412 bytes)
- docs/analysis/concepts/rjm/cost-expectations.md (950 bytes)
- docs/analysis/concepts/rjm/eval-prompt-change-py.md (1286 bytes)
- docs/analysis/concepts/rjm/agent-vs-baseline-efficacy.md (1666 bytes)
- docs/analysis/concepts/rjm/agent-specialization.md (1452 bytes)
- docs/analysis/concepts/rjm/between-subjects.md (1517 bytes)
- docs/analysis/concepts/rjm/before-after.md (1462 bytes)
- docs/analysis/concepts/rjm/deterministic-only-gated-signal.md (1577 bytes)
- docs/analysis/concepts/rjm/llm-as-judge-sidecar.md (1483 bytes)
- docs/analysis/concepts/rjm/v1-invalidation.md (1043 bytes)
- docs/analysis/concepts/rjm/keep-as-audit.md (2175 bytes)
- docs/analysis/concepts/rjm/scrap.md (2179 bytes)
- docs/analysis/concepts/rjm/output-shape-suffix.md (1375 bytes)
- docs/analysis/concepts/rjm/experimental-design-symmetry.md (1728 bytes)
- docs/analysis/concepts/rjm/baseline-prompt.md (1133 bytes)
- docs/analysis/concepts/rjm/deterministic-scorable-output.md (1538 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-27.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/model-drift-detection.md docs/analysis/concepts/rjm/scenario-based-llm-evaluation.md docs/analysis/concepts/rjm/scenarios.md docs/analysis/concepts/rjm/runner.md docs/analysis/concepts/rjm/before-after-comparison.md docs/analysis/concepts/rjm/acceptance-gate.md docs/analysis/concepts/rjm/regressions.md docs/analysis/concepts/rjm/has-improvement.md docs/analysis/concepts/rjm/acceptance-gate-relaxation.md docs/analysis/concepts/rjm/security-critical-prompt-tier.md docs/analysis/concepts/rjm/security-critical.md docs/analysis/concepts/rjm/flakiness-protocol.md docs/analysis/concepts/rjm/default-runs.md docs/analysis/concepts/rjm/flakiness-block-threshold.md docs/analysis/concepts/rjm/scenario-adequacy.md docs/analysis/concepts/rjm/cost-expectations.md docs/analysis/concepts/rjm/eval-prompt-change-py.md docs/analysis/concepts/rjm/agent-vs-baseline-efficacy.md docs/analysis/concepts/rjm/agent-specialization.md docs/analysis/concepts/rjm/between-subjects.md docs/analysis/concepts/rjm/before-after.md docs/analysis/concepts/rjm/deterministic-only-gated-signal.md docs/analysis/concepts/rjm/llm-as-judge-sidecar.md docs/analysis/concepts/rjm/v1-invalidation.md docs/analysis/concepts/rjm/keep-as-audit.md docs/analysis/concepts/rjm/scrap.md docs/analysis/concepts/rjm/output-shape-suffix.md docs/analysis/concepts/rjm/experimental-design-symmetry.md docs/analysis/concepts/rjm/baseline-prompt.md docs/analysis/concepts/rjm/deterministic-scorable-output.md` (exit code 0; quote-check: 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-27 covers 30 concept cards across prompt behavioral evaluation (ADR-057), agent evaluation discipline and agent-vs-baseline efficacy (ADR-058), and evaluation harness spike specifications (DESIGN-004, REQ-004, TASK-004).
- All 30 cards were newly authored following `docs/plan/templates/concept-card.md`.
- Evaluative methods in rjm contrast within-subjects prompt regression validation (`before-after`, ADR-057) against between-subjects specialization benchmarking (`between-subjects`, ADR-058).
- Gating policies enforce regression blocking (`acceptance-gate`, `regressions`) with relaxed improvement requirements (`has-improvement`, `acceptance-gate-relaxation`), strict security requirements (`security-critical-prompt-tier`, `security-critical`), and statistical variance controls (`flakiness-protocol`, `default-runs`, `flakiness-block-threshold`).
- Evaluation spike recommendation verdicts (`keep-as-audit`, `scrap`) and experimental controls (`experimental-design-symmetry`, `output-shape-suffix`, `baseline-prompt`) standardize evidence-based decision-making.
- Non-lifecycle concepts (identifiers `regressions`, `has_improvement`, `DEFAULT_RUNS`, `FLAKINESS_BLOCK_THRESHOLD`, `OUTPUT_SHAPE_SUFFIX`, `BASELINE_PROMPT`; CLI flag `--security-critical`; file name `eval-prompt-change.py`; and headings `Acceptance Gate Relaxation`, `Cost Expectations`, `v1 Invalidation`) were classified as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 20 source files and 20 inventory cards.
Approximate tokens of output written: ~16,500 tokens across 30 authored concept cards and 1 unit report.
