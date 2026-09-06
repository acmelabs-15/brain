---
package: rjm
path: .github/scripts/invoke_pr_comment_processing.py
type: script
bytes: 11112
unit: inv-rjm-183
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/invoke_pr_comment_processing.py

## Purpose — required, verbatim
> "Process PR comments based on AI triage output." — .github/scripts/invoke_pr_comment_processing.py:2

## Design intent — required
`invoke_pr_comment_processing.py` automates the handling and resolution of GitHub pull request review comments based on upstream AI triage classifications. Without it, repository maintainers would need to manually inspect, acknowledge, categorize, and draft responses to every review comment, creating bottlenecks in pull request review cycles. The script reads AI triage findings JSON (automatically stripping markdown code fences if present), adds acknowledgement reactions (`eyes`), posts explanatory replies to comments triaged as `wontfix` with thread preservation using GitHub's `/replies` API endpoint, and flags comments requiring human attention (such as questions, stale items, and implementation tasks). It also ensures robustness in automated environments by treating non-critical reaction errors (such as HTTP 404 on unreactable comment IDs) as non-fatal, preventing cosmetic failures from disrupting scheduled CI runs.

## Phase — required
rjm:review

## Inputs — required
- CLI options and arguments:
  - `--pr-number`: "PR number to process" — .github/scripts/invoke_pr_comment_processing.py:274
  - `--verdict`: "AI verdict from ai-review action (e.g. PASS, WARN, FAIL)" — .github/scripts/invoke_pr_comment_processing.py:279
  - `--findings-json`: "Raw JSON output from AI containing triage decisions. Use '-' to read from stdin." — .github/scripts/invoke_pr_comment_processing.py:284
  - `--owner`: "Repository owner (inferred from git remote if omitted)" — .github/scripts/invoke_pr_comment_processing.py:289
  - `--repo`: "Repository name (inferred from git remote if omitted)" — .github/scripts/invoke_pr_comment_processing.py:294
- Upstream AI triage JSON structure containing comments array: .github/scripts/invoke_pr_comment_processing.py:198
- Environment variable `GITHUB_WORKSPACE`: Workspace root directory — .github/scripts/invoke_pr_comment_processing.py:28
- GitHub CLI `gh` binary in system PATH for executing GitHub API requests — .github/scripts/invoke_pr_comment_processing.py:86, 146

## Outputs — required
- GitHub comment reactions (`eyes` emoji) added via GitHub API: .github/scripts/invoke_pr_comment_processing.py:73, 92, 111
- GitHub PR review comment replies posted via GitHub API: .github/scripts/invoke_pr_comment_processing.py:148, 161
- Execution summary report printed to stdout: .github/scripts/invoke_pr_comment_processing.py:363-369
- Standardized process exit codes (ADR-035):
  - "0 - Success" — .github/scripts/invoke_pr_comment_processing.py:10
  - "1 - Invalid parameters / logic error" — .github/scripts/invoke_pr_comment_processing.py:11
  - "2 - Parse error (JSON)" — .github/scripts/invoke_pr_comment_processing.py:12
  - "3 - External error (API/processing errors)" — .github/scripts/invoke_pr_comment_processing.py:13

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `eyes` — .github/scripts/invoke_pr_comment_processing.py:5 — used here
- `wontfix` — .github/scripts/invoke_pr_comment_processing.py:6 — used here
- `stale` — .github/scripts/invoke_pr_comment_processing.py:7 — used here
- `question` — .github/scripts/invoke_pr_comment_processing.py:7 — used here
- `implementation` — .github/scripts/invoke_pr_comment_processing.py:7 — used here
- `ADR-035` — .github/scripts/invoke_pr_comment_processing.py:9 — used here
- `GITHUB_WORKSPACE` — .github/scripts/invoke_pr_comment_processing.py:28 — used here
- `resolve_repo_params` — .github/scripts/invoke_pr_comment_processing.py:33 — used here
- `_CODE_FENCE_PATTERN` — .github/scripts/invoke_pr_comment_processing.py:41 — defined here
- `parse_findings` — .github/scripts/invoke_pr_comment_processing.py:44 — defined here
- `add_comment_reaction` — .github/scripts/invoke_pr_comment_processing.py:69 — defined here
- `reply_to_comment` — .github/scripts/invoke_pr_comment_processing.py:130 — defined here
- `process_comments` — .github/scripts/invoke_pr_comment_processing.py:177 — defined here
- `Issue #2522` — .github/scripts/invoke_pr_comment_processing.py:194 — used here
- `reaction_failures` — .github/scripts/invoke_pr_comment_processing.py:195 — defined here
- `quick-fix` — .github/scripts/invoke_pr_comment_processing.py:244 — used here
- `standard` — .github/scripts/invoke_pr_comment_processing.py:244 — used here
- `strategic` — .github/scripts/invoke_pr_comment_processing.py:244 — used here
- `build_parser` — .github/scripts/invoke_pr_comment_processing.py:262 — defined here
- `main` — .github/scripts/invoke_pr_comment_processing.py:304 — defined here

