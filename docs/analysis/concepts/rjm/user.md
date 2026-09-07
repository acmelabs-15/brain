---
package: rjm
name: user
slug: user
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# user

## Definition — verbatim
(used, not defined)

> "decision-makers: [architect, user]" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 5 | used here | Human decision-maker role listed alongside architect as decision authority |

## Consumes
Architectural proposals, trade-off analyses, and RFCs.

## Produces
Strategic decisions, approval or rejection of architectural decision records, and project constraints.

## When applied
Engaged during governance reviews when decisions require human stakeholder approval.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
In rjm's architecture governance, user designates the human operator and principal stakeholder who retains ultimate decision authority alongside agent roles (such as architect) over system direction and governance boundaries.
