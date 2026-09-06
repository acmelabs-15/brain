---
package: rjm
path: scripts/workflows/determine_should_run_from_filters.py
type: script
bytes: 4199
unit: inv-rjm-311
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflows/determine_should_run_from_filters.py, sha256: a6f201bd6a65cb7033d31e82c0e14b5cb9a30fafdd98006a42e15754c40bdb26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflows/determine_should_run_from_filters.py

## Purpose — required, verbatim
> "Write a GitHub Actions should-run output from dorny/paths-filter results." — scripts/workflows/determine_should_run_from_filters.py:2

## Design intent — required
Controls whether gated GitHub Actions CI/CD jobs execute based on `dorny/paths-filter` outputs and event triggers. It resolves a subtle false-green vulnerability where path filters on whole-tree checks caused jobs to be skipped and reported successful without actually evaluating repository state (documented incident on 2026-08-02 where `main` breached instruction ceilings unnoticed). It guarantees unconditional execution on `workflow_dispatch` and specified events like `merge_group` while honoring path filters for diff-scoped pull requests.

## Phase — required
rjm:devops

## Inputs — required
Environment variables:
- `OUTPUT_NAME` (required; output variable name)
- `GITHUB_OUTPUT` (required; path to GitHub Actions step output file)
- `GH_EVENT_NAME` (optional; triggering event name)
- `FILTER_KEYS` (optional; comma-separated filter output keys to evaluate)
- `FILTER_OUTPUTS` (optional; JSON string mapping filter keys to boolean strings)
- `FORCE_RUN_EVENTS` (optional; comma-separated events that bypass path filtering)

## Outputs — required
Appends `<OUTPUT_NAME>=true\n` or `<OUTPUT_NAME>=false\n` to the file indicated by `$GITHUB_OUTPUT`.

## Invokes — required
none

## Invoked by — required
- file .github/workflows/validate-paths.yml — .github/workflows/validate-paths.yml:61
- file .github/workflows/validate-generated-agents.yml — .github/workflows/validate-generated-agents.yml:83
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:117

## Concepts named — required, verbatim
- `should_run` — scripts/workflows/determine_should_run_from_filters.py:16 — defined here
- `parse_filter_keys` — scripts/workflows/determine_should_run_from_filters.py:55 — defined here
- `parse_force_run_events` — scripts/workflows/determine_should_run_from_filters.py:59 — defined here
- `parse_filter_outputs` — scripts/workflows/determine_should_run_from_filters.py:65 — defined here
- `write_output` — scripts/workflows/determine_should_run_from_filters.py:76 — defined here
- `main` — scripts/workflows/determine_should_run_from_filters.py:85 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflows/determine_should_run_from_filters.py`, Python 3, 103 lines
- documented invocation:
  > "        run: python3 scripts/workflows/determine_should_run_from_filters.py" — .github/workflows/validate-paths.yml:61
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command 1: `GH_EVENT_NAME="pull_request" FILTER_OUTPUTS='{"paths":"true"}' FILTER_KEYS="paths" FORCE_RUN_EVENTS="merge_group" OUTPUT_NAME="should-run-validation" GITHUB_OUTPUT="/tmp/test_gh_output_run.txt" python3 scripts/workflows/determine_should_run_from_filters.py`
  Stdout: (empty; wrote `should-run-validation=true` to file)
  Actual exit code: 0
  Command 2 (error case): `python3 scripts/workflows/determine_should_run_from_filters.py`
  Stderr: `error: 'OUTPUT_NAME'`
  Actual exit code: 2
- documented exit codes vs. actual exit paths in code:
  Documented: none in docstring.
  Actual exit paths:
  `sys.exit(main())` at line 102.
  `main()` returns 0 at line 98 on normal execution.
  `main()` returns 2 at line 97 upon catching `(KeyError, OSError, ValueError, json.JSONDecodeError)` at line 95.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes; exits 2 when required environment variables (`OUTPUT_NAME`, `GITHUB_OUTPUT`) are unset or malformed, or if JSON decoding fails.
- does the output match what the documentation claims?
  Yes; writes standard Actions step outputs matching documented workflow usage.

## Defects — required
none

## Observations
Lines 22–49 contain an exemplary forensic post-mortem from 2026-08-02 explaining why whole-tree checks must not use path filters, and why `merge_group` synthetic commits must always force full validation runs.

## Context cost
4199 bytes (~1050 tokens). Standard library only.
