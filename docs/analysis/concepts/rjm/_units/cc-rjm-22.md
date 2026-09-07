---
unit: cc-rjm-22
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-22

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-042-python-migration-strategy.md
- [x] sources/rjm/.agents/architecture/ADR-043-scoped-tool-execution.md
- [x] sources/rjm/.agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md
- [x] sources/rjm/.agents/archive/planning/PR-60/003-pr-60-plan-critique.md
- [x] sources/rjm/.agents/devops/arm-runner-migration-analysis.md
- [x] sources/rjm/.agents/guides/python-for-powershell-developers.md
- [x] sources/rjm/.agents/projects/v0.3.1/PowerShell-migration.md
- [x] sources/rjm/.claude/agents/quality-auditor.md
- [x] sources/rjm/.claude/skills/chaos-experiment/SKILL.md
- [x] sources/rjm/.claude/skills/planner/references/design-pit-of-success.md
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py
- [x] sources/rjm/.claude/skills/steering-matcher/SKILL.md
- [x] sources/rjm/.claude/skills/validation-authority/SKILL.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/docs/design/external-signal-gating.md
- [x] sources/rjm/scripts/eval/eval_skill_router.py
- [x] sources/rjm/scripts/eval/panels/owner-copilot-cli.json
- [x] sources/rjm/scripts/external_signals/__init__.py
- [x] sources/rjm/scripts/quality_gate/__init__.py
- [x] sources/rjm/scripts/security/run_semgrep.py
- [x] sources/rjm/scripts/test_selection/__init__.py
- [x] sources/rjm/scripts/validation/agent_registry.py
- [x] sources/rjm/scripts/validation/check_nested_tests.py
- [x] sources/rjm/scripts/validation/check_placeholder_identity.py
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] sources/rjm/scripts/validation/validate_argument_hint.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-042-python-migration-strategy-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-043-scoped-tool-execution-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-044-copilot-cli-frontmatter-compatibility-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-003-pr-60-plan-critique-md.md
- [x] docs/analysis/inventory/rjm/agents-devops-arm-runner-migration-analysis-md.md
- [x] docs/analysis/inventory/rjm/agents-guides-python-for-powershell-developers-md.md
- [x] docs/analysis/inventory/rjm/agents-projects-v0-3-1-powershell-migration-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-quality-auditor-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-chaos-experiment-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-references-design-pit-of-success-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-new-slash-command-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-validate-slash-command-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-steering-matcher-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-validation-authority-skill-md.md
- [x] docs/analysis/inventory/rjm/contributing-md.md
- [x] docs/analysis/inventory/rjm/docs-design-external-signal-gating-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-panels-owner-copilot-cli-json.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-security-run-semgrep-py.md
- [x] docs/analysis/inventory/rjm/scripts-test-selection---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-agent-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-nested-tests-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-placeholder-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-argument-hint-py.md

