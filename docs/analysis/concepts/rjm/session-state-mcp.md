---
package: rjm
name: Session State MCP
slug: session-state-mcp
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session State MCP

## Definition — verbatim
> "Create a **Session State MCP** that:" — .agents/architecture/ADR-011-session-state-mcp.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 56 | defined here | Architectural decision establishing the Session State MCP specification and state machine. |
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 43 | used here | Listed as an existing proposed ADR dependency in the MCP tool ecosystem expansion plan. |

## Consumes
Session start parameters, RFC 2119 gate definitions from SESSION-PROTOCOL.md, and tool verification evidence.

## Produces
MCP tools (`session_start`, `validate_gate`, `advance_phase`, `record_evidence`, `session_end`, `get_blocked_reason`), MCP resources (`session://state`, `session://checklist`, `session://history`, `session://violations`), and persisted Serena memories.

## When applied
Active throughout the entirety of an agent session, governing phase transitions and blocking non-compliant actions.

## Sub-concepts
session-start, validate-gate, advance-phase, record-evidence, session-end, get-blocked-reason, session-state, session-checklist, session-history, session-violations

## Part of
quality-gates, session-protocol

## Implementation status
not-implemented

## Design notes
An architectural mechanism proposed in ADR-011 to replace trust-based protocol adherence with deterministic runtime enforcement. By exposing an MCP server that maintains a formal state machine across session lifecycle phases, it programmatically blocks phase transitions until verifiable evidence is recorded.
