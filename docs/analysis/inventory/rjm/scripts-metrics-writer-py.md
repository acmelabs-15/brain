---
package: rjm
path: scripts/metrics_writer.py
type: script
bytes: 7586
unit: inv-rjm-253
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: scripts/metrics_writer.py, sha256: 7a9d4b92bf72b4f8881fbb900d4586a83289d0055caf7f50b556927e6fdafed1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/metrics_writer.py

## Purpose — required, verbatim
> "Canonical, hardened append writer for the /spec metrics tally files." — scripts/metrics_writer.py:2

## Design intent — required
Provides a secure, atomic append mechanism for recording `/spec` telemetry records to metrics tally files (such as `STEP-0-METRICS.md` and `STEP-0.5-METRICS.md`). Defends against CWE-59 symlink following via `Path.is_symlink()` and `os.O_NOFOLLOW`, eliminates CWE-367 TOCTOU race windows at the kernel syscall boundary, guards against CWE-23 path traversal escapes, and serializes concurrent appends across processes using platform-specific advisory locks (`fcntl.flock` on POSIX, `msvcrt.locking` on Windows).

## Phase — required
rjm:spec

## Inputs — required
- Target tally file path (`PATH`) and record line string (`LINE`) passed via CLI arguments or Python function parameters (scripts/metrics_writer.py:39, 136-137, 191)
- Optional `base_dir` anchor parameter (defaults to project root in library mode or current working directory in CLI mode) (scripts/metrics_writer.py:100, 139, 193)

## Outputs — required
- Single serialized line appended to the destination tally file under lock with mode 0o600 (scripts/metrics_writer.py:73, 162-178)
- Returns resolved `Path` object written from `safe_append_tally` (scripts/metrics_writer.py:183)
- Process exit codes: 0 (success), 1 (validation error: symlink, traversal, lock/write failure), 2 (usage error) (scripts/metrics_writer.py:35-36, 190, 196-197)

## Invokes — required
none

## Invoked by — required
- doc metrics_writer.py — src/copilot-cli/skills/spec-generator/references/spec-step0-gates.md:140
- doc metrics_writer.py — src/copilot-cli/skills/spec-generator/references/spec-prior-art-schema.md:110

## Concepts named — required, verbatim
- `CWE-59` — scripts/metrics_writer.py:14 — used here
- `CWE-367` — scripts/metrics_writer.py:22 — used here
- `ADR-035` — scripts/metrics_writer.py:35 — used here
- `MetricsWriteError` — scripts/metrics_writer.py:77 — defined here
- `_reject_symlink` — scripts/metrics_writer.py:85 — defined here
- `_resolve_target_parent` — scripts/metrics_writer.py:93 — defined here
- `_anchor_target` — scripts/metrics_writer.py:98 — defined here
- `_write_all` — scripts/metrics_writer.py:110 — defined here
- `_resolve_under` — scripts/metrics_writer.py:119 — defined here
- `safe_append_tally` — scripts/metrics_writer.py:135 — defined here
- `main` — scripts/metrics_writer.py:186 — defined here

## Structure
- Module docstring detailing security rationale against CWE-59 and CWE-367 — scripts/metrics_writer.py:1
- Cross-platform file locking implementation — scripts/metrics_writer.py:50
- Flag configuration and MetricsWriteError exception class — scripts/metrics_writer.py:71
- Path validation and traversal defense helpers — scripts/metrics_writer.py:85
- safe_append_tally core append implementation — scripts/metrics_writer.py:135
- CLI main entrypoint — scripts/metrics_writer.py:186

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/metrics_writer.py`
- **language:** Python (python3)
- **lines:** 202
- **documented invocation:**
  - "metrics_writer.py PATH LINE" — scripts/metrics_writer.py:39
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/metrics_writer.py`
- **abridged stdout:** `none` (printed to stderr: `usage: metrics_writer.py PATH LINE`)
- **actual exit code:** 2
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "Exit codes (ADR-035): 0 = success, 1 = logic/validation error (symlink" — scripts/metrics_writer.py:35
    - "rejected, traversal rejected, lock or write failure), 2 = usage error." — scripts/metrics_writer.py:36
  - Actual code paths:
    - `return 2` — scripts/metrics_writer.py:190 (when `len(args) != 2`)
    - `return 1` — scripts/metrics_writer.py:196 (caught `MetricsWriteError`)
    - `return 0` — scripts/metrics_writer.py:197 (successful append)
    - `sys.exit(main())` — scripts/metrics_writer.py:201
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: yes, exits 2 on argument count mismatch, exits 1 on symlink, path traversal, or write error.
  - Verified on default branch: exits 2 when invoked without arguments; exits 0 when appending a valid line to a permitted path.
- **does the output match what the documentation claims:** yes, validates path constraints and appends line atomically.

## Defects — required
none

## Observations
- Employs `memoryview` in `_write_all` to avoid unnecessary buffer slicing copies when flushing bytes to the file descriptor.
- Implements POSIX `fcntl.flock(fd, fcntl.LOCK_EX)` and Windows `msvcrt.locking` on byte 0 to guarantee cross-process write serialization across operating systems.

## Context cost
7586 bytes, 202 lines, ~1800 tokens.
