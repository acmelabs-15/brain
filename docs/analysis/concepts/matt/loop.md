---
package: matt
name: loop
slug: loop
kind: pattern
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

# loop

## Definition — verbatim
> "A **loop** is a recurring pattern in the user's life: their career, their week, their morning, a single repeated activity." — skills/in-progress/loop-me/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 12 | defined here | Conceptual lens framing recurring activities as predictable patterns eligible for delegation. |

## Consumes
Observation of human routines, workflows, communication channels, or operational tasks.

## Produces
Identified candidates for automation and specification within loop-me.

## When applied
Employed as an analytical lens during the discovery phase of loop-me.

## Sub-concepts
none

## Part of
loop-me

## Implementation status
clean

## Design notes
The central conceptual primitive of loop-me. Viewing activities as nested, recurring loops reveals the underlying predictability of personal and professional workflows, making it possible to systematically delegate them to automated agents.
