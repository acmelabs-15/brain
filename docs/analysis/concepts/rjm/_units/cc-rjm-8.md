---
unit: cc-rjm-8
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-8

## Files assigned
- [x] .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md
- [x] .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md
- [x] .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md
- [x] .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md
- [x] .agents/critique/ADR-023-debate-log.md
- [x] .claude/commands/retro.md
- [x] .claude/skills/adr-review/references/agent-prompts.md
- [x] .claude/skills/decision-critic/SKILL.md
- [x] .claude/skills/decision-critic/references/quality-boy-scout-rule.md
- [x] .claude/skills/decision-critic/references/rewrite-regression-check.md
- [x] .claude/skills/decision-critic/scripts/decision-critic.py
- [x] .claude/skills/panning-for-gold/scripts/pan.py
- [x] .claude/skills/review/SKILL.md
- [x] .claude/skills/security-review/SKILL.md
- [x] .claude/skills/software-engineering-library/references/release-it.md
- [x] CONTRIBUTING.md
- [x] scripts/consensus/__init__.py
- [x] scripts/consensus/algorithms.py
- [x] scripts/consensus/decision_recorder.py
- [x] scripts/eval/eval-agent-vs-baseline.py

## Outputs produced
- docs/analysis/concepts/rjm/lifecycle-hooks.md (2253 bytes)
- docs/analysis/concepts/rjm/pre-session-hook.md (1379 bytes)
- docs/analysis/concepts/rjm/post-session-hook.md (1502 bytes)
- docs/analysis/concepts/rjm/file-modification-hooks.md (1397 bytes)
- docs/analysis/concepts/rjm/hook-types.md (964 bytes)
- docs/analysis/concepts/rjm/failure-semantics.md (954 bytes)
- docs/analysis/concepts/rjm/fail-closed-and-loud.md (1599 bytes)
- docs/analysis/concepts/rjm/invoke-false-completion-gate.md (1530 bytes)
- docs/analysis/concepts/rjm/implementation-status.md (942 bytes)
- docs/analysis/concepts/rjm/sessionstart-context-loader.md (1628 bytes)
- docs/analysis/concepts/rjm/precompact-compact-checkpoint.md (1344 bytes)
- docs/analysis/concepts/rjm/pretooluse-false-completion-gate.md (1616 bytes)
- docs/analysis/concepts/rjm/posttooluse-plan-state-sync.md (1301 bytes)
- docs/analysis/concepts/rjm/stop-auto-retrospective.md (1423 bytes)
- docs/analysis/concepts/rjm/authorized-hooks.md (961 bytes)
- docs/analysis/concepts/rjm/context-loader.md (1251 bytes)
- docs/analysis/concepts/rjm/acceptance-criteria-mapping.md (972 bytes)
- docs/analysis/concepts/rjm/design-principles.md (977 bytes)
- docs/analysis/concepts/rjm/typed-memory-lanes.md (1295 bytes)
- docs/analysis/concepts/rjm/parallel-safe-multi-agent-design.md (1887 bytes)
- docs/analysis/concepts/rjm/sequential-execution.md (1717 bytes)
- docs/analysis/concepts/rjm/conflict-resolution.md (2213 bytes)
- docs/analysis/concepts/rjm/queen-worker-swarm-coordination-model.md (1784 bytes)
- docs/analysis/concepts/rjm/parallel-dispatch.md (1782 bytes)
- docs/analysis/concepts/rjm/aggregation-strategies.md (2170 bytes)
- docs/analysis/concepts/rjm/consensus-protocols.md (1692 bytes)
- docs/analysis/concepts/rjm/coordination-modes.md (1733 bytes)
- docs/analysis/concepts/rjm/merge.md (1773 bytes)
- docs/analysis/concepts/rjm/vote.md (2272 bytes)
- docs/analysis/concepts/rjm/escalate.md (3430 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-8.md (4799 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Concepts from ADR-008 (`lifecycle-hooks`, `fail-closed-and-loud`, etc.) interact with ADR-061 and CONTRIBUTING.md.
- Concepts from ADR-009 (`parallel-safe-multi-agent-design`, `parallel-dispatch`, `aggregation-strategies`, `consensus-protocols`, `coordination-modes`, `merge`, `vote`, `escalate`) provide the foundation for multi-agent parallel execution, referenced in ADR-098 and implemented across `scripts/consensus/` and `scripts/workflow/parallel.py`.
- `escalate` spans multiple distinct sub-systems: multi-agent parallel coordination (ADR-009), decision critique halt rules (`decision-critic`), code review round caps (`review`), security review triage (`security-review`), and empirical evaluation (`eval-agent-vs-baseline.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 20 source files and 15 citing inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
