---
package: rjm
path: scripts/eval/_copilot_process_tree.py
type: script
bytes: 6302
unit: inv-rjm-216
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_process_tree.py, sha256: 246cbf1a7288bca7564e92a9bd7bf4937d4a7afda9bcf4fd2b0d3b8635448b58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_process_tree.py

## Purpose — required, verbatim
> "Own and terminate the Copilot subprocess tree." — scripts/eval/_copilot_process_tree.py:1

## Design intent — required
Provides cross-platform subprocess tree lifecycle management and guaranteed termination for the Copilot CLI execution harness. On Windows, it binds child processes into Windows Job Objects configured with `_JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE` via `kernel32` and `ntdll`, starting children suspended in a distinct process group before job assignment to prevent orphaned background processes. On POSIX platforms, it uses process group signaling (`os.killpg`) with `SIGTERM`/`SIGKILL` and non-destructive exit polling via `os.waitid` with `WNOWAIT` to monitor process completion without preempting exit code collection by the parent caller.

## Phase — required
none

## Inputs — required
- Subprocess instance: `process` handle (`subprocess.Popen[str]`) passed to process wrappers — scripts/eval/_copilot_process_tree.py:69, 130
- Termination timeout: `timeout` duration in seconds for `wait_for_exit_before_reap` polling — scripts/eval/_copilot_process_tree.py:149
- Force termination flag: `force` boolean indicating whether POSIX `terminate()` sends SIGKILL or SIGTERM — scripts/eval/_copilot_process_tree.py:135

## Outputs — required
- Creation flags: integer bitmask returned by `windows_creation_flags()` on Windows — scripts/eval/_copilot_process_tree.py:23
- Process tree lifecycle management: process suspension, job object binding, process resumption, process group termination, and exit state checks — scripts/eval/_copilot_process_tree.py:101-115, 141-147, 165-175

## Invokes — required
none

## Invoked by — required
- script _copilot_process_tree — scripts/eval/_copilot_cli_acp.py:15

## Concepts named — required, verbatim
- `_JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE` — scripts/eval/_copilot_process_tree.py:13 — defined here
- `windows_creation_flags` — scripts/eval/_copilot_process_tree.py:23 — defined here
- `_BasicLimitInformation` — scripts/eval/_copilot_process_tree.py:32 — defined here
- `_IoCounters` — scripts/eval/_copilot_process_tree.py:46 — defined here
- `_ExtendedLimitInformation` — scripts/eval/_copilot_process_tree.py:57 — defined here
- `_WindowsJob` — scripts/eval/_copilot_process_tree.py:68 — defined here
- `ProcessTree` — scripts/eval/_copilot_process_tree.py:127 — defined here

## Structure
- Docstring and ctypes constant definitions — scripts/eval/_copilot_process_tree.py:1-21
- `windows_creation_flags` function — scripts/eval/_copilot_process_tree.py:23-30
- Win32 structure classes (`_BasicLimitInformation`, `_IoCounters`, `_ExtendedLimitInformation`) — scripts/eval/_copilot_process_tree.py:32-66
- `_WindowsJob` class definition and methods — scripts/eval/_copilot_process_tree.py:68-125
- `ProcessTree` class definition and lifecycle methods — scripts/eval/_copilot_process_tree.py:127-182

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_process_tree.py`
- language: Python
- lines: 182
- documented invocation:
> "Hold the platform process-tree boundary until cleanup completes." — scripts/eval/_copilot_process_tree.py:128
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_copilot_process_tree.py`, stdout: (empty), **actual exit code: 0**
- documented exit codes vs. actual exit paths: Module provides process management classes without a standalone CLI runner or `sys.exit()` calls; raises `OSError` on Windows job object creation, configuration, or assignment failures (scripts/eval/_copilot_process_tree.py:72, 78, 94, 100, 106, 115). Direct execution exits 0 cleanly.
- for validators/gates: Not a validator gate; low-level process management library. Raises `OSError` on OS API failure.
- does output match documentation: Yes, cleanly defines process tree lifecycle utilities without side effects on import or execution.

## Defects — required
none

## Observations
Provides robust operating system-level process containment. On Windows, ctypes is used to interface directly with `kernel32` and `ntdll` to configure Job Objects with kill-on-close semantics so that all child processes terminate when the handle closes. On POSIX, `os.waitid` with options `WEXITED | WNOHANG | WNOWAIT` checks whether a child process has completed without reaping its zombie status, preserving the returncode for callers.

## Context cost
6,302 bytes (~1,600 tokens). Standalone module depending only on Python standard library modules (`ctypes`, `os`, `signal`, `subprocess`, `time`).
