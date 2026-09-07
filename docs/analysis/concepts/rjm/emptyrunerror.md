---
package: rjm
name: EmptyRunError
slug: emptyrunerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EmptyRunError

## Definition — verbatim
(used, not defined)

> "class EmptyRunError(Exception):" — scripts/eval/_report_aggregator.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 82 | defined here | Exception class raised when aggregation is attempted on an empty collection of run records. |
| scripts/eval/eval-agent-vs-baseline.py | 57 | used here | Imported exception caught during live report generation to trigger EXIT_LOGIC exit code. |

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
defects: exit-code-mismatch, script-bug

## Design notes
EmptyRunError is an exception class raised when evaluation aggregation is executed on zero records rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
