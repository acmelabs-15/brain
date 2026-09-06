---
package: rjm
path: scripts/validation/sha_pinning.py
type: script
bytes: 9946
unit: inv-rjm-304
in_scope_via: .github/workflows/validate-generated-agents.yml
aliases: []
memo_inputs:
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/sha_pinning.py

## Purpose — required, verbatim
> "Validate that all GitHub Actions are pinned to commit SHA, not version tags." — scripts/validation/sha_pinning.py:2

## Design intent — required
Enforces security constraints requiring all GitHub Actions in `.github/workflows/` and `.github/actions/` to be pinned to immutable 40-character commit SHAs instead of mutable semver tags (e.g. `@v4`). Mutable tags introduce supply chain vulnerabilities where a compromised action release or tag repoint could execute arbitrary code in CI pipelines. The script supports multiple output formats (console, markdown, json) and can run in non-enforcing local mode (returning 0 with warning logs) or CI enforcement mode (`--ci`, exiting 1 on violations) following ADR-035.

## Phase — required
none

## Inputs — required
- CLI options: `--path` (scan base path, default `.`), `--ci` (fail on violation), `--format` (`console`, `markdown`, `json`) — scripts/validation/sha_pinning.py:265, 271, 277
- Environment variable `NO_COLOR` — scripts/validation/sha_pinning.py:43
- Environment variable `SCAN_PATH` — scripts/validation/sha_pinning.py:267
- Environment variable `CI` — scripts/validation/sha_pinning.py:273
- Environment variable `OUTPUT_FORMAT` — scripts/validation/sha_pinning.py:280
- Workflow directory `workflows` — scripts/validation/sha_pinning.py:65
- Actions directory `actions` — scripts/validation/sha_pinning.py:66

## Outputs — required
- Console, markdown, or JSON formatted scan report on standard output — scripts/validation/sha_pinning.py:118, 168, 219, 319
- Standard error diagnostic message on missing directory path — scripts/validation/sha_pinning.py:293
- Exit code 0 (success or non-CI mode), exit code 1 (violations found with `--ci`), or exit code 2 (path not found) — scripts/validation/sha_pinning.py:294, 322, 323

## Invokes — required
none

## Invoked by — required
- script sha_pinning.py — .github/workflows/validate-generated-agents.yml:239
- script sha_pinning — scripts/validation/git_hook_policy.py:58

## Concepts named — required, verbatim
- `VERSION_TAG_PATTERN` — scripts/validation/sha_pinning.py:31 — defined here
- `LOCAL_ACTION_PATTERN` — scripts/validation/sha_pinning.py:40 — defined here
- `Violation` — scripts/validation/sha_pinning.py:52 — defined here
- `find_workflow_files` — scripts/validation/sha_pinning.py:63 — defined here
- `scan_file` — scripts/validation/sha_pinning.py:81 — defined here
- `scan_all` — scripts/validation/sha_pinning.py:106 — defined here
- `format_console` — scripts/validation/sha_pinning.py:118 — defined here
- `format_markdown` — scripts/validation/sha_pinning.py:168 — defined here
- `format_json` — scripts/validation/sha_pinning.py:219 — defined here
- `_FORMATTERS` — scripts/validation/sha_pinning.py:253 — defined here
- `build_parser` — scripts/validation/sha_pinning.py:260 — defined here
- `main` — scripts/validation/sha_pinning.py:286 — defined here

## Structure
- Shebang, docstring, and ADR-035 exit code documentation — scripts/validation/sha_pinning.py:1-15
- Imports and SemVer/local action regex patterns — scripts/validation/sha_pinning.py:16-41
- ANSI terminal color formatting codes — scripts/validation/sha_pinning.py:42-49
- Violation dataclass — scripts/validation/sha_pinning.py:51-61
- Workflow file discovery and scanner functions — scripts/validation/sha_pinning.py:63-115
- Console, markdown, and JSON output formatters — scripts/validation/sha_pinning.py:118-248
- Formatter dispatch table, argument parser, and main runner — scripts/validation/sha_pinning.py:250-328

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/sha_pinning.py`, language: Python 3, lines: 328
- documented invocation:
  - "uv run python scripts/validation/sha_pinning.py --ci" — .github/workflows/validate-generated-agents.yml:239
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/sha_pinning.py --path sources/rjm`
- abridged stdout:
```
All GitHub Actions are SHA-pinned
   Scanned 64 workflow file(s)
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Success (all actions SHA-pinned, or no violations in non-CI mode)" — scripts/validation/sha_pinning.py:11
  - "1 - Logic error (violations found, CI mode only)" — scripts/validation/sha_pinning.py:12
  - "2 - Config error (path not found)" — scripts/validation/sha_pinning.py:13
  - Actual exit paths:
    - line 294: `return 2` when `--path` is not a directory
    - line 315: `return 0` when no workflow files are found
    - line 322: `return 1` when `has_violations and args.ci`
    - line 323: `return 0` when violations are absent or CI mode is disabled
    - line 327: `raise SystemExit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exit code 1 in CI mode on violations; exit code 2 on missing path)
  - Verified on repository default branch: passes with 0 violations across 64 files, exit code 0
- does output match what the documentation claims: yes, verifies all third-party GitHub Actions are pinned to commit SHA

## Defects — required
none

## Observations
- Local composite actions (`uses: ./...`) are explicitly exempted from SHA pinning via `LOCAL_ACTION_PATTERN` (lines 40, 87-88).
- Output formatters provide actionable resolution commands using GitHub CLI (`gh api repos/<owner>/<repo>/git/ref/tags/<tag> --jq '.object.sha'`, lines 161-163, 211-213).

## Context cost
9946 bytes, 328 lines, ~2480 tokens.
