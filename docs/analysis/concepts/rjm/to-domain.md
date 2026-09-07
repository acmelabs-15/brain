---
package: rjm
name: to_domain
slug: to-domain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# to_domain

## Definition — verbatim
> "- Mapping is explicit and symmetric. `to_domain(record)` and `to_record(domain)` are paired and round-trippable in tests." — .claude/skills/software-engineering-library/references/clean-architecture.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 97 | used here | Explicit adapter mapping function converting external records or wire shapes into inner domain objects. |

## Consumes
External records, database rows, or wire-format payloads.

## Produces
Invariant-valid inner domain objects.

## When applied
Applied inside interface adapters when receiving external records or responses to be passed into use cases.

## Sub-concepts
none

## Part of
adapters, interface-adapters

## Implementation status
clean

## Design notes
to_domain is the canonical adapter mapping function that converts an external persistence record or wire shape into a rich domain object. In rjm, requiring explicit and symmetric to_domain functions guarantees testable round-tripping and prevents ORM or schema types from polluting domain logic.
