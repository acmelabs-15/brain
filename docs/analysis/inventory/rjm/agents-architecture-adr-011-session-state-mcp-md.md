---
package: rjm
path: .agents/architecture/ADR-011-session-state-mcp.md
type: agent
bytes: 17240
unit: inv-rjm-7
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-011-session-state-mcp.md

## Purpose — required, verbatim
> "Create a **Session State MCP** that:" — .agents/architecture/ADR-011-session-state-mcp.md:56

## Design intent — required
Architecture Decision Record proposing a Model Context Protocol (MCP) server to enforce session protocol gates and lifecycle phase transitions in real time. Addresses repeated retrospective findings where trust-based compliance failed (e.g. Session 15 with 5+ violations) and post-hoc validation via scripts failed to prevent errors during execution. Replaces unmonitored agent discipline with a real-time state machine backed by Serena memory persistence and programmatic blocking gates across 5 session start phases and 4 session end phases.

## Phase — required
cross-phase

## Inputs — required
- RFC 2119 requirement levels and session phases from `SESSION-PROTOCOL.md` — .agents/architecture/ADR-011-session-state-mcp.md:24
- Git state and commit hashes (`starting_commit`, `branch`) — .agents/architecture/ADR-011-session-state-mcp.md:102-103
- Retrospective failure evidence and verification gate logs — .agents/architecture/ADR-011-session-state-mcp.md:26-29
- Verification evidence (`tool_output`, `file_path`, `commit_sha`, `content_hash`, `manual`) — .agents/architecture/ADR-011-session-state-mcp.md:205

## Outputs — required
- Session state machine transitions (`INIT`, `INITIALIZED`, `SKILLS_READY`, `CONTEXT_LOADED`, `READY`, `WORKING`, `DOCUMENTING`, `VALIDATED`, `QA_COMPLETE`, `COMPLETE`) — .agents/architecture/ADR-011-session-state-mcp.md:171-195
- Serena memory `session-current-state` — .agents/architecture/ADR-011-session-state-mcp.md:353
- Serena memory `session-history` — .agents/architecture/ADR-011-session-state-mcp.md:354
- Serena memory `session-violations-log` — .agents/architecture/ADR-011-session-state-mcp.md:355
- Fallback local JSON state file `.agents/sessions/.session-state.json` — .agents/architecture/ADR-011-session-state-mcp.md:381
- MCP resources `session://state` (.agents/architecture/ADR-011-session-state-mcp.md:261), `session://checklist` (.agents/architecture/ADR-011-session-state-mcp.md:286), `session://history` (.agents/architecture/ADR-011-session-state-mcp.md:306), `session://violations` (.agents/architecture/ADR-011-session-state-mcp.md:326)

## Invokes — required
- doc SESSION-PROTOCOL.md — .agents/architecture/ADR-011-session-state-mcp.md:24
- script Validate-SessionJson.ps1 — .agents/architecture/ADR-011-session-state-mcp.md:28
- doc HANDOFF.md — .agents/architecture/ADR-011-session-state-mcp.md:29
- agent ADR-007-memory-first-architecture.md — .agents/architecture/ADR-011-session-state-mcp.md:463
- agent ADR-008-protocol-automation-lifecycle-hooks.md — .agents/architecture/ADR-011-session-state-mcp.md:464
- agent ADR-009-parallel-safe-multi-agent-design.md — .agents/architecture/ADR-011-session-state-mcp.md:465
- doc SESSION-PROTOCOL.md — .agents/architecture/ADR-011-session-state-mcp.md:469
- reference skill-protocol-002 — .agents/architecture/ADR-011-session-state-mcp.md:473

## Invoked by — required
- agent .agents/architecture/README.md — .agents/architecture/README.md:161
- agent .agents/architecture/ADR-012-skill-catalog-mcp.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:528

## Concepts named — required, verbatim
- `SESSION-PROTOCOL.md` — .agents/architecture/ADR-011-session-state-mcp.md:24 — used here
- `RFC 2119` — .agents/architecture/ADR-011-session-state-mcp.md:24 — used here
- `BLOCKING` — .agents/architecture/ADR-011-session-state-mcp.md:27 — used here
- `Validate-SessionJson.ps1` — .agents/architecture/ADR-011-session-state-mcp.md:28 — used here
- `HANDOFF.md` — .agents/architecture/ADR-011-session-state-mcp.md:29 — used here
- `Serena Initialization` — .agents/architecture/ADR-011-session-state-mcp.md:35 — used here
- `Skill Validation` — .agents/architecture/ADR-011-session-state-mcp.md:36 — used here
- `Context Retrieval` — .agents/architecture/ADR-011-session-state-mcp.md:37 — used here
- `Session Log Creation` — .agents/architecture/ADR-011-session-state-mcp.md:38 — used here
- `Git State Verification` — .agents/architecture/ADR-011-session-state-mcp.md:39 — used here
- `Documentation Update` — .agents/architecture/ADR-011-session-state-mcp.md:40 — used here
- `Quality Checks` — .agents/architecture/ADR-011-session-state-mcp.md:41 — used here
- `QA Validation` — .agents/architecture/ADR-011-session-state-mcp.md:42 — used here
- `Git Operations` — .agents/architecture/ADR-011-session-state-mcp.md:43 — used here
- `Session State MCP` — .agents/architecture/ADR-011-session-state-mcp.md:56 — defined here
- `session_start` — .agents/architecture/ADR-011-session-state-mcp.md:72 — defined here
- `validate_gate` — .agents/architecture/ADR-011-session-state-mcp.md:73 — defined here
- `advance_phase` — .agents/architecture/ADR-011-session-state-mcp.md:74 — defined here
- `record_evidence` — .agents/architecture/ADR-011-session-state-mcp.md:75 — defined here
- `session_end` — .agents/architecture/ADR-011-session-state-mcp.md:76 — defined here
- `get_blocked_reason` — .agents/architecture/ADR-011-session-state-mcp.md:77 — defined here
- `skill-usage-mandatory` — .agents/architecture/ADR-011-session-state-mcp.md:140 — used here
- `markdownlint` — .agents/architecture/ADR-011-session-state-mcp.md:145 — used here
- `session://state` — .agents/architecture/ADR-011-session-state-mcp.md:261 — defined here
- `session://checklist` — .agents/architecture/ADR-011-session-state-mcp.md:286 — defined here
- `session://history` — .agents/architecture/ADR-011-session-state-mcp.md:306 — defined here
- `session://violations` — .agents/architecture/ADR-011-session-state-mcp.md:326 — defined here
- `session-current-state` — .agents/architecture/ADR-011-session-state-mcp.md:353 — defined here
- `session-history` — .agents/architecture/ADR-011-session-state-mcp.md:354 — defined here
- `session-violations-log` — .agents/architecture/ADR-011-session-state-mcp.md:355 — defined here
- `.session-state.json` — .agents/architecture/ADR-011-session-state-mcp.md:381 — defined here

