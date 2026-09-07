---
package: rjm
name: windows_creation_flags
slug: windows-creation-flags
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

# windows_creation_flags

## Definition — verbatim
(used, not defined)

> "def windows_creation_flags() -> int:" — scripts/eval/_copilot_process_tree.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_process_tree.py | 23 | defined here | Helper function returning Windows subprocess creation flags to start child processes suspended in a new process group. |

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
A Python helper function in `_copilot_process_tree.py` returning Windows process creation flags for process group containment, classified as `name-only` per D-023.
