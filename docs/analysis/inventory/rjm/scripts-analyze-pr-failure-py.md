---
package: rjm
path: scripts/analyze_pr_failure.py
type: script
bytes: 13970
unit: inv-rjm-196
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/analyze_pr_failure.py

## Purpose — required, verbatim
> "Analyze a GitHub Pull Request for retrospective data gathering." — scripts/analyze_pr_failure.py:2

## Design intent — required
Automates extraction of structured pull request data and metrics to bootstrap Phase 0 (Data Gathering) of retrospectives. It collects PR metadata, commit counts, line diff stats, bot vs human comment distribution, file distribution across repository top-level directories, review event timeline, and linked retrospective synthesis panels, formatting output as either JSON or human-readable Markdown.

## Phase — required
rjm:retrospective

## Inputs — required
- Command-line arguments: `--pr <number>` (required), `--owner <login>`, `--repo <name>`, and `--format {json,markdown}`.
- GitHub REST API data queried via `gh` CLI (`gh repo view`, `gh pr view`, and paginated endpoints for comments, reviews, and files).
- Git repository tracking queried via `git ls-files` to locate retrospective synthesis panels matching `.agents/retrospective/*pr-<pr>*`.

## Outputs — required
- Structured PR metrics and metadata emitted to stdout in JSON or Markdown format: PR number, title, state, author, branch targets, dates, line changes, comment distribution (bot/human counts), file distribution by directory, chronological review timeline, and matching synthesis panel document paths.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `_BOT_SUFFIXES` — scripts/analyze_pr_failure.py:36 — defined here
- `_run_gh` — scripts/analyze_pr_failure.py:39 — defined here
- `_paginated_items` — scripts/analyze_pr_failure.py:52 — defined here
- `_parse_concatenated_json_arrays` — scripts/analyze_pr_failure.py:91 — defined here
- `_resolve_repo` — scripts/analyze_pr_failure.py:109 — defined here
- `_is_bot` — scripts/analyze_pr_failure.py:135 — defined here
- `fetch_pr_metadata` — scripts/analyze_pr_failure.py:141 — defined here
- `fetch_pr_comments` — scripts/analyze_pr_failure.py:177 — defined here
- `fetch_pr_reviews` — scripts/analyze_pr_failure.py:185 — defined here
- `fetch_pr_files` — scripts/analyze_pr_failure.py:193 — defined here
- `build_comment_distribution` — scripts/analyze_pr_failure.py:201 — defined here
- `build_file_distribution` — scripts/analyze_pr_failure.py:223 — defined here
- `build_review_timeline` — scripts/analyze_pr_failure.py:236 — defined here
- `find_synthesis_panels` — scripts/analyze_pr_failure.py:250 — defined here
- `analyze_pr` — scripts/analyze_pr_failure.py:276 — defined here
- `format_markdown` — scripts/analyze_pr_failure.py:310 — defined here
- `build_parser` — scripts/analyze_pr_failure.py:381 — defined here
- `main` — scripts/analyze_pr_failure.py:401 — defined here

## Structure
- Inputs: — scripts/analyze_pr_failure.py:8
- Exit codes follow ADR-035: — scripts/analyze_pr_failure.py:13

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/analyze_pr_failure.py`
- language: Python
- lines: 421
- documented invocation:
  "--pr: PR number (required)" — scripts/analyze_pr_failure.py:9
  "--owner/--repo: Repository coordinates (auto-detected from git remote)" — scripts/analyze_pr_failure.py:10
  "--format: Output format, \"json\" (default) or \"markdown\"" — scripts/analyze_pr_failure.py:11
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/analyze_pr_failure.py --help`
- abridged stdout: `usage: analyze_pr_failure.py [-h] --pr PR [--owner OWNER] ...`
- **actual exit code:** 0
- documented exit codes:
  "0 - Success" — scripts/analyze_pr_failure.py:14
  "1 - Invalid parameters / logic error" — scripts/analyze_pr_failure.py:15
  "2 - PR not found" — scripts/analyze_pr_failure.py:16
  "3 - External error (API failure)" — scripts/analyze_pr_failure.py:17
- actual exit paths in code:
  `sys.exit(3)` on API failure or malformed JSON — scripts/analyze_pr_failure.py:64,69,81,105,123,126,131,159,165,172
  `sys.exit(1)` on cannot detect repository — scripts/analyze_pr_failure.py:117
  `sys.exit(2)` on PR not found — scripts/analyze_pr_failure.py:157
  `return 0` on successful completion — scripts/analyze_pr_failure.py:416
  `raise SystemExit(main())` entry point — scripts/analyze_pr_failure.py:420
- for validators/gates:
  Can exit non-zero (exits 1 on missing repo detection, 2 on PR not found, 3 on API errors).
- does the output match what the documentation claims?
  Yes, extracts PR metrics and outputs JSON or Markdown adhering to documented exit code semantics.

## Defects — required
- `exit-code-mismatch` · scripts/analyze_pr_failure.py:388 · Missing `--pr` argument causes Python `argparse` to exit with code 2, colliding with documented exit code 2 reserved for "PR not found" instead of code 1 for "Invalid parameters / logic error".
- `orphan` · scripts/analyze_pr_failure.py:1 · No in-scope lifecycle command or skill calls or loads this script.

## Observations
- Resilient pagination parsing: `_paginated_items` (lines 52-89) and `_parse_concatenated_json_arrays` (lines 91-107) handle multi-page JSON responses where `gh api --paginate` concatenates multiple JSON arrays without top-level wrapping.
- Author classification: uses `_BOT_SUFFIXES` (`("[bot]", "-bot")`, line 36) to categorize GitHub comment authors into bot vs human counts.

## Context cost
File size: 13,970 bytes (421 lines). Standalone executable script with no internal project dependencies (~3,500 tokens).
