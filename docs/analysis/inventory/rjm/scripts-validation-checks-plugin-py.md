---
package: rjm
path: scripts/validation/checks_plugin.py
type: script
bytes: 17441
unit: inv-rjm-292
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_plugin.py, sha256: bde1cc8ea22ca4ac213de4ce3b615700be8f0c8bfaaa715f49f58b141094a2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_plugin.py

## Purpose — required, verbatim
> "Plugin, install, and hook gates for the pre-PR runner." — scripts/validation/checks_plugin.py:2

## Design intent — required
Aggregates and orchestrates verification gates for plugin packaging, multi-platform agent parity, hook configuration, and workflow automation in the pre-PR sequence. Extracted from `pre_pr.py` to maintain modularity, it guards several critical structural invariants:
1. Hook anchoring: ensures plugin hook definitions in `.claude/hooks/hooks.json` and `src/copilot-cli/hooks/hooks.json` use environment-anchored paths (`${CLAUDE_PLUGIN_ROOT}`) rather than bare relative paths that break at runtime.
2. Frontmatter integrity: validates that Copilot agent markdown files in `.github/agents/` contain parseable YAML without unquoted colon-containing descriptions that crash the loader.
3. Shipped skill routes: verifies that every skill routing reference in plugin manifests resolves to an extant skill.
4. Parity checks: detects install-copy drift between shared agents and rule files, and byte-compares `.claude/agents/` against `src/claude/`.
5. Version bumps: ensures modified plugin code is accompanied by a version increase in `plugin.json`.
6. Lefthook installation: verifies local git hook configuration under developer environments (with worktree tolerance).
7. Workflow testing: runs fast shift-left validation (`actionlint` and `act -n`) on modified GitHub workflow files before push.
8. Colocated skill tests: prevents test files from being erroneously placed in customer-shipped skill directories.

## Phase — required
none

## Inputs — required
- Repository root path: `repo_root: Path` parameter passed to validator functions — scripts/validation/checks_plugin.py:33
- Environment variables: `GITHUB_ACTIONS` and `CI` flags checked during Lefthook validation — scripts/validation/checks_plugin.py:218, 219
- Configuration files: `lefthook.yml` — scripts/validation/checks_plugin.py:223
- Git diff and workspace queries via `_run_subprocess` — scripts/validation/checks_plugin.py:47
- Subordinate validator scripts:
  - `validate_hook_anchoring.py` — scripts/validation/checks_plugin.py:43
  - `validate_copilot_agent_frontmatter.py` — scripts/validation/checks_plugin.py:67
  - `check_shipped_skill_routes.py` — scripts/validation/checks_plugin.py:106
  - `validate_install_parity.py` — scripts/validation/checks_plugin.py:145
  - `check_agent_content_parity.py` — scripts/validation/checks_plugin.py:161
  - `validate_plugin_version_bump.py` — scripts/validation/checks_plugin.py:198
  - `run_workflow_local_test.py` — scripts/validation/checks_plugin.py:374
  - `check_colocated_skill_tests.py` — scripts/validation/checks_plugin.py:429

## Outputs — required
- Boolean return values: True on validation pass or tolerated skip, False on failure — scripts/validation/checks_plugin.py:55
- Standard output and error diagnostic messages emitted on check failures or tool skips:
  - `[ERROR] lefthook.yml is absent; installation cannot be verified.` — scripts/validation/checks_plugin.py:225
  - `[FAIL] Lefthook is not installed.` — scripts/validation/checks_plugin.py:257
  - `[ERROR] check_colocated_skill_tests.py not found` — scripts/validation/checks_plugin.py:431
- Exceptions: raises `MissingScriptSkip` when optional tools are absent or running under CI — scripts/validation/checks_plugin.py:45, 70, 221, 376

## Invokes — required
- function MissingScriptSkip — scripts/validation/checks_plugin.py:26
- function _resolve_default_base_ref — scripts/validation/checks_plugin.py:27
- function _run_build_script_gate — scripts/validation/checks_plugin.py:28
- function _run_subprocess — scripts/validation/checks_plugin.py:29
- script validate_hook_anchoring.py — scripts/validation/checks_plugin.py:43
- script validate_copilot_agent_frontmatter.py — scripts/validation/checks_plugin.py:67
- script check_shipped_skill_routes.py — scripts/validation/checks_plugin.py:106
- script validate_install_parity.py — scripts/validation/checks_plugin.py:145
- script check_agent_content_parity.py — scripts/validation/checks_plugin.py:161
- script validate_plugin_version_bump.py — scripts/validation/checks_plugin.py:198
- script run_workflow_local_test.py — scripts/validation/checks_plugin.py:374
- script check_colocated_skill_tests.py — scripts/validation/checks_plugin.py:429

## Invoked by — required
- script checks_plugin — scripts/validation/pre_pr_sequence.py:64
- script checks_plugin — scripts/validation/pre_pr.py:103

