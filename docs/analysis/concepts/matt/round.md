---
package: matt
name: round
slug: round
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# round

## Definition — verbatim
> "Each **round** asks the whole **frontier**: every decision whose prerequisites are already settled, and nothing else." — docs/productivity/grilling.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grilling.md | 5 | defined here | Defines the unit of questioning consisting of all independent questions on the current decision frontier. |
| external/grilling.md | 26 | defined here | Explains round-based batch questioning against the frontier of settled decisions. |

## Consumes
The current frontier of independent unblocked decisions in the design tree.

## Produces
A numbered batch of questions with recommendations, followed by human answers that advance the frontier.

## When applied
During each step of the grilling loop until no unvisited branches remain on the frontier.

## Sub-concepts
none

## Part of
grilling

## Implementation status
defects: internal-contradiction (round-based default contested by users preferring sequential questioning)

## Design notes
A round is the atomic interaction turn in grilling. Rather than asking questions one by one or dumping an overwhelming checklist all at once, a round asks exactly the subset of decisions whose dependencies are satisfied. This parallelizes independent inquiries while preserving logical causality across iterations.
