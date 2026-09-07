---
package: matt
name: Grounding
slug: grounding
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grounding

## Definition — verbatim
> "settle with the user what the audience already knows walking in: the concepts that are **grounded** from the start." — skills/in-progress/writing-beats/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 15 | defined here | Establishes prerequisite and introduced concepts that must be grounded before downstream beats may reference them. |
| skills/in-progress/writing-shape/SKILL.md | 22 | defined here | Enforces conceptual grounding requirements before any article block can introduce or rely on specific concepts. |

## Consumes
Audience prerequisites and newly introduced concepts landed in previous blocks or beats.

## Produces
A running list of verified grounded concepts available for subsequent text blocks to build upon.

## When applied
> "Every **concept** has to be **grounded** before a block can lean on it: the reader either walked in knowing it or met it in an earlier block." — skills/in-progress/writing-shape/SKILL.md:30

## Sub-concepts
none

## Part of
writing-beats, writing-shape

## Implementation status
clean

## Design notes
An authoring discipline ensuring that every idea or term is firmly understood before the text relies upon it. Concepts are grounded either as explicit audience prerequisites or introduced step-by-step in prior blocks, preventing conceptual leaps that lose readers.
