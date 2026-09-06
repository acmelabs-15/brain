---
package: rjm
path: scripts/ci/verify_github_auth.py
type: script
bytes: 3590
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_github_auth.py

## Purpose — required, verbatim
> "Verify GitHub CLI authentication for ai-review diagnostics." — scripts/ci/verify_github_auth.py:1

## Design intent — required
Pre-flight diagnostics check for GitHub Actions workflows executing AI review operations. It validates GitHub CLI (`gh`) authentication and API accessibility, distinguishing between actionable credential errors (`EXIT_LOGIC = 1`) and transient external conditions like GitHub rate limits or transport errors (`EXIT_EXTERNAL = 3`). This distinction prevents operators from needlessly rotating working credentials during external platform disruptions (issue #3139).

## Phase — required
cross-phase

## Inputs — required
- Ambient execution environment and `GITHUB_WORKSPACE` environment variable — scripts/ci/verify_github_auth.py:11-14
- GitHub CLI authentication state via `gh auth status` command execution — scripts/ci/verify_github_auth.py:79
- GitHub API endpoint connectivity via `gh api user -q .login` execution — scripts/ci/verify_github_auth.py:90

## Outputs — required
- Status logs and GitHub Actions annotations (`::error::`, `::warning::`) to stdout/stderr — scripts/ci/verify_github_auth.py:68,72,78,89,100
- Process exit code: 0 on success, 1 on credential failure, 2 on usage error, 3 on external/transient failure — scripts/ci/verify_github_auth.py:26-29

## Invokes — required
- script scripts.github_core.api — scripts/ci/verify_github_auth.py:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/verify_github_auth.py:1 — used here
- `GhAuthStatus` — scripts/ci/verify_github_auth.py:22 — used here
- `classify_gh_failure_text` — scripts/ci/verify_github_auth.py:23 — used here
- `EXIT_OK` — scripts/ci/verify_github_auth.py:26 — defined here
- `EXIT_LOGIC` — scripts/ci/verify_github_auth.py:27 — defined here
- `EXIT_CONFIG` — scripts/ci/verify_github_auth.py:28 — defined here
- `EXIT_EXTERNAL` — scripts/ci/verify_github_auth.py:29 — defined here
- `CommandResult` — scripts/ci/verify_github_auth.py:33 — defined here

## Structure
- CommandResult dataclass
- run_command(argv: Sequence[str]) -> CommandResult
- _report_failure(stage: str, result: CommandResult, scope_hint: str) -> int
- verify_github_auth(runner: Callable[[Sequence[str]], CommandResult]) -> int
- main(argv: Sequence[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/verify_github_auth.py`, Python 3, 113 lines
- **documented invocation:**
  > "Verify GitHub CLI authentication for ai-review diagnostics." — scripts/ci/verify_github_auth.py:1
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/verify_github_auth.py`
- **actual exit code:** 0
- **abridged stdout:**
```
Verifying GitHub authentication...
github.com
  ✓ Logged in to github.com account loriensleafs (keyring)
Testing API access...
loriensleafs
Authentication verified successfully
```
- **documented exit codes:**
  - `EXIT_OK = 0` — scripts/ci/verify_github_auth.py:26
  - `EXIT_LOGIC = 1` — scripts/ci/verify_github_auth.py:27
  - `EXIT_CONFIG = 2` — scripts/ci/verify_github_auth.py:28
  - `EXIT_EXTERNAL = 3` — scripts/ci/verify_github_auth.py:29
  vs. actual exit paths:
  - `scripts/ci/verify_github_auth.py:70`: `return EXIT_LOGIC` (when `status is GhAuthStatus.INVALID_CREDENTIALS`)
  - `scripts/ci/verify_github_auth.py:74`: `return EXIT_EXTERNAL` (when auth check or API access fails due to external condition)
  - `scripts/ci/verify_github_auth.py:101`: `return EXIT_OK` (when both authentication and API checks succeed)
  - `scripts/ci/verify_github_auth.py:108`: `return EXIT_CONFIG` (when `argv` is provided to `main`)
  - `scripts/ci/verify_github_auth.py:112`: `raise SystemExit(main())`
- **validators/gates:** can exit non-zero: yes (exits 1 on bad credentials, 2 on arguments provided, 3 on external/transient failures). Fails on source repo default branch: no (succeeds when GitHub CLI is authenticated).
- **output match:** yes, verifies both CLI status and API user login query, printing clear diagnostic warnings or errors.

## Defects — required
- script-bug · scripts/ci/verify_github_auth.py:112 · `main()` is invoked without arguments (`raise SystemExit(main())`), so `sys.argv[1:]` is never passed to `main(argv)` and the CLI argument check at lines 106-108 cannot be triggered from the command line.

## Observations
The separation of logic errors (invalid credentials) from external network/rate-limit issues reflects sophisticated CI failure classification (ADR-035), ensuring automated retry logic or alerts do not prompt false credential rotations.

## Context cost
File size: 3590 bytes (~900 tokens). Loads `scripts.github_core.api` (stdlib only).
