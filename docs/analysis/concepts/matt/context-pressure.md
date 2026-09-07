---
package: matt
name: context pressure
slug: context-pressure
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# context pressure

## Definition — verbatim
> "The implementation agent has the most **context pressure**. They are responsible for exploration, writing code, and debugging failures." — skills/in-progress/retro/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 31 | defined here | Explains why implementation agents must be shielded from coding standards rules to conserve context window capacity. |

## Consumes
Session context windows during exploration, code authoring, and debugging.

## Produces
Design justification for offloading verification and standards checks onto downstream review agents.

## When applied
Assessed when distributing responsibilities between implementation and review agents.

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
Characterizes the operational constraint wherein an agent executing active development consumes substantial context on file reading, trial edits, and debugging output. In Matt's design, acknowledging context pressure dictates that coding standards and style checks must be deferred to review agents with fresh, lightweight contexts rather than overburdening the implementer.
