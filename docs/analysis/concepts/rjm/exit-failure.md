---
package: rjm
name: EXIT_FAILURE
slug: exit-failure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
  - {path: scripts/ci/run_copilot_synthesis.py, sha256: 459e6460fccb04b0e408532fe0cd7329c2272b3c9b6359ad4fef345cebe13038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_FAILURE

## Definition — verbatim
(used, not defined)

> "EXIT_FAILURE = 1" — scripts/ci/find_copilot_ready_issues.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/find_copilot_ready_issues.py | 21 | defined here | Exit code constant indicating execution failure during issue lookup via gh CLI. |
| scripts/ci/run_copilot_synthesis.py | 20 | defined here | Exit code constant indicating synthesis or assignment failure. |

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
defects: orphan

## Design notes
An exit status code constant representing general command execution failure rather than an operational lifecycle concept.
