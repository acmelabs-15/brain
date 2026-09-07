---
package: rjm
name: Fixture
slug: fixture
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fixture

## Definition — verbatim
> "One held-out scoring fixture loaded from `evals/security-spike/fixtures/`." — scripts/eval/_eval_agent_types.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 115 | defined here | Defined as a dataclass representing an evaluation test case with prompt, optional input, expected verdict, and assertions. |
| scripts/eval/_oneshot_bench_core.py | 47 | defined here | Defined as a frozen dataclass representing a closed bug benchmark fixture with discourse and expected fix. |
| scripts/eval/_plan_runner.py | 12 | used here | Imported from `_eval_agent_types` and consumed by `PlanRunner.build_plan()` for pre-flight call estimation. |
| scripts/eval/_runtime_parity.py | 45 | defined here | Defined as a frozen dataclass pairing Claude Code and Copilot CLI agent definitions for parity checking. |
| scripts/eval/_scoring_engine.py | 5 | used here | Cited in module docstring explaining Strategy pattern decoupling assertion scoring from the fixture schema. |
| scripts/eval/eval-agent-vs-baseline.py | 41 | used here | Imported and instantiated when loading benchmark test fixtures from JSON and JSONL datasets. |
| scripts/eval/eval-oneshot-vs-shipped.py | 34 | used here | Imported from `_oneshot_bench_core` to load and run oneshot benchmark evaluation fixtures. |

## Consumes
Fixture identifier, test prompt string, input context, provenance category, tags, and scoring assertion specifications.

## Produces
Standardized evaluation input consumed by benchmark runners (`eval-agent-vs-baseline.py`, `eval-oneshot-vs-shipped.py`, `eval-runtime-parity.py`).

## When applied
Loaded at the start of an evaluation run to supply test scenarios, inputs, and validation criteria.

## Sub-concepts
assertion

## Part of
executionplan, eval-agent-vs-baseline

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`Fixture` is the fundamental test case specification artifact in rjm's evaluation framework. It encapsulates the problem prompt, context inputs, provenance metadata, and verification assertions required to test agent prompt variations and tool execution against baseline models, supporting offline benchmarking, oneshot regression testing, and runtime parity validation.
