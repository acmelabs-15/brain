---
package: addy
name: adversarially review
slug: adversarially-review
kind: name-only
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# adversarially review

## Definition — verbatim
(used, not defined)
> "I am not confident in this approach, adversarially review my reasoning in a fresh context" — evals/cases/doubt-driven-development.json:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/doubt-driven-development.json | 10 | used here | Appears as an eval trigger prompt phrase for invoking fresh-context review. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
- adversarial-review
- doubt-driven-development

## Implementation status
clean

## Design notes
This is an inflection and trigger phrase from an evaluation prompt rather than an independent lifecycle concept, functioning as a trigger string for doubt-driven development.