## Structure
- ADR-011: Session State MCP — .agents/architecture/ADR-011-session-state-mcp.md:12
- Status — .agents/architecture/ADR-011-session-state-mcp.md:14
- Date — .agents/architecture/ADR-011-session-state-mcp.md:18
- Context — .agents/architecture/ADR-011-session-state-mcp.md:22
- Problem Statement — .agents/architecture/ADR-011-session-state-mcp.md:50
- Decision — .agents/architecture/ADR-011-session-state-mcp.md:54
- Architecture — .agents/architecture/ADR-011-session-state-mcp.md:64
- Tool Interface Design — .agents/architecture/ADR-011-session-state-mcp.md:93
- session_start — .agents/architecture/ADR-011-session-state-mcp.md:95
- validate_gate — .agents/architecture/ADR-011-session-state-mcp.md:114
- advance_phase — .agents/architecture/ADR-011-session-state-mcp.md:149
- record_evidence — .agents/architecture/ADR-011-session-state-mcp.md:198
- session_end — .agents/architecture/ADR-011-session-state-mcp.md:219
- get_blocked_reason — .agents/architecture/ADR-011-session-state-mcp.md:240
- Resource URIs — .agents/architecture/ADR-011-session-state-mcp.md:259
- session://state — .agents/architecture/ADR-011-session-state-mcp.md:261
- session://checklist — .agents/architecture/ADR-011-session-state-mcp.md:286
- session://history — .agents/architecture/ADR-011-session-state-mcp.md:306
- session://violations — .agents/architecture/ADR-011-session-state-mcp.md:326
- Serena Integration Points — .agents/architecture/ADR-011-session-state-mcp.md:345
- Memory Schema — .agents/architecture/ADR-011-session-state-mcp.md:347
- Integration Flow — .agents/architecture/ADR-011-session-state-mcp.md:357
- Fallback Without Serena — .agents/architecture/ADR-011-session-state-mcp.md:378
- Rationale — .agents/architecture/ADR-011-session-state-mcp.md:385
- Alternatives Considered — .agents/architecture/ADR-011-session-state-mcp.md:387
- Trade-offs — .agents/architecture/ADR-011-session-state-mcp.md:396
- Consequences — .agents/architecture/ADR-011-session-state-mcp.md:404
- Positive — .agents/architecture/ADR-011-session-state-mcp.md:406
- Negative — .agents/architecture/ADR-011-session-state-mcp.md:414
- Neutral — .agents/architecture/ADR-011-session-state-mcp.md:421
- Implementation Notes — .agents/architecture/ADR-011-session-state-mcp.md:427
- Phase 1: Core State Machine (P0) — .agents/architecture/ADR-011-session-state-mcp.md:429
- Phase 2: Evidence Automation (P1) — .agents/architecture/ADR-011-session-state-mcp.md:436
- Phase 3: Cross-Session Context (P2) — .agents/architecture/ADR-011-session-state-mcp.md:442
- Phase 4: Integration (P3) — .agents/architecture/ADR-011-session-state-mcp.md:448
- Technology Stack — .agents/architecture/ADR-011-session-state-mcp.md:454
- Related Decisions — .agents/architecture/ADR-011-session-state-mcp.md:461
- References — .agents/architecture/ADR-011-session-state-mcp.md:467

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:28 · References script `Validate-SessionJson.ps1` which does not exist in repository; actual script is Python file `scripts/validate_session_json.py`.
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:469 · Reference link `../.agents/SESSION-PROTOCOL.md` is broken; relative path resolves to `.agents/.agents/SESSION-PROTOCOL.md`, and `.agents/SESSION-PROTOCOL.md` is absent from repo.
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:473 · Reference link `../.serena/memories/skill-protocol-002-verification-based-gate-effectiveness.md` is broken; actual memory file is at `.serena/memories/protocol/protocol-002-verification-based-gate-effectiveness.md`.
- doc-drift · .agents/architecture/ADR-011-session-state-mcp.md:29 · Assumes monolithic `.agents/HANDOFF.md` updated manually at session end, which was later superseded by distributed handoffs under ADR-014.

## Observations
Presents the central insight that trust-based reminders fail to enforce lifecycle constraints, whereas verification-based programmatic blocking gates achieve 100% compliance. Provides a detailed state machine specification and JSON resource schema for runtime session gate monitoring.

## Context cost
17240 bytes, ~4300 tokens. Loads no external files.
