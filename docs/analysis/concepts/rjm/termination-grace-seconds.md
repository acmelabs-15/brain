---
package: rjm
name: _TERMINATION_GRACE_SECONDS
slug: termination-grace-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _TERMINATION_GRACE_SECONDS

## Definition — verbatim
(used, not defined)

> "_TERMINATION_GRACE_SECONDS = 30.0" — scripts/validation/check_generated_staleness.py:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 173 | defined here | Constant defining the grace period in seconds allowed for a child process to clean up on SIGINT before escalation to SIGKILL. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
_TERMINATION_GRACE_SECONDS is a Python constant identifier specifying grace period seconds for child process termination rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
