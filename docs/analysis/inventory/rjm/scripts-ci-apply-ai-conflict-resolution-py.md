---
package: rjm
path: scripts/ci/apply_ai_conflict_resolution.py
type: script
bytes: 5494
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/apply_ai_conflict_resolution.py, sha256: 9512f33f965a12218ab0593839a2ca001322c12374c83279e2fd141966f4fb5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/apply_ai_conflict_resolution.py

## Purpose — required, verbatim
> "Apply AI-recommended conflict resolutions to a PR branch." — scripts/ci/apply_ai_conflict_resolution.py:1

## Design intent — required
Automated conflict resolution utility that replaces an inline PowerShell block in `pr-maintenance.yml` to fulfill ADR-006 ("Thin Workflows, Testable Modules"). When git conflicts arise between a PR branch and its target base, an upstream AI review produces resolution proposals. This script ingests the AI findings JSON (safely extracting JSON content from markdown code fences), validates target file paths against path-traversal attacks, fetches and checks out the head branch, merges the base branch, and systematically applies the recommended resolution strategy: `theirs` (`git checkout --theirs`), `ours` (`git checkout --ours`), or `combine` (writing AI-generated `combined_content`). After verifying that no unmerged conflict markers remain, it commits the resolved merge and delegates push verification to `safe_push_pr_branch.py`. Without this script, conflict resolution would require either error-prone manual developer intervention for standard merge conflicts or fragile inline workflow scripts lacking path-traversal protections.

## Phase — required
rjm:ship

## Inputs — required
- Pull request number via environment variable `PR_NUMBER` — scripts/ci/apply_ai_conflict_resolution.py:101
- Pull request head branch name via environment variable `HEAD_REF` — scripts/ci/apply_ai_conflict_resolution.py:102
- Target base branch name via environment variable `BASE_REF` — scripts/ci/apply_ai_conflict_resolution.py:103
- AI findings JSON string via environment variable `AI_FINDINGS` — scripts/ci/apply_ai_conflict_resolution.py:104

## Outputs — required
- Merged git `commit` pushed to remote branch via safe_push_pr_branch.py — scripts/ci/apply_ai_conflict_resolution.py:139
- Workflow log notices and errors (`::notice::` and `::error::`) — scripts/ci/apply_ai_conflict_resolution.py:115,164
- Exit code indicating execution result: 0 on success, 1 on parse failure, missing fields, unresolved conflicts, or push failure, 2 on missing configuration variables — scripts/ci/apply_ai_conflict_resolution.py:9-11

## Invokes — required
- script safe_push_pr_branch.py — scripts/ci/apply_ai_conflict_resolution.py:28

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/apply_ai_conflict_resolution.py:3 — used here
- `ADR-035` — scripts/ci/apply_ai_conflict_resolution.py:8 — used here
- `extract_json` — scripts/ci/apply_ai_conflict_resolution.py:54 — defined here
- `parse_resolutions` — scripts/ci/apply_ai_conflict_resolution.py:62 — defined here
- `apply_resolution` — scripts/ci/apply_ai_conflict_resolution.py:77 — defined here

## Structure
(no section headings in script; top-level constants `EXIT_SUCCESS`, `EXIT_FAILURE`, `EXIT_CONFIG`, `_SAFE_PUSH`, git runner `_git`, path validator `_safe_repo_path`, parser functions `extract_json`, `parse_resolutions`, strategy applicator `apply_resolution`, and execution entry point `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/apply_ai_conflict_resolution.py`, language: Python, lines: 170
- documented invocation: none explicit (requires environment variables `PR_NUMBER`, `HEAD_REF`, `BASE_REF`, `AI_FINDINGS`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/apply_ai_conflict_resolution.py`
- abridged stdout: `(empty)`
- abridged stderr: `ERROR: HEAD_REF and BASE_REF must be set`
- actual exit code: 2
- documented exit codes:
  - "0 - Success" — scripts/ci/apply_ai_conflict_resolution.py:9
  - "1 - Parse failure, missing required fields, or push failure" — scripts/ci/apply_ai_conflict_resolution.py:10
  - "2 - Configuration error (HEAD_REF or BASE_REF not set)" — scripts/ci/apply_ai_conflict_resolution.py:11
  vs. actual exit paths:
  - line 108: `return EXIT_CONFIG` (exit code 2)
  - line 116: `return EXIT_FAILURE` (exit code 1)
  - line 130: `return EXIT_FAILURE` (exit code 1)
  - line 137: `return EXIT_FAILURE` (exit code 1)
  - line 162: `return EXIT_FAILURE` (exit code 1)
  - line 165: `return EXIT_SUCCESS` (exit code 0)
  - line 169: `sys.exit(main())`
- for validators/gates: not a validator or gate; PR merge action script. Exits non-zero on error paths (exit code 2 if environment variables missing; exit code 1 if parsing fails or unresolved conflicts remain).
- does the output match what the documentation claims: yes

## Defects — required
- orphan — scripts/ci/apply_ai_conflict_resolution.py:1 — not invoked by any in-scope file (called by out-of-scope .github/workflows/pr-maintenance.yml:188)
- missing-path — scripts/ci/apply_ai_conflict_resolution.py:28 — `.trusted-helper/.github/scripts/safe_push_pr_branch.py` does not exist in local repository tree (dynamically populated in CI)

## Observations
Security-conscious implementation: `_safe_repo_path` checks for absolute paths and path traversal sequences (`relative_to` cwd validation) before allowing file modifications. It also validates that all conflicts are resolved via `git diff --name-only --diff-filter=U` before proceeding to commit and push, aborting the merge if any conflict remains unresolved.

## Context cost
5494 bytes (~1400 tokens).
