---
package: rjm
path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md
type: agent
bytes: 10790
unit: inv-rjm-6
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md

## Purpose — required, verbatim
> "Lifecycle hooks MUST automate SESSION-PROTOCOL enforcement." — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:42

## Design intent — required
ADR-008 establishes automated lifecycle hooks to enforce SESSION-PROTOCOL invariants across agent execution boundaries, eliminating reliance on human or agent discipline. It addresses the systemic issues of manual enforcement, protocol drift under time pressure, inconsistent session logs, and lack of automated compliance verification. The record documents the pivotal architectural shift in failure semantics—transitioning from an initial fail-open model to a binding fail-closed-and-loud policy (per ADR-066 and ADR-071) following the incident #2205 silent failure—as well as the systematic pruning of low-ROI hooks (false completion gate, plan state sync, auto-retrospective) in favor of surviving high-value hooks (SessionStart Context Loader and PreCompact checkpointing). Without it, agent execution protocols drift silently, creating unverified handoffs and unreliable session records.

## Phase — required
cross-phase

## Inputs — required
Session boundaries (`session.start`, `session.end`), task lifecycle events (`task.pre`, `task.post`), file modification events (`file.modify`), git commit triggers (`commit.pre`), compaction events (`PreCompact`), `.agents/HANDOFF.md` (historically), retrospective skeletons, and state directories (`.agents/.hook-state/`).

## Outputs — required
Session logs (historically), automated linting and formatting fixes, context injection at session initialization via `invoke_context_loader.py`, compaction checkpoints via `invoke_compact_checkpoint.py`, audit logs in `.agents/.hook-state/`, and non-zero exit codes terminating execution on invariant breaches.

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:107
- doc ADR-071 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115
- doc ADR-066 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115
- doc .agents/analysis/claude-flow-architecture-analysis.md — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:125
- script SessionStart/invoke_context_loader.py — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:142
- script PreCompact/invoke_compact_checkpoint.py — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:143

## Invoked by — required
- doc ADR-008 — .agents/architecture/README.md:99
- doc ADR-008 — .agents/architecture/ADR-007-memory-first-architecture.md:355
- skill ADR-008 — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:112
- skill ADR-008 — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:91

## Concepts named — required, verbatim
- `Protocol Automation via Lifecycle Hooks` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:12 — defined here
- `SESSION-PROTOCOL` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:24 — used here
- `Protocol drift` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:27 — used here
- `Lifecycle hooks` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:42 — defined here
- `Pre-session hook` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:46 — defined here
- `Post-session hook` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:47 — defined here
- `Pre-commit hook` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:48 — defined here
- `File modification hooks` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:49 — defined here
- `Session checkpointing` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:74 — used here
- `Hook Types` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:88 — defined here
- `Failure Semantics` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:111 — defined here
- `fail-closed-and-loud` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115 — used here
- `invoke_false_completion_gate` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:116 — used here
- `Implementation Status` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:127 — defined here
- `SessionStart: Context Loader` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:142 — defined here
- `PreCompact: Compact Checkpoint` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:143 — defined here
- `PreToolUse: False Completion Gate` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144 — defined here
- `PostToolUse: Plan State Sync` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:145 — defined here
- `Stop: Auto-Retrospective` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:146 — defined here
- `AUTHORIZED_HOOKS` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:165 — used here
- `Context Loader` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:177 — used here
- `Acceptance Criteria Mapping` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:188 — defined here
- `Design Principles` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:202 — defined here
- `Typed memory lanes` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:205 — defined here

## Structure
- Frontmatter metadata (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented) — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:1-10
- # ADR-008: Protocol Automation via Lifecycle Hooks — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:12
- ## Status — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:14
- ## Date — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:18
- ## Context — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:22
- ## Decision — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:40
- ## Rationale — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:51
- ### Alternatives Considered — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:53
- ### Trade-offs — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:61
- ## Consequences — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:67
- ### Positive — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:69
- ### Negative — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:76
- ### Neutral — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:82
- ## Implementation Notes — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:86
- ### Hook Types (from claude-flow research) — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:88
- ### Phase 5A Implementation Order — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:99
- ## Related Decisions — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:105
- ## Failure Semantics — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:111
- ## References — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:119
- ## Implementation Status — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:127
- ### Amendment 2026-07-26 (Issue #3373) — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:148
- ### Amendment 2026-08-19 (Issue #5168, PR #5170) — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:175
- ### Acceptance Criteria Mapping — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:188
- ### Design Principles — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:202

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:177 · referenced file `.agents/HANDOFF.md` does not exist on disk (superseded by per-issue handoffs and retired in PR #5135).
- missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144-146 · hook scripts `invoke_false_completion_gate.py`, `invoke_plan_state_sync.py`, and `invoke_auto_retrospective.py` no longer exist on disk (explicitly retired by #3184 and #3349).

## Observations
- Documents a practical engineering lesson in hook management: over-automation can yield negative ROI; 3 of the 5 originally envisioned hooks were retired as their responsibilities were better handled by CI tests or authored retrospectives.
- Replaces an initial fail-open runtime stance with a strict fail-closed-and-loud policy following incident #2205 (where a silent exit 0 masked hook failures for 33 days).

## Context cost
10790 bytes, ~2500 tokens.
