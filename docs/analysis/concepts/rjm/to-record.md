---
package: rjm
name: to_record
slug: to-record
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

# to_record

## Definition — verbatim
> "- Mapping is explicit and symmetric. `to_domain(record)` and `to_record(domain)` are paired and round-trippable in tests." — .claude/skills/software-engineering-library/references/clean-architecture.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 97 | used here | Explicit adapter mapping function converting inner domain objects into external persistence records or wire shapes. |

## Consumes
Inner domain objects.

## Produces
External persistence records, database rows, or wire-format payloads.

## When applied
Applied inside interface adapters when preparing domain entity state for persistence or external transmission.

## Sub-concepts
none

## Part of
adapters, interface-adapters

## Implementation status
clean

## Design notes
to_record is the canonical adapter mapping function that serializes an internal domain object into an external persistence record or transport payload. In rjm, pairing to_record symmetrically with to_domain ensures robust persistence boundaries and testable serialization.
