---
package: rjm
path: scripts/validation/push_ref_staleness.py
type: script
bytes: 9045
unit: inv-rjm-302
in_scope_via: lefthook.yml
aliases: []
memo_inputs:
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/push_ref_staleness.py

## Purpose — required, verbatim
> "Pre-push staleness check: detect when the remote ref advanced during the hook run." — scripts/validation/push_ref_staleness.py:2

## Design intent — required
Prevents wasted execution time during long pre-push hook runs by detecting when a target remote ref has moved ahead of the local branch before the full hook suite executes. The pre-push hook suite in rjm can take between 6 and 15 minutes to finish; if another process or automated bot merges into the remote branch during that window, git ultimately rejects the push at completion time with a non-fast-forward ref locking failure. This script intercepts push ref information from standard input (`<local-ref> <local-sha> <remote-ref> <remote-sha>`), queries the remote repository in real time using `git ls-remote`, and verifies via `git merge-base --is-ancestor` whether the local branch contains the remote commit. If the remote has advanced past local HEAD, it immediately aborts with exit code 3 (external error per ADR-035), saving the entire 6–15 minute hook window. Additionally, it addresses issue #4634 by detecting unexpanded hook placeholders (`{1}` or `{remote}`) and failing fast with exit code 2 (configuration error), rather than silently passing without checking anything.

## Phase — required
none

## Inputs — required
- Positional command-line argument `argv[0]` indicating the remote name or URL; defaults to `origin` when omitted — scripts/validation/push_ref_staleness.py:41, 89-91
- Standard input stream providing push ref tuples in format `<local-ref> <local-sha> <remote-ref> <remote-sha>` — scripts/validation/push_ref_staleness.py:191-196
- Remote git reference query via `git ls-remote` subprocess call — scripts/validation/push_ref_staleness.py:117
- Local git commit ancestry check via `git merge-base --is-ancestor` subprocess call — scripts/validation/push_ref_staleness.py:136

## Outputs — required
- Standard error diagnostic when hook argument is an unexpanded placeholder — scripts/validation/push_ref_staleness.py:93-98
- Standard error diagnostic when remote lookup fails — scripts/validation/push_ref_staleness.py:212-215
- Standard error notification listing stale refs when remote has advanced — scripts/validation/push_ref_staleness.py:220-228
- Exit code 0 when remote ref matches expectation or no refs to check — scripts/validation/push_ref_staleness.py:20, 199, 231
- Exit code 2 on configuration error when hook argument is an unexpanded placeholder — scripts/validation/push_ref_staleness.py:22, 207
- Exit code 3 on external error when remote advanced or `git ls-remote` query timed out or failed — scripts/validation/push_ref_staleness.py:24, 120, 126, 229
- Exit code 4 on authentication error during remote lookup — scripts/validation/push_ref_staleness.py:25, 125

## Invokes — required
none

## Invoked by — required
- config lefthook.yml — lefthook.yml:477

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/push_ref_staleness.py:17 — used here
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

