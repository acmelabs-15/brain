---
package: rjm
path: scripts/eval/eval_runtime_parity.py
type: script
bytes: 16416
unit: inv-rjm-224
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval_runtime_parity.py

## Purpose — required, verbatim
> "Compare shared agent behavior through real Claude and Copilot CLIs." — scripts/eval/eval_runtime_parity.py:2

## Design intent — required
Executes automated comparative evaluations between Claude and Copilot CLI runtimes using identical test fixtures. It prepares isolated workspaces with git repositories, installs platform-specific agent configurations, invokes both CLIs non-interactively, parses stream-json or json event traces, verifies model resolution, checks tool call assertions and profile isolation sentinels, and compares the final results to identify runtime divergence or behavioral mismatch across platforms.

## Phase — required
none

## Inputs — required
- `--fixtures` CLI argument (path to fixtures JSON, defaults to `DEFAULT_FIXTURES`) — scripts/eval/eval_runtime_parity.py:81, 491
- `--model` CLI argument (model identifier string, defaults to `DEFAULT_MODEL` = `claude-opus-4.6`) — scripts/eval/eval_runtime_parity.py:82, 492
- `--output` CLI argument (path to write output report, defaults to generated timestamped report path) — scripts/eval/eval_runtime_parity.py:493, 509
- `--claude-bin` CLI argument (Claude CLI executable path, defaults to `claude`) — scripts/eval/eval_runtime_parity.py:494
- `--copilot-bin` CLI argument (Copilot CLI executable path, defaults to `copilot`) — scripts/eval/eval_runtime_parity.py:495
- `--timeout` CLI argument (per-runtime timeout in seconds, defaults to `DEFAULT_TIMEOUT` = 900.0) — scripts/eval/eval_runtime_parity.py:83, 496
- `--dry-run` CLI flag (runs evaluation in dry-run mode without invoking CLI binaries) — scripts/eval/eval_runtime_parity.py:497
- Test fixture file containing JSON test scenarios (`runtime-parity-fixtures.json`) — scripts/eval/eval_runtime_parity.py:81

## Outputs — required
- Formatted JSON evaluation report printed to stdout — scripts/eval/eval_runtime_parity.py:533
- JSON evaluation report file written to `--output` path containing run records, CLI versions, fixture hashes, assertions, and verdict — scripts/eval/eval_runtime_parity.py:485
- Temporary test workspaces created under output parent directory `workspaces` — scripts/eval/eval_runtime_parity.py:459

## Invokes — required
- script _runtime_output — scripts/eval/eval_runtime_parity.py:28
- script _runtime_parity — scripts/eval/eval_runtime_parity.py:60
- script runtime-parity-fixtures.json — scripts/eval/eval_runtime_parity.py:81

## Invoked by — required
- script README.md — scripts/eval/README.md:98
- script tests/eval/_runtime_parity_test_support.py — tests/eval/_runtime_parity_test_support.py:11

## Concepts named — required, verbatim
- `shared agent behavior` — scripts/eval/eval_runtime_parity.py:2 — defined here
- `Claude agent` — scripts/eval/eval_runtime_parity.py:4 — defined here
- `Copilot agent` — scripts/eval/eval_runtime_parity.py:4 — defined here
- `non-interactive prompt flag` — scripts/eval/eval_runtime_parity.py:6 — defined here
- `resolved model` — scripts/eval/eval_runtime_parity.py:6 — defined here
- `tool traces` — scripts/eval/eval_runtime_parity.py:7 — defined here
- `AGENTS.md` — scripts/eval/eval_runtime_parity.py:9 — used here
- `SENTINEL` — scripts/eval/eval_runtime_parity.py:61 — used here
- `profile_isolation` — scripts/eval/eval_runtime_parity.py:287 — defined here
- `runtime parity` — scripts/eval/eval_runtime_parity.py:461 — defined here

