---
package: matt
name: recommended answer
slug: recommended-answer
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# recommended answer

## Definition — verbatim
> "Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round." — skills/productivity/grilling/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/grilling/SKILL.md | 8 | defined here | Specified as a mandatory component for each question presented during a grilling round. |

## Consumes
The current decision question and the agent's reasoning based on gathered environment facts.

## Produces
A proposed default choice formatted as `➡️ <your recommended answer>` to lower cognitive friction for the user.

## When applied
Included with every question formulated on the active decision frontier in a grilling session.

## Sub-concepts
none

## Part of
grilling

## Implementation status
clean

## Design notes
A questioning pattern in grilling where the agent pairs every question with its own concrete recommendation, allowing the human to simply approve good defaults or redirect without having to draft answers from scratch.
