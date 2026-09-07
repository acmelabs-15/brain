---
package: matt
name: root cause
slug: root-cause
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# root cause

## Definition — verbatim
(used, not defined)

> "There is no gate between instrumentation and the fix, so the agent can start writing code before you have agreed with its root cause." — external/diagnosing-bugs.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 57 | used here | The verified explanation of why a defect occurs, which an agent establishes before writing a fix. |
| external/triage.md | 58 | used here | Contrasted with shallow verification: triage confirms existence and location without attempting to determine the root cause. |

## Consumes
Diagnostic test output, probe logs, and falsified/confirmed hypothesis predictions.

## Produces
Precise identification of the underlying fault mechanism justifying a permanent code fix.

## When applied
Identified during Phase 4/5 of bug diagnosis after systematic hypothesis testing.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Root cause is the fundamental mechanism that generates an observed failure. Matt's methodology sharply separates shallow triage (which merely confirms bug presence and location) from full diagnosis, which isolates the exact root cause through hypothesis testing before applying a fix.
