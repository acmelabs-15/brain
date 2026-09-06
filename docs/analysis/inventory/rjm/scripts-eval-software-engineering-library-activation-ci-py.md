---
package: rjm
path: scripts/eval/software_engineering_library_activation_ci.py
type: script
bytes: 7193
unit: inv-rjm-238
in_scope_via: .claude/skills/context-optimizer/references/model-context-doctrine.md
aliases: []
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/software_engineering_library_activation_ci.py

## Purpose — required, verbatim
> "CI wrappers for the software-engineering-library activation gate." — scripts/eval/software_engineering_library_activation_ci.py:2

## Design intent — required
Orchestrates continuous integration execution of ADR-088's software engineering library activation eval gate. It executes `eval-rule-activation.py` across eight pre-registered book rule scenario fixtures to evaluate whether progressively disclosed skills activate appropriately, forwards the resulting activation output into `software_engineering_library_activation_gate.py` to update persistent failure state, and automates GitHub issue tracking via `gh` by creating or commenting on a rollback alert issue when consecutive activation failure thresholds are breached. Without this script, CI workflows would need complex and fragile shell scripting to coordinate evaluation execution, state file management, and GitHub issue lifecycle automation.

## Phase — required
none

## Inputs — required
- Subcommand `live-eval`: runs live evaluation and gate — scripts/eval/software_engineering_library_activation_ci.py:205
- Subcommand `alert-issue`: creates or updates GitHub rollback tracking issue — scripts/eval/software_engineering_library_activation_ci.py:206
- Environment variable `GITHUB_RUN_ID` via `run_id()`: sanitised to plain ASCII decimal digits or "unknown" — scripts/eval/software_engineering_library_activation_ci.py:52
- Environment variable `GITHUB_SERVER_URL` (default: "https://github.com") — scripts/eval/software_engineering_library_activation_ci.py:109
- Environment variable `GITHUB_REPOSITORY` (default: "rjmurillo/ai-agents") — scripts/eval/software_engineering_library_activation_ci.py:110
- Eight scenario JSON fixtures in `SCENARIOS`:
  - `tests/evals/rule-scenarios/clean-architecture.json` — scripts/eval/software_engineering_library_activation_ci.py:15
  - `tests/evals/rule-scenarios/domain-driven-design.json` — scripts/eval/software_engineering_library_activation_ci.py:16
  - `tests/evals/rule-scenarios/enterprise-patterns.json` — scripts/eval/software_engineering_library_activation_ci.py:17
  - `tests/evals/rule-scenarios/refactoring.json` — scripts/eval/software_engineering_library_activation_ci.py:18
  - `tests/evals/rule-scenarios/release-it.json` — scripts/eval/software_engineering_library_activation_ci.py:19
  - `tests/evals/rule-scenarios/philosophy-of-software-design.json` — scripts/eval/software_engineering_library_activation_ci.py:20
  - `tests/evals/rule-scenarios/data-intensive-applications.json` — scripts/eval/software_engineering_library_activation_ci.py:21
  - `tests/evals/rule-scenarios/working-with-legacy-code.json` — scripts/eval/software_engineering_library_activation_ci.py:22
- Eval output results file `RESULTS_PATH` (`activation-results.json`) read and checked for existence/size — scripts/eval/software_engineering_library_activation_ci.py:25, 79
- State file `STATE_PATH` (`.eval-state/software-engineering-library-activation-state.json`) — scripts/eval/software_engineering_library_activation_ci.py:26, 90

## Outputs — required
- File `activation-results.json` created by invoked eval script — scripts/eval/software_engineering_library_activation_ci.py:25, 72
- File `.eval-state/software-engineering-library-activation-state.json` updated by invoked gate script — scripts/eval/software_engineering_library_activation_ci.py:26, 93
- File `activation-gate-report.md` written by invoked gate script — scripts/eval/software_engineering_library_activation_ci.py:27, 95
- File `activation-threshold-report.json` written by invoked gate script — scripts/eval/software_engineering_library_activation_ci.py:28, 97
- Temporary issue body file `issue-body.md` or `comment-body.md` written in scratch directory — scripts/eval/software_engineering_library_activation_ci.py:160, 187
- GitHub issue created or commented via `gh issue create` / `gh issue comment` with title "software-engineering-library activation rollback threshold" and labels `software-engineering-library-activation`, `agent-qa`, `automated` — scripts/eval/software_engineering_library_activation_ci.py:164-173, 189
- Exit codes:
  - 0: success (live-eval completed cleanly, alert-issue completed cleanly) — scripts/eval/software_engineering_library_activation_ci.py:105, 173, 190
  - 1: gate failure on threshold when `--fail-on-threshold` is set, or issue creation/commenting failure — scripts/eval/software_engineering_library_activation_ci.py:102, 173
  - 2 or 4: eval CLI syntax/config/auth error forwarded directly — scripts/eval/software_engineering_library_activation_ci.py:77-78
  - 3: external API failure from eval-rule-activation.py forwarded directly — scripts/eval/software_engineering_library_activation_ci.py:103-104

## Invokes — required
- script scripts/eval/eval-rule-activation.py — scripts/eval/software_engineering_library_activation_ci.py:70
- script scripts/eval/software_engineering_library_activation_gate.py — scripts/eval/software_engineering_library_activation_ci.py:87

## Invoked by — required
- reference .claude/skills/context-optimizer/references/model-context-doctrine.md — .claude/skills/context-optimizer/references/model-context-doctrine.md:217

