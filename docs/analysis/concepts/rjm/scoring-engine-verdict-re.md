---
package: rjm
name: _scoring_engine._VERDICT_RE
slug: scoring-engine-verdict-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _scoring_engine._VERDICT_RE

## Definition — verbatim
(used, not defined)

> "same ones the eval scorer uses: this module reuses ``_scoring_engine._VERDICT_RE``" — scripts/eval/variance-control.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 19 | used here | Regular expression identifier imported from the scoring engine to ensure identical verdict parsing between harness and scorer. |

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
`_scoring_engine._VERDICT_RE` is an internal Python regex identifier imported from `_scoring_engine.py` to extract model verdicts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
