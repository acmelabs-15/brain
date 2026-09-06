---
package: rjm
path: .github/scripts/safe_push_pr_branch.py
type: script
bytes: 14734
unit: inv-rjm-185
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: .github/scripts/safe_push_pr_branch.py, sha256: dda091d2fa928563a909463214253faad5af59d645c579fbfd63ed13509aff71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/safe_push_pr_branch.py

## Purpose — required, verbatim
> "Safe ``git push`` with explicit refspec and remote verification." — .github/scripts/safe_push_pr_branch.py:2

## Design intent — required
Prevents branch corruption and lost updates during automated pull request maintenance and autofix pushes (issue #3412). Standard git push commands often push bare branch names without confirming that the remote branch accepted only the intended commit. This tool requires the local HEAD to match the target branch, pushes an explicit object ID refspec (`<local_sha>:refs/heads/<branch>`), parses git porcelain output to verify that exactly one ref was updated, and executes a follow-up `git ls-remote` query to independently verify that the remote tip matches the local commit SHA. It also enforces that any `--force-with-lease` invocation explicitly supply `--expected-remote-sha`. Without this script, automated git push operations could overwrite remote branch changes or silently fail to deliver required autofixes.

## Phase — required
rjm:ship

## Inputs — required
Command-line arguments:
- `--branch`: str (required), expected branch name and push destination
- `--remote`: str (default: `origin`), remote repository name
- `--repo-root`: str (default: `.`), working directory for git operations
- `--expected-remote-sha`: str (optional), expected 40/64 character hex object ID for `--force-with-lease`
- `--force-with-lease`: bool (flag), enables `--force-with-lease=<dest>:<expected_remote_sha>` with `FORCE_PUSH_OK=1` environment override

## Outputs — required
- Structured JSON audit record written to stderr detailing branch, remote, refspecs, SHAs, process ID, transport flags, and error state
- GitHub Actions notice or error annotations: `::notice::pushed <branch> -> <remote> at <sha> (verified)` or `::error::safe push failed: <msg>`
- Exit code: 0 on verified push, 1 on verification failure, 2 on argument/usage error, 3 on git transport error

## Invokes — required
none

## Invoked by — required
- script scripts/ci/apply_ai_conflict_resolution.py — scripts/ci/apply_ai_conflict_resolution.py:6
- doc .agents/sessions/2026-07-29-session-3653-force-with-lease-pinned.json — .agents/sessions/2026-07-29-session-3653-force-with-lease-pinned.json:91

## Concepts named — required, verbatim
- `git push` — .github/scripts/safe_push_pr_branch.py:2 — used here
- `EXIT_OK` — .github/scripts/safe_push_pr_branch.py:24 — defined here
- `EXIT_VERIFICATION` — .github/scripts/safe_push_pr_branch.py:25 — defined here
- `EXIT_USAGE` — .github/scripts/safe_push_pr_branch.py:26 — defined here
- `EXIT_TRANSPORT` — .github/scripts/safe_push_pr_branch.py:27 — defined here
- `FORCE_PUSH_ESCAPE_ENV` — .github/scripts/safe_push_pr_branch.py:35 — defined here
- `is_full_object_id` — .github/scripts/safe_push_pr_branch.py:59 — used here
- `SafePushArgumentParser` — .github/scripts/safe_push_pr_branch.py:75 — defined here
- `SafePushError` — .github/scripts/safe_push_pr_branch.py:90 — defined here
- `PorcelainRef` — .github/scripts/safe_push_pr_branch.py:100 — defined here
- `PushAudit` — .github/scripts/safe_push_pr_branch.py:112 — defined here
- `safe_push` — .github/scripts/safe_push_pr_branch.py:291 — defined here

## Structure
- def _load_object_id_validator — .github/scripts/safe_push_pr_branch.py:38
- class SafePushArgumentParser — .github/scripts/safe_push_pr_branch.py:75
- class SafePushError — .github/scripts/safe_push_pr_branch.py:90
- class PorcelainRef — .github/scripts/safe_push_pr_branch.py:100
- class PushAudit — .github/scripts/safe_push_pr_branch.py:112
- def _run_git — .github/scripts/safe_push_pr_branch.py:133
- def _force_push_env — .github/scripts/safe_push_pr_branch.py:149
- def _git_stdout — .github/scripts/safe_push_pr_branch.py:167
- def _validate_branch_name — .github/scripts/safe_push_pr_branch.py:175
- def _current_branch — .github/scripts/safe_push_pr_branch.py:187
- def _head_sha — .github/scripts/safe_push_pr_branch.py:194
- def _assert_on_branch — .github/scripts/safe_push_pr_branch.py:198
- def _extract_new_sha — .github/scripts/safe_push_pr_branch.py:209
- def _parse_porcelain — .github/scripts/safe_push_pr_branch.py:222
- def _porcelain_refs_for_audit — .github/scripts/safe_push_pr_branch.py:247
- def _require_single_porcelain_ref — .github/scripts/safe_push_pr_branch.py:251
- def _ls_remote_sha — .github/scripts/safe_push_pr_branch.py:269
- def safe_push — .github/scripts/safe_push_pr_branch.py:291
- def _emit_audit — .github/scripts/safe_push_pr_branch.py:363
- def main — .github/scripts/safe_push_pr_branch.py:367

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/safe_push_pr_branch.py`, Python 3, 440 lines
- documented invocation: `python3 safe_push_pr_branch.py --branch <branch> [--remote origin] [--repo-root .]` (deduced from help and issue #3412 documentation)
- **executed:** yes
- actual command run: `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --help`
  abridged stdout:
  ```text
  usage: safe_push_pr_branch.py [-h] --branch BRANCH [--remote REMOTE]
                                [--repo-root REPO_ROOT]
                                [--expected-remote-sha EXPECTED_REMOTE_SHA]
                                [--force-with-lease]

  Push HEAD to a named branch with explicit refspec and remote verification
  (issue #3412).
  ```
  **actual exit code:** 0
- documented exit codes (`EXIT_OK = 0`, `EXIT_VERIFICATION = 1`, `EXIT_USAGE = 2`, `EXIT_TRANSPORT = 3` from `.github/scripts/safe_push_pr_branch.py:24-27`) vs actual exit paths in code:
  - `return exc.exit_code` at `.github/scripts/safe_push_pr_branch.py:399` (parser errors raise `SafePushError` with `EXIT_USAGE` = 2)
  - `return exc.exit_code` at `.github/scripts/safe_push_pr_branch.py:428` (caught `SafePushError` with exit code 1, 2, or 3)
  - `return EXIT_OK` at `.github/scripts/safe_push_pr_branch.py:435`
  - `raise SystemExit(main())` at `.github/scripts/safe_push_pr_branch.py:439`
- for validators/gates: can exit non-zero (verified with `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --branch non-existent-branch`, exit code 1; verified with `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --branch v2 --force-with-lease`, exit code 2)
- does the output match what the documentation claims: yes, safely parses branch inputs, enforces lease constraints, and verifies remote refs

## Defects — required
none

## Observations
Dynamically loads the object ID validator `is_full_object_id` from `scripts/validation/object_id.py` via `importlib.util`. Emits machine-readable JSON telemetry to stderr for every attempt, capturing process ID, requested refspec, old/new SHAs, and raw git transport output.

## Context cost
14734 bytes, approximately 3680 tokens.
