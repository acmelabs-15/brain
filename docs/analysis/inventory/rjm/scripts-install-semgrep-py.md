---
package: rjm
path: scripts/install_semgrep.py
type: script
bytes: 4577
unit: inv-rjm-247
in_scope_via: docs/installation.md
aliases: []
memo_inputs:
  - {path: scripts/install_semgrep.py, sha256: 19aae5459731453a7ebde0b0421ddc869e6ee84408804e87d20043c0348ac138}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/install_semgrep.py

## Purpose — required, verbatim
> "Installs semgrep for local security scanning. Checks for existing installation and provides platform-specific guidance." — scripts/install_semgrep.py:5-6

## Design intent — required
Provides automated installation and pre-flight verification of the Semgrep static analysis CLI across developer operating systems (macOS, Linux, Windows). It attempts automated Python package installation via pip while providing platform-specific manual fallback guidance (including Homebrew on macOS) so that local security scanning prerequisites can be satisfied before git commit and push operations.

## Phase — required
none

## Inputs — required
- CLI arguments via `argparse`:
  - `--check`: boolean flag to check if semgrep is installed without attempting installation
- Operating system and Python environment state:
  - System OS name via `platform.system()` (`Darwin`, `Linux`, `Windows`)
  - Python interpreter binary via `sys.executable`
  - Presence of `semgrep` on system PATH via `semgrep --version` subprocess execution

## Outputs — required
- Filesystem changes:
  - Installs `semgrep` Python package into current Python environment when executed without `--check`
- Console output via Python `logging`:
  - Installation status (`✓ Semgrep already installed: <version>`, `✓ Semgrep installed successfully`)
  - Progress and failure messages (`Installing semgrep via pip...`, `✗ Semgrep not installed`, `Installation failed: <stderr>`, `✗ Installation verification failed`)
  - Platform-specific manual installation instructions
- Process exit code (0 on success, 1 on installation/check failure, 3 on subprocess timeout)

## Invokes — required
none

## Invoked by — required
- doc docs/installation.md — docs/installation.md:211
- script scripts/security/run_semgrep.py — scripts/security/run_semgrep.py:136

## Concepts named — required, verbatim
`ADR-042` — scripts/install_semgrep.py:18 — used here
`SUBPROCESS_TIMEOUT_SECONDS` — scripts/install_semgrep.py:35 — defined here
`SemgrepInstaller` — scripts/install_semgrep.py:38 — defined here
`is_installed` — scripts/install_semgrep.py:45 — defined here
`install` — scripts/install_semgrep.py:63 — defined here
`show_manual_instructions` — scripts/install_semgrep.py:89 — defined here
`run` — scripts/install_semgrep.py:112 — defined here
`main` — scripts/install_semgrep.py:135 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/install_semgrep.py`, language: Python 3, lines: 159
- documented invocation: `"python3 scripts/Install-Semgrep.py" — scripts/install_semgrep.py:9`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/install_semgrep.py --check`, abridged stdout: `✗ Semgrep not installed\n\nManual installation options:\n\nmacOS:\n  brew install semgrep\n\nOr use pip directly:\n  /opt/homebrew/opt/python@3.14/bin/python3.14 -m pip install semgrep`, **actual exit code**: 1
- documented exit codes:
  `"0: Success (already installed or installation succeeded)" — scripts/install_semgrep.py:13`
  `"1: Installation failed" — scripts/install_semgrep.py:14`
  `"2: Unsupported platform or missing dependencies" — scripts/install_semgrep.py:15`
  `"3: External error (subprocess timeout)" — scripts/install_semgrep.py:16`
  vs. actual exit paths:
  `scripts/install_semgrep.py:115` (`return 0` if already installed)
  `scripts/install_semgrep.py:120` (`return 1` if check_only and not installed)
  `scripts/install_semgrep.py:126` (`return 1` if installation fails)
  `scripts/install_semgrep.py:130` (`return 1` if verification fails post-install)
  `scripts/install_semgrep.py:132` (`return 0` on successful install)
  `scripts/install_semgrep.py:154` (`return 3` on `subprocess.TimeoutExpired`)
  dispatched via `sys.exit(main())` at `scripts/install_semgrep.py:158`
- for validators/gates: not a validation gate; security tool installation and pre-flight check script
- does the output match what the documentation claims? yes, reports missing installation and displays platform manual options

## Defects — required
- `doc-drift` · `scripts/install_semgrep.py:9` · Usage docstring uses PascalCase `scripts/Install-Semgrep.py` instead of the actual file name `scripts/install_semgrep.py`.
- `exit-code-mismatch` · `scripts/install_semgrep.py:15` · Docstring specifies exit code 2 for unsupported platform or missing dependencies, but no code path returns exit code 2.
- `cross-file-contradiction` · `scripts/install_semgrep.py:69` · Runs unpinned `pip install semgrep`, which `scripts/security/run_semgrep.py:136` explicitly warns against because it bypasses pinned lockfiles.

## Observations
Subprocess operations are protected by a 300-second timeout (`SUBPROCESS_TIMEOUT_SECONDS = 300`). Provides manual guidance tailored by `platform.system()` for macOS, Linux, and Windows.

## Context cost
4577 bytes, approximately 1150 tokens.
