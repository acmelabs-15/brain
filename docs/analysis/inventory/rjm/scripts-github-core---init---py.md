---
package: rjm
path: scripts/github_core/__init__.py
type: script
bytes: 3035
unit: inv-rjm-239
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/__init__.py

## Purpose — required, verbatim
> "GitHub Core module: shared helpers for GitHub CLI operations." — scripts/github_core/__init__.py:1

## Design intent — required
Serves as the unified package entrypoint for `scripts.github_core`, re-exporting common API functions, GitHub client classes, bot configuration checkers, output formatters, repository resolvers, and validation helpers from internal submodules into a clean public namespace. A synchronized copy is maintained at `.claude/lib/github_core/` for plugin distribution.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script scripts.github_core.api — scripts/github_core/__init__.py:9
- script scripts.github_core.bot_config — scripts/github_core/__init__.py:40
- script scripts.github_core.formatting — scripts/github_core/__init__.py:45
- script scripts.github_core.gh_client — scripts/github_core/__init__.py:49
- script scripts.github_core.output — scripts/github_core/__init__.py:50
- script scripts.github_core.protocol — scripts/github_core/__init__.py:55
- script scripts.github_core.repo — scripts/github_core/__init__.py:56
- script scripts.github_core.validation — scripts/github_core/__init__.py:63

## Invoked by — required
- script scripts.github_core — scripts/invoke_pr_maintenance.py:36

## Concepts named — required, verbatim
- `sync_plugin_lib.py` — scripts/github_core/__init__.py:4 — used here
- `DEFAULT_RATE_THRESHOLDS` — scripts/github_core/__init__.py:10 — used here
- `FetchStatus` — scripts/github_core/__init__.py:11 — used here
- `GhAuthResult` — scripts/github_core/__init__.py:12 — used here
- `GhAuthStatus` — scripts/github_core/__init__.py:13 — used here
- `RateLimitResult` — scripts/github_core/__init__.py:14 — used here
- `RateLimitStatus` — scripts/github_core/__init__.py:15 — used here
- `RepoInfo` — scripts/github_core/__init__.py:16 — used here
- `is_bot` — scripts/github_core/__init__.py:43 — used here
- `GhCliClient` — scripts/github_core/__init__.py:49 — used here
- `GitHubClient` — scripts/github_core/__init__.py:55 — used here
- `REPO_ROOT_OK` — scripts/github_core/__init__.py:59 — used here
- `get_repo_root` — scripts/github_core/__init__.py:60 — used here
- `resolve_repo_root` — scripts/github_core/__init__.py:61 — used here
- `__all__` — scripts/github_core/__init__.py:71 — defined here

## Structure
- Module docstring noting plugin library mirror relationship (lines 1-5)
- Future annotations import (line 7)
- Submodule imports: `api`, `bot_config`, `formatting`, `gh_client`, `output`, `protocol`, `repo`, `validation` (lines 9-69)
- `__all__` public API export list defining exported functions, classes, and constants (lines 71-121)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/__init__.py`
- **language:** Python 3
- **lines:** 122
- **documented invocation:**
  > "Run ``python3 scripts/sync_plugin_lib.py`` to sync changes." — scripts/github_core/__init__.py:4
- **executed:** yes
- **command:** `python3 -c "import scripts.github_core; print('imported successfully')"` (from `sources/rjm`)
- **stdout:**
  ```text
  imported successfully
  ```
- **actual exit code:** 0
- **documented exit codes:** none
- **actual exit paths:** none
- **for validators/gates:** not a validator or gate; package initialization runs without error when imported from project root.
- **output matches documentation:** yes, imports cleanly from package root and re-exports symbols.

## Defects — required
none

## Observations
Re-exports symbols from 8 submodules in `scripts/github_core/`. Has a mirrored twin under `.claude/lib/github_core/` that is kept in sync via `python3 scripts/sync_plugin_lib.py`, which rewrites imports to use relative syntax (`from .api import ...`) for plugin portability.

## Context cost
3035 bytes, ~750 tokens. Loads 8 submodules in `scripts/github_core/` (summing to ~106 KB). Total context cost: ~109 KB.
