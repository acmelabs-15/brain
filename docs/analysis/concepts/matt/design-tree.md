---
package: matt
name: design tree
slug: design-tree
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# design tree

## Definition — verbatim
> "It maps the subject as a **design tree**: every decision branches into the decisions that hang off it, and interviews you branch by branch until nothing is left silently assumed." — docs/productivity/grilling.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grilling.md | 3 | defined here | Describes the structural representation of dependent decisions used to sequence rounds. |
| external/grilling.md | 25 | defined here | Outlines the branching decision graph that structures the interrogation process. |
| skills/productivity/grilling/SKILL.md | 6 | defined here | Instructs the model to map the topic as a branching decision hierarchy. |
| skills/productivity/README.md | 19 | used here | Summarizes grilling as interviewing until every branch of the design tree is resolved. |

## Consumes
An idea or plan with interdependent technical and architectural choices.

## Produces
An ordered DAG of decisions that identifies prerequisite dependencies and open branches.

## When applied
Constructed at the outset of grilling to determine the frontier of unblocked questions.

## Sub-concepts
round

## Part of
grilling

## Implementation status
clean

## Design notes
The design tree is the formal mental model underlying Matt's grilling architecture. By modeling decisions as a directed graph where downstream choices branch off foundational commitments, the interview avoids chaotic jumping across abstraction levels, ensuring prerequisites are resolved before dependent details are probed.
