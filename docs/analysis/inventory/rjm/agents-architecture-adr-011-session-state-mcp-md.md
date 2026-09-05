---
package: rjm
path: .agents/architecture/ADR-011-session-state-mcp.md
type: agent
bytes: 17240
unit: inv-rjm-7
deprecated: false
in_scope_via: inv-rjm-7
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-011-session-state-mcp.md

## Purpose — required, verbatim
> "The ai-agents project uses a multi-phase session protocol (SESSION-PROTOCOL.md) with RFC 2119 requirements. Evidence from retrospectives shows:" — .agents/architecture/ADR-011-session-state-mcp.md:24 (no explicit purpose statement)

## Design intent — required
Proposes a dedicated Model Context Protocol (MCP) server—Session State MCP—to provide real-time state machine enforcement of the multi-phase session lifecycle protocol (5 start phases, 4 end phases). Addresses retrospective findings where trust-based adherence failed while programmatic BLOCKING gates (such as Serena initialization) achieved 100% compliance. Replaces post-hoc PowerShell verification (`Validate-SessionJson.ps1`) and manual `HANDOFF.md` editing with programmatic tools (`session_start`, `validate_gate`, `advance_phase`, `record_evidence`, `session_end`, `get_blocked_reason`) and resources (`session://state`, `session://checklist`, `session://history`, `session://violations`), integrating with Serena memory for cross-session durability.

## Phase — required
cross-phase

## Inputs — required
`SESSION-PROTOCOL.md` specification and RFC 2119 requirements (.agents/architecture/ADR-011-session-state-mcp.md:24, 364), retrospective findings and evidence (.agents/architecture/ADR-011-session-state-mcp.md:26), existing validation tooling `Validate-SessionJson.ps1` (.agents/architecture/ADR-011-session-state-mcp.md:28, 47), Serena MCP memory store and tools (`mcp__serena__write_memory`, `mcp__serena__read_memory`, `mcp__serena__edit_memory`, `mcp__serena__list_memories`, `mcp__serena__delete_memory`) (.agents/architecture/ADR-011-session-state-mcp.md:87-89, 361-375), Git state and repository commit history (.agents/architecture/ADR-011-session-state-mcp.md:102-103, 147), and session log files and `HANDOFF.md` (.agents/architecture/ADR-011-session-state-mcp.md:141-144).

## Outputs — required
Session State MCP tools (`session_start`, `validate_gate`, `advance_phase`, `record_evidence`, `session_end`, `get_blocked_reason`) (.agents/architecture/ADR-011-session-state-mcp.md:72-77, 95-257), MCP resources (`session://state`, `session://checklist`, `session://history`, `session://violations`) (.agents/architecture/ADR-011-session-state-mcp.md:72-75, 261-343), Serena JSON memories (`session-current-state`, `session-history`, `session-violations-log`) (.agents/architecture/ADR-011-session-state-mcp.md:351-355), and fallback local file `.agents/sessions/.session-state.json` when Serena is unavailable (.agents/architecture/ADR-011-session-state-mcp.md:381).

## Invokes — required
- reference SESSION-PROTOCOL.md — .agents/architecture/ADR-011-session-state-mcp.md:24
- script Validate-SessionJson.ps1 — .agents/architecture/ADR-011-session-state-mcp.md:28
- reference ADR-007 — .agents/architecture/ADR-011-session-state-mcp.md:463
- reference ADR-008 — .agents/architecture/ADR-011-session-state-mcp.md:464
- reference ADR-009 — .agents/architecture/ADR-011-session-state-mcp.md:465

## Invoked by — required
- agent ADR-012 — .agents/architecture/ADR-012-skill-catalog-mcp.md:528
- agent ADR-013 — .agents/architecture/ADR-013-agent-orchestration-mcp.md:596
- agent ADR-048 — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:165
- doc mcp-ecosystem — docs/mcp-ecosystem.md:109

## Concepts named — required, verbatim
- `ADR-011` — .agents/architecture/ADR-011-session-state-mcp.md:12 — defined here
- `Session State MCP` — .agents/architecture/ADR-011-session-state-mcp.md:12 — defined here
- `SESSION-PROTOCOL.md` — .agents/architecture/ADR-011-session-state-mcp.md:24 — used here
- `RFC 2119` — .agents/architecture/ADR-011-session-state-mcp.md:24 — used here
- `BLOCKING` — .agents/architecture/ADR-011-session-state-mcp.md:27 — used here
- `Serena` — .agents/architecture/ADR-011-session-state-mcp.md:27 — used here
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
- `session_start` — .agents/architecture/ADR-011-session-state-mcp.md:72 — defined here
- `validate_gate` — .agents/architecture/ADR-011-session-state-mcp.md:73 — defined here
- `advance_phase` — .agents/architecture/ADR-011-session-state-mcp.md:74 — defined here
- `record_evidence` — .agents/architecture/ADR-011-session-state-mcp.md:75 — defined here
- `session_end` — .agents/architecture/ADR-011-session-state-mcp.md:76 — defined here
- `get_blocked_reason` — .agents/architecture/ADR-011-session-state-mcp.md:77 — defined here
- `session://state` — .agents/architecture/ADR-011-session-state-mcp.md:72 — defined here
- `session://checklist` — .agents/architecture/ADR-011-session-state-mcp.md:73 — defined here
- `session://history` — .agents/architecture/ADR-011-session-state-mcp.md:74 — defined here
- `session://violations` — .agents/architecture/ADR-011-session-state-mcp.md:75 — defined here
- `session-current-state` — .agents/architecture/ADR-011-session-state-mcp.md:353 — defined here
- `session-history` — .agents/architecture/ADR-011-session-state-mcp.md:354 — defined here
- `session-violations-log` — .agents/architecture/ADR-011-session-state-mcp.md:355 — defined here

