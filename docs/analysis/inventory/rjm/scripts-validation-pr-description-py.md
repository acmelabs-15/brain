---
package: rjm
path: scripts/validation/pr_description.py
type: script
bytes: 57443
unit: inv-rjm-300
in_scope_via: docs/technical-guardrails.md
aliases: []
memo_inputs:
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/pr_description.py

## Purpose — required, verbatim
> "Validate PR description matches actual code changes." — scripts/validation/pr_description.py:2

## Design intent — required
Solves the problem of drift and dishonesty between a pull request's textual description and the actual code changes contained in its git diff. In autonomous agent execution, agents frequently claim changes they never made (e.g. hallucinating modifications to files, referencing outdated plans, or claiming fixes) or silently omit significant modifications (such as touching core scripts, source code, or CI workflows without mentioning them in the PR body). Without this validation gate, reviewers must manually cross-examine every claimed file against the diff to catch discrepancies, and autonomous agents could merge unreviewed or hallucinated modifications unnoticed. The validator deterministically enforces this contract by extracting claimed file mentions from the PR body (while stripping contextual sections such as Test Plan, Design Decisions, and bot details), checking them against the actual diff files, blocking CI on critical mismatches unless explicitly bypassed by a human maintainer, and forbidding em/en-dashes in PR titles and descriptions to enforce project typographical rules.

## Phase — required
rjm:ship

## Inputs — required
- CLI options parsed via `build_parser`:
  - `--pr-number` (int, required or from `PR_NUMBER` env var): PR number to validate — scripts/validation/pr_description.py:1061
  - `--owner` (str, optional or from `REPO_OWNER` env var, fallback to `get_repo_info()`): Repository owner — scripts/validation/pr_description.py:1068
  - `--repo` (str, optional or from `REPO_NAME` env var, fallback to `get_repo_info()`): Repository name — scripts/validation/pr_description.py:1073
  - `--ci` (flag, optional or from `CI` env var): CI mode flag triggering non-zero exit on CRITICAL failures — scripts/validation/pr_description.py:1078
  - `--bypass-label` (str, optional or from `DESCRIPTION_VALIDATION_BYPASS_LABEL` env var, default `description-validation-bypass`): PR label suppressing non-dash CRITICAL failures — scripts/validation/pr_description.py:1084
- Environment variables:
  - `PR_NUMBER` — scripts/validation/pr_description.py:1064
  - `REPO_OWNER` — scripts/validation/pr_description.py:1070
  - `REPO_NAME` — scripts/validation/pr_description.py:1074
  - `CI` — scripts/validation/pr_description.py:1080
  - `DESCRIPTION_VALIDATION_BYPASS_LABEL` — scripts/validation/pr_description.py:1085
  - `GITHUB_STEP_SUMMARY` (optional path to CI step summary markdown file) — scripts/validation/pr_description.py:1187
  - `GITHUB_OUTPUT` (optional path to CI workflow output file) — scripts/validation/pr_description.py:1196
- Subprocess executions:
  - `git remote get-url origin` to infer repo owner and name — scripts/validation/pr_description.py:249
  - `gh api repos/{owner}/{repo}/pulls/{pr_number}` for PR title, body, and base ref — scripts/validation/pr_description.py:300
  - `gh api repos/{owner}/{repo}/pulls/{pr_number}/files --paginate` for changed files diff list — scripts/validation/pr_description.py:306
  - `gh api repos/{owner}/{repo}/issues/{pr_number}/labels --paginate` for PR labels — scripts/validation/pr_description.py:315

