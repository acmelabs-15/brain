---
package: rjm
path: scripts/ci/commit_and_push.py
type: script
bytes: 3903
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/commit_and_push.py

## Purpose — required, verbatim
> "Commit and push a fixed set of paths when the working tree is dirty." — scripts/ci/commit_and_push.py:2

## Design intent — required
Automated Git commit-and-push helper designed for unattended bot maintenance workflows (e.g. updating reviewer statistics, auto-syncing documentation). Extracted from inline workflow shell blocks under ADR-006, it isolates Git mutations to explicitly specified paths (`--path`) rather than staging the entire working tree (`git add .`), preventing unrelated repository modifications from being accidentally committed. Sets committer identity (`user.name` and `user.email`), checks `git status --porcelain -- <paths>` to perform a clean no-op when no changes exist, commits multi-paragraph messages (`git -m`), pushes upstream, and standardizes return codes per ADR-035.

## Phase — required
rjm:ship

## Inputs — required
- Command-line arguments:
  - `--path`: "Path to stage and watch for changes. Repeatable." — scripts/ci/commit_and_push.py:70
  - `--message`: "Commit message paragraph, in order. Repeatable (maps to git -m)." — scripts/ci/commit_and_push.py:76
  - `--user-name`: "git user.name to set." — scripts/ci/commit_and_push.py:78
  - `--user-email`: "git user.email to set." — scripts/ci/commit_and_push.py:79
- Git working tree status evaluated via `git status --porcelain -- <paths>` (scripts/ci/commit_and_push.py:57)
- Pre-configured Git credentials (e.g. authenticated via GitHub Actions environment)

## Outputs — required
- Git repository mutations: sets local `user.name` and `user.email`, stages files via `git add`, creates commit, and pushes to remote (scripts/ci/commit_and_push.py:88-102)
- Console output:
  - > "No changes to commit" — scripts/ci/commit_and_push.py:93
  - > "Changes committed and pushed" — scripts/ci/commit_and_push.py:111
- Process exit code: 0 (EXIT_SUCCESS), 1 (EXIT_GIT_FAILED), 2 (EXIT_USAGE) — scripts/ci/commit_and_push.py:28-30

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `working tree is dirty` — scripts/ci/commit_and_push.py:2 — defined here
- `committer identity` — scripts/ci/commit_and_push.py:5 — used here
- `ADR-006` — scripts/ci/commit_and_push.py:6 — used here
- `gh auth setup-git` — scripts/ci/commit_and_push.py:13 — used here
- `ADR-035` — scripts/ci/commit_and_push.py:16 — used here
- `EXIT_SUCCESS` — scripts/ci/commit_and_push.py:28 — defined here
- `EXIT_GIT_FAILED` — scripts/ci/commit_and_push.py:29 — defined here
- `EXIT_USAGE` — scripts/ci/commit_and_push.py:30 — defined here

## Structure
- Module docstring, extraction context, and exit code specification (lines 1-20)
- Imports and exit code constants (lines 22-30)
- `_git` and `_run` subprocess helpers (lines 33-52)
- `dirty` scoped porcelain status checker (lines 55-60)
- `build_parser` argument parser configuration (lines 63-80)
- `main` orchestration function (lines 83-113)
- Entrypoint execution (lines 115-117)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/commit_and_push.py`
- **language:** Python 3
- **lines:** 117
- **documented invocation:**
  > "Build the argument parser for the commit-and-push helper." — scripts/ci/commit_and_push.py:64
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/commit_and_push.py --path foo.txt --message "update foo" --user-name "Bot" --user-email "bot@example.com"`
- **stdout:**
  ```text
  No changes to commit
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "0  - Success: committed and pushed, or nothing to commit" — scripts/ci/commit_and_push.py:17
  - > "1  - Error: a git command failed" — scripts/ci/commit_and_push.py:18
  - > "2  - Error: usage/configuration (git binary missing)" — scripts/ci/commit_and_push.py:19
- **actual exit paths:**
  - `return EXIT_GIT_FAILED` — scripts/ci/commit_and_push.py:90
  - `return EXIT_SUCCESS` — scripts/ci/commit_and_push.py:94
  - `return EXIT_GIT_FAILED` — scripts/ci/commit_and_push.py:103
  - `return EXIT_USAGE` — scripts/ci/commit_and_push.py:106
  - `return EXIT_GIT_FAILED` — scripts/ci/commit_and_push.py:109
  - `return EXIT_SUCCESS` — scripts/ci/commit_and_push.py:112
  - `sys.exit(main())` — scripts/ci/commit_and_push.py:116
- **for validators/gates:** Can exit non-zero: exits 1 when git configuration, add, commit, or push commands fail, and exits 2 when the git executable cannot be found (`FileNotFoundError`). When executed on an unchanged file in a valid git repository, it exits 0 with "No changes to commit".
- **output matches documentation:** yes, safely scopes status and commit actions to designated paths only.

## Defects — required
none

## Observations
Enforces scoped staging hygiene: by requiring `--path` arguments and passing them explicitly to `git status --porcelain -- <paths>` and `git add -- <paths>`, the script ensures that concurrent file creation by background processes or temporary test outputs will not be accidentally staged and committed into the repository.

## Context cost
3903 bytes, ~976 tokens. Standard library only (`argparse`, `subprocess`, `sys`). Total context cost: 3903 bytes.
