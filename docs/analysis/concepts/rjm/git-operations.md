---
package: rjm
name: Git Operations
slug: git-operations
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

# Git Operations

## Definition — verbatim
(used, not defined)

> "| End-3 | Git Operations | REQUIRED | Clean commit |" — .agents/architecture/ADR-011-session-state-mcp.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 43 | used here | Listed as Phase End-3 in the session protocol phase table requiring a clean git commit. |

## Consumes
Staged files, validated code, passing quality and QA checks.

## Produces
A clean git commit and updated repository commit log.

## When applied
Applied as the final closing phase of an agent session (Phase End-3).

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
The terminal phase (Phase End-3) of the rjm session protocol where changes are committed to git. It requires that all prior gates (documentation, linting, QA validation) have succeeded, ensuring only validated, clean changes enter version control.
