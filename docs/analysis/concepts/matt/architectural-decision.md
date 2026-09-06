---
package: matt
name: architectural decision
slug: architectural-decision
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# architectural decision

## Definition — verbatim
(used, not defined)

> "record an architectural decision" — .changeset/domain-modeling-trigger-context-adr.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Cited as historical trigger phrasing replaced by explicit ADR creation in domain-modeling. |

## Consumes
A technical choice meeting permanence, surprise, and trade-off criteria.

## Produces
An Architecture Decision Record (ADR) in docs/adr/.

## When applied
When a decision is hard to reverse, surprising without context, and involves real trade-offs.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean

## Design notes
An architectural decision represents a structural, irreversible technical choice made during system design. In Matt's framework, architectural decisions are formalized through ADRs to prevent future agents and developers from revisiting settled choices or reversing intentional architectural trade-offs.