## Structure
- # ADR-011: Session State MCP — .agents/architecture/ADR-011-session-state-mcp.md:12
- ## Status — .agents/architecture/ADR-011-session-state-mcp.md:14
- ## Date — .agents/architecture/ADR-011-session-state-mcp.md:18
- ## Context — .agents/architecture/ADR-011-session-state-mcp.md:22
- ### Problem Statement — .agents/architecture/ADR-011-session-state-mcp.md:50
- ## Decision — .agents/architecture/ADR-011-session-state-mcp.md:54
- ### Architecture — .agents/architecture/ADR-011-session-state-mcp.md:64
- ## Tool Interface Design — .agents/architecture/ADR-011-session-state-mcp.md:93
- ### session_start — .agents/architecture/ADR-011-session-state-mcp.md:95
- ### validate_gate — .agents/architecture/ADR-011-session-state-mcp.md:114
- ### advance_phase — .agents/architecture/ADR-011-session-state-mcp.md:149
- ### record_evidence — .agents/architecture/ADR-011-session-state-mcp.md:198
- ### session_end — .agents/architecture/ADR-011-session-state-mcp.md:219
- ### get_blocked_reason — .agents/architecture/ADR-011-session-state-mcp.md:240
- ## Resource URIs — .agents/architecture/ADR-011-session-state-mcp.md:259
- ### session://state — .agents/architecture/ADR-011-session-state-mcp.md:261
- ### session://checklist — .agents/architecture/ADR-011-session-state-mcp.md:286
- ### session://history — .agents/architecture/ADR-011-session-state-mcp.md:306
- ### session://violations — .agents/architecture/ADR-011-session-state-mcp.md:326
- ## Serena Integration Points — .agents/architecture/ADR-011-session-state-mcp.md:345
- ### Memory Schema — .agents/architecture/ADR-011-session-state-mcp.md:347
- ### Integration Flow — .agents/architecture/ADR-011-session-state-mcp.md:357
- ### Fallback Without Serena — .agents/architecture/ADR-011-session-state-mcp.md:378
- ## Rationale — .agents/architecture/ADR-011-session-state-mcp.md:385
- ### Alternatives Considered — .agents/architecture/ADR-011-session-state-mcp.md:387
- ### Trade-offs — .agents/architecture/ADR-011-session-state-mcp.md:396
- ## Consequences — .agents/architecture/ADR-011-session-state-mcp.md:404
- ### Positive — .agents/architecture/ADR-011-session-state-mcp.md:406
- ### Negative — .agents/architecture/ADR-011-session-state-mcp.md:414
- ### Neutral — .agents/architecture/ADR-011-session-state-mcp.md:421
- ## Implementation Notes — .agents/architecture/ADR-011-session-state-mcp.md:427
- ### Phase 1: Core State Machine (P0) — .agents/architecture/ADR-011-session-state-mcp.md:429
- ### Phase 2: Evidence Automation (P1) — .agents/architecture/ADR-011-session-state-mcp.md:436
- ### Phase 3: Cross-Session Context (P2) — .agents/architecture/ADR-011-session-state-mcp.md:442
- ### Phase 4: Integration (P3) — .agents/architecture/ADR-011-session-state-mcp.md:448
- ### Technology Stack — .agents/architecture/ADR-011-session-state-mcp.md:454
- ## Related Decisions — .agents/architecture/ADR-011-session-state-mcp.md:461
- ## References — .agents/architecture/ADR-011-session-state-mcp.md:467

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:24 Canonical session protocol file "SESSION-PROTOCOL.md" (and referenced at line 469 as "../.agents/SESSION-PROTOCOL.md") does not exist in the repository.
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:28 Referenced validation script "Validate-SessionJson.ps1" does not exist in the repository; validation was migrated to Python as "scripts/validate_session_json.py".
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:29 Referenced "HANDOFF.md" (and referenced at line 295 as ".agents/HANDOFF.md") does not exist at root or in ".agents/"; repository uses ".agents/templates/HANDOFF.md" and per-session handoffs in ".agents/sessions/handoffs/".
- missing-path · .agents/architecture/ADR-011-session-state-mcp.md:473 Referenced memory document "../.serena/memories/skill-protocol-002-verification-based-gate-effectiveness.md" does not exist.
- other · .agents/architecture/ADR-011-session-state-mcp.md:9 Frontmatter records "implemented: false" and "status: proposed"; Session State MCP was never implemented as an MCP server.

## Observations
Presents an early architectural design for transitioning session lifecycle governance from discretionary human/agent compliance to real-time machine-enforced state transitions. Documents the empirical distinction that trust-based rules experienced multiple violations while programmatic BLOCKING gates (Phase 1 Serena initialization) achieved 100% adherence. Proposes modeling the session protocol (5 start phases, 4 end phases) as an MCP server with JSON memory storage in Serena. While never implemented as a standalone MCP server, its underlying principles influenced subsequent session validation tooling (`scripts/validate_session_json.py` and git hook gates).

## Context cost
17,240 bytes, ~4,300 tokens. Isolated markdown document with no direct file inclusions at runtime.
