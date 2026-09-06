---
package: matt
name: three tests
slug: three-tests
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

# three tests

## Definition — verbatim
> "Miss any one of the ADR's three tests and there is no ADR. An easily-reversed decision will just get reversed; an unsurprising one is nobody's question; one with no real alternative records that you did the obvious thing." — docs/engineering/domain-modeling.md:42

## Also called — verbatim
`ADR's three tests` — docs/engineering/domain-modeling.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 42 | defined here | The three verification criteria required before persisting any architectural decision record. |

## Consumes
A proposed architectural decision or technical direction.

## Produces
Clearance to write an ADR under `docs/adr/`.

## When applied
When deciding whether a software design decision should be documented as an ADR.

## Sub-concepts
none

## Part of
adr-s-three-tests, domain-modeling

## Implementation status
clean in gate definition; associated with skill conflict in docs/engineering/domain-modeling.md:67

## Design notes
The shorthand name for the three evaluation criteria governing ADR generation: hard to reverse, surprising without context, and result of a real trade-off. Failing any test blocks ADR creation.
