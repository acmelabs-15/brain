---
package: rjm
name: _canonical_verdict
slug: canonical-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/metrics/emit_verdict_mismatch.py, sha256: bb9b925ea22ea3bba761f71fb4a48fe260babaacee0fd4cb0c9e1302c7be8e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _canonical_verdict

## Definition — verbatim
> "def _canonical_verdict(verdict: str) -> str:" — scripts/metrics/emit_verdict_mismatch.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/emit_verdict_mismatch.py | 39 | defined here | Helper function trimming whitespace, uppercasing, and normalizing review verdict tokens using merge_verdicts. |

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
`_canonical_verdict` is a helper function in `scripts/metrics/emit_verdict_mismatch.py` normalizing review verdict tokens for telemetry logging rather than a lifecycle concept, classified as `name-only` per D-023.
