---
package: rjm
path: scripts/ci/vanilla_hook_guard.py
type: script
bytes: 11193
unit: inv-rjm-210
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/ci/vanilla_hook_guard.py, sha256: bf86e44411bdcd580c983ff5b6e3fa94b03c519de7a92c20563d423bc2d6bd34}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/vanilla_hook_guard.py

## Purpose — required, verbatim
> "Drive the installed plugin hook on a machine with no Python interpreter." — scripts/ci/vanilla_hook_guard.py:2

## Design intent — required
Validates that when the `project-toolkit@ai-agents` plugin is installed in an environment without a Python interpreter (a vanilla customer machine), its plugin hooks degrade gracefully with an informational warning rather than blocking execution or denying tool use (ADR-006, issue #4672). Because the test harness itself runs with Python while the code under test must not see an interpreter, the script operates in two modes: running the hook inside a Python-free Linux container (Docker), or running under Windows PowerShell with all Python-containing directories scrubbed from `PATH`. It validates that no Python interpreters resolve before invoking the hook, executes the hook with dummy tool input, confirms that the hook exits 0, and asserts that required warning fragments appear in stdout. Without this script, non-Python users could experience broken or blocked tool-use hooks without CI detecting the failure.

## Phase — required
none

## Inputs — required
Command-line arguments parsed by `argparse`:
- `--mode`: `{linux-container,windows-path}` (`scripts/ci/vanilla_hook_guard.py:241`)
- `--install-root`: path to installed plugin root (`scripts/ci/vanilla_hook_guard.py:242`)
- `--consumer-cwd`: consumer working directory (`scripts/ci/vanilla_hook_guard.py:243`)
- `--image`: container image for linux-container mode (`scripts/ci/vanilla_hook_guard.py:244`)
Files / Environment:
- `hooks/hooks.json` under `install_root` (`scripts/ci/vanilla_hook_guard.py:252`)
- Synthetic stdin JSON payload: `{"tool_name": "Bash", "tool_input": {"command": "echo hello"}, "session_id": "vanilla-guard", "hook_event_name": "PreToolUse"}` (`scripts/ci/vanilla_hook_guard.py:43-50`)
- `PATH` environment variable (for scrubbing in Windows mode)
- Docker daemon and container image (in Linux container mode)

## Outputs — required
- Standard output logs reporting hook exit code and stdout, or reporting a vacuous pass under ADR-097
- Exit codes: 0 on pass or vacuous pass, 1 on guard failure (hook denied or warning missing), 2 on CLI usage error, 3 on environment unavailable (e.g. Docker missing)
- Files produced: none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `installed plugin hook` — scripts/ci/vanilla_hook_guard.py:2 — used here
- `ADR-006` — scripts/ci/vanilla_hook_guard.py:6 — used here
- `vanilla` — scripts/ci/vanilla_hook_guard.py:6 — used here
- `project-toolkit@ai-agents` — scripts/ci/vanilla_hook_guard.py:38 — used here
- `PreToolUse` — scripts/ci/vanilla_hook_guard.py:48 — used here
- `GuardError` — scripts/ci/vanilla_hook_guard.py:53 — defined here
- `EnvironmentUnavailableError` — scripts/ci/vanilla_hook_guard.py:57 — defined here
- `scrub_path` — scripts/ci/vanilla_hook_guard.py:67 — defined here
- `assert_no_interpreter` — scripts/ci/vanilla_hook_guard.py:91 — defined here
- `extract_hook_command` — scripts/ci/vanilla_hook_guard.py:102 — defined here
- `event_is_registered` — scripts/ci/vanilla_hook_guard.py:120 — defined here
- `ADR-097` — scripts/ci/vanilla_hook_guard.py:123 — used here
- `assert_degraded` — scripts/ci/vanilla_hook_guard.py:153 — defined here
- `run_windows` — scripts/ci/vanilla_hook_guard.py:169 — defined here
- `run_linux_container` — scripts/ci/vanilla_hook_guard.py:192 — defined here

## Structure
- # Drive the installed plugin hook on a machine with no Python interpreter.
- # Module constants, warning fragments, and exceptions (GuardError, EnvironmentUnavailableError)
- # Path scrubbing and interpreter assertion (scrub_path, assert_no_interpreter)
- # Hook extraction and event registration checks (extract_hook_command, event_is_registered)
- # Degradation contract assertion (assert_degraded)
- # Windows execution harness (run_windows)
- # Linux container execution harness (run_linux_container)
- # CLI argument parsing and main entry point (main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/vanilla_hook_guard.py`, Python 3, 292 lines
- documented invocation:
  "Drive the installed plugin hook on a machine with no Python interpreter." — scripts/ci/vanilla_hook_guard.py:2
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/ci/vanilla_hook_guard.py --mode windows-path --install-root .claude --consumer-cwd .`
  - Abridged stdout:
    ```
    VANILLA GUARD PASSED (vacuous): no PreToolUse hooks registered in /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/hooks/hooks.json; nothing to prove vanilla-safe (ADR-097).
    ```
  - actual exit code: 0
  - Command 2 (usage error): `python3 scripts/ci/vanilla_hook_guard.py --mode linux-container --install-root . --consumer-cwd .`
  - Abridged stderr: `--image is required for linux-container mode`
  - actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented in implementation and comments:
    - `return 2` — scripts/ci/vanilla_hook_guard.py:249 (missing --image in linux-container mode)
    - `return 0` — scripts/ci/vanilla_hook_guard.py:259 (vacuous pass under ADR-097)
    - `return 1` — scripts/ci/vanilla_hook_guard.py:262 (manifest read error)
    - `return 1` — scripts/ci/vanilla_hook_guard.py:265 (manifest GuardError)
    - `return 3` — scripts/ci/vanilla_hook_guard.py:281 (EnvironmentUnavailableError)
    - `return 1` — scripts/ci/vanilla_hook_guard.py:284 (hook GuardError)
    - `return 0` — scripts/ci/vanilla_hook_guard.py:287 (hook degraded with warning)
    - `raise SystemExit(main())` — scripts/ci/vanilla_hook_guard.py:291
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits non-zero (exit code 1 for contract violation or malformed manifest, 2 for CLI usage errors, 3 for missing runtime environment such as Docker). On the source repo's default branch using `.claude` as install-root, it exits 0 with a vacuous pass because `.claude/hooks/hooks.json` registers no `PreToolUse` hooks.
- does output match what documentation claims:
  Yes, cleanly separates environment gaps (exit 3) from contract violations (exit 1) and enforces degraded warning output.

## Defects — required
- `orphan` · scripts/ci/vanilla_hook_guard.py:1 · Script is invoked only from GitHub Actions workflow `.github/workflows/installed-plugin-hook-guard.yml:77,100` and unit tests; no caller in the in-scope manifest graph.

## Observations
- Distinguishes infrastructure gaps (`EnvironmentUnavailableError`, exit 3) from contract violations (`GuardError`, exit 1) so local runs without Docker do not trigger false bug reports.
- In Windows mode, `scrub_path` inspects directories for executable presence rather than directory name to account for Windows App Execution Alias directories.
- Handles ADR-097 vacuous state where plugins legitimately register zero tool-use hooks.

## Context cost
11193 bytes, 292 lines. Loads no in-scope repository modules. Approximately 3,100 tokens.
