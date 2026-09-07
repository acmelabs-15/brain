---
package: rjm
name: AC-3
slug: ac-3
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AC-3

## Definition — verbatim
(used, not defined)

> "# Error rate cap (REQ-004 AC-3). Above this, the runner exits 1 before" — scripts/eval/eval-agent-vs-baseline.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agent-vs-baseline.py | 115 | used here | Cites REQ-004 AC-3 governing the maximum error rate cap before exiting. |
| scripts/eval/variance-control.py | 12 | used here | Cites acceptance criterion AC-3 for issue #1877 regarding committed control reports. |

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
An acceptance criterion identifier cited across evaluation scripts (`REQ-004 AC-3` in `eval-agent-vs-baseline.py` and `AC-3` of issue `#1877` in `variance-control.py`), classified as `name-only` per D-023.
