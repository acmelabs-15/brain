---
package: rjm
name: record_evidence
slug: record-evidence
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

# record_evidence

## Definition — verbatim
(used, not defined)

> "Records evidence for a checklist item. Auto-validates if evidence is sufficient." — .agents/architecture/ADR-011-session-state-mcp.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 75 | defined here | Defined as an MCP tool recording verification evidence for checklist items. |

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
record_evidence is an MCP tool function identifier specified in ADR-011 rather than an operational lifecycle concept.
