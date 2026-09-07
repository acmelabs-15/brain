---
package: rjm
name: Serena Initialization
slug: serena-initialization
kind: phase
package_phase: rjm:session-start
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena Initialization

## Definition — verbatim
(used, not defined)

> "| 1 | Serena Initialization | BLOCKING | Tool output in transcript |" — .agents/architecture/ADR-011-session-state-mcp.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 35 | used here | Listed as Phase 1 in the session protocol phase table with requirement level BLOCKING. |

## Consumes
Agent session start trigger and active Serena MCP connection.

## Produces
Verified Serena memory/context tool invocation output in the execution transcript.

## When applied
Enforced unconditionally at the beginning of every agent session before any work or other phases execute.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
Phase 1 of the rjm session lifecycle protocol, functioning as a mandatory BLOCKING gate that requires agents to initialize the Serena MCP tool and confirm tool output in the transcript before proceeding. This programmatic verification prevents session context loss and ensures agent adherence to repository memory.
