---
package: rjm
name: runtime_failure_record
slug: runtime-failure-record
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_output.py, sha256: 27b0e3d4e48261471599dc8dd4b433cc41620902ca4c462460cb64fb93c4fc42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# runtime_failure_record

## Definition — verbatim
(used, not defined)

> "def runtime_failure_record(" — scripts/eval/_runtime_output.py:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_output.py | 223 | defines | Constructs a standardized dictionary capturing error messages, exit codes, and metadata for failed runtime invocations. |

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
A Python helper function in the runtime parity output parser that generates structured failure records for aborted or failing runtime runs, classified as name-only per D-023.
