---
package: rjm
name: pass_rate_variance
slug: pass-rate-variance
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

# pass_rate_variance

## Definition — verbatim
(used, not defined)

> "def pass_rate_variance(verdicts: list[str | None], expected: str) -> dict:" — scripts/eval/variance-control.py:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 163 | defined here | Function computing binary pass counts, pass rates, and statistical population variance against expected fixture verdicts. |

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
`pass_rate_variance` is a Python function identifier in `variance-control.py` calculating pass rate statistics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
