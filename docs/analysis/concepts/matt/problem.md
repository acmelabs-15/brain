---
package: matt
name: problem/
slug: problem
kind: artifact
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

# problem/

## Definition — verbatim
> "- `problem/` - student workspace with TODOs" — skills/misc/scaffold-exercises/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 21 | defined here | Defines the exercise subfolder variant dedicated to student workspace and incomplete code with TODOs. |

## Consumes
Incomplete starter code, problem readme with instructions, and TODO tasks.

## Produces
A dedicated workspace folder where learners write code to solve the exercise.

## When applied
When an exercise requires interactive, hands-on coding from the student.

## Sub-concepts
none

## Part of
exercise-variants, scaffold-exercises

## Implementation status
clean

## Design notes
The directory variant designated as the student workspace. It contains instructions and initial starter code marked with TODO comments, providing students a focused environment to practice and test implementation skills.
