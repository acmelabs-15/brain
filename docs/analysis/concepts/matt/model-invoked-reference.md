---
package: matt
name: model-invoked reference
slug: model-invoked-reference
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# model-invoked reference

## Definition — verbatim
> "`domain-modeling` is a **model-invoked reference** that runs *underneath* other skills more often than it runs on its own." — docs/engineering/domain-modeling.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 86 | defined here | Defined as the classification of skills (like domain-modeling and codebase-design) that provide foundational references underneath driver skills. |
| external/domain-modeling.md | 71 | defined here | Defined in external documentation as reference skills that execute underneath workflow skills rather than directing standalone procedural steps. |

## Consumes
Driver skill execution context and active design conversations.

## Produces
Terminology enforcement, architectural constraints, and conceptual reference rules loaded on demand.

## When applied
Automatically invoked by models when underlying domain or architectural vocabulary rules need to be enforced during tasks.

## Sub-concepts
vocabulary-layer

## Part of
domain-modeling, codebase-design

## Implementation status
defects: other (models frequently load driver skills like grilling but fail to load model-invoked references like domain-modeling automatically in docs/engineering/domain-modeling.md:9-10)

## Design notes
A skill classification in Matt's plugin architecture: skills that do not act as standalone procedural drivers, but are designed to be invoked automatically by the model as background reference knowledge while executing other driver skills.
