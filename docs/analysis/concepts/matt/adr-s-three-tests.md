---
package: matt
name: ADR's three tests
slug: adr-s-three-tests
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ADR's three tests

## Definition — verbatim
> "Miss any one of the ADR's three tests and there is no ADR. An easily-reversed decision will just get reversed; an unsurprising one is nobody's question; one with no real alternative records that you did the obvious thing." — docs/engineering/domain-modeling.md:42

## Also called — verbatim
`three tests` — docs/engineering/domain-modeling.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 42 | defined here | Defined as the mandatory three-criterion gate (hard to reverse, surprising without context, real trade-off) required to persist an ADR. |

## Consumes
A proposed architectural decision reached during design or grilling.

## Produces
A determination of whether the choice justifies creating an ADR file under `docs/adr/`.

## When applied
When an architectural decision is made and the agent considers whether to record an ADR.

## Sub-concepts
three-tests

## Part of
domain-modeling

## Implementation status
clean in gate definition; associated with friction from coupling ADR authoring with glossary management in docs/engineering/domain-modeling.md:67

## Design notes
The three-part qualification gate for recording an architectural decision record in Matt's lifecycle: the choice must be hard to reverse, surprising without context, and the result of a real trade-off. If any one of the three tests fails, no ADR is written.
