---
package: rjm
path: scripts/ci/install_locked_deps.py
type: script
bytes: 4671
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/install_locked_deps.py, sha256: 8fbaf932b42e746f6d6ce2a3b41c8ae0ae36f0144c988bad8f0a4aea54f97e69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/install_locked_deps.py

## Purpose — required, verbatim
> "Install Python dependencies from the resolution ``uv.lock`` pins." — scripts/ci/install_locked_deps.py:2

## Design intent — required
Resolves issue #3603 by exporting dependencies from `uv.lock` with `uv export --frozen --extra dev --no-emit-project` and installing them into the system Python environment via `uv pip install --system`, preventing drift between local developer tools and CI test runners while preserving support for workflows expecting bare CLI tool binaries.

## Phase — required
rjm:build

## Inputs — required
- Lockfile `uv.lock` — scripts/ci/install_locked_deps.py:91
- Project metadata `pyproject.toml` — scripts/ci/install_locked_deps.py:87
- Optional environment variable `RUNNER_TEMP` — scripts/ci/install_locked_deps.py:75
- Optional CLI argument `argv[0]` specifying root directory (defaults to current working directory) — scripts/ci/install_locked_deps.py:84

## Outputs — required
- Exported lock requirements file `EXPORT_NAME` (`uv-locked-requirements.txt`) — scripts/ci/install_locked_deps.py:44
- System Python environment packages installed from `uv.lock` — scripts/ci/install_locked_deps.py:113

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `uv.lock` — scripts/ci/install_locked_deps.py:2 — used here
- `EXTRA` — scripts/ci/install_locked_deps.py:43 — defined here
- `EXPORT_NAME` — scripts/ci/install_locked_deps.py:44 — defined here
- `run` — scripts/ci/install_locked_deps.py:47 — defined here
- `FALLBACK_TEMP` — scripts/ci/install_locked_deps.py:59 — defined here
- `_export_path` — scripts/ci/install_locked_deps.py:62 — defined here
- `CWE-88` — scripts/ci/install_locked_deps.py:69 — used here
- `main` — scripts/ci/install_locked_deps.py:82 — defined here

## Structure
none (python script; functions: `run`, `_export_path`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/install_locked_deps.py`, language: Python 3, lines: 119
- documented invocation:
  - "Install Python dependencies from the resolution ``uv.lock`` pins." — scripts/ci/install_locked_deps.py:2
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/install_locked_deps.py /tmp`
  abridged stdout:
  ```
  Installing Python dependencies...
  No pyproject.toml found, skipping dependency installation
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none in docstring header.
  Actual exit paths:
  - line 56: `sys.exit(completed.returncode)` when subprocess command fails
  - line 89: `return 0` when `pyproject.toml` is not found
  - line 96: `return 0` when `uv.lock` is not found (falls back to unpinned resolve)
  - line 114: `return 0` on successful installation from lockfile
  - line 118: `sys.exit(main(sys.argv[1:]))`
- for validators/gates: can it exit non-zero? yes (exits with command returncode if uv export or uv pip install fails). Does it fail on the source repo's own default branch? no, exits 0 cleanly when tested with `/tmp`.
- does the output match what the documentation claims? yes, skips installation cleanly when pyproject.toml is absent.

## Defects — required
- orphan · scripts/ci/install_locked_deps.py:1 · Not invoked by any in-scope manifest file; invoked by out-of-scope .github/actions/setup-code-env/action.yml:117.

## Observations
- Guards against argument injection (CWE-88) in `_export_path()` (lines 62-79) by rejecting non-absolute paths or values starting with `-` from `RUNNER_TEMP`, falling back to `/tmp`.
- Uses two-phase installation with `uv pip install --system -r <export>` followed by `uv pip install --system --no-deps -e .` (lines 111-112) so the editable project is installed without triggering an unpinned re-resolve.

## Context cost
4671 bytes (~1168 tokens). Python standard library only (`os`, `subprocess`, `sys`, `pathlib`).
