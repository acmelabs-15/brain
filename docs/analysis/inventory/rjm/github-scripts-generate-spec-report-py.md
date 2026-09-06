---
package: rjm
path: .github/scripts/generate_spec_report.py
type: script
bytes: 8350
unit: inv-rjm-183
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/generate_spec_report.py

## Purpose — required, verbatim
> "Generate the spec-to-implementation validation report." — .github/scripts/generate_spec_report.py:2

## Design intent — required
`generate_spec_report.py` formats and generates the spec-to-implementation validation markdown report within CI workflow runs (`ai-spec-validation.yml`). Without it, developers and reviewers would lack automated visibility into whether pull request changes map to formal specification requirements and linked issues, requiring manual auditing of PR descriptions and commit diffs against requirements documents. It synthesizes inputs from upstream traceability and completeness validation steps into a unified GitHub pull request comment and step summary, clearly distinguishing between PRs that implement formal specifications (`PASS`/`WARN`/`FAIL`) and PRs without spec references (providing structured guidance on required spec annotations based on PR type).

## Phase — required
rjm:spec

## Inputs — required
- CLI options and arguments:
  - `--has-specs`: "Whether PR references specs ('true' or other)" — .github/scripts/generate_spec_report.py:50 (default: env `HAS_SPECS` — .github/scripts/generate_spec_report.py:49)
  - `--spec-refs`: "Space-separated spec reference IDs" — .github/scripts/generate_spec_report.py:55 (default: env `SPEC_REFS` — .github/scripts/generate_spec_report.py:54)
  - `--issue-refs`: "Space-separated issue references" — .github/scripts/generate_spec_report.py:60 (default: env `ISSUE_REFS` — .github/scripts/generate_spec_report.py:59)
  - `--trace-verdict`: "Verdict from traceability check" — .github/scripts/generate_spec_report.py:65 (default: env `TRACE_VERDICT` — .github/scripts/generate_spec_report.py:64)
  - `--trace-findings`: "Findings from traceability check" — .github/scripts/generate_spec_report.py:70 (default: env `TRACE_FINDINGS` — .github/scripts/generate_spec_report.py:69)
  - `--completeness-verdict`: "Verdict from completeness check" — .github/scripts/generate_spec_report.py:75 (default: env `COMPLETENESS_VERDICT` — .github/scripts/generate_spec_report.py:74)
  - `--completeness-findings`: "Findings from completeness check" — .github/scripts/generate_spec_report.py:80 (default: env `COMPLETENESS_FINDINGS` — .github/scripts/generate_spec_report.py:79)
  - `--github-repository`: "Owner/repo slug" — .github/scripts/generate_spec_report.py:85 (default: env `GITHUB_REPOSITORY` — .github/scripts/generate_spec_report.py:84)
  - `--server-url`: "GitHub server URL" — .github/scripts/generate_spec_report.py:90 (default: env `SERVER_URL` — .github/scripts/generate_spec_report.py:89)
  - `--run-id`: "Current workflow run ID" — .github/scripts/generate_spec_report.py:95 (default: env `RUN_ID` — .github/scripts/generate_spec_report.py:94)
  - `--event-name`: "Triggering event name" — .github/scripts/generate_spec_report.py:100 (default: env `EVENT_NAME` — .github/scripts/generate_spec_report.py:99)
  - `--ref-name`: "Git ref name" — .github/scripts/generate_spec_report.py:105 (default: env `REF_NAME` — .github/scripts/generate_spec_report.py:104)
- Environment variable `GITHUB_OUTPUT`: "Path to GitHub Actions output file" — .github/scripts/generate_spec_report.py:17
- Environment variable `GITHUB_WORKSPACE`: "Workspace root (for package imports)" — .github/scripts/generate_spec_report.py:18

