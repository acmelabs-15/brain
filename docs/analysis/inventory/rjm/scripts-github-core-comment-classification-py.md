---
package: rjm
path: scripts/github_core/comment_classification.py
type: script
bytes: 2125
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/comment_classification.py, sha256: c17b44af346cca4f28fdd93db44ebccde3f373ab0142292c50fc0abba2eadf9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/comment_classification.py

## Purpose — required, verbatim
> "Domain classification for GitHub PR/review comments." — scripts/github_core/comment_classification.py:1

## Design intent — required
Acts as the shared single source of truth for keyword-based triage that categorizes GitHub pull request and review comments into five domains: security, bug, style, summary, and general. It eliminates code duplication across review processing tools, providing consistent categorization for automated triage and review analysis.

## Phase — required
cross-phase

## Inputs — required
Comment body string `body` (or None/non-string).

## Outputs — required
Domain classification string: `"security"`, `"bug"`, `"style"`, `"summary"`, or `"general"`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `_SECURITY_PATTERN` — scripts/github_core/comment_classification.py:18 — defined here
- `_BUG_PATTERN` — scripts/github_core/comment_classification.py:25 — defined here
- `_STYLE_PATTERN` — scripts/github_core/comment_classification.py:32 — defined here
- `_SUMMARY_PATTERN` — scripts/github_core/comment_classification.py:37 — defined here
- `classify_domain` — scripts/github_core/comment_classification.py:43 — defined here

## Structure
- def classify_domain — scripts/github_core/comment_classification.py:43

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/comment_classification.py`, Python, 60 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/comment_classification.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
- `orphan` · scripts/github_core/comment_classification.py:1-60 · In-scope script library is not directly imported by other in-scope lifecycle scripts under `scripts/` (imported by Copilot CLI PR review scripts and unit tests).

## Observations
Consolidates regex heuristics previously duplicated across `get_pr_review_comments.py` and `get_unaddressed_comments.py` (Issue #2816). Safely handles non-string and empty bodies by defaulting to `"general"`.

## Context cost
2,125 bytes (~550 tokens). Standard library only.
