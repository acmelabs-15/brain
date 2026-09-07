---
package: rjm
name: MalformedRunRecordError
slug: malformedrunrecorderror
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MalformedRunRecordError

## Definition — verbatim
(used, not defined)

> "class MalformedRunRecordError(Exception):" — scripts/eval/_run_persistence.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_persistence.py | 68 | defined here | Exception raised when an existing `runs.jsonl` record cannot be parsed back into a `RunRecord`. |
| scripts/eval/eval-agent-vs-baseline.py | 61 | used here | Imported by the evaluation runner to handle corrupted or malformed run records during execution. |

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
MalformedRunRecordError is a Python exception class in _run_persistence.py rather than an agent lifecycle concept.
