---
package: rjm
path: scripts/ci/check_ai_review_infra_gate.py
type: script
bytes: 5148
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_ai_review_infra_gate.py

## Purpose — required, verbatim
> "AI-review infrastructure gate (ADR-006 extraction, issue #2967)." — scripts/ci/check_ai_review_infra_gate.py:2

## Design intent — required
Decides whether to skip the Copilot CLI invocation in `.github/actions/ai-review/action.yml` when context generation suffered an infrastructure failure, writing a canonical `DID_NOT_RUN` verdict file and publishing step outputs so downstream review aggregation handles infra failures gracefully without blocking PRs. Without it, CI jobs failing on upstream network or API limits would report unclassified errors or block merges.

## Phase — required
none

## Inputs — required
- Environment variable `CONTEXT_INFRA_FAILURE` (exact value `"true"` triggers skip) — scripts/ci/check_ai_review_infra_gate.py:40,126
- Environment variable `AI_REVIEW_OUTPUT_FILE` (optional verdict output path override) — scripts/ci/check_ai_review_infra_gate.py:90
- Environment variable `RUNNER_TEMP` (fallback temporary directory) — scripts/ci/check_ai_review_infra_gate.py:93
- Environment variable `GITHUB_OUTPUT` (workflow output sink) — scripts/ci/check_ai_review_infra_gate.py:114

## Outputs — required
- Verdict file containing `DID_NOT_RUN` verdict and message written on skip — scripts/ci/check_ai_review_infra_gate.py:85,119
- Workflow step outputs `output_file`, `skip`, `infrastructure_failure`, and `retry_count` appended to `GITHUB_OUTPUT` — scripts/ci/check_ai_review_infra_gate.py:114-121
- Warning annotation emitted to stdout on skip — scripts/ci/check_ai_review_infra_gate.py:122

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/check_ai_review_infra_gate.py:2 — used here
- `issue #2967` — scripts/ci/check_ai_review_infra_gate.py:2 — used here
- `ai-review` — scripts/ci/check_ai_review_infra_gate.py:2 — used here
- `AGENTS.md` — scripts/ci/check_ai_review_infra_gate.py:27 — used here
- `OUTPUT_FILE_NAME` — scripts/ci/check_ai_review_infra_gate.py:38 — defined here
- `SKIP_TRIGGER` — scripts/ci/check_ai_review_infra_gate.py:40 — defined here
- `DID_NOT_RUN_VERDICT` — scripts/ci/check_ai_review_infra_gate.py:41 — defined here
- `DID_NOT_RUN_MESSAGE` — scripts/ci/check_ai_review_infra_gate.py:42 — defined here
- `SKIP_WARNING` — scripts/ci/check_ai_review_infra_gate.py:43 — defined here
- `GateDecision` — scripts/ci/check_ai_review_infra_gate.py:49 — defined here
- `evaluate_gate` — scripts/ci/check_ai_review_infra_gate.py:59 — defined here
- `render_output_file` — scripts/ci/check_ai_review_infra_gate.py:83 — defined here
- `resolve_output_file` — scripts/ci/check_ai_review_infra_gate.py:88 — defined here
- `emit` — scripts/ci/check_ai_review_infra_gate.py:106 — defined here
- `main` — scripts/ci/check_ai_review_infra_gate.py:125 — defined here

## Structure
- Module docstring detailing architecture, gate contract, and exit codes (lines 1-28)
- Imports and dataclass definition (lines 30-57)
- `evaluate_gate` core decision logic (lines 59-80)
- `render_output_file` verdict formatting helper (lines 83-85)
- `resolve_output_file` cross-platform temporary file resolver (lines 88-94)
- `_append_to_env_file` and `emit` sink publishing routines (lines 97-123)
- `main` entrypoint with exception handling (lines 125-136)
- `__main__` caller (lines 138-140)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/check_ai_review_infra_gate.py`
- **language:** Python 3
- **lines:** 140
- **documented invocation:**
  > "The file path comes from ``AI_REVIEW_OUTPUT_FILE``, then ``RUNNER_TEMP``, then the" — scripts/ci/check_ai_review_infra_gate.py:20
- **executed:** yes
- **command:** `CONTEXT_INFRA_FAILURE="true" python3 sources/rjm/scripts/ci/check_ai_review_infra_gate.py`
- **stdout:**
  ```text
  ::warning::Skipping Copilot CLI invocation due to context build infrastructure failure
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "Exit codes (AGENTS.md): 0 ok, 2 config error (cannot write a sink)." — scripts/ci/check_ai_review_infra_gate.py:27`
- **actual exit paths:**
  - `return 2` — scripts/ci/check_ai_review_infra_gate.py:134
  - `return 0` — scripts/ci/check_ai_review_infra_gate.py:135
  - `sys.exit(main())` — scripts/ci/check_ai_review_infra_gate.py:139
- **for validators/gates:** Can exit non-zero (exits 2 on `OSError` writing outputs). On default branch without arguments, exits 0 with `skip=false` because `CONTEXT_INFRA_FAILURE` is unset.
- **output matches documentation:** yes, emits identical warning string and outputs canonical `DID_NOT_RUN` verdict.

## Defects — required
none

## Observations
Enforces exact string matching for skip triggers: only `context_infra_failure == "true"` skips invocation; values like `"True"`, `"1"`, or `"yes"` do not trigger a skip. Both decision paths return exit code 0 so downstream workflow parse steps run unconditionally.

## Context cost
5148 bytes, ~1290 tokens. Loads no other internal files. Total context cost: 5148 bytes.
