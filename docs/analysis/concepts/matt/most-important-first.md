---
package: matt
name: most-important-first
slug: most-important-first
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# most-important-first

## Definition — verbatim
> "Questions ordered **most-important-first** and grouped under themed headings, because async means you may only get one pass." — docs/productivity/to-questionnaire.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 36 | defined here | Explains that questions are ordered most-important-first under themed headings because async communication may allow only one pass. |
| external/to-questionnaire.md | 43 | defined here | Directs ordering questions most-important-first to maximize value from potentially single-pass async responses. |
| skills/productivity/to-questionnaire/SKILL.md | 20 | defined here | Mandates sorting questions within theme groups so critical questions appear first. |

## Consumes
A set of drafted questions aimed at the knowledge gap.

## Produces
A prioritized question list grouped under themed headings.

## When applied
When ordering questions within themes in a discovery questionnaire.

## Sub-concepts
none

## Part of
discovery-questionnaire, questionnaire, to-questionnaire

## Implementation status
clean

## Design notes
An async prioritization heuristic ensuring that if a busy stakeholder answers only the top few questions before disengaging, the most critical decision-blocking uncertainties are resolved first.
