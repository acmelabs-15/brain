---
package: matt
name: Exercise variants
slug: exercise-variants
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exercise variants

## Definition — verbatim
> "Each exercise needs at least one of these subfolders:" — skills/misc/scaffold-exercises/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 17 | defined here | Section heading and definition establishing required subfolder variants for course exercises. |

## Consumes
Pedagogical requirements for an exercise (conceptual explanation, practice problem, or reference solution).

## Produces
Dedicated subfolders (`problem/`, `solution/`, or `explainer/`) within an exercise directory.

## When applied
When deciding the pedagogical components needed for a specific course exercise.

## Sub-concepts
problem, explainer, solutions

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
A structural pattern dividing educational exercises into discrete functional subfolders. By isolating student practice (`problem/`), reference code (`solution/`), and conceptual teaching (`explainer/`), the course harness cleanly separates learning concerns.
