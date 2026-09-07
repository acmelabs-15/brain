---
unit: cc-rjm-43
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-43

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-090-pr-branch-holder-lease.md
- [x] sources/rjm/.agents/architecture/ADR-091-post-merge-version-bot.md
- [x] sources/rjm/.agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] sources/rjm/.agents/architecture/ADR-104-gate-tier-placement-and-budgets.md
- [x] sources/rjm/.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md
- [x] sources/rjm/.agents/archive/planning/PR-60/003-pr-60-plan-critique.md
- [x] sources/rjm/.claude/commands/push-pr.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/external_signals/acceptance_criteria.py
- [x] sources/rjm/scripts/quality_gate/spec_external_signal_gate.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-090-pr-branch-holder-lease-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-091-post-merge-version-bot-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-097-zero-tool-use-hooks-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-104-gate-tier-placement-and-budgets-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-002-pr-60-remediation-plan-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-003-pr-60-plan-critique-md.md
- [x] docs/analysis/inventory/rjm/claude-commands-push-pr-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-measurement-discipline-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-commands-md.md
- [x] docs/analysis/inventory/rjm/scripts-external-signals-acceptance-criteria-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-spec-external-signal-gate-py.md

## Outputs produced
- docs/analysis/concepts/rjm/exit-behavior.md (932 bytes)
- docs/analysis/concepts/rjm/rollback-and-kill-criteria.md (1018 bytes)
- docs/analysis/concepts/rjm/post-merge-bot.md (1769 bytes)
- docs/analysis/concepts/rjm/bot-managed.md (1015 bytes)
- docs/analysis/concepts/rjm/manifest-only-conflicts.md (1523 bytes)
- docs/analysis/concepts/rjm/taste-baseline-only-conflicts.md (1549 bytes)
- docs/analysis/concepts/rjm/serialization-cost.md (1488 bytes)
- docs/analysis/concepts/rjm/measured-conflict-classes.md (966 bytes)
- docs/analysis/concepts/rjm/strictly-greater-semver.md (1360 bytes)
- docs/analysis/concepts/rjm/committed-baseline.md (1182 bytes)
- docs/analysis/concepts/rjm/shallow-clone-hazard.md (1294 bytes)
- docs/analysis/concepts/rjm/committed-count-baselines.md (1268 bytes)
- docs/analysis/concepts/rjm/pr-time-gate.md (1199 bytes)
- docs/analysis/concepts/rjm/parity-manifest.md (1209 bytes)
- docs/analysis/concepts/rjm/parity-manifests.md (1248 bytes)
- docs/analysis/concepts/rjm/no-manual-bump-enforcement.md (1247 bytes)
- docs/analysis/concepts/rjm/strict-monotonicity.md (1175 bytes)
- docs/analysis/concepts/rjm/parity-gate.md (1420 bytes)
- docs/analysis/concepts/rjm/nbgv.md (951 bytes)
- docs/analysis/concepts/rjm/helm-chart.md (932 bytes)
- docs/analysis/concepts/rjm/merge-queue.md (1576 bytes)
- docs/analysis/concepts/rjm/custom-merge-driver.md (1277 bytes)
- docs/analysis/concepts/rjm/acceptance-criteria.md (2581 bytes)
- docs/analysis/concepts/rjm/zero-tool-use-hooks.md (1363 bytes)
- docs/analysis/concepts/rjm/invoke-require-subagent-model-py.md (938 bytes)
- docs/analysis/concepts/rjm/invoke-serena-memory-scope-guard-py.md (949 bytes)
- docs/analysis/concepts/rjm/invoke-serena-worktree-scope-guard-py.md (1029 bytes)
- docs/analysis/concepts/rjm/invoke-observation-sync-py.md (924 bytes)
- docs/analysis/concepts/rjm/invoke-memory-capture-py.md (921 bytes)
- docs/analysis/concepts/rjm/post-tool-call-memory-py.md (935 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-43.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/exit-behavior.md docs/analysis/concepts/rjm/rollback-and-kill-criteria.md docs/analysis/concepts/rjm/post-merge-bot.md docs/analysis/concepts/rjm/bot-managed.md docs/analysis/concepts/rjm/manifest-only-conflicts.md docs/analysis/concepts/rjm/taste-baseline-only-conflicts.md docs/analysis/concepts/rjm/serialization-cost.md docs/analysis/concepts/rjm/measured-conflict-classes.md docs/analysis/concepts/rjm/strictly-greater-semver.md docs/analysis/concepts/rjm/committed-baseline.md docs/analysis/concepts/rjm/shallow-clone-hazard.md docs/analysis/concepts/rjm/committed-count-baselines.md docs/analysis/concepts/rjm/pr-time-gate.md docs/analysis/concepts/rjm/parity-manifest.md docs/analysis/concepts/rjm/parity-manifests.md docs/analysis/concepts/rjm/no-manual-bump-enforcement.md docs/analysis/concepts/rjm/strict-monotonicity.md docs/analysis/concepts/rjm/parity-gate.md docs/analysis/concepts/rjm/nbgv.md docs/analysis/concepts/rjm/helm-chart.md docs/analysis/concepts/rjm/merge-queue.md docs/analysis/concepts/rjm/custom-merge-driver.md docs/analysis/concepts/rjm/acceptance-criteria.md docs/analysis/concepts/rjm/zero-tool-use-hooks.md docs/analysis/concepts/rjm/invoke-require-subagent-model-py.md docs/analysis/concepts/rjm/invoke-serena-memory-scope-guard-py.md docs/analysis/concepts/rjm/invoke-serena-worktree-scope-guard-py.md docs/analysis/concepts/rjm/invoke-observation-sync-py.md docs/analysis/concepts/rjm/invoke-memory-capture-py.md docs/analysis/concepts/rjm/post-tool-call-memory-py.md` (exit code 0, 36 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-43 covers 30 concept cards spanning PR branch holder lease controls (ADR-090), post-merge versioning and baseline automation (ADR-091), zero tool-use hooks doctrine and retired hook script inventory (ADR-097), gate tier placement and merge queue rules (ADR-104), and acceptance criteria formulation and mechanical verification (`acceptance_criteria.py`, `spec_external_signal_gate.py`).
- All 30 cards were newly authored.
- Non-lifecycle concepts (headings `Exit behavior`, `Rollback and Kill Criteria`, `Measured conflict classes`; attribute label `bot_managed`; and retired script/module filenames `invoke_require_subagent_model.py`, `invoke_serena_memory_scope_guard.py`, `invoke_serena_worktree_scope_guard.py`, `invoke_observation_sync.py`, `invoke_memory_capture.py`, `post_tool_call_memory.py`) were classified as `kind: name-only` per D-023.
- Core lifecycle concepts with multi-file occurrences (`Acceptance Criteria` with 7 occurrences across ADR-091, PR-60 remediation plan, PR-60 critique, push-pr command, workflow commands, and external signal gating scripts; `parity gate` with 2 occurrences across ADR-091 and rule-audit-measurement-discipline; `Merge queue` with 2 occurrences across ADR-091 and ADR-104) were fully cross-referenced in their respective `Where used` tables.
- Verification via `bun scripts/synthesis/quote-check.ts` confirmed 36 of 36 citations passing (0 FAIL, 0 MISSING source) with exit code 0.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
