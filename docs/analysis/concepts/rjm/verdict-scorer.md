---
package: rjm
name: verdict_scorer
slug: verdict-scorer
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verdict_scorer

## Definition — verbatim
> "VERDICT kind: extract the first IDENTIFY|OK|ESCALATE token, compare CI." — scripts/eval/_scoring_engine.py:37

## Also called — verbatim
`VerdictScorer` — scripts/eval/_scoring_engine.py:57

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 36 | defined here | Implements concrete scorer function for AssertionKind.VERDICT by extracting decision tokens and comparing case-insensitively. |

## Consumes
An `Assertion` object containing an expected verdict value and the model response text.

## Produces
An `AssertionResult` object capturing boolean pass/fail status and the extracted verdict token.

## When applied
Invoked by `ScoringEngine.score()` whenever evaluating an assertion with `AssertionKind.VERDICT`.

## Sub-concepts
none

## Part of
scoringengine

## Implementation status
clean

## Design notes
`verdict_scorer` is the Python implementation function for the `VerdictScorer` assertion strategy in rjm's evaluation harness, parsing leading classification tokens (`IDENTIFY`, `OK`, `ESCALATE`) and matching them against expected ground truth.
