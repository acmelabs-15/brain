---
package: rjm
name: Scorer
slug: scorer
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

# Scorer

## Definition — verbatim
(used, not defined)

> "Scorer = Callable[[Assertion, str], AssertionResult]" — scripts/eval/_scoring_engine.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 15 | defined here | Defines the callable type signature for evaluation scorers taking an Assertion and string response and returning an AssertionResult. |

## Consumes
An `Assertion` object and an agent completion text string.

## Produces
An `AssertionResult` documenting evaluation outcome and extracted values.

## When applied
Invoked by `ScoringEngine.score()` to evaluate specific assertion kinds against model responses.

## Sub-concepts
regex-scorer, verdict-scorer

## Part of
scoringengine

## Implementation status
clean

## Design notes
`Scorer` represents the Strategy pattern abstraction for evaluation assertion scoring in rjm, defining a uniform callable contract (`Assertion`, `str`) -> `AssertionResult` that decouples response evaluation rules from the dispatch engine.
