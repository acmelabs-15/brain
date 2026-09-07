---
package: rjm
name: Variance-control harness
slug: variance-control-harness
kind: technique
package_phase: rjm:test
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

# Variance-control harness

## Definition — verbatim
> "Variance-control harness for the security-spike eval (issue #1877)." — scripts/eval/variance-control.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 2 | defined here | Module docstring defining the measurement harness that quantifies Anthropic API determinism across repeated evaluation runs. |

## Consumes
Evaluation fixtures (`evals/security-spike/fixtures/*.json`), agent prompt templates (`templates/agents/*.shared.md`), and Anthropic API credentials.

## Produces
Raw repetition JSONL traces, variance summary JSON records, and markdown summary reports under `evals/security-spike/control/<run_id>/`.

## When applied
Applied during evaluation development and diagnostic analysis to determine whether fluctuating pass rates originate from model non-determinism, scorer brittleness, or prompt variations.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An empirical evaluation technique in rjm designed to measure Anthropic API determinism on long-context prompts by running identical fixture-agent pairs repeated times at temperature=0. By computing string edit distances, consecutive text variations, and verdict distributions, it isolates model non-determinism from fixture regressions, ensuring quality evaluation gates maintain high signal fidelity.
