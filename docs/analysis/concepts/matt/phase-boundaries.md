---
package: matt
name: Phase boundaries
slug: phase-boundaries
kind: pattern
package_phase: matt:ask-matt
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Phase boundaries

## Definition — verbatim
> "The **phase boundary** is the gap between two phases, and it is the only place this decision belongs. Mid-phase there is no decision to make: continue, or split the work that's left into subagents." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5

## Also called — verbatim
`the phase boundary` — external/ask-matt.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 100 | defined here | Documents Phase 4 boundary decision model with five transition options in changelog |
| skills/engineering/ask-matt/SKILL.md | 61 | defined here | Section introducing the five options and decision criteria between work phases |

## Consumes
An active agent session concluding a distinct chunk of work (grilling, spec, tickets, implementation, QA)

## Produces
A transition action selected from Continue, /clear, /handoff, Subagent, or /compact

## When applied
At the completion of a logical phase of work inside a session before deciding what to do with the context window

## Sub-concepts
phase, smart-zone

## Part of
ask-matt

## Implementation status
clean

## Design notes
Phase boundaries define the disciplined transition points between distinct lifecycle stages where context management decisions must occur, preventing haphazard mid-phase compaction or premature clearing that destroys essential reasoning context.
