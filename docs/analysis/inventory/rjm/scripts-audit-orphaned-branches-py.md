---
package: rjm
path: scripts/audit_orphaned_branches.py
type: script
bytes: 7157
unit: inv-rjm-197
in_scope_via: .agents/sessions/2026-01-17-orphaned-artifacts-catalog.md
aliases: []
memo_inputs:
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/audit_orphaned_branches.py

## Purpose — required, verbatim
> "Audit remote branches for orphaned session and memory artifacts." — scripts/audit_orphaned_branches.py:2

## Design intent — required
Audits unmerged remote git branches against `origin/main` (or a specified base ref) to detect uncommitted/unmerged session logs (`.agents/sessions/`) and memory files (`.serena/memories/`). Prevents knowledge loss from abandoned or forgotten feature branches by producing structured JSON or human-readable reports identifying orphaned artifacts for curation or recovery.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--base-ref`: "Base ref to compare against (default: origin/main)" — scripts/audit_orphaned_branches.py:197
- CLI option `--format`: "Output format (default: json)" — scripts/audit_orphaned_branches.py:204
- CLI option `--exclude`: "Branch prefixes to exclude" — scripts/audit_orphaned_branches.py:210
- Git repository remote branches and commit diffs via subprocess execution of `git branch -r` and `git diff --name-only`

## Outputs — required
- Structured JSON report (default) or formatted plaintext table written to stdout listing scanned branches, branches with orphans, session counts, memory counts, and artifact paths (scripts/audit_orphaned_branches.py:161-186)
- Runtime error message in JSON format written to stderr: `{"error": "<msg>"}` (scripts/audit_orphaned_branches.py:225)
- Warning message written to stderr when skipping unreadable branch (scripts/audit_orphaned_branches.py:146)
- Process exit code: 0 (no orphans detected), 1 (orphaned artifacts detected), 2 (configuration or runtime error) (scripts/audit_orphaned_branches.py:9-11, 226, 229)

## Invokes — required
none

## Invoked by — required
- script detect_orphan_commits.py — scripts/maintenance/detect_orphan_commits.py:22
- doc 2026-01-17-orphaned-artifacts-catalog.md — .agents/sessions/2026-01-17-orphaned-artifacts-catalog.md:17

## Concepts named — required, verbatim
- `ADR-035` — scripts/audit_orphaned_branches.py:13 — used here
- `BranchArtifacts` — scripts/audit_orphaned_branches.py:31 — defined here
- `AuditReport` — scripts/audit_orphaned_branches.py:45 — defined here
- `_run_git` — scripts/audit_orphaned_branches.py:62 — defined here
- `list_remote_branches` — scripts/audit_orphaned_branches.py:78 — defined here
- `diff_files_vs_main` — scripts/audit_orphaned_branches.py:102 — defined here
- `find_orphaned_artifacts` — scripts/audit_orphaned_branches.py:108 — defined here
- `audit_branches` — scripts/audit_orphaned_branches.py:122 — defined here
- `format_report` — scripts/audit_orphaned_branches.py:159 — defined here
- `parse_args` — scripts/audit_orphaned_branches.py:189 — defined here
- `main` — scripts/audit_orphaned_branches.py:215 — defined here

## Structure
- Module docstring with description and exit codes (scripts/audit_orphaned_branches.py:1-15)
- Standard library imports and path constants (scripts/audit_orphaned_branches.py:17-27)
- `BranchArtifacts` dataclass definition (scripts/audit_orphaned_branches.py:30-41)
- `AuditReport` dataclass definition (scripts/audit_orphaned_branches.py:44-59)
- `_run_git` subprocess runner (scripts/audit_orphaned_branches.py:62-75)
- `list_remote_branches` remote ref enumerator (scripts/audit_orphaned_branches.py:78-99)
- `diff_files_vs_main` diff collector (scripts/audit_orphaned_branches.py:102-105)
- `find_orphaned_artifacts` session and memory filter (scripts/audit_orphaned_branches.py:108-119)
- `audit_branches` scanner orchestration (scripts/audit_orphaned_branches.py:122-156)
- `format_report` JSON and text formatter (scripts/audit_orphaned_branches.py:159-186)
- `parse_args` CLI argument parser (scripts/audit_orphaned_branches.py:189-212)
- `main` entry point with exit code mapping (scripts/audit_orphaned_branches.py:215-229)
- Top-level script invocation (scripts/audit_orphaned_branches.py:232-233)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/audit_orphaned_branches.py`
- **language:** Python (python3)
- **lines:** 234
- **documented invocation:**
  - `python scripts/audit_orphaned_branches.py` — .agents/sessions/2026-01-17-orphaned-artifacts-catalog.md:24
- **executed:** yes
- **actual command run:** `python3 scripts/audit_orphaned_branches.py`
- **abridged stdout:**
```json
{
  "timestamp": "2026-09-06T01:34:33.208154+00:00",
  "base_ref": "origin/main",
  "branches_scanned": 289,
  "branches_with_orphans": 27,
  "total_session_files": 45,
  "total_memory_files": 120
}
```
- **actual exit code:** 1
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - Success: audit completed (orphans may or may not exist)" — scripts/audit_orphaned_branches.py:9
    - "1 - Warning: orphaned artifacts detected" — scripts/audit_orphaned_branches.py:10
    - "2 - Error: configuration or runtime error" — scripts/audit_orphaned_branches.py:11
  - Actual code paths:
    - `return 1 if report.has_orphans else 0` — scripts/audit_orphaned_branches.py:229
    - `return 2` — scripts/audit_orphaned_branches.py:226
    - `sys.exit(main())` — scripts/audit_orphaned_branches.py:233
  - Result: Discrepancy noted in docstring: line 9 states exit 0 means "audit completed (orphans may or may not exist)", but line 229 returns 1 whenever `report.has_orphans` is true.
- **for validators/gates:** Can exit non-zero (1 when orphans exist, 2 on runtime error). On the source repo's default branch, exits 1 due to 27 remote branches holding unmerged session and memory files.
- **does the output match what the documentation claims:** Yes, produces structured JSON matching `AuditReport` schema.

## Defects — required
- doc-drift · scripts/audit_orphaned_branches.py:9 · Docstring states exit 0 indicates "audit completed (orphans may or may not exist)", but line 229 explicitly returns 1 if orphans exist.
- script-bug · scripts/audit_orphaned_branches.py:94 · `list_remote_branches` fails to exclude `origin/HEAD` when git emits `origin` as the short ref name, causing an invalid `git diff origin/main origin/origin` error that prints a warning to stderr.

## Observations
- Uses `errors="replace"` in `subprocess.run` (scripts/audit_orphaned_branches.py:69) to guard against decoding errors on arbitrary remote branch diff paths.
- Fixed prefix constants `_SESSION_GLOB = ".agents/sessions/"` (line 26) and `_MEMORY_GLOB = ".serena/memories/"` (line 27) tie the script directly to rjm's local session and memory architectures.

## Context cost
7157 bytes, 234 lines, ~1800 tokens.
