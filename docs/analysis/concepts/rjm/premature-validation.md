---
package: rjm
name: Premature Validation
slug: premature-validation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Premature Validation

## Definition — verbatim
> "Validating before data is complete | Checking state too early, race conditions" — .claude/skills/retrospective/references/diagnosis-and-actions.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 258 | defined here | Standard root cause category defined as validating before data is complete, such as checking state too early or race conditions. |

## Consumes
Failure incident logs resulting from premature state checks, timing discrepancies, or race conditions.

## Produces
Root cause entity classification (`rootcause-premature-validation-{nnn}`) driving the introduction of synchronization gates and completion guards.

## When applied
Applied during retrospective Root Cause Pattern Management following Five Whys root cause analysis.

## Sub-concepts
none

## Part of
root-cause-categories, root-cause-pattern-management

## Implementation status
clean

## Design notes
Premature Validation is a root cause failure pattern where an agent or component evaluates preconditions or validates system state before asynchronous tasks or dependent data payloads are fully settled, creating race conditions and false negatives.
