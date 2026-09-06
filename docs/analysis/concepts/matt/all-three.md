---
package: matt
name: All three
slug: all-three
kind: name-only
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

# All three

## Definition — verbatim
(used, not defined)

> "**All three**: hard to reverse, surprising without context, the result of a real trade-off" — docs/engineering/domain-modeling.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 38 | defined here | Table criterion label indicating that all three qualification conditions must hold before writing an ADR. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean in definition; associated with skill coupling defects in docs/engineering/domain-modeling.md:67

## Design notes
A table cell heading label stating that all three conditions must be met to justify authoring an ADR, classified as name-only because it is a rule quantifier label rather than an independent lifecycle concept.
