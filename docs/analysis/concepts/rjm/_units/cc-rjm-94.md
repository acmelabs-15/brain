---
unit: cc-rjm-94
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-94

## Files assigned
- [x] .claude/skills/CLAUDE.md
- [x] .claude/skills/agent-harness-reference/SKILL.md
- [x] .claude/skills/agent-harness-reference/references/probe-evidence.md
- [x] .claude/skills/ai-agents-change-control/SKILL.md
- [x] .claude/skills/ai-agents-change-control/references/gate-ladder.md
- [x] .claude/skills/ai-agents-change-control/references/incident-history.md
- [x] .claude/skills/analyze/SKILL.md
- [x] .claude/skills/analyze/references/DEVELOPMENT.md
- [x] .claude/skills/analyze/references/strategy-ooda-loop.md
- [x] .claude/skills/analyze/scripts/analyze.py
- [x] .claude/skills/business-strategy/SKILL.md
- [x] .claude/skills/codebase-documenter/SKILL.md
- [x] .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md
- [x] .claude/skills/cva-analysis/scripts/validate-cva-matrix.py
- [x] .claude/skills/decision-critic/SKILL.md
- [x] .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md
- [x] .claude/skills/decision-critic/references/critical-thinking-falsifiability.md
- [x] .claude/skills/decision-critic/references/rewrite-regression-check.md
- [x] .claude/skills/decision-critic/scripts/decision-critic.py
- [x] .claude/skills/git-advanced-workflows/SKILL.md
- [x] .claude/skills/github-url-intercept/SKILL.md
- [x] .claude/skills/pipeline-validator/SKILL.md
- [x] .claude/skills/prompt-engineer/SKILL.md
- [x] .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md
- [x] .claude/skills/reflect/SKILL.md
- [x] .claude/skills/requirements-interview/SKILL.md
- [x] .claude/skills/research-and-incorporate/SKILL.md
- [x] .claude/skills/security-scan/SKILL.md
- [x] .claude/skills/skillforge/assets/templates/skill-md-template.md
- [x] .claude/skills/skillforge/assets/templates/skill-spec-template.xml
- [x] .claude/skills/skillforge/references/specification-template.md
- [x] scripts/validation/check_adr_links_baseline.txt
- [x] scripts/validation/rule_activation_coverage_baseline.json
- [x] templates/AGENTS.md

## Outputs produced
- docs/analysis/concepts/rjm/pinned-package-runtime-verification-and-copilot-auto-update.md (1568 bytes)
- docs/analysis/concepts/rjm/python-command-permission-and-script-identity.md (1527 bytes)
- docs/analysis/concepts/rjm/relevance-before-policy-on-the-plugin-wide-bash-matcher.md (1563 bytes)
- docs/analysis/concepts/rjm/re-running-a-probe.md (1789 bytes)
- docs/analysis/concepts/rjm/agent-harness-reference.md (3264 bytes)
- docs/analysis/concepts/rjm/triggers.md (3030 bytes)
- docs/analysis/concepts/rjm/authority-order.md (1884 bytes)
- docs/analysis/concepts/rjm/docs-silent.md (1789 bytes)
- docs/analysis/concepts/rjm/repository-loading-surfaces.md (1780 bytes)
- docs/analysis/concepts/rjm/when-to-refresh.md (1751 bytes)
- docs/analysis/concepts/rjm/github-copilot-cli-contract.md (1906 bytes)
- docs/analysis/concepts/rjm/shipped-registrations.md (1361 bytes)
- docs/analysis/concepts/rjm/event-policy.md (1758 bytes)
- docs/analysis/concepts/rjm/adapter-behavior.md (1780 bytes)
- docs/analysis/concepts/rjm/copilot-plugin-runtime-fields.md (1863 bytes)
- docs/analysis/concepts/rjm/stale-plugin-root-wedges-a-running-session.md (2099 bytes)
- docs/analysis/concepts/rjm/claude-code-delta.md (1643 bytes)
- docs/analysis/concepts/rjm/verification.md (7408 bytes)
- docs/analysis/concepts/rjm/extension-points.md (4026 bytes)
- docs/analysis/concepts/rjm/provenance-and-maintenance.md (1354 bytes)
- docs/analysis/concepts/rjm/vendored-use.md (1716 bytes)
- docs/analysis/concepts/rjm/gate-ladder.md (2440 bytes)
- docs/analysis/concepts/rjm/shift-left-runner.md (1826 bytes)
- docs/analysis/concepts/rjm/ci-required-checks.md (1833 bytes)
- docs/analysis/concepts/rjm/files-per-commit.md (1619 bytes)
- docs/analysis/concepts/rjm/commits-per-pr.md (1735 bytes)
- docs/analysis/concepts/rjm/mid-session-check.md (1727 bytes)
- docs/analysis/concepts/rjm/lint-scope.md (1738 bytes)
- docs/analysis/concepts/rjm/fail-closed-hooks.md (1776 bytes)
- docs/analysis/concepts/rjm/plugin-staleness.md (1893 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-94.md (6155 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-94, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-94 authored and stamped.
- Concepts span agent harness runtime specifications (`agent-harness-reference`, `github-copilot-cli-contract`, `authority-order`, `repository-loading-surfaces`, `when-to-refresh`, `adapter-behavior`, `copilot-plugin-runtime-fields`, `claude-code-delta`, `vendored-use`), verification gates and patterns (`verification`, `gate-ladder`, `shift-left-runner`, `ci-required-checks`, `files-per-commit`, `commits-per-pr`, `mid-session-check`, `lint-scope`, `fail-closed-hooks`, `plugin-staleness`), empirical probe methodologies (`re-running-a-probe`, `docs-silent`, `stale-plugin-root-wedges-a-running-session`, `event-policy`, `extension-points`), and mechanical documentation/heading elements classified as `name-only` per D-023 (`pinned-package-runtime-verification-and-copilot-auto-update`, `python-command-permission-and-script-identity`, `relevance-before-policy-on-the-plugin-wide-bash-matcher`, `triggers`, `shipped-registrations`, `provenance-and-maintenance`).
- All 30 cards pass byte-exact quotation verification via `quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~78,000 tokens across 34 source files and 34 citing inventory cards; approximate tokens of output written: ~16,000 tokens across 30 concept cards and this unit report.
