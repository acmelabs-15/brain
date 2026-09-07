---
package: rjm
name: parity evals
slug: parity-evals
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parity evals

## Definition — verbatim
(used, not defined)

> "Fixture loading and deterministic scoring for real-CLI parity evals." — scripts/eval/_runtime_parity.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 1 | used here | Describes fixture loading and scoring capabilities for real-CLI comparative evaluation runs. |

## Consumes
Comparative test fixtures, CLI runtimes (Claude Code and GitHub Copilot CLI), isolated workspace environments.

## Produces
Evaluation reports scoring behavioral parity, tool call parity, and assertion results across runtimes.

## When applied
Executed during comparative test evaluation to verify cross-platform parity between Claude Code and GitHub Copilot CLI agents.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Automated comparative evaluation technique in rjm that executes identical agent tasks against multiple LLM CLI runtimes under isolated environments to detect behavioral divergence and maintain cross-harness parity.
