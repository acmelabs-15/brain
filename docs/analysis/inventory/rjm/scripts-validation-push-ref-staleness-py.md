---
package: rjm
path: scripts/validation/push_ref_staleness.py
type: script
bytes: 9045
unit: inv-rjm-302
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/push_ref_staleness.py

## Purpose — required, verbatim
> "Pre-push staleness check: detect when the remote ref advanced during the hook run." — scripts/validation/push_ref_staleness.py:2

## Design intent — required
Pre-push validation suites in large codebases can take several minutes to run (6-15 minutes). During that execution window, background automation such as merge bots or other contributors may push to the same remote branch ref, leading to a late push rejection (`cannot lock ref`) after the full test suite has already run. `push_ref_staleness.py` runs as an early guard in the pre-push sequence, reading ref push details from standard input (as provided by git to pre-push hooks). It queries the live remote ref using `git ls-remote` and verifies whether the remote branch has advanced beyond the local commit's ancestry chain. If an advance is detected, the script aborts immediately with exit code 3 (`External`), saving developer time. It also strictly validates hook arguments, refusing unexpanded Lefthook placeholders like `{1}` with exit code 2.

## Phase — required
rjm:test

## Inputs — required
- Push specifications provided over standard input by git pre-push hooks: `<local-ref> <local-sha> <remote-ref> <remote-sha>` — scripts/validation/push_ref_staleness.py:143, 191
- Optional CLI argument specifying the target git remote (defaults to `origin`) — scripts/validation/push_ref_staleness.py:41, 68
- Remote ref state queried live via git ls-remote (`_remote_sha`) — scripts/validation/push_ref_staleness.py:114
- Local git commit ancestry queried via git merge-base (`_is_ancestor`) — scripts/validation/push_ref_staleness.py:134

## Outputs — required
- Standard error diagnostics:
  - Unexpanded placeholder warning: `[push-ref-staleness] Hook argument` — scripts/validation/push_ref_staleness.py:94
  - Remote lookup error: `[push-ref-staleness] Remote lookup failed:` — scripts/validation/push_ref_staleness.py:213
  - Staleness notification: `[push-ref-staleness] Remote ref(s) advanced during this hook run.` — scripts/validation/push_ref_staleness.py:220
  - Itemized stale refs list — scripts/validation/push_ref_staleness.py:180
- Exit codes: 0 (clean/safe), 2 (unexpanded placeholder / usage error), 3 (remote advanced / external timeout), 4 (authentication error) — scripts/validation/push_ref_staleness.py:20, 21, 22, 24, 25, 125, 199, 207, 216, 229, 231

## Invokes — required
- command git — scripts/validation/push_ref_staleness.py:117
- command git — scripts/validation/push_ref_staleness.py:136

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `_DEFAULT_REMOTE` — scripts/validation/push_ref_staleness.py:41 — defined here
- `_UNEXPANDED_PLACEHOLDER` — scripts/validation/push_ref_staleness.py:51 — defined here
- `_AUTH_FAILURE_HINTS` — scripts/validation/push_ref_staleness.py:52 — defined here
- `RemoteLookupError` — scripts/validation/push_ref_staleness.py:60 — defined here
- `_resolve_remote` — scripts/validation/push_ref_staleness.py:68 — defined here
- `_run` — scripts/validation/push_ref_staleness.py:103 — defined here
- `_remote_sha` — scripts/validation/push_ref_staleness.py:114 — defined here
- `_is_ancestor` — scripts/validation/push_ref_staleness.py:134 — defined here
- `_stale_refs` — scripts/validation/push_ref_staleness.py:140 — defined here
- `main` — scripts/validation/push_ref_staleness.py:187 — defined here
- `Lefthook` — scripts/validation/push_ref_staleness.py:4 — used here
- `pre-push` — scripts/validation/push_ref_staleness.py:2 — used here
- `HEAD` — scripts/validation/push_ref_staleness.py:13 — used here
- `ADR-035` — scripts/validation/push_ref_staleness.py:17 — used here
- `origin` — scripts/validation/push_ref_staleness.py:41 — used here

