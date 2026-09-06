---
package: rjm
path: scripts/validation/stale_script_refs.py
type: script
bytes: 6298
unit: inv-rjm-307
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/stale_script_refs.py

## Purpose — required, verbatim
> "Detect command-style references to removed tracked scripts." — scripts/validation/stale_script_refs.py:2

## Design intent — required
Prevents broken documentation and stale instructions by scanning tracked repository documents (`*.md`, `*.yml`, `*.yaml`) for command-style references pointing to script files that no longer exist in git tracking. As scripts are renamed, refactored, or deleted, references in markdown prose, workflow definitions, and agent instructions often linger undetected. The validator uses regular expressions to extract script references (specifically PowerShell scripts), normalizes paths, filters out historical directories (`.agents/archive/`, `.agents/sessions/`, `.serena/`, etc.) and allowlisted exceptions, and compares extracted targets against `git ls-files`. When untracked script references are found, it reports them formatted with file, line number, and reference path, returning exit code 1 to catch broken references before pull request submission.

## Phase — required
none

## Inputs — required
- CLI option `--repo-root`: Repository root path (default: `.`) — scripts/validation/stale_script_refs.py:175
- CLI option `--allowlist`: Allowlist file, relative to repo root unless absolute (default: `scripts/validation/stale_script_refs_allowlist.txt`) — scripts/validation/stale_script_refs.py:178
- Tracked documentation files discovered via `git ls-files` matching glob patterns `DOC_GLOBS` — scripts/validation/stale_script_refs.py:13
- Git tracked files discovered via `git_ls_files` — scripts/validation/stale_script_refs.py:73

## Outputs — required
- Formatted finding strings on stdout from `Finding.format()`: `{self.file}:{self.line}:{self.ref}` — scripts/validation/stale_script_refs.py:55
- Error messages on stderr: `stale_script_refs:` on filesystem or git failure — scripts/validation/stale_script_refs.py:197
- Exit code 0: No stale script references detected — scripts/validation/stale_script_refs.py:203
- Exit code 1: Stale script references detected — scripts/validation/stale_script_refs.py:203
- Exit code 2: Command error running git or reading allowlist — scripts/validation/stale_script_refs.py:198

## Invokes — required
none

## Invoked by — required
- script validate_stale_script_refs — scripts/validation/pre_pr_sequence.py:106
- script validate_stale_script_refs — scripts/validation/pre_pr.py:141

## Concepts named — required, verbatim
- `DOC_GLOBS` — scripts/validation/stale_script_refs.py:13 — defined here
- `HISTORICAL_ROOTS` — scripts/validation/stale_script_refs.py:14 — defined here
- `DEFAULT_ALLOWLIST` — scripts/validation/stale_script_refs.py:29 — defined here
- `PWSH_REF` — scripts/validation/stale_script_refs.py:31 — defined here
- `RUN_REF` — scripts/validation/stale_script_refs.py:32 — defined here
- `BARE_REF` — scripts/validation/stale_script_refs.py:36 — defined here
- `FENCE` — scripts/validation/stale_script_refs.py:42 — defined here
- `Finding` — scripts/validation/stale_script_refs.py:46 — defined here
- `normalize_ref` — scripts/validation/stale_script_refs.py:58 — defined here
- `is_historical_path` — scripts/validation/stale_script_refs.py:68 — defined here
- `git_ls_files` — scripts/validation/stale_script_refs.py:73 — defined here
- `load_allowlist` — scripts/validation/stale_script_refs.py:90 — defined here
- `is_allowed` — scripts/validation/stale_script_refs.py:103 — defined here
- `extract_refs` — scripts/validation/stale_script_refs.py:113 — defined here
- `find_stale_refs` — scripts/validation/stale_script_refs.py:126 — defined here
- `validate_stale_script_refs` — scripts/validation/stale_script_refs.py:164 — defined here
- `build_parser` — scripts/validation/stale_script_refs.py:172 — defined here
- `main` — scripts/validation/stale_script_refs.py:184 — defined here

## Structure
- Shebang and module docstring — scripts/validation/stale_script_refs.py:1-3
- Glob, historical root constants, and regex patterns — scripts/validation/stale_script_refs.py:13-43
- Finding data class — scripts/validation/stale_script_refs.py:45-56
- Reference normalization and historical path filter — scripts/validation/stale_script_refs.py:58-71
- Git tracked files retrieval and allowlist loader — scripts/validation/stale_script_refs.py:73-111
- Reference extraction and stale reference scanner — scripts/validation/stale_script_refs.py:113-162
- Gate validation function and CLI main entry point — scripts/validation/stale_script_refs.py:164-208

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/stale_script_refs.py`, language: Python 3, lines: 208
- documented invocation:
  - "Detect stale command-style script refs." — scripts/validation/stale_script_refs.py:174
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/stale_script_refs.py --repo-root sources/rjm`
- abridged stdout: (empty)
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "Detect command-style references to removed tracked scripts." — scripts/validation/stale_script_refs.py:2
  - Actual exit paths:
    - line 198: `return 2` on `OSError` or `subprocess.CalledProcessError`
    - line 203: `return 1 if findings else 0`
    - line 207: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes, exits 1 if untracked script references are found, and exits 2 on OS/git errors
  - does it fail on the source repo's own default branch: no, exits 0 with no stale references detected
- does the output match what the documentation claims: yes, scans documentation and exits 0 cleanly when no stale references exist

## Defects — required
- missing-path · scripts/validation/stale_script_refs.py:29 · Default allowlist file scripts/validation/stale_script_refs_allowlist.txt is missing from the repository.
- doc-drift · scripts/validation/stale_script_refs.py:2 · Docstring asserts generic detection of command-style references to removed scripts, but regular expressions exclusively match PowerShell files (.ps1, .psm1).

## Observations
- The `HISTORICAL_ROOTS` tuple defined on lines 14-28 is imported as a shared historical exempt directory standard by other validators including `scripts/validation/check_adr_links.py` and `scripts/validation/check_citation_freshness.py`.
- Correctly parses multi-line code blocks by tracking `in_fence` state toggled by triple backtick regex match.

## Context cost
6298 bytes, 208 lines, ~1575 tokens.
