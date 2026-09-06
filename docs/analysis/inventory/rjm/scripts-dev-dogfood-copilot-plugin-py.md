---
package: rjm
path: scripts/dev/dogfood_copilot_plugin.py
type: script
bytes: 13739
unit: inv-rjm-214
in_scope_via: CONTRIBUTING.md
aliases: []
memo_inputs:
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/dev/dogfood_copilot_plugin.py

## Purpose — required, verbatim
> "Dogfood the shipped Copilot plugin base from the working tree." — scripts/dev/dogfood_copilot_plugin.py:1
> "It copies the working tree's ``src/copilot-cli`` directory over the installed ``project-toolkit`` plugin, so local Copilot sessions load the exact hooks, skills, and agents that ship." — scripts/dev/dogfood_copilot_plugin.py:11-13

## Design intent — required
Enables developers to dogfood their local working tree changes to the Copilot CLI plugin (`src/copilot-cli`) against the live Copilot runtime directory (`~/.copilot/installed-plugins/ai-agents/project-toolkit`). Standard Copilot CLI loads plugins from installed copies rather than source checkouts, creating a risk where breaking hook changes or regressions slip through unnoticed. This script establishes a copy-based dogfooding workflow (preserving an initial backup for clean uninstall) and provides content-based fingerprint drift checking (`--check`) to advise users before trusting hook behavior.

## Phase — required
cross-phase

## Inputs — required
- Source tree: `src/copilot-cli` (`default_source` function at line 74)
- Target directory: `$COPILOT_HOME/installed-plugins/ai-agents/project-toolkit` or default `~/.copilot/installed-plugins/ai-agents/project-toolkit` (`default_target` at line 79)
- CLI options:
  - `--install`: "copy the working tree over the installed plugin (default)" — scripts/dev/dogfood_copilot_plugin.py:315
  - `--uninstall`: "remove the dogfood copy and restore any backup" — scripts/dev/dogfood_copilot_plugin.py:320
  - `--status`: "show the current install state and exit" — scripts/dev/dogfood_copilot_plugin.py:325
  - `--check`: "working tree (in either direction)" — scripts/dev/dogfood_copilot_plugin.py:332

## Outputs — required
- Installed plugin tree copied to target directory via `dogfood_install` (line 184)
- Backup directory created with `.marketplace-bak` suffix (lines 38, 150)
- Marker file written at target: `.dogfood` (lines 39, 193)
- Status messages and drift advisories on stdout:
  - "python3 scripts/dev/dogfood_copilot_plugin.py --install" — scripts/dev/dogfood_copilot_plugin.py:289
- Exit codes:
  - "Exit codes: 0 success (or ``--check`` found no drift), 1 ``--check`` found the" — scripts/dev/dogfood_copilot_plugin.py:21
  - "installed dogfood copy out of sync with the working tree, 2 configuration error." — scripts/dev/dogfood_copilot_plugin.py:22

## Invokes — required
none

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:61
- doc CONTRIBUTING.md — CONTRIBUTING.md:64
- doc CONTRIBUTING.md — CONTRIBUTING.md:67

## Concepts named — required, verbatim
- `Copilot CLI` — scripts/dev/dogfood_copilot_plugin.py:3 — used here
- `issue #3247` — scripts/dev/dogfood_copilot_plugin.py:7 — used here
- `project-toolkit` — scripts/dev/dogfood_copilot_plugin.py:12 — used here
- `ADR-083` — scripts/dev/dogfood_copilot_plugin.py:17 — used here
- `#3252` — scripts/dev/dogfood_copilot_plugin.py:19 — used here
- `Refs #3222` — scripts/dev/dogfood_copilot_plugin.py:19 — used here
- `MARKETPLACE` — scripts/dev/dogfood_copilot_plugin.py:36 — defined here
- `PLUGIN_NAME` — scripts/dev/dogfood_copilot_plugin.py:37 — defined here
- `ADR-092` — scripts/dev/dogfood_copilot_plugin.py:124 — used here
- `dogfood_install` — scripts/dev/dogfood_copilot_plugin.py:184 — defined here
- `dogfood_uninstall` — scripts/dev/dogfood_copilot_plugin.py:197 — defined here
- `dogfood_status` — scripts/dev/dogfood_copilot_plugin.py:258 — defined here
- `dogfood_check` — scripts/dev/dogfood_copilot_plugin.py:276 — defined here
- `issue #3256` — scripts/dev/dogfood_copilot_plugin.py:280 — used here

## Structure
none (python script; functions: _repo_root, default_source, default_target, _read_manifest, _shipped_files, _content_fingerprint, _is_plugin_root, _backup_path, _stash_existing, dogfood_install, dogfood_uninstall, _is_dogfood_copy, _is_stale, _short_fingerprint, dogfood_status, dogfood_check, _build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/dev/dogfood_copilot_plugin.py`, language: Python 3, lines: 362
- documented invocation:
  - "python3 scripts/dev/dogfood_copilot_plugin.py --install" — CONTRIBUTING.md:61
  - "python3 scripts/dev/dogfood_copilot_plugin.py --status" — CONTRIBUTING.md:64
  - "python3 scripts/dev/dogfood_copilot_plugin.py --uninstall" — CONTRIBUTING.md:67
- executed: yes
- actual command run: `python3 scripts/dev/dogfood_copilot_plugin.py --status`
  abridged stdout:
  ```
  not installed at /Users/peterkloss/.copilot/installed-plugins/ai-agents/project-toolkit
  ```
  actual exit code: 0
- documented exit codes:
  - "Exit codes: 0 success (or ``--check`` found no drift), 1 ``--check`` found the" — scripts/dev/dogfood_copilot_plugin.py:21
  - "installed dogfood copy out of sync with the working tree, 2 configuration error." — scripts/dev/dogfood_copilot_plugin.py:22
  vs. actual exit paths:
  - `return 0` at line 357 (status, install, uninstall completed)
  - `return 1 if stale else 0` at line 349 (`--check` mode detection)
  - `return 2` at line 356 (ValueError, OSError, or SubprocessError)
  - `raise SystemExit(main())` at line 361
- for validators/gates: can it exit non-zero?
  Yes, exits 1 in `--check` mode when the installed dogfood copy differs in content from the working tree; exits 2 on configuration errors; exits 0 when clean.
- does output match what the documentation claims?
  Yes, prints status and executes installation/uninstallation workflows as documented.

## Defects — required
none

## Observations
- Computes SHA-256 digests over all shipped files (lines 120-137) to detect code drift without relying on version field increments in `plugin.json` (ADR-092).
- Automatically filters out local build artifacts, bytecode, and cache directories (`.pytest_cache`, `.ruff_cache`, `.mypy_cache`, `__pycache__`) to maintain clean parity between local development and published releases.

## Context cost
13739 bytes (~3435 tokens). Uses Python standard library only.