## Structure
- Module docstring with purpose, exit codes, and usage — scripts/validation/push_ref_staleness.py:1
- Imports and module constants — scripts/validation/push_ref_staleness.py:35
- Class RemoteLookupError — scripts/validation/push_ref_staleness.py:60
- Function _resolve_remote — scripts/validation/push_ref_staleness.py:68
- Function _run — scripts/validation/push_ref_staleness.py:103
- Function _remote_sha — scripts/validation/push_ref_staleness.py:114
- Function _is_ancestor — scripts/validation/push_ref_staleness.py:134
- Function _stale_refs — scripts/validation/push_ref_staleness.py:140
- Function main — scripts/validation/push_ref_staleness.py:187
- Main entry point — scripts/validation/push_ref_staleness.py:234

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/push_ref_staleness.py`, language: Python, lines: 236
- documented invocation:
  - "uv run --frozen python scripts/validation/push_ref_staleness.py \"{1}\"" — scripts/validation/push_ref_staleness.py:28
  - "| python scripts/validation/push_ref_staleness.py" — scripts/validation/push_ref_staleness.py:32
- executed: yes
- actual command run: `python3 scripts/validation/push_ref_staleness.py </dev/null` and `echo "refs/heads/test 1111111111111111111111111111111111111111 refs/heads/test 2222222222222222222222222222222222222222" | python3 scripts/validation/push_ref_staleness.py "{1}"`
- abridged stdout:
  - Empty stdin run exited 0 with no output
  - Unexpanded placeholder argument run exited 2 with stderr: `[push-ref-staleness] Hook argument '{1}' is an unexpanded placeholder, not a remote name. The lefthook job must pass the pre-push remote as "{1}"; see issue #4634.`
- actual exit code: 0 (empty stdin), 2 (unexpanded placeholder)
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "0 - Remote ref matches expectation; safe to proceed" — scripts/validation/push_ref_staleness.py:20
    - "1 - Logic error (missing git)" — scripts/validation/push_ref_staleness.py:21
    - "2 - Configuration error: the hook argument is an unexpanded placeholder," — scripts/validation/push_ref_staleness.py:22
    - "3 - External: remote has advanced; push will be rejected; abort early" — scripts/validation/push_ref_staleness.py:24
    - "4 - Auth error" — scripts/validation/push_ref_staleness.py:25
  - Actual:
    - line 199: `return 0` (empty stdin / nothing to push)
    - line 207: `return 2` (hook argument is unexpanded placeholder)
    - line 216: `return error.exit_code` (RemoteLookupError: exit code 3 or 4)
    - line 229: `return 3` (stale refs detected)
    - line 231: `return 0` (clean / safe to proceed)
    - line 235: `raise SystemExit(main(sys.argv[1:]))`
- for validators/gates:
  - Can exit non-zero: yes (exit codes 2, 3, and 4)
  - Does it fail on the source repo's default branch: no, exits 0 when stdin is empty or up to date.
- does the output match what the documentation claims: yes, correctly handles stdin and enforces placeholder validation and staleness checks.

## Defects — required
- orphan — scripts/validation/push_ref_staleness.py:1 — not invoked by any in-scope lifecycle file (invoked only by out-of-scope lefthook.yml:477 and test files)
- doc-drift — scripts/validation/push_ref_staleness.py:21 — docstring lists exit code 1 for logic error (missing git), but subprocess failure in `_remote_sha` raises `RemoteLookupError` with exit code 3 or 4, with no code path returning 1

## Observations
- Defends against a subtle git hook race condition (issue #4634) where unexpanded placeholders like `{1}` or `{remote}` could silently pass without verifying anything.
- Drains standard input before validating arguments (line 201) to prevent broken pipe errors on the writer side.

## Context cost
9,045 bytes, 236 lines, ~2,260 tokens.
