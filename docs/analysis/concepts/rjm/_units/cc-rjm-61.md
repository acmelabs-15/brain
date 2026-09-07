---
unit: cc-rjm-61
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-61

## Files assigned
- [x] sources/rjm/.agents/security/static-analysis-checklist.md
- [x] sources/rjm/.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
- [x] sources/rjm/.claude/agents/code-reviewer.md
- [x] sources/rjm/.claude/agents/security.md
- [x] sources/rjm/.claude/agents/security/references/dependency-risk-scoring.md
- [x] sources/rjm/.claude/agents/silent-failure-hunter.md
- [x] sources/rjm/.claude/skills/analysis-provenance/scripts/check_provenance.py
- [x] sources/rjm/.claude/skills/cynefin-classifier/scripts/classify.py
- [x] sources/rjm/.claude/skills/doc-accuracy/SKILL.md
- [x] sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py
- [x] sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/security-detection/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/docs/diagrams/routing-flowchart.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/eval/_eval_agent_types.py
- [x] sources/rjm/scripts/eval/_eval_api_adapter.py
- [x] sources/rjm/scripts/eval/_eval_common.py
- [x] sources/rjm/scripts/eval/_optimizer_core.py
- [x] sources/rjm/scripts/eval/_plan_runner.py
- [x] sources/rjm/scripts/eval/_report_aggregator.py
- [x] sources/rjm/scripts/eval/_report_writer.py
- [x] sources/rjm/scripts/eval/_run_persistence.py
- [x] sources/rjm/scripts/eval/_run_rollup_core.py
- [x] sources/rjm/scripts/eval/_scoring_engine.py
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-prompt-change.py
- [x] sources/rjm/scripts/eval/eval-suite.py
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] sources/rjm/templates/agents/code-reviewer.shared.md
- [x] sources/rjm/templates/agents/security.shared.md
- [x] sources/rjm/templates/agents/silent-failure-hunter.shared.md
- [x] docs/analysis/inventory/rjm/agents-security-static-analysis-checklist-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-design-design-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-requirements-req-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-tasks-task-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-code-reviewer-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-dependency-risk-scoring-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-silent-failure-hunter-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-analysis-provenance-scripts-check-provenance-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-scripts-classify-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-doc-accuracy-scripts-doc-accuracy-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-doc-accuracy-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-prose-lint-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-detection-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/contributing-md.md
- [x] docs/analysis/inventory/rjm/docs-diagrams-routing-flowchart-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-commands-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-agent-types-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-api-adapter-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--eval-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--plan-runner-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-aggregator-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-persistence-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--run-rollup-core-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--scoring-engine-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-prompt-change-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-suite-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-code-reviewer-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-silent-failure-hunter-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/improper-authentication.md (968 bytes)
- docs/analysis/concepts/rjm/cwe-352.md (857 bytes)
- docs/analysis/concepts/rjm/cross-site-request-forgery.md (1025 bytes)
- docs/analysis/concepts/rjm/csrf.md (908 bytes)
- docs/analysis/concepts/rjm/cwe-611.md (842 bytes)
- docs/analysis/concepts/rjm/xml-external-entity.md (989 bytes)
- docs/analysis/concepts/rjm/xxe.md (875 bytes)
- docs/analysis/concepts/rjm/analysis-checklist.md (1276 bytes)
- docs/analysis/concepts/rjm/pre-analysis.md (917 bytes)
- docs/analysis/concepts/rjm/core-analysis.md (916 bytes)
- docs/analysis/concepts/rjm/post-analysis.md (923 bytes)
- docs/analysis/concepts/rjm/severity-classification.md (1670 bytes)
- docs/analysis/concepts/rjm/critical.md (2808 bytes)
- docs/analysis/concepts/rjm/high.md (2993 bytes)
- docs/analysis/concepts/rjm/medium.md (2402 bytes)
- docs/analysis/concepts/rjm/low.md (2044 bytes)
- docs/analysis/concepts/rjm/design-004.md (1750 bytes)
- docs/analysis/concepts/rjm/agent-eval-harness-spike.md (1073 bytes)
- docs/analysis/concepts/rjm/req-004.md (1331 bytes)
- docs/analysis/concepts/rjm/adr-057.md (1607 bytes)
- docs/analysis/concepts/rjm/adr-nnn-agent-eval-discipline.md (943 bytes)
- docs/analysis/concepts/rjm/spec-agent.md (863 bytes)
- docs/analysis/concepts/rjm/fixturevalidator.md (1049 bytes)
- docs/analysis/concepts/rjm/planrunner.md (1276 bytes)
- docs/analysis/concepts/rjm/scoringengine.md (1343 bytes)
- docs/analysis/concepts/rjm/runpersistence.md (1446 bytes)
- docs/analysis/concepts/rjm/anthropicapiadapter.md (1480 bytes)
- docs/analysis/concepts/rjm/reportaggregator.md (1400 bytes)
- docs/analysis/concepts/rjm/reportwriter.md (1282 bytes)
- docs/analysis/concepts/rjm/assertionkind.md (1331 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-61.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/improper-authentication.md docs/analysis/concepts/rjm/cwe-352.md docs/analysis/concepts/rjm/cross-site-request-forgery.md docs/analysis/concepts/rjm/csrf.md docs/analysis/concepts/rjm/cwe-611.md docs/analysis/concepts/rjm/xml-external-entity.md docs/analysis/concepts/rjm/xxe.md docs/analysis/concepts/rjm/analysis-checklist.md docs/analysis/concepts/rjm/pre-analysis.md docs/analysis/concepts/rjm/core-analysis.md docs/analysis/concepts/rjm/post-analysis.md docs/analysis/concepts/rjm/severity-classification.md docs/analysis/concepts/rjm/critical.md docs/analysis/concepts/rjm/high.md docs/analysis/concepts/rjm/medium.md docs/analysis/concepts/rjm/low.md docs/analysis/concepts/rjm/design-004.md docs/analysis/concepts/rjm/agent-eval-harness-spike.md docs/analysis/concepts/rjm/req-004.md docs/analysis/concepts/rjm/adr-057.md docs/analysis/concepts/rjm/adr-nnn-agent-eval-discipline.md docs/analysis/concepts/rjm/spec-agent.md docs/analysis/concepts/rjm/fixturevalidator.md docs/analysis/concepts/rjm/planrunner.md docs/analysis/concepts/rjm/scoringengine.md docs/analysis/concepts/rjm/runpersistence.md docs/analysis/concepts/rjm/anthropicapiadapter.md docs/analysis/concepts/rjm/reportaggregator.md docs/analysis/concepts/rjm/reportwriter.md docs/analysis/concepts/rjm/assertionkind.md` (exit code 0, 34 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-61 covers 30 concept cards across security static analysis (CWE checklists, analysis phases, severity tiers), evaluation harness architecture (DESIGN-004, REQ-004, ADR-057, eval pipeline classes, AssertionKind), and severity classification (Critical, High, Medium, Low).
- All 30 cards were authored from scratch; 0 pre-existing cards were overwritten.
- Concepts representing vulnerability taxonomy labels (`CWE-352`, `CWE-611`), vulnerability headings (`Improper Authentication`, `Cross-Site Request Forgery`, `XML External Entity`), acronym labels (`CSRF`, `XXE`), checklist section headers (`Pre-Analysis`, `Core Analysis`, `Post-Analysis`), document identifiers (`DESIGN-004`, `REQ-004`, `ADR-057`, `ADR-NNN-agent-eval-discipline`), document headings (`Agent Eval Harness Spike`), author identifiers (`spec-agent`), and evaluation harness implementation classes (`FixtureValidator`, `PlanRunner`, `ScoringEngine`, `RunPersistence`, `AnthropicAPIAdapter`, `ReportAggregator`, `ReportWriter`, `AssertionKind`) were classified as `kind: name-only` per D-023.
- Core lifecycle concepts (`Analysis Checklist` as `checklist`; `Severity Classification`, `Critical`, `High`, `Medium`, `Low` as `reference`) were populated with complete lifecycle metadata (Consumes, Produces, When applied, Sub-concepts, Part of).
- Broadly cited concepts (`High` with 14 occurrences, `Critical` with 13 occurrences, `Medium` with 9 occurrences, `DESIGN-004` with 8 occurrences, `Low` with 7 occurrences, `ADR-057` with 7 occurrences) have all occurrences from `facts/cc-rjm-61.txt` fully mapped into their respective `Where used` tables (114 total occurrence rows verified).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 38 source files and 38 inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 authored concept cards and 1 unit report.
