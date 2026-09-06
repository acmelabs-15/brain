---
package: rjm
path: scripts/bootstrap-vm.sh
type: script
bytes: 15641
unit: inv-rjm-197
in_scope_via: .claude/skills/ai-agents-build-and-env/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/bootstrap-vm.sh

## Purpose — required, verbatim
> "Bootstrap Ubuntu VM for ai-agents repository (DROID/Factory.ai)" — scripts/bootstrap-vm.sh:2

## Design intent — required
Automates complete environment setup for an Ubuntu VM or managed container running the `ai-agents` repository. Installs and configures system packages, Node.js 22 LTS, PowerShell Core, GitHub CLI, Python via `uv`, locked Python dev dependencies, git configuration, markdownlint-cli2, Pester, powershell-yaml, actionlint, and yamllint, while defensively mitigating CWE-22 directory traversal, curl-pipe-bash execution vulnerabilities, hanging mirrors, and PEP 668 externally managed environment failures.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `GITHUB_TOKEN` or `GH_TOKEN` for GitHub CLI authentication ("Usage: GITHUB_TOKEN=<pat> ./bootstrap-vm.sh" — scripts/bootstrap-vm.sh:3)
- Pinned environment files in repo root: `.python-version`, `uv.lock`, `lefthook.yml`, `pyproject.toml`
- Upstream network package archives: NodeSource GPG/apt repos, Microsoft Ubuntu packages, GitHub CLI keyring, Astral uv installer, Rhysd actionlint releases

## Outputs — required
- Toolchains and utilities installed on system and user PATH (`node`, `npm`, `pwsh`, `gh`, `uv`, `python3`, `markdownlint-cli2`, `actionlint`, `yamllint`)
- Configured git environment: global `core.autocrlf input`, canonical origin remote, and lefthook pre-commit hooks
- Populated `.venv` directory containing synced Python dependencies from `uv.lock`
- Environment persistence appended to `$HOME/.bashrc` (`PATH` prepends and `export SKIP_AUTOFIX=0`)
- Process exit code 0 on complete setup; non-zero under `set -euo pipefail` on any command failure or exit 1 paths (scripts/bootstrap-vm.sh:4, 277, 318, 332, 343)

## Invokes — required
- script install_merge_drivers.py — scripts/bootstrap-vm.sh:218

## Invoked by — required
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:60
- doc CONTRIBUTING.md — CONTRIBUTING.md:41

## Concepts named — required, verbatim
- `DROID` — scripts/bootstrap-vm.sh:2 — used here
- `Factory.ai` — scripts/bootstrap-vm.sh:2 — used here
- `CWE-22` — scripts/bootstrap-vm.sh:9 — used here
- `install_uv` — scripts/bootstrap-vm.sh:19 — defined here
- `cleanup_tmp` — scripts/bootstrap-vm.sh:32 — defined here
- `quiet_run` — scripts/bootstrap-vm.sh:45 — defined here
- `quiet_apt_get` — scripts/bootstrap-vm.sh:60 — defined here
- `NODE_MAJOR` — scripts/bootstrap-vm.sh:84 — defined here
- `configure_github_cli` — scripts/bootstrap-vm.sh:114 — defined here
- `restore_origin_remote` — scripts/bootstrap-vm.sh:157 — defined here
- `PYTHON_PIN` — scripts/bootstrap-vm.sh:175 — defined here
- `PEP 668` — scripts/bootstrap-vm.sh:225 — used here
- `PESTER_VERSION` — scripts/bootstrap-vm.sh:284 — defined here
- `ACTIONLINT_VERSION` — scripts/bootstrap-vm.sh:312 — defined here
- `SKIP_AUTOFIX` — scripts/bootstrap-vm.sh:348 — defined here