## Outputs — required
- Standard output printing validation results: issue summaries, critical and warning counts, and bypass notifications — scripts/validation/pr_description.py:1023, 1029, 1184
- Standard error printing fatal configuration and API error messages — scripts/validation/pr_description.py:1108, 1120
- Exit code 0 (`Success (validation passed, or warnings only)`) — scripts/validation/pr_description.py:9, 1047, 1184
- Exit code 1 (`Logic error (CRITICAL issues found, CI mode only)`) — scripts/validation/pr_description.py:10, 1043
- Exit code 2 (`Config error (missing dependency, failed to fetch PR data)`) — scripts/validation/pr_description.py:11, 1109, 1121
- File `GITHUB_STEP_SUMMARY`: appends markdown section `### PR Description Validation Bypass` with audit marker `<!-- DESCRIPTION-VALIDATION-BYPASS -->` when bypass label is used — scripts/validation/pr_description.py:1254, 1259
- File `GITHUB_OUTPUT`: appends `bypass_used=true`, `bypass_label`, and `bypass_count` workflow parameters when bypass label is used — scripts/validation/pr_description.py:1286

## Invokes — required
- script scripts.github_core.api — scripts/validation/pr_description.py:33

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:881
- doc docs/technical-guardrails.md — docs/technical-guardrails.md:33
- doc scripts/README.md — scripts/README.md:65
- script scripts/ci/map_pr_description_result.py — scripts/ci/map_pr_description_result.py:42
- script .claude/skills/github/scripts/issue/check_existing_pr_for_issue.py — .claude/skills/github/scripts/issue/check_existing_pr_for_issue.py:69

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/pr_description.py:8 — used here
- `CRITICAL` — scripts/validation/pr_description.py:27 — defined here
- `WARNING` — scripts/validation/pr_description.py:27 — defined here
- `Severity` — scripts/validation/pr_description.py:27 — defined here
- `_VALID_SEVERITIES` — scripts/validation/pr_description.py:28 — defined here
- `RepoInfo` — scripts/validation/pr_description.py:33 — used here
- `SIGNIFICANT_EXTENSIONS` — scripts/validation/pr_description.py:36 — defined here
- `SIGNIFICANT_DIRS_PATTERN` — scripts/validation/pr_description.py:41 — defined here
- `_EXT_GROUP` — scripts/validation/pr_description.py:44 — defined here
- `_EXT_BOUNDARY` — scripts/validation/pr_description.py:68 — defined here
- `_LINE_SUFFIX` — scripts/validation/pr_description.py:70 — defined here
- `DEFAULT_BYPASS_LABEL` — scripts/validation/pr_description.py:73 — defined here
- `description-validation-bypass` — scripts/validation/pr_description.py:73 — defined here
- `_CONTEXTUAL_SECTION_NAMES` — scripts/validation/pr_description.py:85 — defined here
- `_CHANGE_CLAIM_SECTION_NAMES` — scripts/validation/pr_description.py:114 — defined here
- `_CHANGE_CLAIM_SCOPED_PATTERN_INDEXES` — scripts/validation/pr_description.py:127 — defined here
- `_REFERENCE_SECTION_PREFIXES` — scripts/validation/pr_description.py:145 — defined here
- `FILE_MENTION_PATTERNS` — scripts/validation/pr_description.py:158 — defined here
- `_INLINE_CITATION_PATTERN` — scripts/validation/pr_description.py:192 — defined here
- `_BOT_DETAILS_SUMMARY_PATTERN` — scripts/validation/pr_description.py:214 — defined here
- `Issue` — scripts/validation/pr_description.py:221 — defined here
- `get_repo_info` — scripts/validation/pr_description.py:241 — defined here
- `fetch_pr_data` — scripts/validation/pr_description.py:270 — defined here
- `normalize_path` — scripts/validation/pr_description.py:342 — defined here
- `_strip_bot_details_blocks` — scripts/validation/pr_description.py:357 — defined here
- `_strip_informational_sections` — scripts/validation/pr_description.py:386 — defined here
- `CommonMark` — scripts/validation/pr_description.py:417 — used here
- `_change_claim_regions` — scripts/validation/pr_description.py:510 — defined here
- `_is_in_change_claim_region` — scripts/validation/pr_description.py:525 — defined here
- `extract_mentioned_files` — scripts/validation/pr_description.py:529 — defined here
- `extract_all_mentioned_files` — scripts/validation/pr_description.py:569 — defined here
- `file_matches` — scripts/validation/pr_description.py:605 — defined here
- `Issue #1923` — scripts/validation/pr_description.py:627 — used here
- `REQ-006` — scripts/validation/pr_description.py:627 — used here
- `_DASH_RE` — scripts/validation/pr_description.py:633 — defined here
- `Issue #3827` — scripts/validation/pr_description.py:636 — used here
- `_AUTO_CLOSE_KW` — scripts/validation/pr_description.py:641 — defined here
- `_INLINE_CODE_SPAN` — scripts/validation/pr_description.py:671 — defined here
- `_FENCE_OPEN_LINE` — scripts/validation/pr_description.py:721 — defined here
- `_fenced_code_block_ranges` — scripts/validation/pr_description.py:727 — defined here
- `_span_ranges` — scripts/validation/pr_description.py:755 — defined here
- `_in_any_range` — scripts/validation/pr_description.py:760 — defined here
- `_ranges_overlap` — scripts/validation/pr_description.py:764 — defined here
- `_code_spans_outside_fences` — scripts/validation/pr_description.py:768 — defined here
- `validate_closing_links` — scripts/validation/pr_description.py:797 — defined here
- `validate_no_dashes` — scripts/validation/pr_description.py:893 — defined here
- `validate_pr_description` — scripts/validation/pr_description.py:940 — defined here
- `print_results` — scripts/validation/pr_description.py:1020 — defined here
- `build_parser` — scripts/validation/pr_description.py:1055 — defined here
- `main` — scripts/validation/pr_description.py:1095 — defined here
- `GITHUB_STEP_SUMMARY` — scripts/validation/pr_description.py:1187 — used here
- `GITHUB_OUTPUT` — scripts/validation/pr_description.py:1196 — used here
- `_OUTPUT_UNSAFE_CHARS` — scripts/validation/pr_description.py:1199 — defined here
- `_safe_label_for_output` — scripts/validation/pr_description.py:1202 — defined here
- `_safe_label_for_markdown` — scripts/validation/pr_description.py:1213 — defined here
- `_warn_if_mutated` — scripts/validation/pr_description.py:1223 — defined here
- `_write_step_summary` — scripts/validation/pr_description.py:1240 — defined here
- `_write_step_output` — scripts/validation/pr_description.py:1272 — defined here
- `_emit_bypass_audit` — scripts/validation/pr_description.py:1296 — defined here

