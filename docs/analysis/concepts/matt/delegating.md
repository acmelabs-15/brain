---
package: matt
name: delegating
slug: delegating
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# delegating

## Definition — verbatim
> "Picturing a life as loops within loops reveals how predictable its activities really are, which is what makes them worth **delegating**." — skills/in-progress/loop-me/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 12 | defined here | The ultimate objective of loop modeling: handing predictable activities off to agents. |

## Consumes
A well-defined loop whose behavior and boundary conditions are predictable.

## Produces
Autonomous agent execution freeing human attention for non-repetitive tasks.

## When applied
Targeted whenever an identified loop is specified to the definition of done.

## Sub-concepts
none

## Part of
loop-me

## Implementation status
clean

## Design notes
The motivating outcome in loop-me's methodology. Once predictable patterns are formalized into workflows without unresolved questions, execution responsibility can be handed over from the human to autonomous agent routines.