## Structure
- Docstring and ADR-035 exit code specification — scripts/validation/push_ref_staleness.py:2-33
- Constants and regex pattern definitions — scripts/validation/push_ref_staleness.py:41-57
- `RemoteLookupError` exception class definition — scripts/validation/push_ref_staleness.py:60-66
- `_resolve_remote` helper function — scripts/validation/push_ref_staleness.py:68-100
- `_run` subprocess wrapper function — scripts/validation/push_ref_staleness.py:103-111
- `_remote_sha` query function — scripts/validation/push_ref_staleness.py:114-132
- `_is_ancestor` graph query function — scripts/validation/push_ref_staleness.py:134-137
- `_stale_refs` staleness evaluation function — scripts/validation/push_ref_staleness.py:140-184
- `main` CLI entrypoint and control flow — scripts/validation/push_ref_staleness.py:187-231
- System exit execution guard — scripts/validation/push_ref_staleness.py:234-235

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/push_ref_staleness.py`, language: Python, lines: 236
- documented invocation:
  - "uv run --frozen python scripts/validation/push_ref_staleness.py \"{1}\"" — scripts/validation/push_ref_staleness.py:28
  - "echo \"refs/heads/mybranch <local-sha> refs/heads/mybranch <remote-sha>\" \\" — scripts/validation/push_ref_staleness.py:31
  - "| python scripts/validation/push_ref_staleness.py" — scripts/validation/push_ref_staleness.py:32
- executed: yes
- actual command run:
  1. `python3 scripts/validation/push_ref_staleness.py </dev/null`
     actual stdout: (empty)
     actual exit code: 0
  2. `echo "refs/heads/foo 1234567890123456789012345678901234567890 refs/heads/foo 1234567890123456789012345678901234567890" | python3 scripts/validation/push_ref_staleness.py "{1}"`
     actual stderr: `[push-ref-staleness] Hook argument '{1}' is an unexpanded placeholder, not a remote name. The lefthook job must pass the pre-push remote as "{1}"; see issue #4634.`
     actual exit code: 2
  3. `echo "refs/heads/mybranch 1111111111111111111111111111111111111111 refs/heads/mybranch 2222222222222222222222222222222222222222" | python3 scripts/validation/push_ref_staleness.py`
     actual stdout: (empty; remote ref not found, treated as new branch)
     actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "0 - Remote ref matches expectation; safe to proceed" — scripts/validation/push_ref_staleness.py:20
    - "1 - Logic error (missing git)" — scripts/validation/push_ref_staleness.py:21
    - "2 - Configuration error: the hook argument is an unexpanded placeholder," — scripts/validation/push_ref_staleness.py:22
    - "3 - External: remote has advanced; push will be rejected; abort early" — scripts/validation/push_ref_staleness.py:24
    - "4 - Auth error" — scripts/validation/push_ref_staleness.py:25
  - Actual exit paths:
    - Exit 0: `return 0` at scripts/validation/push_ref_staleness.py:199 and scripts/validation/push_ref_staleness.py:231
    - Exit 1: Documented for missing git, but no explicit exit path exists in code (missing git raises FileNotFoundError from subprocess.run)
    - Exit 2: `return 2` at scripts/validation/push_ref_staleness.py:207
    - Exit 3: `return 3` at scripts/validation/push_ref_staleness.py:229; and `return error.exit_code` at scripts/validation/push_ref_staleness.py:216 from timeout (line 120) or ls-remote failure (line 126)
    - Exit 4: `return error.exit_code` at scripts/validation/push_ref_staleness.py:216 from auth failure hints (line 125)
- for validators/gates:
  - Can it exit non-zero: yes (exits 2 on unexpanded placeholder, 3 on stale refs or ls-remote failure/timeout, 4 on auth error)
  - Does it fail on the source repo's own default branch: no, cleanly exits 0 with empty stdin or non-stale/new branch pushes
- does output match what the documentation claims: yes, rejects unexpanded placeholders with exit code 2 and warning, and passes cleanly on non-stale branch inputs.

## Defects — required
- `doc-drift` · scripts/validation/push_ref_staleness.py:21 · Docstring documents exit code `1 - Logic error (missing git)`, but no explicit code path returns or raises exit code 1; missing git raises unhandled `FileNotFoundError` from `subprocess.run`.

## Observations
- Intercepts git pre-push updates early in lefthook execution to fail fast before 6–15 minutes of pre-push checks run.
- Implements explicit protection against issue #4634, ensuring unexpanded hook placeholders like `{1}` or `{remote}` cause exit code 2 rather than silently skipping checks.
- Sets a 10-second timeout per `git ls-remote` call to prevent network stalls from hanging the pre-push hook suite indefinitely.

## Context cost
9045 bytes, 236 lines, ~2260 tokens. Does not invoke additional files at runtime.