## Structure
- Shebang and module docstring (lines 1-12)
- Imports, severities, and file extension constants (lines 14-44)
- Extension boundary and bypass label constants (lines 46-73)
- Contextual and change-claim section regex definitions (lines 75-148)
- File mention and citation patterns (lines 150-218)
- Issue dataclass definition (lines 220-239)
- Git and GitHub API fetch helpers get_repo_info and fetch_pr_data (lines 241-340)
- Path normalization and section stripping (lines 342-508)
- Change claim regions and file mention extractors (lines 510-603)
- File matching and dash pattern definitions (lines 605-634)
- Closing-link validation and code-block range parsers (lines 636-891)
- Dash prohibition validation validate_no_dashes (lines 893-937)
- PR description comparison engine validate_pr_description (lines 940-1018)
- Results reporting and exit code mapper print_results (lines 1020-1048)
- CLI argument parsing and main execution loop build_parser and main (lines 1055-1193)
- Audit emission and GITHUB_OUTPUT/GITHUB_STEP_SUMMARY sanitizers (lines 1195-1310)
- Main execution entry point (lines 1312-1314)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/pr_description.py`, language: Python 3, lines: 1314
- documented invocation:
  - "python3 scripts/validation/pr_description.py --pr-number 226 --ci" — docs/technical-guardrails.md:38
  - "python3 scripts/validation/pr_description.py --pr-number 226 --ci" — scripts/README.md:65
  - "0 - Success (validation passed, or warnings only)" — scripts/validation/pr_description.py:9
- executed: yes
- actual command run: `python3 scripts/validation/pr_description.py --pr-number 226 --ci`
- abridged stdout:
```
Fetching PR #226 data...
PR has 6 changed files
Description mentions 3 files

