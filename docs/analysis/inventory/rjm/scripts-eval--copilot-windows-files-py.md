---
package: rjm
path: scripts/eval/_copilot_windows_files.py
type: script
bytes: 6963
unit: inv-rjm-216
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_windows_files.py, sha256: fdc703ec55566d507c95cbf3e65ab11910bfd97b1600e29c09c756f82a5e9d54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_windows_files.py

## Purpose — required, verbatim
> "Open Copilot transcript files safely on Windows." — scripts/eval/_copilot_windows_files.py:1

## Design intent — required
Implements hardened Windows filesystem access routines to inspect and read Copilot session transcript logs without vulnerability to symlink traversal, directory junction diversions, or time-of-check-to-time-of-use (TOCTOU) path swaps. By acquiring raw OS handles via Win32 `CreateFileW` with `_FILE_FLAG_OPEN_REPARSE_POINT`, verifying that neither directory nor transcript handles represent reparse points using `GetFileInformationByHandleEx`, resolving canonical paths via `GetFinalPathNameByHandleW`, enforcing directory containment against the session root with `os.path.commonpath`, and converting the verified handle to a C runtime descriptor via `msvcrt.open_osfhandle`, it guarantees that transcript reads remain strictly bounded within the intended evaluation root.

## Phase — required
none

## Inputs — required
- Root directory: `root` path pointing to the session state directory — scripts/eval/_copilot_windows_files.py:171
- Session identifier: `session_name` string naming the subfolder under root — scripts/eval/_copilot_windows_files.py:172
- Provider label: `provider_label` string used to qualify security violation messages — scripts/eval/_copilot_windows_files.py:173

## Outputs — required
- File descriptor and metadata: integer file descriptor and stat result tuple returned by open_windows_transcript — scripts/eval/_copilot_windows_files.py:170, 229

## Invokes — required
none

## Invoked by — required
- script _copilot_windows_files — scripts/eval/_copilot_cli_transcript.py:14

## Concepts named — required, verbatim
- `_FileAttributeTagInfo` — scripts/eval/_copilot_windows_files.py:23 — defined here
- `_WindowsHandle` — scripts/eval/_copilot_windows_files.py:43 — defined here
- `_validate_handle` — scripts/eval/_copilot_windows_files.py:147 — defined here
- `open_windows_transcript` — scripts/eval/_copilot_windows_files.py:170 — defined here
- `reparse points` — scripts/eval/_copilot_windows_files.py:175 — used here

## Structure
- Docstring and Win32 file flag definitions — scripts/eval/_copilot_windows_files.py:1-21
- `_FileAttributeTagInfo` ctypes structure — scripts/eval/_copilot_windows_files.py:23-28
- Typing protocols (`_CFunction`, `_Kernel32`) — scripts/eval/_copilot_windows_files.py:30-41
- `_WindowsHandle` wrapper class — scripts/eval/_copilot_windows_files.py:43-53
- Kernel32 loader and low-level handle helpers — scripts/eval/_copilot_windows_files.py:55-138
- Handle validation and containment functions — scripts/eval/_copilot_windows_files.py:140-168
- `open_windows_transcript` public function — scripts/eval/_copilot_windows_files.py:170-236

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_windows_files.py`
- language: Python
- lines: 236
- documented invocation:
> "Open one transcript without following reparse points or path swaps." — scripts/eval/_copilot_windows_files.py:175
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_copilot_windows_files.py`, stdout: (empty), **actual exit code: 0**
- documented exit codes vs. actual exit paths: Module is a library of Windows handle security helpers without a CLI runner or `sys.exit()` calls; raises `OSError` if executed on non-Windows platforms (line 177) or if Win32 API calls fail (lines 58, 64, 91, 97, 106, 119, 131, 217); raises `RuntimeError` on directory escape or reparse point detection (lines 159, 164). Direct execution exits 0 cleanly.
- for validators/gates: Not a validator gate; file system security helper module. Raises `OSError` or `RuntimeError` on security violations.
- does output match documentation: Yes, module imports and defines safe transcript opening functions without execution side effects.

## Defects — required
none

## Observations
Illustrates handle-level defensive programming for security-sensitive log parsing on Windows. By checking file attributes at the handle level rather than by filesystem path, it eliminates race conditions where an adversary or test harness could substitute a symlink or junction point between directory resolution and file read.

## Context cost
6,963 bytes (~1,750 tokens). Standalone module depending only on Python standard library modules (`ctypes`, `os`, `pathlib`, `collections.abc`, `typing`) and Windows CRT (`msvcrt`).
