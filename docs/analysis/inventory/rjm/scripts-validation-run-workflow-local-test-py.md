---
package: rjm
path: scripts/validation/run_workflow_local_test.py
type: script
bytes: 62233
unit: inv-rjm-303
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/run_workflow_local_test.py

## Purpose — required, verbatim
> "Local-run gate for changed GitHub Actions workflows (ADR-006 module)." — scripts/validation/run_workflow_local_test.py:2

## Design intent — required
Enforces a multi-stage local pre-flight gate (static analysis via actionlint, dry-run job graph planning via `gh act -n`, and containerized execution via `gh act`) for any changed GitHub Actions workflow files under `.github/workflows/` prior to pushing commits. Without this gate, workflow regressions, syntax errors, and runtime action failures would only be detected after pushing to GitHub, polluting CI run histories and breaking pull request automation. The gate features robust environment awareness: it downgrades tool unavailability to a non-blocking warning inside managed remote containers (such as GitHub Codespaces or Claude web containers) while strictly failing closed in CI and local developer workstations, intelligently skips act execution when workflow-referenced secrets are absent locally, and automatically isolates or retries transient Docker contention issues without masking genuine workflow defects.

## Phase — required
none

## Inputs — required
- CLI arguments parsed via `argparse` (`_build_parser`):
  - `--files`: "Workflow file paths to test (relative to repo root)." — scripts/validation/run_workflow_local_test.py:1464
  - `--repo-root`: "Override repo root (default: derived from script path)." — scripts/validation/run_workflow_local_test.py:1470
  - `--no-full`: "Skip the full gh act execution stage (actionlint + dry-run only)." — scripts/validation/run_workflow_local_test.py:1475
  - `--format`: "choices=(\"text\", \"json\")" — scripts/validation/run_workflow_local_test.py:1477
- Environment variables:
  - `SKIP_WORKFLOW_LOCAL_TEST`: boolean bypass switch (`_BYPASS_ENV`) — scripts/validation/run_workflow_local_test.py:82
  - `CLAUDECODE` and `CODESPACES`: managed remote container markers (`_REMOTE_CONTAINER_ENV_MARKERS`) — scripts/validation/run_workflow_local_test.py:97
  - `CI`: continuous integration environment marker (`_CI_ENV`) — scripts/validation/run_workflow_local_test.py:98
  - `SHELLCHECK_OPTS`: operator options merged with `--severity=warning` floor — scripts/validation/run_workflow_local_test.py:142
  - `ACT`: marker identifying execution inside act — scripts/validation/run_workflow_local_test.py:1318
- Filesystem and repository artifacts:
  - Target workflow files matching prefix ".github/workflows/" — scripts/validation/run_workflow_local_test.py:104 and suffixes "(\".yml\", \".yaml\")" — scripts/validation/run_workflow_local_test.py:105
  - Optional local `.secrets` dotenv file at repository root — scripts/validation/run_workflow_local_test.py:421
  - Git linked worktree pointer file at `.git` containing "gitdir:" — scripts/validation/run_workflow_local_test.py:325

## Outputs — required
- Exit codes per ADR-035 contract:
  - `0` — "0 - all stages passed (or no workflow files, or bypassed)" — scripts/validation/run_workflow_local_test.py:52
  - `1` — "1 - a stage ran and failed (block the push)" — scripts/validation/run_workflow_local_test.py:53
  - `2` — "2 - configuration error (bad args, repo root absent)" — scripts/validation/run_workflow_local_test.py:54
  - `3` — "3 - a required tool is unavailable (actionlint, gh act, or Docker)." — scripts/validation/run_workflow_local_test.py:55
  - `4` — "4 - unrunnable locally: actionlint passed but every changed workflow" — scripts/validation/run_workflow_local_test.py:59
- Formatted output streams:
  - Text format reporting status summaries via `_format_text`: "workflow-local-test: OK" — scripts/validation/run_workflow_local_test.py:1417 or "workflow-local-test: FAIL" — scripts/validation/run_workflow_local_test.py:1428
  - JSON format (`--format json`) serializing report dictionary via `_format_json`: "exit_code" — scripts/validation/run_workflow_local_test.py:1441 and "stages" — scripts/validation/run_workflow_local_test.py:1446
- Test artifacts when executing local pytest fallback:
  - Coverage and JUnit XML artifacts written into temporary run directory: "COVERAGE_FILE" — scripts/validation/run_workflow_local_test.py:611 and "--junitxml=" — scripts/validation/run_workflow_local_test.py:605

## Invokes — required
- script scripts/ci/run_pytest_selected.py — scripts/validation/run_workflow_local_test.py:600

## Invoked by — required
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:7677
- script scripts/validation/checks_plugin.py — scripts/validation/checks_plugin.py:352
- config lefthook.yml — lefthook.yml:169

