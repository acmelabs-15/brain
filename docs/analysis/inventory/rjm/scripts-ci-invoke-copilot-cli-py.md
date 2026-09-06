---
package: rjm
path: scripts/ci/invoke_copilot_cli.py
type: script
bytes: 17101
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/invoke_copilot_cli.py

## Purpose — required, verbatim
> "Invoke Copilot CLI for the ai-review composite action." — scripts/ci/invoke_copilot_cli.py:1

## Design intent — required
Orchestrates execution of the Copilot CLI in CI with timeouts, retries, secret redaction, and error classification. Distinguishes transient infrastructure failures (rate limits, network errors, deadline exhaustion) from permanent authentication rejections (`DID_NOT_RUN`) and logic failures, persisting outputs, stderr, and full prompts with dynamic multiline delimiters to prevent CI log tampering.

## Phase — required
rjm:review

## Inputs — required
- Environment variable `AI_REVIEW_OUTPUT_FILE` — scripts/ci/invoke_copilot_cli.py:159
- Environment variable `GITHUB_OUTPUT` — scripts/ci/invoke_copilot_cli.py:160
- Environment variable `TIMEOUT_MINUTES` — scripts/ci/invoke_copilot_cli.py:166
- Environment variable `AI_REVIEW_ACTION_DEADLINE_EPOCH` — scripts/ci/invoke_copilot_cli.py:174
- Environment variable `CONTEXT_FILE` — scripts/ci/invoke_copilot_cli.py:180
- Template file at `PROMPT_TEMPLATE_PATH` (`/tmp/ai-review-prompt.md`) — scripts/ci/invoke_copilot_cli.py:23

## Outputs — required
- File `ai_review_output_file` containing review verdict or error message — scripts/ci/invoke_copilot_cli.py:414
- Synthesized full prompt file at `FULL_PROMPT_PATH` (`/tmp/ai-review-full-prompt.md`) — scripts/ci/invoke_copilot_cli.py:24
- Step output `raw_output` appended to GitHub output — scripts/ci/invoke_copilot_cli.py:415
- Step output `stderr_output` appended to GitHub output — scripts/ci/invoke_copilot_cli.py:416
- Step output `full_prompt` appended to GitHub output — scripts/ci/invoke_copilot_cli.py:419

## Invokes — required
- script redact_secrets — scripts/ci/invoke_copilot_cli.py:18

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/invoke_copilot_cli.py:1 — used here
- `EXIT_OK` — scripts/ci/invoke_copilot_cli.py:20 — defined here
- `EXIT_LOGIC` — scripts/ci/invoke_copilot_cli.py:21 — defined here
- `EXIT_CONFIG` — scripts/ci/invoke_copilot_cli.py:22 — defined here
- `PROMPT_TEMPLATE_PATH` — scripts/ci/invoke_copilot_cli.py:23 — defined here
- `FULL_PROMPT_PATH` — scripts/ci/invoke_copilot_cli.py:24 — defined here
- `INFRASTRUCTURE_PATTERN` — scripts/ci/invoke_copilot_cli.py:25 — defined here
- `PERMANENT_AUTH_PATTERN` — scripts/ci/invoke_copilot_cli.py:31 — defined here
- `EXPLICIT_TRANSIENT_PATTERN` — scripts/ci/invoke_copilot_cli.py:38 — defined here
- `RETRY_AFTER_PATTERN` — scripts/ci/invoke_copilot_cli.py:42 — defined here
- `CommandResult` — scripts/ci/invoke_copilot_cli.py:57 — defined here
- `InvokeConfig` — scripts/ci/invoke_copilot_cli.py:64 — defined here
- `AttemptResult` — scripts/ci/invoke_copilot_cli.py:77 — defined here
- `choose_multiline_delimiter` — scripts/ci/invoke_copilot_cli.py:108 — defined here
- `append_multiline_output` — scripts/ci/invoke_copilot_cli.py:124 — defined here
- `redact_secrets` — scripts/ci/invoke_copilot_cli.py:134 — defined here
- `retry_delay` — scripts/ci/invoke_copilot_cli.py:144 — defined here
- `is_permanent_auth_failure` — scripts/ci/invoke_copilot_cli.py:151 — defined here
- `parse_config` — scripts/ci/invoke_copilot_cli.py:158 — defined here
- `build_full_prompt` — scripts/ci/invoke_copilot_cli.py:195 — defined here
- `is_infrastructure_failure` — scripts/ci/invoke_copilot_cli.py:216 — defined here
- `invoke_with_retry` — scripts/ci/invoke_copilot_cli.py:224 — defined here
- `analyze_non_infra_failure` — scripts/ci/invoke_copilot_cli.py:371 — defined here
- `write_results` — scripts/ci/invoke_copilot_cli.py:403 — defined here
- `run` — scripts/ci/invoke_copilot_cli.py:430 — defined here
- `main` — scripts/ci/invoke_copilot_cli.py:471 — defined here

