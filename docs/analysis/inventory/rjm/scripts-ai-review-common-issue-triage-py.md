---
package: rjm
path: scripts/ai_review_common/issue_triage.py
type: script
bytes: 5930
unit: inv-rjm-196
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/issue_triage.py

## Purpose — required, verbatim
> "Markdown formatting, display helpers, and logging for AI review outputs." — scripts/ai_review_common/issue_triage.py:1

## Design intent — required
Provides display formatting, GitHub alert syntax mapping, emoji indicators, structured timestamped logging, and GitHub Actions output handling ($GITHUB_OUTPUT and $GITHUB_STEP_SUMMARY) for AI review runs. Without this module, review scripts would each duplicate markdown alert formatting, verdict styling, and multiline heredoc writing for CI environments.

## Phase — required
rjm:review

## Inputs — required
- Verdict string tokens (`PASS`, `COMPLIANT`, `WARN`, `PARTIAL`, `CRITICAL_FAIL`, `REJECTED`, `FAIL`, `NEEDS_REVIEW`, `NON_COMPLIANT`) passed to formatting and lookup helpers.
- String messages, table column lists (`list[str]`), and section titles.
- Environment variables `GITHUB_OUTPUT` (path to GitHub Actions output file) and `GITHUB_STEP_SUMMARY` (path to step summary markdown file).

## Outputs — required
- GitHub alert markdown blocks (`format_verdict_alert`), HTML collapsible `<details><summary>` blocks (`format_collapsible_section`), and markdown table rows (`format_markdown_table_row`).
- JSON escaped string representations (`convert_to_json_escaped`).
- Timestamped logs via standard Python `logging` (`write_log`, `write_log_error`).
- Appends key-value pairs (using heredoc delimiters for multiline values) to `$GITHUB_OUTPUT` (`write_output`, `write_github_output`).
- Appends markdown content to `$GITHUB_STEP_SUMMARY` (`write_step_summary`).

## Invokes — required
- script verdict — scripts/ai_review_common/issue_triage.py:10

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `_ALERT_TYPE_MAP` — scripts/ai_review_common/issue_triage.py:18 — defined here
- `FAIL_VERDICTS` — scripts/ai_review_common/issue_triage.py:10 — used here
- `_FAIL_EXIT_VERDICTS` — scripts/ai_review_common/issue_triage.py:34 — defined here
- `_EMOJI_MAP` — scripts/ai_review_common/issue_triage.py:36 — defined here
- `get_verdict_alert_type` — scripts/ai_review_common/issue_triage.py:49 — defined here
- `get_verdict_exit_code` — scripts/ai_review_common/issue_triage.py:54 — defined here
- `get_verdict_emoji` — scripts/ai_review_common/issue_triage.py:59 — defined here
- `format_collapsible_section` — scripts/ai_review_common/issue_triage.py:69 — defined here
- `format_verdict_alert` — scripts/ai_review_common/issue_triage.py:74 — defined here
- `format_markdown_table_row` — scripts/ai_review_common/issue_triage.py:87 — defined here
- `convert_to_json_escaped` — scripts/ai_review_common/issue_triage.py:92 — defined here
- `write_log` — scripts/ai_review_common/issue_triage.py:104 — defined here
- `write_log_error` — scripts/ai_review_common/issue_triage.py:110 — defined here
- `write_output` — scripts/ai_review_common/issue_triage.py:121 — defined here
- `write_github_output` — scripts/ai_review_common/issue_triage.py:145 — defined here
- `write_step_summary` — scripts/ai_review_common/issue_triage.py:168 — defined here
- `GITHUB_OUTPUT` — scripts/ai_review_common/issue_triage.py:128 — used here
- `GITHUB_STEP_SUMMARY` — scripts/ai_review_common/issue_triage.py:173 — used here

## Structure
- Verdict alert types — scripts/ai_review_common/issue_triage.py:15
- Markdown formatting — scripts/ai_review_common/issue_triage.py:65
- Logging — scripts/ai_review_common/issue_triage.py:100
- GitHub Actions output — scripts/ai_review_common/issue_triage.py:117

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/issue_triage.py`
- language: Python
- lines: 181
- documented invocation:
  "def get_verdict_exit_code(verdict: str) -> int:" — scripts/ai_review_common/issue_triage.py:54
- **executed:** yes
- actual command run: `python3 -m scripts.ai_review_common.issue_triage` (from `sources/rjm/`)
- abridged stdout: `<frozen runpy>:130: RuntimeWarning: ...`
- **actual exit code:** 0
- documented exit codes:
  "Return 1 for failure verdicts, 0 otherwise." — scripts/ai_review_common/issue_triage.py:55
- actual exit paths in code:
  No direct `sys.exit()` calls; `get_verdict_exit_code` returns integer exit code per "return 1 if verdict in _FAIL_EXIT_VERDICTS else 0" — scripts/ai_review_common/issue_triage.py:56
- for validators/gates:
  Can exit non-zero when callers pass `get_verdict_exit_code()` result to `sys.exit()`.
- does the output match what the documentation claims?
  Yes, markdown formatting helpers and alert generators output standard GitHub syntax.

## Defects — required
- `script-bug` · scripts/ai_review_common/issue_triage.py:10 · Direct execution via `python3 scripts/ai_review_common/issue_triage.py` fails with `ImportError: attempted relative import with no known parent package` due to relative import of `.verdict` without package context.
- `other` · scripts/ai_review_common/issue_triage.py:121,145 · Duplicated functionality between `write_output` and `write_github_output` which both append multiline-delimited entries to `GITHUB_OUTPUT`.

## Observations
- Comment at scripts/ai_review_common/issue_triage.py:30-33 notes historical fix: "Re-declaring the literal set here was the root cause of the round-11 NON_COMPLIANT drift: the canonical FAIL_VERDICTS gained NON_COMPLIANT but the local copy lagged. Importing closes that drift channel."
- Heredoc delimiter generation uses `os.urandom(16).hex()` (line 137, 160) to prevent delimiter collision when serializing multiline string output in GitHub Actions.

## Context cost
File size: 5930 bytes (181 lines). Loads `scripts/ai_review_common/verdict.py` (10325 bytes). Total size ~16.2 KB, approximately 4100 tokens.
