---
package: matt
name: retrospective
slug: retrospective
kind: technique
package_phase: matt:in-progress
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

# retrospective

## Definition — verbatim
> "The user has asked for a **retrospective**. You are suggesting improvements to the coding agent's **environment** to improve future runs." — skills/in-progress/retro/SKILL.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 7 | defined here | Core intent of the retro skill: evaluating past runs to improve future environment configurations. |

## Consumes
Session logs from a specified or current coding session.

## Produces
Environment improvement proposals ranked by severity.

## When applied
Initiated after an agent coding session to review performance and eliminate recurring errors.

## Sub-concepts
navigation, automated-checks, coding-standards, tool-economy

## Part of
retro

## Implementation status
clean

## Design notes
The feedback loop technique implemented in retro. Instead of blaming agent models for errors, retrospectives examine the agent's environment—steering files, checks, and tools—and systematically improve configuration so future runs succeed.