## Concepts named — required, verbatim
- `ADR-006` — scripts/validation/run_workflow_local_test.py:2 — used here
- `pre-push hook` — scripts/validation/run_workflow_local_test.py:5 — used here
- `pre-PR runner` — scripts/validation/run_workflow_local_test.py:6 — used here
- `actionlint` — scripts/validation/run_workflow_local_test.py:12 — used here
- `gh act` — scripts/validation/run_workflow_local_test.py:13 — used here
- `Docker` — scripts/validation/run_workflow_local_test.py:14 — used here
- `SKIP_WORKFLOW_LOCAL_TEST` — scripts/validation/run_workflow_local_test.py:25 — used here
- `managed remote container` — scripts/validation/run_workflow_local_test.py:27 — used here
- `Claude web container` — scripts/validation/run_workflow_local_test.py:29 — used here
- `GitHub Codespace` — scripts/validation/run_workflow_local_test.py:29 — used here
- `ADR-035` — scripts/validation/run_workflow_local_test.py:49 — used here
- `AGENTS.md` — scripts/validation/run_workflow_local_test.py:49 — used here
- `CLAUDECODE` — scripts/validation/run_workflow_local_test.py:97 — used here
- `CODESPACES` — scripts/validation/run_workflow_local_test.py:97 — used here
- `CI` — scripts/validation/run_workflow_local_test.py:98 — used here
- `SHELLCHECK_OPTS` — scripts/validation/run_workflow_local_test.py:138 — used here
- `StageResult` — scripts/validation/run_workflow_local_test.py:150 — defined here
- `Report` — scripts/validation/run_workflow_local_test.py:159 — defined here
- `_killpg_safe` — scripts/validation/run_workflow_local_test.py:224 — defined here
- `_read_worktree_gitdir` — scripts/validation/run_workflow_local_test.py:308 — defined here
- `_select_workflow_files` — scripts/validation/run_workflow_local_test.py:377 — defined here
- `.secrets` — scripts/validation/run_workflow_local_test.py:421 — used here
- `GITHUB_TOKEN` — scripts/validation/run_workflow_local_test.py:422 — used here
- `_actionlint_stage` — scripts/validation/run_workflow_local_test.py:483 — defined here
- `_local_pytest_stage` — scripts/validation/run_workflow_local_test.py:619 — defined here
- `dorny/paths-filter` — scripts/validation/run_workflow_local_test.py:684 — used here
- `GH_TOKEN` — scripts/validation/run_workflow_local_test.py:780 — used here
- `vanilla guard` — scripts/validation/run_workflow_local_test.py:873 — used here
- `_act_dryrun_stage` — scripts/validation/run_workflow_local_test.py:1186 — defined here
- `_act_full_stage` — scripts/validation/run_workflow_local_test.py:1190 — defined here
- `_tool_gap_report` — scripts/validation/run_workflow_local_test.py:1197 — defined here
- `run_local_test` — scripts/validation/run_workflow_local_test.py:1229 — defined here

