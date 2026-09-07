---
package: rjm
name: verdicts_match
slug: verdicts-match
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

# verdicts_match

## Definition — verbatim
> "def verdicts_match(local: str, ci: str) -> bool:" — scripts/metrics/emit_verdict_mismatch.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/emit_verdict_mismatch.py | 34 | defined here | Comparison function returning True when local and CI review verdicts collapse to the same canonical outcome. |

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
`verdicts_match` is a Python comparison function in `scripts/metrics/emit_verdict_mismatch.py` checking if local and CI review verdicts collapse to the same canonical outcome rather than a lifecycle concept, classified as `name-only` per D-023.
