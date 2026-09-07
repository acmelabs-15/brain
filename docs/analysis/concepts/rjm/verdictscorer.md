---
package: rjm
name: VerdictScorer
slug: verdictscorer
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

# VerdictScorer

## Definition — verbatim
> "`VerdictScorer`: extracts first token from response matching `IDENTIFY|OK|ESCALATE`; passed if it equals `assertion.value` (case-insensitive)" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 149 | defined here | Specified as a concrete scorer extracting decision tokens (IDENTIFY, OK, ESCALATE) from model responses. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 60 | defined here | Scheduled for implementation in `scripts/eval/_scoring_engine.py` under task T4-1. |
| scripts/eval/_scoring_engine.py | 57 | defined here | Implemented as a module-level alias to `verdict_scorer` preserving architectural specification names. |

## Consumes
An `Assertion` object containing an expected verdict value and the model response text.

## Produces
An `AssertionResult` object capturing boolean pass/fail status and the extracted verdict token.

## When applied
Invoked by `ScoringEngine.score()` whenever evaluating an assertion with `AssertionKind.VERDICT`.

## Sub-concepts
none

## Part of
strategy, scoringengine

## Implementation status
clean

## Design notes
`VerdictScorer` is a concrete assertion strategy in rjm's evaluation harness designed to evaluate structured classification responses. It parses leading decision tokens (`IDENTIFY`, `OK`, `ESCALATE`) matching `_VERDICT_RE`, accommodating optional markdown bolding, and verifies that the extracted classification matches expected ground truth.