## Structure
- Docstring and exit code specifications — scripts/eval/eval_runtime_parity.py:1-10
- Imports and dependencies — scripts/eval/eval_runtime_parity.py:12-72
- Exit code constants and runtime defaults — scripts/eval/eval_runtime_parity.py:74-85
- _run_in_process_group process management — scripts/eval/eval_runtime_parity.py:88-132
- _tool_args CLI flag adapter — scripts/eval/eval_runtime_parity.py:135-144
- build_argv CLI command generator — scripts/eval/eval_runtime_parity.py:147-194
- _control_report baseline assertion evaluator — scripts/eval/eval_runtime_parity.py:197-202
- _invoke_runtime CLI invocation runner — scripts/eval/eval_runtime_parity.py:205-243
- _parse_runtime_events output event parser — scripts/eval/eval_runtime_parity.py:246-261
- _score_runtime_result assertion scoring and validation — scripts/eval/eval_runtime_parity.py:264-310
- _run_fixture single harness runner — scripts/eval/eval_runtime_parity.py:313-332
- _default_output path generator — scripts/eval/eval_runtime_parity.py:335-338
- _probe_versions CLI version check — scripts/eval/eval_runtime_parity.py:341-364
- _fixture_record metadata builder — scripts/eval/eval_runtime_parity.py:367-374
- _run_fixture_pair dual runtime comparison — scripts/eval/eval_runtime_parity.py:377-413
- _run_live_fixtures fixture suite loop — scripts/eval/eval_runtime_parity.py:415-443
- run_evaluation top-level evaluation orchestrator — scripts/eval/eval_runtime_parity.py:446-486
- _parser CLI argument definitions — scripts/eval/eval_runtime_parity.py:489-498
- main entry point and error handling — scripts/eval/eval_runtime_parity.py:501-536
- Execution guard — scripts/eval/eval_runtime_parity.py:539-541

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `scripts/eval/eval_runtime_parity.py`, Python, 541 lines
- documented invocation (verbatim, path:line):
`uv run python scripts/eval/eval_runtime_parity.py --dry-run` — scripts/eval/README.md:33
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
Command 1: `python3 scripts/eval/eval_runtime_parity.py --dry-run`
Actual exit code: 3
Stdout: (empty)
Stderr:
```
Error: [Errno 2] No such file or directory: 'copilot'
```
Command 2 (with existing binary paths): `python3 scripts/eval/eval_runtime_parity.py --dry-run --claude-bin /bin/echo --copilot-bin /bin/echo`
Actual exit code: 0
Abridged stdout:
```json
{
  "schema_version": 1,
  "requested_model": "claude-opus-4.6",
  "cli_versions": {
    "claude": "--version",
    "copilot": "--no-auto-update --version"
  },
  "fixture_count": 4,
  "fixtures": [
    {
      "id": "resume-phase-3",
      "claude_agent_sha256": "0eefa89b087cefa1e3d2d03c1c6e2e722aa2ad7119f7696e5f30f8adafeceebe",
      "copilot_agent_sha256": "a5f0b91ff5a1abb18d6444519d099bfd9bd3b188043d4064149b110246d8b9f4",
      "fixture_sha256": "05d7dcab1b0b4e924d95f98584296347f17fd296b1a322fdfd4874e923240645",
      "controls": {
        "provenance": "prompt-only",
        "positive": [ ... ],
        "negative": [ ... ]
      }
    }
  ],
  "verdict": "DRY_RUN"
}
```
- documented exit codes (verbatim) vs. actual exit paths in code:
Documented in docstring:
`Exit codes follow AGENTS.md: 0 ok, 1 logic, 2 config, 3 external, 4 auth.` — scripts/eval/eval_runtime_parity.py:9
Defined constants:
`EXIT_OK = 0` — scripts/eval/eval_runtime_parity.py:74
`EXIT_LOGIC = 1` — scripts/eval/eval_runtime_parity.py:75
`EXIT_CONFIG = 2` — scripts/eval/eval_runtime_parity.py:76
`EXIT_EXTERNAL = 3` — scripts/eval/eval_runtime_parity.py:77
`EXIT_AUTH = 4` — scripts/eval/eval_runtime_parity.py:78
Actual exit paths:
- `return EXIT_CONFIG` — scripts/eval/eval_runtime_parity.py:505
- `return EXIT_CONFIG` — scripts/eval/eval_runtime_parity.py:508
- `return EXIT_CONFIG` — scripts/eval/eval_runtime_parity.py:524
- `return EXIT_EXTERNAL` — scripts/eval/eval_runtime_parity.py:532
- `return record, EXIT_LOGIC if verdict else EXIT_OK, verdict` — scripts/eval/eval_runtime_parity.py:412
- `return report, EXIT_OK` — scripts/eval/eval_runtime_parity.py:472
- `return report, final_code` — scripts/eval/eval_runtime_parity.py:486
- `return code` — scripts/eval/eval_runtime_parity.py:536
- `raise SystemExit(main())` — scripts/eval/eval_runtime_parity.py:540
- for validators/gates: Not a standalone gate, but a comparative evaluation harness that can exit non-zero (0 on pass/dry-run, 1 on logic/verdict mismatch, 2 on config error, 3 on external binary/runtime failure).
- does the output match what the documentation claims? Partially: when both CLI binaries exist, `--dry-run` produces the documented JSON schema and `DRY_RUN` verdict. However, `--dry-run` fails if `copilot` or `claude` binaries are not in PATH because version probing precedes the dry-run check.

## Defects — required
- script-bug · scripts/eval/eval_runtime_parity.py:465 — _probe_versions executes before checking dry_run at line 470, causing --dry-run to crash with exit code 3 (EXIT_EXTERNAL) if copilot or claude binaries are not found in PATH.

## Observations
Implements process isolation using `start_new_session=True` and `os.killpg` on Unix systems (`_run_in_process_group`) to ensure that hung CLI subprocesses and their entire child process trees are terminated upon timeout rather than leaving background processes consuming API tokens and mutating git workspaces.

## Context cost
File is 16,416 bytes (541 lines). Associated files: `_runtime_output.py` is 8,901 bytes (263 lines), `_runtime_parity.py` is 16,657 bytes (484 lines), and `runtime-parity-fixtures.json` is 3,828 bytes (136 lines). Total context cost is 45,802 bytes (~11,400 tokens).
