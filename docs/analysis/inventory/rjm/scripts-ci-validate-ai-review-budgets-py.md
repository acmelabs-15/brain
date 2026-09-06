---
package: rjm
path: scripts/ci/validate_ai_review_budgets.py
type: script
bytes: 4695
unit: inv-rjm-209
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/validate_ai_review_budgets.py

## Purpose — required, verbatim
> "Validate workflow wall budgets for direct ai-review action steps." — scripts/ci/validate_ai_review_budgets.py:2

## Design intent — required
Enforces minimum wall-clock timeout allocations for GitHub Actions workflow jobs that include direct `./.github/actions/ai-review` steps. Because AI review actions involve LLM inference, potential context retries, and result finalization, an under-budgeted job timeout could abort the action mid-flight before retries or failure logs are recorded. The validator calculates required job timeout from individual step timeouts, context retry reserves (210s), model process minimums (300s), finalization reserves (60s), and default overhead (300s), ensuring jobs provide sufficient runway for the action to complete or fail cleanly.

## Phase — required
none

## Inputs — required
- CLI argument `--repo-root` (repository root directory; defaults to cwd)
- Workflow YAML files discovered under `*.yml` — scripts/ci/validate_ai_review_budgets.py:126
- Workflow job configurations and step `with.timeout-minutes` properties for `./.github/actions/ai-review` — scripts/ci/validate_ai_review_budgets.py:53

## Outputs — required
- GitHub Actions workflow error annotations `::error::...` on stderr when workflow jobs have insufficient timeouts
- Confirmation message `AI review workflow budgets OK.` on stdout when all inspected workflows pass
- Process exit codes: 0 (OK), 1 (regression / insufficient timeout), 2 (config / parse error) — scripts/ci/validate_ai_review_budgets.py:15-17

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/ci/validate_ai_review_budgets.py:15 — defined here
- `EXIT_REGRESSION` — scripts/ci/validate_ai_review_budgets.py:16 — defined here
- `EXIT_CONFIG` — scripts/ci/validate_ai_review_budgets.py:17 — defined here
- `DEFAULT_OVERHEAD_SECONDS` — scripts/ci/validate_ai_review_budgets.py:19 — defined here
- `DEFAULT_AI_REVIEW_TIMEOUT_MINUTES` — scripts/ci/validate_ai_review_budgets.py:20 — defined here
- `CONTEXT_RETRY_BUDGET_SECONDS` — scripts/ci/validate_ai_review_budgets.py:21 — defined here
- `MINIMUM_MODEL_PROCESS_BUDGET_SECONDS` — scripts/ci/validate_ai_review_budgets.py:22 — defined here
- `FINALIZATION_RESERVE_SECONDS` — scripts/ci/validate_ai_review_budgets.py:23 — defined here
- `BudgetFinding` — scripts/ci/validate_ai_review_budgets.py:27 — defined here
- `ai-review` — scripts/ci/validate_ai_review_budgets.py:2 — used here
- `_as_int` — scripts/ci/validate_ai_review_budgets.py:42 — defined here
- `_uses_ai_review` — scripts/ci/validate_ai_review_budgets.py:52 — defined here
- `_step_timeout` — scripts/ci/validate_ai_review_budgets.py:56 — defined here
- `required_job_timeout` — scripts/ci/validate_ai_review_budgets.py:65 — defined here
- `ai_review_step_timeouts` — scripts/ci/validate_ai_review_budgets.py:75 — defined here
- `budget_finding` — scripts/ci/validate_ai_review_budgets.py:88 — defined here
- `inspect_workflow` — scripts/ci/validate_ai_review_budgets.py:103 — defined here
- `iter_workflows` — scripts/ci/validate_ai_review_budgets.py:124 — defined here
- `build_parser` — scripts/ci/validate_ai_review_budgets.py:129 — defined here
- `main` — scripts/ci/validate_ai_review_budgets.py:135 — defined here

## Structure
none (python script; dataclass and functions: BudgetFinding, _as_int, _uses_ai_review, _step_timeout, required_job_timeout, ai_review_step_timeouts, budget_finding, inspect_workflow, iter_workflows, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/validate_ai_review_budgets.py`, language: Python 3, lines: 157
- documented invocation:
  "Validate workflow wall budgets for direct ai-review action steps." — scripts/ci/validate_ai_review_budgets.py:2
  (CLI command: `python3 scripts/ci/validate_ai_review_budgets.py [--repo-root REPO_ROOT]`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/validate_ai_review_budgets.py`
  abridged stdout: `AI review workflow budgets OK.`
  actual exit code: 0
- documented exit codes:
  `EXIT_OK = 0` — scripts/ci/validate_ai_review_budgets.py:15
  `EXIT_REGRESSION = 1` — scripts/ci/validate_ai_review_budgets.py:16
  `EXIT_CONFIG = 2` — scripts/ci/validate_ai_review_budgets.py:17
  vs. actual exit paths in code:
  `scripts/ci/validate_ai_review_budgets.py:145` (`return EXIT_CONFIG` on workflow YAML parse exception)
  `scripts/ci/validate_ai_review_budgets.py:150` (`return EXIT_REGRESSION` when budget findings detected)
  `scripts/ci/validate_ai_review_budgets.py:152` (`return EXIT_OK` when all budgets pass)
  `scripts/ci/validate_ai_review_budgets.py:156` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 1 on budget regression, 2 on YAML parsing or config error). does it fail on the source repo's own default branch? no (passes with exit code 0).
- does the output match what the documentation claims? yes (outputs confirmation message and exits 0 on valid workflows)

## Defects — required
- `orphan` — `scripts/ci/validate_ai_review_budgets.py:1` — script is not invoked by any in-scope lifecycle file in the manifest reachability graph.

## Observations
- Incorporates multiple timeout safety buffers into job timeout calculation: 210s context retry allowance (`CONTEXT_RETRY_BUDGET_SECONDS`), 60s finalization reserve (`FINALIZATION_RESERVE_SECONDS`), and 300s default overhead (`DEFAULT_OVERHEAD_SECONDS`).
- Automatically enforces a 300-second minimum process budget (`MINIMUM_MODEL_PROCESS_BUDGET_SECONDS`), even if a workflow step declares a shorter timeout.
- Uses GitHub Actions workflow command syntax (`::error::...`) on stderr to directly surface budget calculation failures in GitHub PR checks.

## Context cost
4,695 bytes (~1,174 tokens). Depends on external package `yaml` (PyYAML); loads no additional project modules during execution.
