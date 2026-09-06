---
package: rjm
path: scripts/new_validated_pr.py
type: script
bytes: 5449
unit: inv-rjm-254
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/new_validated_pr.py

## Purpose — required, verbatim
> "Create a validated PR with all guardrails enforced." — scripts/new_validated_pr.py:2

## Design intent — required
A top-level CLI wrapper around the GitHub skill PR creation script (`.claude/skills/github/scripts/pr/new_pr.py`) that enforces guardrails during pull request creation. Provides an interface supporting conventional commit titles, target/head branch resolution, draft PR flags, web mode delegation to `gh pr create --web`, secure body file preparation via `prepare_pr_body`, and flag forwarding while enforcing repository boundaries and GitHub CLI availability.

## Phase — required
rjm:ship

## Inputs — required
- CLI arguments: `"--title"` — scripts/new_validated_pr.py:41, `"--body"` — scripts/new_validated_pr.py:42, `"--body-file"` — scripts/new_validated_pr.py:43, `"--base"` — scripts/new_validated_pr.py:45, `"--head"` — scripts/new_validated_pr.py:53, `"--draft"` — scripts/new_validated_pr.py:54, `"--web"` — scripts/new_validated_pr.py:56, `"--skip-validation"` — scripts/new_validated_pr.py:58, and `"--audit-reason"` — scripts/new_validated_pr.py:59
- Environment variables: `"CI"` — scripts/new_validated_pr.py:65, `"GITHUB_ACTIONS"` — scripts/new_validated_pr.py:65, and `"DISPLAY"` — scripts/new_validated_pr.py:66

## Outputs — required
- Delegated PR creation return code: `subprocess.run(_build_skill_args(skill_script, args)).returncode` — scripts/new_validated_pr.py:155
- Error messages to stderr: "ERROR: Not in a git repository" — scripts/new_validated_pr.py:126, "ERROR: gh CLI not found. Install: https://cli.github.com/" — scripts/new_validated_pr.py:130, and "ERROR: Title required (use --title or --web)" — scripts/new_validated_pr.py:137
- Process exit codes: "0 - Success" — scripts/new_validated_pr.py:8, "1 - Validation failure" — scripts/new_validated_pr.py:9, and "2 - Usage/environment error" — scripts/new_validated_pr.py:10

## Invokes — required
- script get_repo_root — scripts/new_validated_pr.py:29
- script new_pr — scripts/new_validated_pr.py:31
- script prepare_pr_body — scripts/new_validated_pr.py:110
- command gh — scripts/new_validated_pr.py:70

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `new_pr` — scripts/new_validated_pr.py:4 — used here
- `guardrails` — scripts/new_validated_pr.py:2 — used here
- `ADR-035` — scripts/new_validated_pr.py:12 — used here
- `Exit Code Standardization` — scripts/new_validated_pr.py:12 — used here
- `SKILL_RELPATH` — scripts/new_validated_pr.py:31 — defined here
- `conventional commit` — scripts/new_validated_pr.py:41 — used here
- `_build_parser` — scripts/new_validated_pr.py:39 — defined here
- `_run_web_mode` — scripts/new_validated_pr.py:63 — defined here
- `_build_skill_args` — scripts/new_validated_pr.py:78 — defined here
- `_copy_body_to_prepared_path` — scripts/new_validated_pr.py:105 — defined here
- `prepare_pr_body` — scripts/new_validated_pr.py:110 — used here

## Structure
- Module docstring and ADR-035 exit code specification — scripts/new_validated_pr.py:2
- Import setup and dispatch target definition — scripts/new_validated_pr.py:25
- Argument parser construction _build_parser — scripts/new_validated_pr.py:39
- Web mode execution handler _run_web_mode — scripts/new_validated_pr.py:63
- Command argument builder _build_skill_args — scripts/new_validated_pr.py:78
- PR body copying and preparation _copy_body_to_prepared_path — scripts/new_validated_pr.py:105
- Validation checks and execution dispatcher main — scripts/new_validated_pr.py:121

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/new_validated_pr.py`
- **language:** Python
- **lines:** 160
- **documented invocation:**
  `#!/usr/bin/env python3` — scripts/new_validated_pr.py:1
- **executed:** yes
- **actual command:** `python3 scripts/new_validated_pr.py`
- **actual stdout:** none (stderr: `ERROR: Title required (use --title or --web)`)
- **actual exit code:** 2
- **documented exit codes vs actual:**
  - "0  - Success" — scripts/new_validated_pr.py:8 vs return code forwarding — scripts/new_validated_pr.py:75, 155
  - "1  - Validation failure" — scripts/new_validated_pr.py:9 vs return code forwarding — scripts/new_validated_pr.py:155
  - "2  - Usage/environment error" — scripts/new_validated_pr.py:10 vs `return 2` — scripts/new_validated_pr.py:68, 127, 131, 138, 143, 152
  - Process exit via `sys.exit(main())` — scripts/new_validated_pr.py:159
- **gate check:** Can exit non-zero (exits 2 on missing title, missing git repository, or missing `gh` CLI). On default branch without parameters, exits 2 with title error.
- **output match:** Output matches the documented error reporting behavior.

## Defects — required
- orphan — scripts/new_validated_pr.py:1 — No in-scope file invokes this wrapper script; flagged as orphan candidate in 2026-07-02 safety audit and superseded by direct skill invocation.

## Observations
Delegates directly to `.claude/skills/github/scripts/pr/new_pr.py` for cohesion, maintaining only the wrapper interface and argument translations.

## Context cost
5449 bytes, 160 lines, plus `scripts/github_core/repo.py` (5200 bytes) and `.claude/skills/github/scripts/pr/new_pr.py` (12000 bytes). Total ~22649 bytes, ~5200 tokens.