## Structure
none (python script; functions and definitions: `_REPO_ROOT`, `_BYPASS_ENV`, `_TRUTHY`, `_REMOTE_CONTAINER_ENV_MARKERS`, `_CI_ENV`, `_WORKFLOW_PREFIX`, `_WORKFLOW_SUFFIXES`, `_ACTIONLINT_TIMEOUT`, `_ACT_FULL_TIMEOUT`, `_ACT_DRYRUN_TIMEOUT`, `_PYTEST_WORKFLOW`, `_SHELLCHECK_SEVERITY`, `_shellcheck_env`, `StageResult`, `Report`, `_have`, `_docker_ready`, `_gh_act_available`, `_env_truthy`, `_is_remote_container`, `_decode_partial`, `_killpg_safe`, `_run`, `_read_worktree_gitdir`, `_unsupported_worktree_gitdir_error`, `_act_env`, `_select_workflow_files`, `_EXPR_RE`, `_SECRET_REF_RE`, `_ACT_SECRET_FILE`, `_ACT_BUILTIN_SECRETS`, `_has_secret_value`, `_act_secret_file_keys`, `_referenced_secrets`, `_missing_secrets`, `_actionlint_stage`, `_ACT_EVENT_PREFERENCE`, `_workflow_events`, `_workflow_jobs`, `_pytest_matrix_entries`, `_local_pytest_commands`, `_local_pytest_stage`, `_select_act_event`, `_GIT_REPO_MISSING_PATTERN`, `_ACT_GIT_PROCESS_ANNOTATION`, `_ACT_PATHS_FILTER_BASE_PATTERN`, `_ACT_ACTION_CACHE_COPY_PATTERN`, `_ACT_PR_CONTEXT_MISSING_PATTERN`, `_ACT_PR_CONTEXT_EMPTY_ENV_PATTERN`, `_ACT_WRAPPER_ANNOTATION_PATTERN`, `_ACT_SERVER_PORT_BIND_PATTERN`, `_ACT_ARTIFACT_SERVICE_PATTERN`, `_ACT_NO_REPO_CONTEXT_PATTERN`, `_ACT_LIMITATION_RULES`, `_ACT_TIMEOUT_MARKER`, `_ACT_CLONE_MARKER`, `_ACT_ERROR_ANNOTATION`, `_ACT_LOG_SCOPE`, `_ACT_AGGREGATOR_RESULT_ANNOTATION`, `_normalized_act_label`, `_act_scope_label`, `_git_annotation_has_missing_repository_signature`, `_explained_act_limitation_labels`, `_is_aggregator_cascade_annotation`, `_unexplained_error_annotations`, `_act_limitation_hint`, `_stage_timeout_hint`, `_with_timeout_hint`, `_ACT_CONTENTION_PATTERN`, `_is_act_contention_failure`, `_run_act_stage`, `_act_dryrun_stage`, `_act_full_stage`, `_tool_gap_report`, `run_local_test`, `_format_text`, `_format_json`, `_build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/run_workflow_local_test.py`, language: Python 3, lines: 1500
- documented invocation:
  - "python3 scripts/validation/run_workflow_local_test.py --files .github/workflows/x.yml" — scripts/validation/run_workflow_local_test.py:45
  - "python3 scripts/validation/run_workflow_local_test.py --files x.yml --no-full" — scripts/validation/run_workflow_local_test.py:46
  - "python3 scripts/validation/run_workflow_local_test.py --files x.yml --format json" — scripts/validation/run_workflow_local_test.py:47
- **executed:** yes
- actual command run: `python3 scripts/validation/run_workflow_local_test.py --files .github/workflows/x.yml`
  abridged stdout:
  ```text
  workflow-local-test: TOOL UNAVAILABLE
    actionlint not installed. Install it (https://github.com/rhysd/actionlint) or set SKIP_WORKFLOW_LOCAL_TEST=true to bypass for an unrunnable workflow.
  ```
  **actual exit code**: 3
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - all stages passed (or no workflow files, or bypassed)" — scripts/validation/run_workflow_local_test.py:52
  - "1 - a stage ran and failed (block the push)" — scripts/validation/run_workflow_local_test.py:53
  - "2 - configuration error (bad args, repo root absent)" — scripts/validation/run_workflow_local_test.py:54
  - "3 - a required tool is unavailable (actionlint, gh act, or Docker)." — scripts/validation/run_workflow_local_test.py:55
  - "4 - unrunnable locally: actionlint passed but every changed workflow" — scripts/validation/run_workflow_local_test.py:59
  Actual exit paths in code:
  - `sys.exit(main())` — scripts/validation/run_workflow_local_test.py:1499
  - Exit 0: `Report(exit_code=0, bypassed=True, ...)` on bypass env (line 1243), `Report(exit_code=0, note="no workflow files to test")` (line 1259), `report.exit_code = 0` on remote container degrade (line 1216), and default clean run completion (line 1398).
  - Exit 1: `report.exit_code = 1` on actionlint stage failure (line 1302), local pytest fallback failure (line 1332), act dry-run failure (line 1366), or act full-run failure (line 1385).
  - Exit 2: `return 2` on repo_root not found in `main` (line 1486), `Report(exit_code=2, ...)` in `run_local_test` (line 1253), or on path traversal error (line 1257).
  - Exit 3: `report.exit_code = 3` in `_tool_gap_report` when tool is missing outside container (line 1224), when nested act execution is attempted on non-pytest workflow (line 1320), or on unsupported worktree gitdir error (line 1358).
  - Exit 4: `report.exit_code = 4` when all changed workflows reference locally absent secrets (line 1309).
- for validators/gates: can it exit non-zero? yes, exits 1 on stage failure, 2 on config error, 3 on tool unavailability, 4 on absent secrets. Does it fail on the source repo's own default branch? Running with `--files` and no arguments or with bypass exits 0; running with workflow files on a workstation without actionlint exits 3 (`TOOL UNAVAILABLE`).
- does the output match what the documentation claims? Yes, matches the documented exit codes, bypass semantics, container degrade behavior, and formatted output structure.

## Defects — required
- `doc-drift` · scripts/validation/run_workflow_local_test.py:55 · Docstring specifies exit code 3 only for unavailable external tools (actionlint, gh act, Docker), but lines 1320 and 1358 also return exit code 3 for nested act execution constraints and linked git worktree resolution failures.

## Observations
- Robust process-group management: `_run` uses `start_new_session=True` with `_killpg_safe` to send `SIGTERM` followed by `SIGKILL` to entire process groups upon timeout, preventing orphaned background processes (such as `gh-act`'s artifact server on port 34567) from blocking future runs.
- Container-aware degradation: detects managed remote environments (`CLAUDECODE`, `CODESPACES`) and converts tool unavailability (actionlint, gh, Docker) from blocking failures (exit 3) into non-blocking warnings (exit 0, `degraded=True`), while ensuring `CI` truthy env overrides this behavior to preserve hard gating in CI.
- Sophisticated error attribution: inspects act execution output against a rich library of known act limitations (`_ACT_LIMITATION_RULES`, e.g., missing `.git` mounts, missing `repository.default_branch` in synthetic payloads, unpopulated `pull_request` context env vars, and artifact server schema mismatches), downgrading attributed failures to warnings while strictly failing on unexplained `::error::` annotations.

## Context cost
62233 bytes (~15558 tokens). Standalone Python script importing standard library modules, with optional conditional imports for `yaml`.
