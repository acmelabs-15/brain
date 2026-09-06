---
package: rjm
path: scripts/ci/install_copilot_cli.py
type: script
bytes: 3385
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/install_copilot_cli.py

## Purpose — required, verbatim
> "Install and verify the pinned GitHub Copilot CLI for ai-review." — scripts/ci/install_copilot_cli.py:1

## Design intent — required
Installs a pinned version of GitHub Copilot CLI (`@github/copilot@1.0.63`) via npm global install, verifies that the executable is present in PATH, queries its version with `--no-auto-update`, emits GitHub Actions step output (`copilot_version=<version>`), and warns if version drift occurs with a reference to the ADR-094 regression runbook.

## Phase — required
rjm:review

## Inputs — required
- Environment variables: `GITHUB_OUTPUT` (required output path), `COPILOT_VERSION` (optional pinned version, defaults to "1.0.63") — scripts/ci/install_copilot_cli.py:94, 100
- System dependencies: `npm` package manager, global node path — scripts/ci/install_copilot_cli.py:57

## Outputs — required
- Appends step output `copilot_version` — scripts/ci/install_copilot_cli.py:74
- Globally installed `copilot` binary in system PATH — scripts/ci/install_copilot_cli.py:65

## Invokes — required
none

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:766
- doc CONTRIBUTING.md — CONTRIBUTING.md:823

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/install_copilot_cli.py:1 — used here
- `EXIT_OK` — scripts/ci/install_copilot_cli.py:13 — defined here
- `EXIT_LOGIC` — scripts/ci/install_copilot_cli.py:14 — defined here
- `EXIT_CONFIG` — scripts/ci/install_copilot_cli.py:15 — defined here
- `DEFAULT_COPILOT_VERSION` — scripts/ci/install_copilot_cli.py:16 — defined here
- `CommandResult` — scripts/ci/install_copilot_cli.py:20 — defined here
- `run_command` — scripts/ci/install_copilot_cli.py:26 — defined here
- `append_line` — scripts/ci/install_copilot_cli.py:44 — defined here
- `install_copilot_cli` — scripts/ci/install_copilot_cli.py:49 — defined here
- `ADR-094` — scripts/ci/install_copilot_cli.py:84 — used here
- `main` — scripts/ci/install_copilot_cli.py:89 — defined here

## Structure
none (python script; functions and classes: `CommandResult`, `run_command`, `append_line`, `install_copilot_cli`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/install_copilot_cli.py`, language: Python 3, lines: 106
- documented invocation:
  - "Update `.github/actions/ai-review/action.yml` and `scripts/ci/install_copilot_cli.py` together" — CONTRIBUTING.md:823
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/install_copilot_cli.py`
  abridged stdout: `(empty)`
  stderr: `error: GITHUB_OUTPUT is required`
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented exit codes: `EXIT_OK = 0` (scripts/ci/install_copilot_cli.py:13), `EXIT_LOGIC = 1` (scripts/ci/install_copilot_cli.py:14), `EXIT_CONFIG = 2` (scripts/ci/install_copilot_cli.py:15).
  Actual exit paths:
  - line 62: `return EXIT_LOGIC` (1) when npm install fails
  - line 67: `return EXIT_LOGIC` (1) when `copilot` binary not found after installation
  - line 86: `return EXIT_OK` (0) on successful installation and verification
  - line 92: `return EXIT_CONFIG` (2) when arguments are passed
  - line 97: `return EXIT_CONFIG` (2) when `GITHUB_OUTPUT` environment variable is missing
  - line 105: `raise SystemExit(main())` propagates return code
- for validators/gates: can it exit non-zero? yes (exits 1 on install/binary verification failure, 2 on configuration error). Does it fail on the source repo's own default branch? fails with exit code 2 when run without GITHUB_OUTPUT.
- does the output match what the documentation claims? yes, enforces pinned CLI installation and reports version output to GITHUB_OUTPUT.

## Defects — required
none

## Observations
- Line 70 passes `--no-auto-update` to `copilot --version` to prevent accidental in-flight updating during CI runs.
- References excluded memory runbook `.serena/memories/copilot/copilot-cli-frontmatter-regression-runbook.md` in warning message at line 83 when version drift occurs.

## Context cost
3385 bytes (~846 tokens). Python standard library only (`os`, `shutil`, `subprocess`, `sys`, `dataclasses`, `pathlib`).