## Structure
none (python script; classes and functions: `CommandResult`, `InvokeConfig`, `AttemptResult`, `run_command`, `append_line`, `choose_multiline_delimiter`, `append_multiline_output`, `redact_secrets`, `retry_delay`, `is_permanent_auth_failure`, `parse_config`, `build_full_prompt`, `is_infrastructure_failure`, `invoke_with_retry`, `analyze_non_infra_failure`, `write_results`, `run`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/invoke_copilot_cli.py`, language: Python 3, lines: 485
- documented invocation:
  - "Invoke Copilot CLI for the ai-review composite action." — scripts/ci/invoke_copilot_cli.py:1
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/invoke_copilot_cli.py`
  abridged stdout: `(empty)`
  stderr: `error: AI_REVIEW_OUTPUT_FILE is required`
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented exit codes: `EXIT_OK = 0` (scripts/ci/invoke_copilot_cli.py:20), `EXIT_LOGIC = 1` (scripts/ci/invoke_copilot_cli.py:21), `EXIT_CONFIG = 2` (scripts/ci/invoke_copilot_cli.py:22).
  Actual exit paths:
  - line 392: `return EXIT_LOGIC` (1) when Copilot CLI produces no output on failure
  - line 399: `return EXIT_LOGIC` (1) when Copilot CLI fails with error output
  - line 400: `return EXIT_LOGIC` (1) when non-infra CLI process failure occurs
  - line 435: `return EXIT_CONFIG` (2) when clearing stale output file raises OSError
  - line 461: `return EXIT_OK` (0) when context file is missing or empty (emits DID_NOT_RUN verdict)
  - line 466: `return failure_exit` (propagates analyze_non_infra_failure returncode)
  - line 468: `return EXIT_OK` (0) on successful review completion
  - line 474: `return EXIT_CONFIG` (2) when argv is provided
  - line 479: `return EXIT_CONFIG` (2) when environment variables fail parsing
  - line 484: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? yes (exits 1 on non-infra CLI failures, 2 on config/env errors). Does it fail on the source repo's own default branch? fails with exit 2 when executed without required environment variables.
- does the output match what the documentation claims? yes, enforces configuration requirements and orchestrates Copilot CLI execution with retries and output capture.

## Defects — required
- orphan · scripts/ci/invoke_copilot_cli.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/actions/ai-review/action.yml:260.

## Observations
- Dynamically selects GitHub Actions delimiter in `choose_multiline_delimiter` (lines 108-121) ensuring delimiter collision attacks are impossible.
- Comprehensive secret redaction via `scripts.redact_secrets.redact_ci_sink` across stdout, stderr, and full prompt before persisting to disk or step outputs.

## Context cost
17101 bytes (~4275 tokens) plus `scripts/redact_secrets.py` (16302 bytes, ~4075 tokens) = ~33403 bytes (~8350 tokens).
