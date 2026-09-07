---
package: rjm
name: Assertion
slug: assertion
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Assertion

## Definition — verbatim
> "One scoring assertion attached to a fixture." — scripts/eval/_eval_agent_types.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 59 | defined here | Defined as a frozen dataclass specifying kind, regex pattern, and expected categorical verdict. |
| scripts/eval/_scoring_engine.py | 13 | used here | Imported and passed as the evaluation criteria argument to registered scorer strategy functions. |
| scripts/eval/eval-agent-vs-baseline.py | 38 | used here | Imported to instantiate assertion rules attached to loaded test fixtures during benchmark execution. |

## Consumes
Assertion kind enum (`REGEX` or `VERDICT`), regex pattern string or expected verdict string, and optional description text.

## Produces
Validation constraints attached to evaluation fixtures that evaluate agent output and produce an `AssertionResult`.

## When applied
Defined during evaluation fixture design and applied during post-generation scoring of agent responses against ground truth.

## Sub-concepts
assertionkind

## Part of
fixture

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`Assertion` is the evaluation scoring specification artifact in rjm's test harness, coupling a validation kind (`REGEX` or `VERDICT`) to a specific pattern or expected verdict value. Its constructor enforces strict mutual exclusion between regex patterns and categorical verdict targets, preventing zero-pass scoring anomalies in offline model evaluations.
