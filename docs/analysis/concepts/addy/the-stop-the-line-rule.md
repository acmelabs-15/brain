---
package: addy
name: The Stop-the-Line Rule
slug: the-stop-the-line-rule
kind: gate
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Stop-the-Line Rule

## Definition — verbatim
> "Don't push past a failing test or broken build to work on the next feature." — skills/debugging-and-error-recovery/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 21 | defined here | Core procedural gate mandating immediate cessation of feature work upon encountering unexpected failures. |

## Consumes
Unexpected test failures, broken builds, runtime exceptions, or abnormal system behavior.

## Produces
A hard workflow pause initiating the 6-step diagnostic protocol (Stop, Preserve, Diagnose, Fix, Guard, Resume).

## When applied
Triggered immediately when anything unexpected happens during build or verification; forbids pushing forward to downstream features.

## Sub-concepts
stop, preserve, diagnose, fix, guard, resume

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
An essential quality gate derived from manufacturing and reliability engineering. When a failure occurs, agents are strictly forbidden from pushing forward with new features or edits, preventing compounding errors where an early unaddressed bug corrupts subsequent implementation steps.
