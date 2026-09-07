---
package: matt
name: solutions
slug: solutions
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

# solutions

## Definition — verbatim
> "- `solution/` - reference implementation" — skills/misc/scaffold-exercises/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Identified as an exercise variant folder providing reference implementations. |
| skills/misc/scaffold-exercises/SKILL.md | 3 | used here | Specified in skill description as complete reference implementations to scaffold. |

## Consumes
Validated solution code and explanatory walk-through text.

## Produces
Exercise directories (`solution/`) containing complete working implementations in `main.ts` and documentation in `readme.md`.

## When applied
When providing students with an authoritative, verified reference implementation of an exercise problem.

## Sub-concepts
none

## Part of
exercise-variants, scaffold-exercises

## Implementation status
clean

## Design notes
Reference implementations that demonstrate the completed and validated solution to an exercise problem. They provide students with verified code examples and serve as benchmarks for course test suites and automated runners.
