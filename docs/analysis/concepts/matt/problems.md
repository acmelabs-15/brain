---
package: matt
name: problems
slug: problems
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# problems

## Definition — verbatim
> "- `problem/` - student workspace with TODOs" — skills/misc/scaffold-exercises/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Listed as an exercise variant folder containing interactive problem assignments. |
| skills/misc/scaffold-exercises/SKILL.md | 3 | used here | Named in skill description as student challenge directories to scaffold. |

## Consumes
Exercise specifications and pedagogical learning goals.

## Produces
Interactive exercise directories (`problem/`) containing `readme.md` files and starter code with explicit TODO comments.

## When applied
When creating an exercise variant intended for active student practice and evaluation.

## Sub-concepts
problem

## Part of
exercise-variants, scaffold-exercises

## Implementation status
clean

## Design notes
Interactive exercise variants providing an active workspace for students. Problems contain prompt instructions and starter code with explicit TODO comments that students must resolve, distinguishing them from passive explainers or reference solutions.
