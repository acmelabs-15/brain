---
package: rjm
path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py
type: script
bytes: 21648
unit: inv-rjm-117
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/doc-accuracy/scripts/pr_snapshot.py

## Purpose — required, verbatim
> "Immutable PR snapshot for doc-accuracy review" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:3

## Design intent — required
Pins pull request code review and documentation verification to an exact, immutable commit pair (head and base commit SHAs) isolated in temporary bare repositories and detached worktrees, protecting against review-time mutations such as force pushes, head movements, base branch shifts, or repository transfers. Solves the race condition and security vulnerabilities where code or documentation under review is modified during or after verification, or where untrusted repository content might trigger malicious git hooks, filters, or submodule exploits. Without it, automated doc-accuracy audits on PRs would be susceptible to TOCTOU (time-of-check to time-of-use) drift, shallow clone inconsistencies, and git environment variable injection from caller checkouts.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--owner`: "Repository owner" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:573
  - `--repo`: "Repository name" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:574
  - `--pull-request`: "PR number" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:576
  - `--output-dir`: "Directory for snapshot (default: auto temp dir)" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:582
  - `--check-stale`: "Re-check PR identity and exit 1 if changed" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:587
  - `--identity-file`: "Path to previously captured identity JSON (for --check-stale)" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:593
  - `--run-scanner`: "Run doc-accuracy scanner against snapshot after capture" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:598
  - `--verify-caller`: "Verify this repo path is unchanged after capture" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:604
- GitHub pull request API metadata via `gh api repos/{owner}/{repo}/pulls/{number}` (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:318)
- Remote git repository objects fetched via `https://github.com/{owner}/{repo}.git` (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:378, 398-406)
- Local caller repository working tree status inspected via `git status --porcelain` (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:523)

## Outputs — required
- In capture mode: JSON object on stdout containing:
  - `status`: "captured" (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:650)
  - `identity`: serialized PrIdentity mapping (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:651)
  - `worktree_path`: path to detached git worktree (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:652)
  - `changed_paths`: list of paths changed between base and head (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:653)
  - `changed_path_count`: integer count of changed paths (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:654)
  - `scanner_exit_code`: exit code of doc-accuracy scanner if `--run-scanner` is specified (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:657)
- In stale-check mode: JSON object on stdout reporting current status and identity (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:630)
- On failure: JSON error payload on stderr reporting failure details (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:662-663)
- Filesystem artifacts created:
  - Isolated bare repository directory `bare.git` (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:375, 381)
  - Detached worktree directory `worktree` checked out at `head_sha` (.claude/skills/doc-accuracy/scripts/pr_snapshot.py:376, 438)

## Invokes — required
- script doc_accuracy.py — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:542

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `doc-accuracy` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:3 — used here
- `ADR-035` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:19 — used here
- `EXIT_OK` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:44 — defined here
- `EXIT_VERIFY` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:45 — defined here
- `EXIT_CONFIG` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:46 — defined here
- `EXIT_EXTERNAL` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:47 — defined here
- `EXIT_AUTH` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:48 — defined here
- `PrIdentity` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:112 — defined here
- `Snapshot` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:151 — defined here
- `SnapshotError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:173 — defined here
- `ConfigError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:181 — defined here
- `ExternalError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:188 — defined here
- `AuthError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:195 — defined here
- `VerifyError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:202 — defined here
- `StaleError` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:209 — defined here
- `resolve_pr_identity` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:302 — defined here
- `capture_snapshot` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:363 — defined here
- `check_staleness` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:490 — defined here
- `verify_caller_unchanged` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:520 — defined here
- `run_scanner` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:532 — defined here

## Structure
none (python script; functions and classes: EXIT_OK, EXIT_VERIFY, EXIT_CONFIG, EXIT_EXTERNAL, EXIT_AUTH, _GIT_TIMEOUT, _OWNER_RE, _REPO_RE, _SHA_RE, _GIT_ENV_DENY_EXACT, _GIT_ENV_DENY_PREFIXES, _GIT_ENV_FORCE, _git_env, PrIdentity, Snapshot, SnapshotError, ConfigError, ExternalError, AuthError, VerifyError, StaleError, _validate_owner, _validate_repo, _validate_sha, _run_git, resolve_pr_identity, capture_snapshot, _verify_object, _compute_changed_paths, check_staleness, verify_caller_unchanged, run_scanner, _build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/doc-accuracy/scripts/pr_snapshot.py`, language: Python 3, lines: 669
- documented invocation: none (omitted from SKILL.md; CLI usage documented in argparse options)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py --help`
  abridged stdout:
  ```text
  usage: pr_snapshot.py [-h] --owner OWNER --repo REPO
                        --pull-request PULL_REQUEST [--output-dir OUTPUT_DIR]
                        [--check-stale] [--identity-file IDENTITY_FILE]
                        [--run-scanner] [--verify-caller VERIFY_CALLER]

  Capture immutable PR snapshot for doc-accuracy review
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented in `.claude/skills/doc-accuracy/scripts/pr_snapshot.py:20-24`:
  - `0: Success` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:20
  - `1: Verification failure (SHA mismatch, shallow, stale, caller dirty)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:21
  - `2: Configuration error (bad args, missing dependency)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:22
  - `3: External failure (network, GitHub API, timeout)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:23
  - `4: Authentication error (token expired, permission denied)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:24
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:668
  - `return EXIT_CONFIG` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:626
  - `return EXIT_OK` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:631
  - `return EXIT_OK` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:659
  - `return exc.exit_code` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:664
- for validators/gates: can it exit non-zero? Yes, returns 1, 2, 3, or 4 on error or verification failure. Does it fail on the source repo's own default branch? Requires active PR number and network access to GitHub API, exiting 2 without required arguments (`--owner`, `--repo`, `--pull-request`).
- does the output match what the documentation claims? Yes, CLI flags and JSON error/output structures conform to the documented ADR-035 exit code scheme and argparse help.

## Defects — required
- `orphan` · .claude/skills/doc-accuracy/scripts/pr_snapshot.py:1 · Script is bundled within the doc-accuracy skill scripts directory but is never invoked or referenced by .claude/skills/doc-accuracy/SKILL.md or any other in-scope manifest file.

## Observations
- Rigorous defense-in-depth sanitization: strips all git repository environment variables (`GIT_DIR`, `GIT_WORK_TREE`, etc.), disables hooks (`core.hooksPath=/dev/null`), disables filters and submodules, and verifies objects directly via git object graph hashes.
- Two-phase staleness check: resolves PR identity initially, captures snapshot, and re-checks full PR identity (head SHA, base SHA, base branch, head repo, base repo) before publishing to prevent TOCTOU race conditions.
- Uses `-z` NUL-delimited output for `diff-tree` to handle Unicode and newline paths safely.

## Context cost
21,648 bytes (~5,400 tokens).
