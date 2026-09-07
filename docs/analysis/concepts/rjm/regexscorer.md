---
package: rjm
name: RegexScorer
slug: regexscorer
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RegexScorer

## Definition — verbatim
> "`RegexScorer`: `re.search(assertion.value, response, re.IGNORECASE)`: passed if match found" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 148 | defined here | Specified as a concrete scorer performing case-insensitive regex search against model responses. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 60 | defined here | Scheduled for implementation in `scripts/eval/_scoring_engine.py` under task T4-1. |
| scripts/eval/_scoring_engine.py | 56 | defined here | Implemented as a module-level alias to `regex_scorer` preserving architectural specification names. |

## Consumes
An `Assertion` object containing a regex pattern and the raw response string from a model.

## Produces
An `AssertionResult` object recording boolean pass/fail status and the extracted matching text.

## When applied
Invoked by `ScoringEngine.score()` whenever evaluating an assertion with `AssertionKind.REGEX`.

## Sub-concepts
none

## Part of
strategy, scoringengine

## Implementation status
clean

## Design notes
`RegexScorer` is a concrete evaluation scorer implementing the Strategy pattern in rjm's offline evaluation harness. Registered with `ScoringEngine`, it evaluates assertions requiring specific keywords, identifiers, or patterns to appear in model responses using case-insensitive regular expressions, providing deterministic verification without relying on stochastic LLM-as-judge scoring.
