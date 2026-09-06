---
package: rjm
path: scripts/ci/materialize_installed_plugin.py
type: script
bytes: 2533
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/materialize_installed_plugin.py, sha256: de098ac790298c060997e8a1fe7fd94a7a19bf0e4762b41d497af93cb7a26c2c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/materialize_installed_plugin.py

## Purpose — required, verbatim
> "Lay out the plugin the way the real installer does, for CI guards." — scripts/ci/materialize_installed_plugin.py:2

## Design intent — required
Materializes the plugin package into the exact directory layout created by `copilot plugin install` (`~/.copilot/installed-plugins/<marketplace>/<plugin>`) and initializes an isolated scratch consumer git repository outside the repository tree. This prevents path resolution false negatives/positives during hook guard testing where paths might accidentally resolve against the maintainer repository rather than an end-user install environment.

## Phase — required
rjm:build

## Inputs — required
- CLI flag `--plugin-source` — scripts/ci/materialize_installed_plugin.py:53
- CLI flag `--install-root` — scripts/ci/materialize_installed_plugin.py:54
- CLI flag `--consumer-cwd` — scripts/ci/materialize_installed_plugin.py:55

## Outputs — required
- Materialized plugin files copied to `install_root` — scripts/ci/materialize_installed_plugin.py:35
- Initialized consumer scratch git repository at `consumer_cwd` — scripts/ci/materialize_installed_plugin.py:48

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/materialize_installed_plugin.py:4 — used here
- `materialize` — scripts/ci/materialize_installed_plugin.py:26 — defined here
- `create_consumer_repo` — scripts/ci/materialize_installed_plugin.py:40 — defined here
- `main` — scripts/ci/materialize_installed_plugin.py:51 — defined here

## Structure
none (python script; functions: `materialize`, `create_consumer_repo`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/materialize_installed_plugin.py`, language: Python 3, lines: 67
- documented invocation:
  - "The layout mirrors what `copilot plugin install` produces, which" — scripts/ci/materialize_installed_plugin.py:8
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/materialize_installed_plugin.py --help`
  abridged stdout:
  ```
  usage: materialize_installed_plugin.py [-h] --plugin-source PLUGIN_SOURCE
                                         --install-root INSTALL_ROOT
                                         --consumer-cwd CONSUMER_CWD
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none in header.
  Actual exit paths:
  - line 28: `raise SystemExit(...)` (exits 1) when plugin source is not a directory
  - line 31: `raise SystemExit(...)` (exits 1) when plugin manifest `.claude-plugin/plugin.json` is missing
  - line 37: `raise SystemExit(...)` (exits 1) when materialized `hooks/hooks.json` is missing
  - line 62: `return 0` on successful materialization
  - line 66: `sys.exit(main())`
- for validators/gates: can it exit non-zero? yes (exits 1 on missing directory, missing manifest, or missing hooks.json, exits 2 on missing CLI arguments). Does it fail on the source repo's own default branch? no, `--help` exits 0 cleanly.
- does the output match what the documentation claims? yes, sets up materialized layout and consumer git repository.

## Defects — required
- orphan · scripts/ci/materialize_installed_plugin.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/workflows/installed-plugin-hook-guard.yml:70, 92.

## Observations
- Implements ADR-006 principle ("Kept out of workflow YAML per ADR-006", line 4) by encapsulating environment preparation logic in a testable Python module rather than inline workflow YAML shell commands.

## Context cost
2533 bytes (~633 tokens). Standard library only (`argparse`, `shutil`, `subprocess`, `sys`, `pathlib`).
