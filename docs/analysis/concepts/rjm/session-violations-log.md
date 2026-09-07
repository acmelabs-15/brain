---
package: rjm
name: session-violations-log
slug: session-violations-log
kind: name-only
package_phase: none
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

# session-violations-log

## Definition — verbatim
(used, not defined)

> "| `session-violations-log` | Audit trail | JSON |" — .agents/architecture/ADR-011-session-state-mcp.md:355

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 355 | defined here | Listed as a Serena memory key name maintaining an audit trail of protocol violations. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
session-violations-log is a Serena memory key identifier used to record protocol violation events rather than an operational lifecycle concept.
