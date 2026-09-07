---
package: matt
name: multi-recipient
slug: multi-recipient
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-recipient

## Definition — verbatim
> "And it isn't **multi-recipient**: one run produces one document for one person." — docs/productivity/to-questionnaire.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 41 | defined here | Rejects multi-recipient questionnaires, bounding each run to producing a single document for one specific individual. |
| external/to-questionnaire.md | 48 | defined here | Notes that to-questionnaire deliberately avoids multi-recipient routing within a single document. |

## Consumes
none

## Produces
none

## When applied
Deliberately avoided; users run the skill multiple times if answers reside with different individuals.

## Sub-concepts
none

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
A negative design pattern explicitly rejected by `to-questionnaire`. Routing questions to multiple recipients or disciplines within a single document muddles tone, leaks context across stakeholders, and breaks ownership; the skill enforces strict 1:1 author-recipient alignment per document.
