---
package: rjm
path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md
type: agent
bytes: 10790
unit: inv-rjm-6
deprecated: false
in_scope_via: inv-rjm-6
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md

## Purpose — required, verbatim
> "The ai-agents system relies on SESSION-PROTOCOL.md for consistency, but compliance depends on agent discipline:" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:24 (no explicit purpose statement)

## Design intent — required
Automates `SESSION-PROTOCOL.md` enforcement through lifecycle hooks to eliminate manual compliance failures, protocol drift, and inconsistent session artifacts. Defines hook categories (`session.start`, `session.end`, `task.pre`, `task.post`, `file.modify`, `commit.pre`) and documents the implementation, failure-mode evolution, and subsequent lifecycle changes of five Claude Code hooks (`SessionStart/invoke_context_loader.py`, `PreCompact/invoke_compact_checkpoint.py`, `PreToolUse/invoke_false_completion_gate.py`, `PostToolUse/invoke_plan_state_sync.py`, `Stop/invoke_auto_retrospective.py`). Crucially records the failure semantics amendment from fail-open to fail-closed-and-loud (per ADR-066/ADR-071), the retirement of three hooks (#3184, #3349) for ROI reduction, and the narrowing of Context Loader (#5170) to eliminate stale context injection.

## Phase — required
cross-phase

## Inputs — required
Agent discipline challenges and protocol drift in session execution (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:24-29), ruvnet/claude-flow lifecycle hook architecture and auto-save middleware research (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:31-38), Epic #183, Issue #170, and Issue #174 (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:121-123), ADR-071 Decision item 5 and ADR-066 failure-mode policy reconciliation (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115), and hook ROI reduction programs #3184, #3273, #3349, #3373, #5168, and PR #5170 (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:142-186).

## Outputs — required
The lifecycle hooks automation mandate for session protocol enforcement (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:42-50), hook types specification matrix (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:88-98), hook failure semantics policy mandating fail-closed-and-loud behavior (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:113-117, 204), and hook implementation and retirement status ledger (.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:140-174).

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:107
- doc ADR-004 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:108
- doc ADR-042 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:113
- doc ADR-071 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115
- doc ADR-066 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115

## Invoked by — required
- agent README — .agents/architecture/README.md:99
- doc CONTRIBUTING.md — CONTRIBUTING.md:589
- agent ADR-011 — .agents/architecture/ADR-011-session-state-mcp.md:464

## Concepts named — required, verbatim
- `ADR-008` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:2 — defined here
- `Lifecycle Hooks` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:12 — defined here
- `SESSION-PROTOCOL.md` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:24 — used here
- `HANDOFF.md` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:26 — used here
- `Auto-save middleware` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:36 — used here
- `session.start` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:92 — defined here
- `session.end` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:93 — defined here
- `task.pre` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:94 — defined here
- `task.post` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:95 — defined here
- `file.modify` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:96 — defined here
- `commit.pre` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:97 — defined here
- `Fail-closed-and-loud` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:204 — defined here
- `Typed memory lanes` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:205 — defined here
- `Context Loader` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:142 — defined here
- `Compact Checkpoint` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:143 — defined here
- `False Completion Gate` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144 — defined here
- `Plan State Sync` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:145 — defined here
- `Auto-Retrospective` — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:146 — defined here

## Structure
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
- missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:24 References `SESSION-PROTOCOL.md` which does not exist as a file in the repository.
- missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:197 References audit trail directory `.agents/.hook-state/` which does not exist in the repository.
- doc-drift · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:140-147 Three of the five hooks originally introduced (`invoke_false_completion_gate.py`, `invoke_plan_state_sync.py`, `invoke_auto_retrospective.py`) were subsequently retired across issues #3184 and #3349 for negative ROI.

## Observations
Captures major architectural evolution and lifecycle self-correction in Claude Code hook management. While initially specifying five lifecycle hooks operating under a fail-open model, the decision was amended per ADR-066 and ADR-071 to enforce fail-closed-and-loud behavior on errors. Later, three hooks were retired for negative ROI, leaving only `Context Loader` and `Compact Checkpoint` active in `tests/hooks/test_dispatch_groups_parity.py`. Furthermore, Amendment 2026-08-19 narrowed Context Loader to cease auto-injecting stale `.agents/HANDOFF.md`, saving ~1,000 tokens per session.

## Context cost
10,790 bytes, ~2,700 tokens.