## Outputs produced
- docs/analysis/concepts/rjm/skill-installer.md (1071 bytes)
- docs/analysis/concepts/rjm/anthropic-sdk.md (861 bytes)
- docs/analysis/concepts/rjm/langchain.md (892 bytes)
- docs/analysis/concepts/rjm/llamaindex.md (868 bytes)
- docs/analysis/concepts/rjm/mcp.md (1123 bytes)
- docs/analysis/concepts/rjm/token-efficiency-inversion.md (1568 bytes)
- docs/analysis/concepts/rjm/python-3-10.md (859 bytes)
- docs/analysis/concepts/rjm/uv.md (1147 bytes)
- docs/analysis/concepts/rjm/pytest.md (1948 bytes)
- docs/analysis/concepts/rjm/internal-automation.md (1232 bytes)
- docs/analysis/concepts/rjm/user-facing-distribution-surfaces.md (1347 bytes)
- docs/analysis/concepts/rjm/pit-of-success.md (1495 bytes)
- docs/analysis/concepts/rjm/scoped-tool-execution.md (1335 bytes)
- docs/analysis/concepts/rjm/scope-explosion.md (1286 bytes)
- docs/analysis/concepts/rjm/working-set.md (1240 bytes)
- docs/analysis/concepts/rjm/scoped-command-pattern.md (1212 bytes)
- docs/analysis/concepts/rjm/no-globs.md (926 bytes)
- docs/analysis/concepts/rjm/scope-definition.md (1345 bytes)
- docs/analysis/concepts/rjm/prettier.md (926 bytes)
- docs/analysis/concepts/rjm/psscriptanalyzer.md (1654 bytes)
- docs/analysis/concepts/rjm/periodic-cleanup.md (1334 bytes)
- docs/analysis/concepts/rjm/correction-note.md (956 bytes)
- docs/analysis/concepts/rjm/ai-pr-quality-gate-yml.md (1580 bytes)
- docs/analysis/concepts/rjm/argument-hint.md (2121 bytes)
- docs/analysis/concepts/rjm/model.md (1184 bytes)
- docs/analysis/concepts/rjm/handoffs.md (1029 bytes)
- docs/analysis/concepts/rjm/custom-agents.md (1436 bytes)
- docs/analysis/concepts/rjm/auto-update-bypass.md (1300 bytes)
- docs/analysis/concepts/rjm/version-verification.md (1261 bytes)
- docs/analysis/concepts/rjm/generate-agents-ps1.md (1084 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-22.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/skill-installer.md docs/analysis/concepts/rjm/anthropic-sdk.md docs/analysis/concepts/rjm/langchain.md docs/analysis/concepts/rjm/llamaindex.md docs/analysis/concepts/rjm/mcp.md docs/analysis/concepts/rjm/token-efficiency-inversion.md docs/analysis/concepts/rjm/python-3-10.md docs/analysis/concepts/rjm/uv.md docs/analysis/concepts/rjm/pytest.md docs/analysis/concepts/rjm/internal-automation.md docs/analysis/concepts/rjm/user-facing-distribution-surfaces.md docs/analysis/concepts/rjm/pit-of-success.md docs/analysis/concepts/rjm/scoped-tool-execution.md docs/analysis/concepts/rjm/scope-explosion.md docs/analysis/concepts/rjm/working-set.md docs/analysis/concepts/rjm/scoped-command-pattern.md docs/analysis/concepts/rjm/no-globs.md docs/analysis/concepts/rjm/scope-definition.md docs/analysis/concepts/rjm/prettier.md docs/analysis/concepts/rjm/psscriptanalyzer.md docs/analysis/concepts/rjm/periodic-cleanup.md docs/analysis/concepts/rjm/correction-note.md docs/analysis/concepts/rjm/ai-pr-quality-gate-yml.md docs/analysis/concepts/rjm/argument-hint.md docs/analysis/concepts/rjm/model.md docs/analysis/concepts/rjm/handoffs.md docs/analysis/concepts/rjm/custom-agents.md docs/analysis/concepts/rjm/auto-update-bypass.md docs/analysis/concepts/rjm/version-verification.md docs/analysis/concepts/rjm/generate-agents-ps1.md` (exit code 0, 33 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-22 covers 30 concepts spanning Python migration strategy (ADR-042), scoped tool execution architecture (ADR-043), Copilot CLI frontmatter compatibility and auto-update regression management (ADR-044), external testing and linting tools (pytest, UV, PSScriptAnalyzer, prettier), and agent configuration properties.
- All 30 concepts were authored from scratch to docs/analysis/concepts/rjm/<slug>.md following templates/concept-card.md.
- Concepts representing external libraries, tools, CLI flags, workflow filenames, document headings, or frontmatter configuration keys were classified as `kind: name-only` per D-023 (`skill-installer`, `anthropic-sdk`, `langchain`, `llamaindex`, `mcp`, `python-3-10`, `uv`, `pytest`, `no-globs`, `prettier`, `psscriptanalyzer`, `correction-note`, `ai-pr-quality-gate-yml`, `argument-hint`, `model`, `handoffs`, `generate-agents-ps1`).
- Architectural patterns and principles were classified under `kind: pattern` (`token-efficiency-inversion`, `internal-automation`, `user-facing-distribution-surfaces`, `pit-of-success`, `scoped-tool-execution`, `scope-explosion`, `working-set`, `scoped-command-pattern`, `periodic-cleanup`).
- Process phases, techniques, and artifacts were classified accordingly (`scope-definition` as `kind: phase`, `auto-update-bypass` and `version-verification` as `kind: technique`, and `custom-agents` as `kind: artifact`).
- High-occurrence concepts such as `pytest` (8 occurrences across 8 files) and `argument-hint` (8 occurrences across 8 files) have their `Where used` tables fully populated with exact file paths, lines, roles, and contextual usage sentences.
- Implementation status fields were faithfully populated based on defects extracted from the citing inventory cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 28 source files and 28 inventory cards.
Approximate tokens of output written: ~14,500 tokens across 30 authored concept cards and 1 unit report.
