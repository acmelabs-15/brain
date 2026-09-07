---
package: rjm
name: _JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE
slug: job-object-limit-kill-on-job-close
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_process_tree.py, sha256: 246cbf1a7288bca7564e92a9bd7bf4937d4a7afda9bcf4fd2b0d3b8635448b58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE

## Definition — verbatim
(used, not defined)

> "_JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE = 0x00002000" — scripts/eval/_copilot_process_tree.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_process_tree.py | 13 | defined here | Constant defining the Win32 Job Object limit flag ensuring subprocess tree termination upon job close. |

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
A Win32 Job Object limit flag constant in `_copilot_process_tree.py` used for Windows subprocess tree cleanup, classified as `name-only` per D-023.
