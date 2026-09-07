---
package: rjm
name: Documentation Update
slug: documentation-update
kind: phase
package_phase: rjm:session-end
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

# Documentation Update

## Definition — verbatim
(used, not defined)

> "| End-1 | Documentation Update | REQUIRED | HANDOFF.md + session log updated |" — .agents/architecture/ADR-011-session-state-mcp.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 40 | used here | Listed as Phase End-1 in the session protocol phase table with requirement level REQUIRED. |

## Consumes
Completed session work, modified files, handoff notes, and session state.

## Produces
Updated HANDOFF.md and session log files documenting session changes and next steps.

## When applied
Applied at session wrap-up before executing final quality checks and git operations.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
A required concluding phase of the rjm session protocol (Phase End-1) where an agent updates persistent documentation, specifically the handoff document and session log, before closing. This ensures session continuity, transparent auditing, and that downstream sessions inherit clear context without relying on ephemeral agent working memory.
