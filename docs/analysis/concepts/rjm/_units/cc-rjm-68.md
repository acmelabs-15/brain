---
unit: cc-rjm-68
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-68

## Files assigned
- [x] sources/rjm/.claude/agents/critic.md
- [x] sources/rjm/.claude/agents/debug.md
- [x] sources/rjm/.claude/agents/dependency-auditor.md
- [x] sources/rjm/.claude/agents/devops.md
- [x] sources/rjm/.claude/skills/security-scan/references/autonomous-execution-guardrails.md
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/agent-catalog.md
- [x] sources/rjm/scripts/quality_gate/resolve_pytest_signal.py
- [x] sources/rjm/templates/agents/critic.shared.md
- [x] sources/rjm/templates/agents/debug.shared.md
- [x] sources/rjm/templates/agents/dependency-auditor.shared.md
- [x] sources/rjm/templates/agents/devops.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-critic-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-critic-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-debug-md.md
- [x] docs/analysis/inventory/rjm/docs-agent-catalog-md.md
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-debug-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-references-autonomous-execution-guardrails-md.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-resolve-pytest-signal-py.md
- [x] docs/analysis/inventory/rjm/claude-agents-dependency-auditor-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-dependency-auditor-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-devops-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-devops-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/critique-document-structure.md (1616 bytes)
- docs/analysis/concepts/rjm/verdict-carve-out.md (1798 bytes)
- docs/analysis/concepts/rjm/debug.md (1937 bytes)
- docs/analysis/concepts/rjm/systematic-bug-hunter.md (1550 bytes)
- docs/analysis/concepts/rjm/problem-assessment.md (1327 bytes)
- docs/analysis/concepts/rjm/investigation.md (1356 bytes)
- docs/analysis/concepts/rjm/resolution.md (1952 bytes)
- docs/analysis/concepts/rjm/quality-assurance.md (1397 bytes)
- docs/analysis/concepts/rjm/debugging-guidelines.md (1334 bytes)
- docs/analysis/concepts/rjm/supply-chain-risk-scanner.md (1477 bytes)
- docs/analysis/concepts/rjm/exit-3.md (1326 bytes)
- docs/analysis/concepts/rjm/cisa-kev.md (1324 bytes)
- docs/analysis/concepts/rjm/exit-0.md (1167 bytes)
- docs/analysis/concepts/rjm/exit-1.md (1186 bytes)
- docs/analysis/concepts/rjm/scanning-csproj-individually-when-a-sln-exists.md (1340 bytes)
- docs/analysis/concepts/rjm/ignoring-transitive-dependencies.md (1225 bytes)
- docs/analysis/concepts/rjm/auto-updating-without-review.md (1331 bytes)
- docs/analysis/concepts/rjm/treating-outdated-as-vulnerable.md (1218 bytes)
- docs/analysis/concepts/rjm/devops-specialist.md (1579 bytes)
- docs/analysis/concepts/rjm/12-factor-app-principles-for-ci-cd.md (1326 bytes)
- docs/analysis/concepts/rjm/pipeline-metrics.md (1238 bytes)
- docs/analysis/concepts/rjm/build-time-targets.md (1165 bytes)
- docs/analysis/concepts/rjm/coverage-thresholds.md (1150 bytes)
- docs/analysis/concepts/rjm/deployment-frequency-goals.md (1219 bytes)
- docs/analysis/concepts/rjm/pipeline-health-indicators.md (1256 bytes)
- docs/analysis/concepts/rjm/pipeline-standards.md (1405 bytes)
- docs/analysis/concepts/rjm/local-ci-simulation.md (1442 bytes)
- docs/analysis/concepts/rjm/ci-environment-setup.md (1153 bytes)
- docs/analysis/concepts/rjm/protected-branch-simulation.md (1252 bytes)
- docs/analysis/concepts/rjm/environment-variable-leak-detection.md (1304 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-68.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/critique-document-structure.md docs/analysis/concepts/rjm/verdict-carve-out.md docs/analysis/concepts/rjm/debug.md docs/analysis/concepts/rjm/systematic-bug-hunter.md docs/analysis/concepts/rjm/problem-assessment.md docs/analysis/concepts/rjm/investigation.md docs/analysis/concepts/rjm/resolution.md docs/analysis/concepts/rjm/quality-assurance.md docs/analysis/concepts/rjm/debugging-guidelines.md docs/analysis/concepts/rjm/supply-chain-risk-scanner.md docs/analysis/concepts/rjm/exit-3.md docs/analysis/concepts/rjm/cisa-kev.md docs/analysis/concepts/rjm/exit-0.md docs/analysis/concepts/rjm/exit-1.md docs/analysis/concepts/rjm/scanning-csproj-individually-when-a-sln-exists.md docs/analysis/concepts/rjm/ignoring-transitive-dependencies.md docs/analysis/concepts/rjm/auto-updating-without-review.md docs/analysis/concepts/rjm/treating-outdated-as-vulnerable.md docs/analysis/concepts/rjm/devops-specialist.md docs/analysis/concepts/rjm/12-factor-app-principles-for-ci-cd.md docs/analysis/concepts/rjm/pipeline-metrics.md docs/analysis/concepts/rjm/build-time-targets.md docs/analysis/concepts/rjm/coverage-thresholds.md docs/analysis/concepts/rjm/deployment-frequency-goals.md docs/analysis/concepts/rjm/pipeline-health-indicators.md docs/analysis/concepts/rjm/pipeline-standards.md docs/analysis/concepts/rjm/local-ci-simulation.md docs/analysis/concepts/rjm/ci-environment-setup.md docs/analysis/concepts/rjm/protected-branch-simulation.md docs/analysis/concepts/rjm/environment-variable-leak-detection.md` (exit code 0, 33 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-68 completes 30 concept cards across four operational groups:
  1. Plan critique standards and autonomy carve-outs (`critique-document-structure`, `verdict-carve-out`) from critic agent specifications.
  2. The four-phase debugging lifecycle (`debug`, `systematic-bug-hunter`, `problem-assessment`, `investigation`, `resolution`, `quality-assurance`, `debugging-guidelines`) spanning debug agent definitions, agent catalog entries, README documentation, security guardrails, and quality gate pytest signals.
  3. Supply-chain security governance and dependency auditing (`supply-chain-risk-scanner`, `exit-3`, `cisa-kev`, `exit-0`, `exit-1`, `scanning-csproj-individually-when-a-sln-exists`, `ignoring-transitive-dependencies`, `auto-updating-without-review`, `treating-outdated-as-vulnerable`) from dependency-auditor agent specifications.
  4. CI/CD infrastructure, pipeline engineering, and local simulation standards (`devops-specialist`, `12-factor-app-principles-for-ci-cd`, `pipeline-metrics`, `build-time-targets`, `coverage-thresholds`, `deployment-frequency-goals`, `pipeline-health-indicators`, `pipeline-standards`, `local-ci-simulation`, `ci-environment-setup`, `protected-branch-simulation`, `environment-variable-leak-detection`) from devops agent specifications.
- `resolution.md` captures a multi-context concept spanning Phase 3 of the debugging process, UI thread hiding distinction under autonomous execution guardrails, and status/reason data structures in `resolve_pytest_signal.py`. All four occurrences were mapped in the Where used table.
- All 45 occurrences recorded in `facts/cc-rjm-68.txt` are accounted for in the respective cards' Where used tables.
- Defect annotations were propagated from citing inventory cards (`defects: missing-path` from `claude-agents-critic-md.md` and `claude-agents-devops-md.md`; `defects: missing-path, doc-drift` from `readme-md.md`; `defects: orphan` from `scripts-quality-gate-resolve-pytest-signal-py.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 12 source files and 12 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
