---
package: rjm
name: RunDirectoryNotFreshError
slug: rundirectorynotfresherror
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

# RunDirectoryNotFreshError

## Definition — verbatim
(used, not defined)

> "class RunDirectoryNotFreshError(Exception):" — scripts/eval/_run_persistence.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_persistence.py | 81 | defined here | Exception raised when fresh-run mode opens a directory whose `runs.jsonl` already contains records. |
| scripts/eval/eval-agent-vs-baseline.py | 62 | used here | Imported by the evaluation runner to catch attempts to run in non-fresh directories without resume mode. |

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
RunDirectoryNotFreshError is a Python exception class in _run_persistence.py rather than an agent lifecycle concept.
