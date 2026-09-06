---
package: rjm
path: scripts/ai_review_common/workflow.py
type: script
bytes: 6366
unit: inv-rjm-196
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/workflow.py

## Purpose — required, verbatim
> "Initialization, environment validation, PR files, and workflow run analysis." — scripts/ai_review_common/workflow.py:1

## Design intent — required
Handles runtime filesystem preparation and GitHub Actions workflow environment management for AI review operations. It initializes review working directories, verifies required environment variables, extracts PR changed files using `gh api` with pagination and regex filtering, retrieves associated PR workflow runs, evaluates run concurrency overlaps via half-open interval intersection, and maps run metadata to concurrency group keys.

## Phase — required
rjm:review

## Inputs — required
- Working directory path string or environment variable `AI_REVIEW_DIR` (fallback to `TEMP`, `TMPDIR`, or `/tmp`).
- List of required environment variable names passed to `assert_environment_variables`.
- PR numbers (int) and optional regex file patterns passed to `get_pr_changed_files` and `get_workflow_runs_by_pr`.
- GitHub Actions workflow run dictionaries with timestamp and pull request metadata.

## Outputs — required
- Review working directory path string (created on disk).
- List of changed file paths matching filter.
- List of workflow run dictionary objects.
- Boolean flag indicating temporal overlap of two runs (`runs_overlap`).
- Concurrency group key string (`get_concurrency_group_from_run`).

## Invokes — required
none

## Invoked by — required
- script workflow — scripts/ai_review_common/quality_gate.py:19

## Concepts named — required, verbatim
- `initialize_ai_review` — scripts/ai_review_common/workflow.py:17 — defined here
- `AI_REVIEW_DIR` — scripts/ai_review_common/workflow.py:23 — used here
- `assert_environment_variables` — scripts/ai_review_common/workflow.py:32 — defined here
- `get_pr_changed_files` — scripts/ai_review_common/workflow.py:42 — defined here
- `GITHUB_REPOSITORY` — scripts/ai_review_common/workflow.py:47 — used here
- `get_workflow_runs_by_pr` — scripts/ai_review_common/workflow.py:87 — defined here
- `runs_overlap` — scripts/ai_review_common/workflow.py:150 — defined here
- `_CONCURRENCY_PREFIXES` — scripts/ai_review_common/workflow.py:164 — defined here
- `get_concurrency_group_from_run` — scripts/ai_review_common/workflow.py:174 — defined here

## Structure
- Initialization, environment validation — scripts/ai_review_common/workflow.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/workflow.py`
- language: Python
- lines: 190
- documented invocation:
  "def initialize_ai_review(review_dir: str | None = None) -> str:" — scripts/ai_review_common/workflow.py:17
  "def assert_environment_variables(names: list[str]) -> None:" — scripts/ai_review_common/workflow.py:32
  "def get_pr_changed_files(pr_number: int, pattern: str = \".*\") -> list[str]:" — scripts/ai_review_common/workflow.py:42
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ai_review_common/workflow.py`
- abridged stdout: (empty)
- **actual exit code:** 0
- documented exit codes: none
- actual exit paths in code:
  No `sys.exit()` calls; raises `RuntimeError` on missing variables or CLI errors ("raise RuntimeError(" — scripts/ai_review_common/workflow.py:39, 110, 112, 127, 134).
- for validators/gates:
  Does not exit directly; raises `RuntimeError` when required environment variables are absent.
- does the output match what the documentation claims?
  Yes, provides working directory creation, env validation, PR file extraction, and workflow concurrency analysis.

## Defects — required
none

## Observations
- Avoids HTTP 406 on large diffs by using GitHub files API endpoint (`repos/{repo}/pulls/{pr_number}/files`) instead of retrieving raw diff output (scripts/ai_review_common/workflow.py:45, 69).
- Interval overlap check (`runs_overlap`, lines 150-161) implements symmetric half-open interval comparison `run1_start < run2_end and run2_start < run1_end`.

## Context cost
File size: 6,366 bytes (190 lines). Standalone module with no internal project dependencies (~1,600 tokens).
