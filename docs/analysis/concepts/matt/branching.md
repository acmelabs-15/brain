---
package: matt
name: branching
slug: branching
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

# branching

## Definition — verbatim
> "It isn't **branching**: the questions are a flat, grouped list, not a tree that skips section D if you answered A." — docs/productivity/to-questionnaire.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 41 | defined here | Explicitly rejects dynamic conditional branching in favor of a static, flat, grouped list of questions. |
| external/to-questionnaire.md | 48 | defined here | Contrasts flat questionnaire structure against decision trees that skip sections based on prior answers. |

## Consumes
none

## Produces
none

## When applied
Deliberately avoided in `to-questionnaire` output.

## Sub-concepts
none

## Part of
to-questionnaire

## Implementation status
clean

## Design notes
A rejected architectural pattern in `to-questionnaire`. Dynamic conditional decision trees that skip sections based on hypothetical answers were excluded because language models plan poorly when projecting multiple steps ahead of real answers, making static, flat lists far more robust.