## Concepts named — required, verbatim
- `MissingScriptSkip` — scripts/validation/checks_plugin.py:26 — used here
- `_resolve_default_base_ref` — scripts/validation/checks_plugin.py:27 — used here
- `_run_build_script_gate` — scripts/validation/checks_plugin.py:28 — used here
- `_run_subprocess` — scripts/validation/checks_plugin.py:29 — used here
- `validate_hook_anchoring` — scripts/validation/checks_plugin.py:33 — defined here
- `validate_copilot_agent_frontmatter` — scripts/validation/checks_plugin.py:58 — defined here
- `validate_shipped_skill_routes` — scripts/validation/checks_plugin.py:87 — defined here
- `validate_install_parity` — scripts/validation/checks_plugin.py:126 — defined here
- `validate_agent_content_parity` — scripts/validation/checks_plugin.py:149 — defined here
- `validate_plugin_version_bump` — scripts/validation/checks_plugin.py:184 — defined here
- `_lefthook_check_command` — scripts/validation/checks_plugin.py:202 — defined here
- `validate_lefthook_installed` — scripts/validation/checks_plugin.py:210 — defined here
- `_is_linked_worktree` — scripts/validation/checks_plugin.py:264 — defined here
- `_add_workflow_paths` — scripts/validation/checks_plugin.py:300 — defined here
- `_collect_changed_workflows` — scripts/validation/checks_plugin.py:317 — defined here
- `validate_workflow_local_run` — scripts/validation/checks_plugin.py:349 — defined here
- `validate_colocated_skill_tests` — scripts/validation/checks_plugin.py:423 — defined here

## Structure
- Shebang and module docstring — scripts/validation/checks_plugin.py:1-11
- Imports and common runner imports — scripts/validation/checks_plugin.py:13-30
- Hook anchoring gate — scripts/validation/checks_plugin.py:33-56
- Copilot agent frontmatter gate — scripts/validation/checks_plugin.py:58-85
- Shipped skill routes gate — scripts/validation/checks_plugin.py:87-124
- Install parity gate — scripts/validation/checks_plugin.py:126-147
- Agent content parity byte-comparison gate — scripts/validation/checks_plugin.py:149-182
- Plugin version bump gate — scripts/validation/checks_plugin.py:184-200
- Lefthook installation gate and worktree detection — scripts/validation/checks_plugin.py:202-298
- Workflow change collection and local test gate — scripts/validation/checks_plugin.py:300-421
- Colocated skill tests gate — scripts/validation/checks_plugin.py:423-440

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_plugin.py`, language: Python 3, lines: 440
- documented invocation:
  - "Plugin, install, and hook gates for the pre-PR runner." — scripts/validation/checks_plugin.py:2
- executed: yes
- actual command run:
  - `python3 scripts/validation/checks_plugin.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 scripts/validation/checks_plugin.py` (cwd `sources/rjm`)
  - `PYTHONPATH=. python3 -c "from pathlib import Path; from scripts.validation.checks_plugin import validate_colocated_skill_tests; print('Result:', validate_colocated_skill_tests(Path('.')))"` (cwd `sources/rjm`)
- actual exit code:
  - Direct execution: 1 (`ModuleNotFoundError: No module named 'scripts'`)
  - With PYTHONPATH: 0 (clean import, no CLI entry point)
  - Function execution via python3 -c: 0
- abridged stdout:
```
Result: True
```
- documented exit codes vs actual exit paths:
  - No documented numeric exit codes (defines boolean validation functions).
  - Actual return paths:
    - line 55: `return bool(exit_code == 0)` in `validate_hook_anchoring`
    - line 84: `return bool(exit_code == 0)` in `validate_copilot_agent_frontmatter`
    - line 123: `return bool(exit_code == 0)` in `validate_shipped_skill_routes`
    - line 144: `return bool(_run_build_script_gate(...))` in `validate_install_parity`
    - line 181: `return result.returncode == 0` in `validate_agent_content_parity`
    - line 197: `return bool(_run_build_script_gate(...))` in `validate_plugin_version_bump`
    - lines 246, 255, 261: returns True or False in `validate_lefthook_installed`
    - line 420: `return bool(exit_code == 0)` in `validate_workflow_local_run`
    - line 439: `return bool(exit_code == 0)` in `validate_colocated_skill_tests`
- for validators/gates:
  - Can return False: yes, each validator returns False when its underlying check fails or subordinate gate returns non-zero.
  - Tested on repository default branch: passes with return value `True`.
- does output match what the documentation claims: yes, executes validation checks for hooks, agent parity, workflow files, and colocated tests.

## Defects — required
- `script-bug` · `scripts/validation/checks_plugin.py:21` — Direct execution fails with `ModuleNotFoundError: No module named 'scripts'` because `_SCRIPT_DIR` is added to `sys.path` but repo root is not, breaking `from scripts.cli_exec import resolve_executable` in `subprocess_runner.py`.

## Observations
- Implements defense-in-depth for worktrees: `_is_linked_worktree` inspects `--git-dir` vs `--git-common-dir` so that `validate_lefthook_installed` emits a non-blocking warning in linked worktrees where git hooks are managed by the primary repository.
- Workflow change collection (`_collect_changed_workflows`) unifies 4 distinct git sources (committed branch diff, staged index, unstaged working tree, untracked files) to catch workflow bugs before they are committed.

## Context cost
17441 bytes, 440 lines, ~4360 tokens.
