---
package: rjm
path: scripts/validation/check_placeholder_identity.py
type: script
bytes: 6450
unit: inv-rjm-280
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_placeholder_identity.py, sha256: b226e1a01102b85939b491881b102f5b978fd226c21b697a0b89c8ea69506383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_placeholder_identity.py

## Purpose — required, verbatim
> "Reject commits in a push range whose author/committer matches the placeholder denylist." — scripts/validation/check_placeholder_identity.py:2

## Design intent — required
Prevents dummy test author or committer identities (such as `test@test.com`) from leaking into remote git repositories. When integration tests or test fixtures run locally, they often create temporary git repositories and configure dummy git user identities. If a fixture writes git configuration without isolating the current working directory or environment, these placeholder identities can accidentally contaminate developer commits (issue #2466). Serving as a pre-push validation gate in Lefthook, this script inspects the commit range using `git log`, compares author and committer names and emails against a denylist, and blocks the push if placeholder identities are detected, while exempting benign characterization tests running in ephemeral pytest temporary directories (`pytest-of-*`).

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--push-range` (required git range specification — scripts/validation/check_placeholder_identity.py:170)
  - `--repo-root` (default repository root path — scripts/validation/check_placeholder_identity.py:174)
- Git log output:
  - Formatted commit metadata: `git log --format=%H|%an|%ae|%cn|%ce` run in `repo_root` (scripts/validation/check_placeholder_identity.py:79)
- Identity verification helper:
  - Function `is_placeholder_identity` imported from `scripts.github_core.placeholder_identity` (scripts/validation/check_placeholder_identity.py:128)
- Path environment check:
  - Inspection of `tempfile.gettempdir()` for `pytest-of-` directory layout (scripts/validation/check_placeholder_identity.py:39)

## Outputs — required
- Standard output:
  - `SKIP: placeholder identity check (repo is under pytest tmp_path: <repo_root>)` when running in pytest tmp directory (scripts/validation/check_placeholder_identity.py:131)
- Standard error diagnostics:
  - `ERROR: git log failed for range '<push_range>': <stderr>` (scripts/validation/check_placeholder_identity.py:90)
  - `ERROR: commit <short>: placeholder identity in author: <name> <<email>>` (scripts/validation/check_placeholder_identity.py:141-142)
  - `ERROR: commit <short>: placeholder identity in committer: <name> <<email>>` (scripts/validation/check_placeholder_identity.py:145-146)
  - Error banner explaining remediation steps and issue #2466 reference (scripts/validation/check_placeholder_identity.py:153-157)
- Structured result:
  - `CheckResult` named tuple containing returncode, stdout, and stderr (scripts/validation/check_placeholder_identity.py:115, 121)

## Invokes — required
- script placeholder_identity — scripts/validation/check_placeholder_identity.py:128

## Invoked by — required
- script check_placeholder_identity — scripts/validation/git_hook_policy.py:7711

## Concepts named — required, verbatim
- `pytest` — scripts/validation/check_placeholder_identity.py:5 — used here
- `ADR-035` — scripts/validation/check_placeholder_identity.py:9 — used here
- `_CommitIdentity` — scripts/validation/check_placeholder_identity.py:62 — defined here
- `CheckResult` — scripts/validation/check_placeholder_identity.py:115 — defined here
- `Lefthook` — scripts/validation/check_placeholder_identity.py:164 — used here

## Structure
- Reject commits in a push range whose author/committer matches the placeholder denylist. (module docstring, lines 2-14)
- Path setup and sys.path adjustments (lines 15-34)
- Ephemeral test environment detection heuristic (_is_pytest_tmp) (lines 36-60)
- Commit identity tuple and git log parsing (_CommitIdentity, _list_commits) (lines 62-113)
- Check execution engine (CheckResult, run_check) (lines 115-161)
- CLI argument parsing and main entry point (main) (lines 163-193)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_placeholder_identity.py`, language: Python, lines: 193
- documented invocation: none (no explicit CLI example in docstring; main entry point at line 163)
- **executed:** yes
- actual command run: `python3 scripts/validation/check_placeholder_identity.py --push-range HEAD~1..HEAD`
- abridged stdout: (clean execution, no output)
- **actual exit code:** 0
- documented exit codes:
  - "0 - All commits in range are clean (or check was skipped)" — scripts/validation/check_placeholder_identity.py:10
  - "1 - One or more commits matched the placeholder denylist" — scripts/validation/check_placeholder_identity.py:11
  - "2 - Config/setup error (bad args, can't read git)" — scripts/validation/check_placeholder_identity.py:12
  - actual exit paths:
    - 0: `return CheckResult(returncode=0, ...)` at line 132 (pytest tmp skip) and line 160 (clean range)
    - 1: `return CheckResult(returncode=1, ...)` at line 159 (violations found)
    - 2: `sys.exit(2)` at line 93 (git log failure) and CLI argument parsing error (line 180)
- for validators/gates: can it exit non-zero? Yes, exits 1 when commits with placeholder identities are detected, 2 on git or argument errors. Does it fail on the source repo's own default branch? No, passes with exit code 0.
- does the output match what the documentation claims? Yes, returns 0 for clean commit ranges.

## Defects — required
none

## Observations
Acts as a pre-push hook gate managed by Lefthook to prevent developer git identity contamination. Includes a conservative exemption heuristic that skips checking when the repository path is inside pytest's temporary directory (`pytest-of-`), ensuring that characterization test suites testing git identity logic do not trigger false positives.

## Context cost
`check_placeholder_identity.py` is 6,450 bytes. Invokes `scripts/github_core/placeholder_identity.py` (2,735 bytes). Total context cost: ~9,185 bytes (~2,296 tokens).