## Structure
- Shebang, comment header, and shell safety options (scripts/bootstrap-vm.sh:1-6)
- Repository root anchoring and bounded curl options (scripts/bootstrap-vm.sh:7-17)
- `install_uv` standalone installer download and execution (scripts/bootstrap-vm.sh:19-27)
- EXIT trap handler `cleanup_tmp` and quiet wrappers (scripts/bootstrap-vm.sh:29-70)
- Section 1: System prerequisites via apt-get (scripts/bootstrap-vm.sh:72-76)
- Section 2: Node.js 22 LTS installation via signed keyring (scripts/bootstrap-vm.sh:78-93)
- Section 3: PowerShell Core installation via Microsoft repository (scripts/bootstrap-vm.sh:95-102)
- Section 4: GitHub CLI installation and token authentication (scripts/bootstrap-vm.sh:104-156)
- Section 5: Upstream git origin restoration (scripts/bootstrap-vm.sh:157-168)
- Section 6: Python uv toolchain installation and version check (scripts/bootstrap-vm.sh:170-194)
- Section 7: Python interpreter installation via `.python-version` pin (scripts/bootstrap-vm.sh:195-204)
- Section 8: Python virtualenv sync from `uv.lock` and Lefthook installation (scripts/bootstrap-vm.sh:206-253)
- Section 9: markdownlint-cli2 installation via npm (scripts/bootstrap-vm.sh:255-279)
- Section 10: PowerShell Pester 5.7.1 and powershell-yaml modules (scripts/bootstrap-vm.sh:281-305)
- Section 11: Git global configuration `core.autocrlf input` (scripts/bootstrap-vm.sh:307-309)
- Section 12: Linting tools actionlint and yamllint installation (scripts/bootstrap-vm.sh:310-345)
- Section 13: Environment variables and bashrc setup (scripts/bootstrap-vm.sh:347-352)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/bootstrap-vm.sh`
- **language:** Bash (`#!/usr/bin/env bash`)
- **lines:** 352
- **documented invocation:**
  - "Usage: GITHUB_TOKEN=<pat> ./bootstrap-vm.sh" — scripts/bootstrap-vm.sh:3
  - `bash scripts/bootstrap-vm.sh` — .claude/skills/ai-agents-build-and-env/SKILL.md:60
- **executed:** no (full run) / yes (syntax check)
  - Full execution skipped because the script targets an Ubuntu Linux environment (`apt-get`, `sudo`, `dpkg`, `/etc/apt/` modifications) and mutates user global git and bashrc configuration, while the audit host is macOS.
  - Syntax check executed via `bash -n sources/rjm/scripts/bootstrap-vm.sh`.
- **actual command run:** `bash -n sources/rjm/scripts/bootstrap-vm.sh`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none explicit in header; governed by `set -euo pipefail` (scripts/bootstrap-vm.sh:4).
  - Actual code paths:
    - `exit 1` — scripts/bootstrap-vm.sh:277 (npm not found)
    - `exit 1` — scripts/bootstrap-vm.sh:318 (unsupported architecture)
    - `exit 1` — scripts/bootstrap-vm.sh:332 (actionlint installation failed: binary not found on PATH)
    - `exit 1` — scripts/bootstrap-vm.sh:343 (yamllint installation failed: binary not found on PATH)
    - Implicit 0 on reaching end of script (scripts/bootstrap-vm.sh:352)
    - Non-zero on any unhandled subshell failure via `set -e` (scripts/bootstrap-vm.sh:4)
- **for validators/gates:** N/A (system provisioning script, not a validator/gate).
- **does the output match what the documentation claims:** Syntax check passes; commands align with documented provisioning requirements in CONTRIBUTING.md.

## Defects — required
- missing-path · scripts/bootstrap-vm.sh:218 · References `scripts/maintenance/install_merge_drivers.py` which does not exist in the repository.
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:55 · Cites drifted line `scripts/bootstrap-vm.sh:40` for `NODE_MAJOR=22` (actual: line 84).
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:87 · Cites drifted lines `scripts/bootstrap-vm.sh:109-115` for venv setup (actual: lines 207-213).
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:145 · Cites drifted lines `scripts/bootstrap-vm.sh:118-123` for uv installation (actual: lines 240-250).
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:195 · Cites drifted line `scripts/bootstrap-vm.sh:114` for `uv sync --frozen` (actual: line 211).
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:196 · Cites drifted line `scripts/bootstrap-vm.sh:40` for Node 22 LTS (actual: line 84).

## Observations
- Implements defensive CWE-22 protection by resolving `REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"` and setting working directory to repo root (scripts/bootstrap-vm.sh:10-11).
- Avoids unsafe `curl | sh` execution by writing downloads to `mktemp` and verifying exit before executing (scripts/bootstrap-vm.sh:23-25).
- Pins `NODE_MAJOR=22` (line 84), `PESTER_VERSION="5.7.1"` (line 284), and `ACTIONLINT_VERSION="1.7.11"` (line 312) with explicit SHA256 checksum validation for both x86_64 and aarch64 architectures (scripts/bootstrap-vm.sh:316-326).

## Context cost
15641 bytes, 352 lines, ~3900 tokens.
