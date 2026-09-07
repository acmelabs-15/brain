---
package: matt
name: rounds
slug: rounds
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rounds

## Definition — verbatim
> "Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask _now_ without guessing at answers you haven't heard yet." — skills/productivity/grilling/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grill-me.md | 3 | defined here | Explains that grill-me structures questions in rounds, each covering the current decision frontier. |
| external/grill-me.md | 25 | defined here | External documentation describing the round-based interview mechanics of grill-me. |
| external/to-questionnaire.md | 61 | used here | Contrasts asynchronous questionnaires with grill-me's dynamic round-by-round interactive frontier. |
| skills/productivity/grilling/SKILL.md | 8 | defined here | Core grilling instruction directing agents to work decision trees in discrete rounds. |

## Consumes
A decision tree with dependencies and the user's responses from prior rounds.

## Produces
A batch of numbered questions and recommendations corresponding to the current frontier.

## When applied
Applied iteratively throughout a grilling interview until all branches of the decision tree are resolved.

## Sub-concepts
round, frontier

## Part of
grilling

## Implementation status
clean

## Design notes
`rounds` structure the interactive interview loop in grilling. Rather than asking one question at a time (which is inefficient) or dumping all questions at once (which overwhelms users and asks questions whose prerequisites are unknown), grilling computes the frontier of currently answerable decisions and presents them in discrete, numbered rounds.
