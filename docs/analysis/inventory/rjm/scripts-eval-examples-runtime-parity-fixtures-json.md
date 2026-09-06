---
package: rjm
path: scripts/eval/examples/runtime-parity-fixtures.json
type: script
bytes: 3828
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/examples/runtime-parity-fixtures.json, sha256: f2c2c9f31bcf177e248fa48d78771b7326b570df6138f738fbceecb8fa602e2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/examples/runtime-parity-fixtures.json

## Purpose — required, verbatim
> "Phases 1 and 2 are complete. Phase 3 is active. Continue phase 3 without restarting or asking about completed phases. Reply with exactly CONTINUE_PHASE_3." — scripts/eval/examples/runtime-parity-fixtures.json:10
(no explicit purpose statement; runtime parity evaluation fixtures)

## Design intent — required
Defines canonical test fixture scenarios for verifying cross-runtime parity between Claude Code (`.claude/agents/*.md`) and GitHub Copilot CLI (`.github/agents/*.agent.md`) agents under `eval_runtime_parity.py`. The scenarios exercise four key agent lifecycle capabilities across both runtimes: (1) lifecycle resumption without restarting completed phases (`resume-phase-3` using `orchestrator`), (2) tool execution and reversible file editing (`execute-reversible-tool` using `implementer`), (3) decision structuring and recommendation without unauthorized execution (`consequential-choice` using `orchestrator`), and (4) QA verification rejecting incomplete artifact sets (`qa-rejects-incomplete-scope` using `qa`). Each fixture defines the agent mappings, target prompt, permitted tools, assertions (regex, not_regex, file_equals), and positive/negative control responses. Without these fixtures, runtime parity evaluations between Claude and Copilot agents would lack structured, repeatable behavioral benchmarks.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/eval/eval_runtime_parity.py — scripts/eval/eval_runtime_parity.py:81
- doc scripts/eval/README.md — scripts/eval/README.md:110
- script tests/eval/_runtime_parity_test_support.py — tests/eval/_runtime_parity_test_support.py:12

## Concepts named — required, verbatim
- `schema_version` — scripts/eval/examples/runtime-parity-fixtures.json:2 — defined here
- `resume-phase-3` — scripts/eval/examples/runtime-parity-fixtures.json:5 — defined here
- `execute-reversible-tool` — scripts/eval/examples/runtime-parity-fixtures.json:34 — defined here
- `consequential-choice` — scripts/eval/examples/runtime-parity-fixtures.json:71 — defined here
- `qa-rejects-incomplete-scope` — scripts/eval/examples/runtime-parity-fixtures.json:106 — defined here
- `regex` — scripts/eval/examples/runtime-parity-fixtures.json:14 — defined here
- `not_regex` — scripts/eval/examples/runtime-parity-fixtures.json:18 — defined here
- `file_equals` — scripts/eval/examples/runtime-parity-fixtures.json:52 — defined here

## Structure
- `schema_version` — scripts/eval/examples/runtime-parity-fixtures.json:2
- `fixtures` — scripts/eval/examples/runtime-parity-fixtures.json:3
  - `resume-phase-3` — scripts/eval/examples/runtime-parity-fixtures.json:5
  - `execute-reversible-tool` — scripts/eval/examples/runtime-parity-fixtures.json:34
  - `consequential-choice` — scripts/eval/examples/runtime-parity-fixtures.json:71
  - `qa-rejects-incomplete-scope` — scripts/eval/examples/runtime-parity-fixtures.json:106

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/examples/runtime-parity-fixtures.json`, language: JSON / test fixture data, lines: 136
- documented invocation:
  - `--fixtures scripts/eval/examples/runtime-parity-fixtures.json` — scripts/eval/README.md:110
- **executed:** yes
- actual command run: `python3 scripts/eval/eval_runtime_parity.py --fixtures scripts/eval/examples/runtime-parity-fixtures.json --dry-run`
  abridged stdout: `Error: [Errno 2] No such file or directory: 'copilot'`
  **actual exit code:** 3
- documented exit codes vs. actual exit paths:
  - documented: none (data fixture file)
  - actual exit paths: none (data file)
- for validators/gates: test fixture file; consumer script `eval_runtime_parity.py` validates argument path before failing on missing `copilot` binary with exit code 3 (`EXIT_EXTERNAL`).
- does the output match what the documentation claims? yes, file is the default fixture source referenced in `eval_runtime_parity.py:81` and `README.md:110`.

## Defects — required
none

## Observations
Directly tests four crucial agent lifecycle behaviors across both Claude Code and GitHub Copilot agent personalities: phase resumption, tool execution, decision recommendations without rogue execution, and QA scope verification.

## Context cost
3,828 bytes (~957 tokens).
