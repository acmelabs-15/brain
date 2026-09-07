---
package: rjm
name: accumulate_verdict
slug: accumulate-verdict
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

# accumulate_verdict

## Definition — verbatim
(used, not defined)

> "def accumulate_verdict(current: str, incoming: str) -> str:" — scripts/eval/_runtime_output.py:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_output.py | 104 | defined here | Combines individual fixture comparison verdicts, prioritizing the most specific failure. |

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
accumulate_verdict is an aggregation utility that tracks the highest-priority failure status across a test suite rather than a lifecycle concept.
