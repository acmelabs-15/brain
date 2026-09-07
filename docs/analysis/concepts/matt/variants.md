---
package: matt
name: variants
slug: variants
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# variants

## Definition — verbatim
> "Default to **3 variants**. More than 5 stops being radically different and starts being noise, so cap there." — skills/engineering/prototype/UI.md:38

> "Variants must be **structurally different**: different layout, different information hierarchy, different primary affordance, not just different colours." — skills/engineering/prototype/UI.md:54

## Also called — verbatim
`UI variations` — skills/engineering/prototype/UI.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 38 | defined here | Defined as 3 to 5 structurally distinct UI candidate layouts evaluated against the same data and purpose. |

## Consumes
The target page's purpose, domain data, and design questions.

## Produces
A set of distinct exported components (e.g., VariantA, VariantB, VariantC) presenting competing layouts.

## When applied
During step 2 of UI prototyping, creating between 3 and 5 structurally distinct layouts for evaluation.

## Sub-concepts
none

## Part of
ui-prototype

## Implementation status
clean

## Design notes
Structurally distinct component implementations generated to explore contrasting visual hierarchies, layout models, and interaction patterns on a route before deciding on a production implementation.
