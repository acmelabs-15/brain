---
package: matt
name: Trigger
slug: trigger
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

# Trigger

## Definition — verbatim
> "**Trigger**: what fires each run, an **event** (a new email, a new issue) or a **schedule** (every morning)." — skills/in-progress/loop-me/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 20 | defined here | Core vocabulary term defining the mechanism (event or schedule) that initiates a workflow run. |

## Consumes
External events or time-based schedules.

## Produces
Invocation of a workflow execution run.

## When applied
Specified during workflow design to determine when each run begins.

## Sub-concepts
event, schedule

## Part of
loop-me, workflow

## Implementation status
clean

## Design notes
The initiation specification for a workflow in loop-me. It establishes what fires each run, distinguishing between reactive event triggers (preferred for efficiency) and scheduled intervals, ensuring workflows run only when required.
