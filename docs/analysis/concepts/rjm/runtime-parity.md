---
package: rjm
name: runtime parity
slug: runtime-parity
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_output.py, sha256: 27b0e3d4e48261471599dc8dd4b433cc41620902ca4c462460cb64fb93c4fc42}
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# runtime parity

## Definition — verbatim
(used, not defined)

> "Parse machine-readable output from runtime parity subprocesses." — scripts/eval/_runtime_output.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_output.py | 1 | used here | Referenced in module header describing output parsing from parity evaluation subprocesses. |
| scripts/eval/eval_runtime_parity.py | 461 | defined here | Cited in validation check ensuring destination directory contains parity run output. |

## Consumes
Comparative test fixtures (runtime-parity-fixtures.json), Claude CLI executable, and Copilot CLI executable.

## Produces
Structured JSON evaluation reports comparing agent execution traces, model attribution, and verdicts across runtimes.

## When applied
Executed during evaluation and release testing to detect behavioral drift, tool-call divergence, or model discrepancies between Claude Code and GitHub Copilot CLI runtimes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug

## Design notes
runtime parity is an automated cross-platform comparative testing technique that evaluates identical agent configurations and tasks against Claude Code and GitHub Copilot CLI runtimes to detect behavioral divergence, prompt differences, and platform-specific execution drift.