## Concepts named — required, verbatim
- `software-engineering-library` — scripts/eval/software_engineering_library_activation_ci.py:2 — used here
- `activation gate` — scripts/eval/software_engineering_library_activation_ci.py:2 — used here
- `clean-architecture` — scripts/eval/software_engineering_library_activation_ci.py:15 — used here
- `domain-driven-design` — scripts/eval/software_engineering_library_activation_ci.py:16 — used here
- `enterprise-patterns` — scripts/eval/software_engineering_library_activation_ci.py:17 — used here
- `refactoring` — scripts/eval/software_engineering_library_activation_ci.py:18 — used here
- `release-it` — scripts/eval/software_engineering_library_activation_ci.py:19 — used here
- `philosophy-of-software-design` — scripts/eval/software_engineering_library_activation_ci.py:20 — used here
- `data-intensive-applications` — scripts/eval/software_engineering_library_activation_ci.py:21 — used here
- `working-with-legacy-code` — scripts/eval/software_engineering_library_activation_ci.py:22 — used here
- `RESULTS_PATH` — scripts/eval/software_engineering_library_activation_ci.py:25 — defined here
- `STATE_PATH` — scripts/eval/software_engineering_library_activation_ci.py:26 — defined here
- `REPORT_PATH` — scripts/eval/software_engineering_library_activation_ci.py:27 — defined here
- `THRESHOLD_REPORT_PATH` — scripts/eval/software_engineering_library_activation_ci.py:28 — defined here
- `LABEL` — scripts/eval/software_engineering_library_activation_ci.py:29 — defined here
- `OWNER_LABEL` — scripts/eval/software_engineering_library_activation_ci.py:30 — defined here
- `AUTOMATED_LABEL` — scripts/eval/software_engineering_library_activation_ci.py:31 — defined here
- `live-eval` — scripts/eval/software_engineering_library_activation_ci.py:205 — defined here
- `alert-issue` — scripts/eval/software_engineering_library_activation_ci.py:206 — defined here
- `ADR-088` — scripts/eval/software_engineering_library_activation_ci.py:146 — used here
- `restoration PR` — scripts/eval/software_engineering_library_activation_ci.py:147 — used here
- `always-on rule surface` — scripts/eval/software_engineering_library_activation_ci.py:151 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/software_engineering_library_activation_ci.py`, language: Python, lines: 221
- documented invocation: "uv run python scripts/eval/software_engineering_library_activation_ci.py live-eval" — tests/eval/test_software_engineering_library_activation_gate.py:148
- **executed:** yes
- actual command run: `python3 scripts/eval/software_engineering_library_activation_ci.py --help`
  abridged stdout:
  ```
  usage: software_engineering_library_activation_ci.py [-h]
                                                       {live-eval,alert-issue} ...

  CI helpers for software-engineering-library activation.

  positional arguments:
    {live-eval,alert-issue}
      live-eval           Run live eval and activation gate.
      alert-issue         Create or update rollback alert issue.

  options:
    -h, --help            show this help message and exit
  ```
  **actual exit code:** 0
- documented exit codes:
  No explicit exit code docstring table in the file, but subcommands forward child exit codes:
  - `eval_exit in {2, 4}`: returns `eval_exit` (line 78)
  - `eval_exit == 3`: returns `eval_exit` (line 104)
  - otherwise returns `gate_exit` (line 105)
  - `create_issue()` / `comment_issue()` returns subprocess returncode (`0` on success, non-zero on `gh` error) — lines 173, 190
  Actual exit paths:
  - `sys.exit(main())` — scripts/eval/software_engineering_library_activation_ci.py:220
  - `return eval_exit` — scripts/eval/software_engineering_library_activation_ci.py:78
  - `return eval_exit` — scripts/eval/software_engineering_library_activation_ci.py:80
  - `return eval_exit` — scripts/eval/software_engineering_library_activation_ci.py:104
  - `return gate_exit` — scripts/eval/software_engineering_library_activation_ci.py:105
  - `return run` — scripts/eval/software_engineering_library_activation_ci.py:161
  - `return run` — scripts/eval/software_engineering_library_activation_ci.py:188
  - `return comment_issue(issue_number)` — scripts/eval/software_engineering_library_activation_ci.py:196
  - `return create_issue()` — scripts/eval/software_engineering_library_activation_ci.py:197
  - `raise AssertionError(f"unhandled command: {args.command}")` — scripts/eval/software_engineering_library_activation_ci.py:216
- for validators/gates: can exit non-zero (exits with gate_exit or eval_exit, e.g. 1 on threshold failure, 2 on bad args, 3 on external API failure, 4 on missing auth). Does not fail on source repo default branch when tested via unit tests (`test_software_engineering_library_activation_gate.py::test_ci_wrapper_covers_all_moved_reference_scenarios` passed).
- does the output match what the documentation claims? yes, provides CI CLI entry point for live-eval and alert-issue.

## Defects — required
none

## Observations
- Demonstrates thorough defensive argument validation in `_numeric_or`: enforces that `GITHUB_RUN_ID` and GitHub issue numbers contain only ASCII decimal digits before forwarding them into subprocess `argv`, noting that `"\u0661\u0662\u0663".isdigit()` evaluates to `True` in Python and could introduce unexpected tokens to downstream processes.
- Uses temporary files inside `tempfile.TemporaryDirectory()` for issue bodies to prevent leaving transient markdown files in the repository working tree.

## Context cost
7193 bytes (221 lines), approximately 1800 tokens. When following invoked scripts (`eval-rule-activation.py` at 110937 bytes and `software_engineering_library_activation_gate.py` at 8686 bytes), transitive context is ~126KB (~31500 tokens).