## Outputs — required
- Markdown report file `spec-validation-report.md` written to `report_dir` (initialized by `initialize_ai_review()`, defaulting to `$AI_REVIEW_DIR` or `<temp>/ai-review`): .github/scripts/generate_spec_report.py:238, 280-281
- GitHub Actions step output `report_file` written to `$GITHUB_OUTPUT` via `write_output("report_file", report_file)`: .github/scripts/generate_spec_report.py:283
- Process exit code 0: .github/scripts/generate_spec_report.py:284

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `HAS_SPECS` — .github/scripts/generate_spec_report.py:5 — used here
- `SPEC_REFS` — .github/scripts/generate_spec_report.py:6 — used here
- `ISSUE_REFS` — .github/scripts/generate_spec_report.py:7 — used here
- `TRACE_VERDICT` — .github/scripts/generate_spec_report.py:8 — used here
- `TRACE_FINDINGS` — .github/scripts/generate_spec_report.py:9 — used here
- `COMPLETENESS_VERDICT` — .github/scripts/generate_spec_report.py:10 — used here
- `COMPLETENESS_FINDINGS` — .github/scripts/generate_spec_report.py:11 — used here
- `GITHUB_REPOSITORY` — .github/scripts/generate_spec_report.py:12 — used here
- `SERVER_URL` — .github/scripts/generate_spec_report.py:13 — used here
- `RUN_ID` — .github/scripts/generate_spec_report.py:14 — used here
- `EVENT_NAME` — .github/scripts/generate_spec_report.py:15 — used here
- `REF_NAME` — .github/scripts/generate_spec_report.py:16 — used here
- `GITHUB_OUTPUT` — .github/scripts/generate_spec_report.py:17 — used here
- `GITHUB_WORKSPACE` — .github/scripts/generate_spec_report.py:18 — used here
- `get_verdict_alert_type` — .github/scripts/generate_spec_report.py:34 — used here
- `get_verdict_emoji` — .github/scripts/generate_spec_report.py:35 — used here
- `initialize_ai_review` — .github/scripts/generate_spec_report.py:36 — used here
- `spec_validation_failed` — .github/scripts/generate_spec_report.py:37 — used here
- `write_output` — .github/scripts/generate_spec_report.py:38 — used here
- `build_parser` — .github/scripts/generate_spec_report.py:42 — defined here
- `_build_no_specs_report` — .github/scripts/generate_spec_report.py:110 — defined here
- `AI-SPEC-VALIDATION` — .github/scripts/generate_spec_report.py:113 — used here
- `Spec-to-Implementation Validation` — .github/scripts/generate_spec_report.py:115 — used here
- `REQ-*` — .github/scripts/generate_spec_report.py:120 — used here
- `DESIGN-*` — .github/scripts/generate_spec_report.py:120 — used here
- `TASK-*` — .github/scripts/generate_spec_report.py:120 — used here
- `.agents/specs/requirements/...` — .github/scripts/generate_spec_report.py:131 — used here
- `AI Spec Validator` — .github/scripts/generate_spec_report.py:149 — used here
- `_build_full_report` — .github/scripts/generate_spec_report.py:152 — defined here
- `Requirements Traceability` — .github/scripts/generate_spec_report.py:184 — used here
- `Implementation Completeness` — .github/scripts/generate_spec_report.py:185 — used here
- `Validation Summary` — .github/scripts/generate_spec_report.py:189 — used here
- `Spec References` — .github/scripts/generate_spec_report.py:196 — used here
- `Run Details` — .github/scripts/generate_spec_report.py:220 — used here
- `main` — .github/scripts/generate_spec_report.py:232 — defined here
- `spec-validation-report.md` — .github/scripts/generate_spec_report.py:238 — used here
- `report_file` — .github/scripts/generate_spec_report.py:283 — used here

## Structure
- Shebang and module docstring — .github/scripts/generate_spec_report.py:1
- Imports and workspace sys.path setup — .github/scripts/generate_spec_report.py:21
- build_parser — .github/scripts/generate_spec_report.py:42
- _build_no_specs_report — .github/scripts/generate_spec_report.py:110
- _build_full_report — .github/scripts/generate_spec_report.py:152
- main — .github/scripts/generate_spec_report.py:232
- Script entry point __main__ — .github/scripts/generate_spec_report.py:287

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/generate_spec_report.py`
- language: Python (python3)
- lines: 289
- documented invocation:
  - "#!/usr/bin/env python3" — .github/scripts/generate_spec_report.py:1 (shebang; no CLI invocation example in file docstring)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/generate_spec_report.py --help`
- abridged stdout:
  ```text
  usage: generate_spec_report.py [-h] [--has-specs HAS_SPECS]
                                 [--spec-refs SPEC_REFS]
                                 [--issue-refs ISSUE_REFS]
                                 [--trace-verdict TRACE_VERDICT]
                                 [--trace-findings TRACE_FINDINGS]
                                 [--completeness-verdict COMPLETENESS_VERDICT]
                                 [--completeness-findings COMPLETENESS_FINDINGS]
                                 [--github-repository GITHUB_REPOSITORY]
                                 [--server-url SERVER_URL] [--run-id RUN_ID]
                                 [--event-name EVENT_NAME] [--ref-name REF_NAME]

  Generate the spec-to-implementation validation report.
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: none (no exit code section in script docstring)
  - Actual exit paths:
    - `return 0` — .github/scripts/generate_spec_report.py:284 (main execution succeeds, writing report markdown file and exporting `report_file`)
    - `sys.exit(main())` — .github/scripts/generate_spec_report.py:288
    - Standard `argparse` exits (exit 0 on `-h/--help`, exit 2 on unknown arguments)
- for validators/gates: not a blocking gate; report generator for pull request comments and GitHub Actions step summaries. Exits 0 on all valid input configurations regardless of validation verdict; failure gating is delegated to downstream step `.github/scripts/check_spec_failures.py`.
- does the output match what the documentation claims: yes (generates markdown report with validation summary, alert callouts, spec and issue references, and collapsible findings details matching docstring).

## Defects — required
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/generate_spec_report.py`; it is invoked only by workflow `.github/workflows/ai-spec-validation.yml:212`, which is outside the lifecycle manifest scope.
- `missing-path`: In `.github/scripts/generate_spec_report.py:131`, the help table cites `.agents/specs/requirements/...` with an ellipsis placeholder rather than pointing to a concrete specification file.

## Observations
- Decouples report formatting from failure enforcement: `generate_spec_report.py` formats the report and always exits 0 (allowing subsequent comment-posting and step-summary steps to run even on validation failures), while `.github/scripts/check_spec_failures.py` is invoked as the final gate to fail the CI job if `spec_validation_failed()` returns True.
- Follows the stdlib-only rule documented in `.github/instructions/ci-scripts.instructions.md:43` for scripts run with bare `python3` in GitHub Actions before environment setup.
- Uses `AI-SPEC-VALIDATION` HTML marker for idempotency when updating PR comments.

## Context cost
8,350 bytes (approx. 2,088 tokens).