Found 1 issue(s):
  CRITICAL: 0
  WARNING: 1

[WARNING] Significant file not mentioned
  File: scripts/Invoke-BatchPRReview.ps1
  This file was changed but not mentioned in the description

Warnings found. Consider mentioning significant files in PR description.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "0 - Success (validation passed, or warnings only)" — scripts/validation/pr_description.py:9
    - "1 - Logic error (CRITICAL issues found, CI mode only)" — scripts/validation/pr_description.py:10
    - "2 - Config error (missing dependency, failed to fetch PR data)" — scripts/validation/pr_description.py:11
  - Actual exit paths in code:
    - line 1043: `return 1` in `print_results` when `critical_count > 0` and `ci=True`
    - line 1047: `return 0` in `print_results` when validation passes or only warnings are found (or non-CI)
    - line 1109: `return 2` in `main` when `get_repo_info()` raises `RuntimeError`
    - line 1121: `return 2` in `main` when `fetch_pr_data()` raises `RuntimeError`
    - line 1176: `return print_results(issues, ci=args.ci)` in `main` when unbypassable em/en-dash criticals occur in CI
    - line 1184: `return 0` in `main` when non-dash criticals are bypassed by `description-validation-bypass` label in CI
    - line 1192: `return print_results(issues, ci=args.ci)` in `main` for standard return path
    - line 1313: `raise SystemExit(main())`
- for validators/gates:
  - Can it exit non-zero: Yes, exits 1 on CRITICAL issues in CI mode (e.g. claimed files not in diff, dash characters in title/body, or closing keywords inside code blocks without bypass); exits 2 on argument or configuration errors (missing `--pr-number`, git remote failure, or `gh` CLI failure).
  - Does it fail on the source repo's own default branch: When run with documented test PR #226 (`python3 scripts/validation/pr_description.py --pr-number 226 --ci`), it passes with exit code 0 and emits 1 WARNING (`Significant file not mentioned: scripts/Invoke-BatchPRReview.ps1`).
- does the output match what the documentation claims: Yes, `docs/technical-guardrails.md:41-50` states that files mentioned in PR description vs diff are validated (CRITICAL), significant changed files are verified (WARNING), and exit codes follow 0 = Pass, 1 = Critical failure, 2 = Usage/environment error. The execution matches these claims.

## Defects — required
- doc-drift · scripts/validation/pr_description.py:973 — Internal comment cites CONTRIBUTING.md:909 for "1. A human maintainer MUST add the `description-validation-bypass` label", but the quoted line actually appears at CONTRIBUTING.md:904.

## Observations
- Implements two tiers of file extraction: strict extraction via `extract_mentioned_files` (stripping contextual headings, bot summaries, and inline citation cues) for CRITICAL "mentioned but not in diff" validation, and broad extraction via `extract_all_mentioned_files` for WARNING suppression so reference citations do not trigger "significant file not mentioned".
- Employs AST-like regex handling of CommonMark 0.31.2 rules for backtick runs and code fences: dynamic fence closer matching based on opening run length (`_fenced_code_block_ranges`), multiline inline code span parsing (`_INLINE_CODE_SPAN`), and asymmetric backtick/tilde info string restrictions.
- Strict dash ban (`_DASH_RE`) enforcing `.claude/rules/universal.md` MUST NOT entry 4 against em-dash (U+2014) and en-dash (U+2013) in PR titles and bodies; explicitly ignores the bypass label so dash violations can never be bypassed.
- CI bypass safety protections: sanitizes `GITHUB_OUTPUT` keys and values against ASCII control characters and `=` (CVE-2023-32700 / CWE-117 log and command injection defense), replaces markdown backticks in audit labels, and emits `<!-- DESCRIPTION-VALIDATION-BYPASS -->` marker to `GITHUB_STEP_SUMMARY`.

## Context cost
57443 bytes, 1314 lines, ~14360 tokens.