## Structure
- Shebang and module docstring with ADR-035 exit codes — .github/scripts/invoke_pr_comment_processing.py:1
- Imports and workspace setup — .github/scripts/invoke_pr_comment_processing.py:16
- JSON parsing — .github/scripts/invoke_pr_comment_processing.py:38
- GitHub API helpers — .github/scripts/invoke_pr_comment_processing.py:65
- Comment processing logic — .github/scripts/invoke_pr_comment_processing.py:173
- CLI argument parser — .github/scripts/invoke_pr_comment_processing.py:258
- Main entry point — .github/scripts/invoke_pr_comment_processing.py:300
- Script execution wrapper __main__ — .github/scripts/invoke_pr_comment_processing.py:388

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/invoke_pr_comment_processing.py`
- language: Python (python3)
- lines: 390
- documented invocation:
  - "#!/usr/bin/env python3" — .github/scripts/invoke_pr_comment_processing.py:1 (shebang; options documented in CLI parser)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/invoke_pr_comment_processing.py --help`
- abridged stdout:
  ```text
  usage: invoke_pr_comment_processing.py [-h] --pr-number PR_NUMBER
                                         --verdict VERDICT
                                         --findings-json FINDINGS_JSON
                                         [--owner OWNER] [--repo REPO]

  Process PR comments based on AI triage output. Acknowledges, replies, and
  flags comments for action.
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented in docstring:
    - "0 - Success" — .github/scripts/invoke_pr_comment_processing.py:10
    - "1 - Invalid parameters / logic error" — .github/scripts/invoke_pr_comment_processing.py:11
    - "2 - Parse error (JSON)" — .github/scripts/invoke_pr_comment_processing.py:12
    - "3 - External error (API/processing errors)" — .github/scripts/invoke_pr_comment_processing.py:13
  - Actual exit paths:
    - `raise SystemExit(2) from exc` — .github/scripts/invoke_pr_comment_processing.py:61 (JSON decoding error in `parse_findings`)
    - `return 0` — .github/scripts/invoke_pr_comment_processing.py:329 (verdict not in PASS or WARN, skipping processing)
    - `return 0` — .github/scripts/invoke_pr_comment_processing.py:341 (no comments in findings JSON)
    - `return 1` — .github/scripts/invoke_pr_comment_processing.py:355 (exception resolving repository parameters)
    - `return 3` — .github/scripts/invoke_pr_comment_processing.py:382 (completed with errors > 0)
    - `return 0` — .github/scripts/invoke_pr_comment_processing.py:385 (completed successfully with zero fatal errors)
    - `raise SystemExit(main())` — .github/scripts/invoke_pr_comment_processing.py:389
- for validators/gates: not a blocking gate; comment processing utility. Can exit non-zero (exits 1 on repo parameter resolution failure, exits 2 on invalid JSON or missing arguments, exits 3 when comment replies fail). Does not fail on default branch when run with valid arguments.
- does the output match what the documentation claims: yes (accurately parses triage JSON, adds reactions, posts wontfix replies, and outputs processing statistics).

## Defects — required
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/invoke_pr_comment_processing.py`; workflow `.github/workflows/pr-maintenance.yml:233` references `.claude/skills/github/scripts/pr/invoke_pr_comment_processing.py` rather than this `.github/scripts/` file.
- `script-bug`: In `.github/scripts/invoke_pr_comment_processing.py:215-217`, comments classified as `"stale"` are skipped with log `"Stale comment needs manual resolution (thread ID required)"` without resolving them automatically.

## Observations
- Fix for Issue #2522: reaction addition failures (such as HTTP 404 on unreactable comments) are tracked separately under `reaction_failures` rather than `errors` (line 195), ensuring that non-essential reaction failures do not fail automated CI workflow runs.
- Robust JSON handling: `parse_findings()` applies `_CODE_FENCE_PATTERN` to strip markdown code blocks before calling `json.loads()`, handling LLM responses that wrap JSON in backticks.
- Implements two-tier reaction endpoint resolution: tries `/pulls/comments/{comment_id}/reactions` first, falling back to `/issues/comments/{comment_id}/reactions`.

## Context cost
11,112 bytes (approx. 2,778 tokens).
