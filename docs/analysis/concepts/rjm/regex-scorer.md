---
package: rjm
name: regex_scorer
slug: regex-scorer
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

# regex_scorer

## Definition — verbatim
> "REGEX kind: case-insensitive `re.search`. Passed iff a match is found." — scripts/eval/_scoring_engine.py:21

## Also called — verbatim
`RegexScorer` — scripts/eval/_scoring_engine.py:56

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 20 | defined here | Implements concrete scorer function for AssertionKind.REGEX using case-insensitive regex search. |

## Consumes
An `Assertion` object containing a regex pattern and the raw response string from a model.

## Produces
An `AssertionResult` object recording boolean pass/fail status and the extracted matching text.

## When applied
Invoked by `ScoringEngine.score()` whenever evaluating an assertion with `AssertionKind.REGEX`.

## Sub-concepts
none

## Part of
scoringengine

## Implementation status
clean

## Design notes
`regex_scorer` is the Python implementation function for the `RegexScorer` assertion strategy in rjm's evaluation harness, providing deterministic string matching against agent responses using case-insensitive regular expressions.
