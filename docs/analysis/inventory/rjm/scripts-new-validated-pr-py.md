---
package: rjm
path: scripts/new_validated_pr.py
type: script
bytes: 5449
unit: inv-rjm-254
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/new_validated_pr.py

## Purpose — required, verbatim
> "Create a validated PR with all guardrails enforced." — scripts/new_validated_pr.py:2

## Design intent — required
Provides a standardized command-line entry point for creating pull requests with all repository quality guardrails and validations enforced. Rather than reimplementing PR checks locally, it translates CLI options and delegates directly to the GitHub skill script (`.claude/skills/github/scripts/pr/new_pr.py`) and its body allocator (`prepare_pr_body.py`). This guarantees that conventional commit title formatting, issue linking, template compliance, session-end protocol checks, and skill violation audits run consistently before dispatching `gh pr create`.

## Phase — required
rjm:ship

## Inputs — required
- CLI options:
  - `--title`: "PR title in conventional commit format" — scripts/new_validated_pr.py:41
  - `--body`: "PR description body" — scripts/new_validated_pr.py:42
  - `--body-file`: "Path to file containing PR body" — scripts/new_validated_pr.py:43
  - `--draft`: "Create as draft PR" — scripts/new_validated_pr.py:54
  - `--web`: "Open browser to create PR interactively" — scripts/new_validated_pr.py:56
  - `--skip-validation`: "Skip validation checks" — scripts/new_validated_pr.py:58
  - `--audit-reason`: "Reason for skipping validation" — scripts/new_validated_pr.py:59
- GitHub CLI tool `gh` on system PATH (scripts/new_validated_pr.py:129)

## Outputs — required
- Created pull request on GitHub via `gh pr create` (scripts/new_validated_pr.py:75, 155)
- Error diagnostics printed to stderr for usage errors or missing tools (scripts/new_validated_pr.py:67, 126, 130, 137, 142, 151)
- Standard exit codes: 0 on success, 1 on validation failure, 2 on usage/environment error (scripts/new_validated_pr.py:8-10)

## Invokes — required
- script .claude/skills/github/scripts/pr/new_pr.py — scripts/new_validated_pr.py:31
- script prepare_pr_body.py — scripts/new_validated_pr.py:110

## Invoked by — required
- tests/test_new_validated_pr.py:16 — tests/test_new_validated_pr.py:16

## Concepts named — required, verbatim
- `ADR-035` — scripts/new_validated_pr.py:12 — used here
- `SKILL_RELPATH` — scripts/new_validated_pr.py:31 — defined here
- `_build_parser` — scripts/new_validated_pr.py:39 — defined here
- `_run_web_mode` — scripts/new_validated_pr.py:63 — defined here
- `_build_skill_args` — scripts/new_validated_pr.py:78 — defined here
- `_copy_body_to_prepared_path` — scripts/new_validated_pr.py:105 — defined here
- `main` — scripts/new_validated_pr.py:121 — defined here

## Structure
- Module docstring and exit codes — scripts/new_validated_pr.py:1
- Imports and repo root resolution — scripts/new_validated_pr.py:15
- Skill target path constant — scripts/new_validated_pr.py:31
- Argument parser builder — scripts/new_validated_pr.py:39
- Web mode execution function — scripts/new_validated_pr.py:63
- Subprocess argument builder for delegated skill script — scripts/new_validated_pr.py:78
- PR body preparation and allocator copy function — scripts/new_validated_pr.py:105
- Main execution and prerequisite validation — scripts/new_validated_pr.py:121

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/new_validated_pr.py`
- **language:** Python (python3)
- **lines:** 160
- **documented invocation:**
  - `python3 scripts/new_validated_pr.py --help`
  - `python3 scripts/new_validated_pr.py`
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/new_validated_pr.py --help`
- **abridged stdout:**
```
usage: new_validated_pr.py [-h] [--title TITLE] [--body BODY]
                           [--body-file BODY_FILE] [--base BASE] [--head HEAD]
                           [--draft] [--web] [--skip-validation]
                           [--audit-reason AUDIT_REASON]

Create a validated PR with guardrails
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success" — scripts/new_validated_pr.py:8
    - "1  - Validation failure" — scripts/new_validated_pr.py:9
    - "2  - Usage/environment error" — scripts/new_validated_pr.py:10
  - Actual exit paths:
    - `return 2` — scripts/new_validated_pr.py:68
    - `return 2` — scripts/new_validated_pr.py:127
    - `return 2` — scripts/new_validated_pr.py:131
    - `return 2` — scripts/new_validated_pr.py:138
    - `return 2` — scripts/new_validated_pr.py:143
    - `return 2` — scripts/new_validated_pr.py:152
    - `return subprocess.run(_build_skill_args(skill_script, args)).returncode` — scripts/new_validated_pr.py:155
    - `sys.exit(main())` — scripts/new_validated_pr.py:159
- **for validators/gates:**
  - Can exit non-zero: exits 2 if required flags (`--title`) or tools (`gh`) are missing; exits with code returned by underlying validation checks (e.g. exit code 1).
  - Verified on repository default branch: running with no args exits 2 with `ERROR: Title required (use --title or --web)`.
- **does the output match what the documentation claims:** yes, displays help instructions and dispatches correctly.

## Defects — required
none

## Observations
- Refuses interactive `--web` mode when running inside CI or in headless environments lacking a `DISPLAY` environment variable.
- Preserves PR body through the `prepare_pr_body.py` secure allocator to prevent injection vulnerabilities.

## Context cost
5449 bytes, 160 lines, ~1100 tokens.
