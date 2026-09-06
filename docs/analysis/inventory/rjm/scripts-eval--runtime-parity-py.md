---
package: rjm
path: scripts/eval/_runtime_parity.py
type: script
bytes: 16657
unit: inv-rjm-223
in_scope_via: scripts/eval/eval_runtime_parity.py
aliases: []
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_runtime_parity.py

## Purpose — required, verbatim
> "Fixture loading and deterministic scoring for real-CLI parity evals." — scripts/eval/_runtime_parity.py:1

## Design intent — required
Provides fixture management, workspace isolation, environment sanitization, agent installation, and deterministic scoring routines for real-CLI parity evaluations between Claude Code and GitHub Copilot CLI. It creates clean, ephemeral git repositories isolated from the parent worktree and user profile, rewrites agent frontmatter so both harnesses recognize the agent under the unified name `parity`, runs positive and negative controls to prevent unfailable assertions, and deterministically scores response patterns and filesystem state assertions (`regex`, `not_regex`, `file_equals`, `file_absent`).

## Phase — required
rjm:eval

## Inputs — required
- Parity fixture JSON specification path passed to `load_fixtures` — scripts/eval/_runtime_parity.py:135
- Agent markdown file paths in repository validated via `_repo_file` — scripts/eval/_runtime_parity.py:69
- Host operating system environment variables filtered through `runtime_env` — scripts/eval/_runtime_parity.py:384

## Outputs — required
- Validated `Fixture` dataclass instances returned by `load_fixtures` — scripts/eval/_runtime_parity.py:135
- Scored assertion result dictionaries returned by `score_assertions` — scripts/eval/_runtime_parity.py:201
- Transformed agent file installation via `_install_agent` — scripts/eval/_runtime_parity.py:309
- Isolated git repository created via `prepare_workspace` — scripts/eval/_runtime_parity.py:322

## Invokes — required
none

## Invoked by — required
- script _runtime_parity — scripts/eval/eval_runtime_parity.py:60

## Concepts named — required, verbatim
- `parity evals` — scripts/eval/_runtime_parity.py:1 — used here
- `REPO_ROOT` — scripts/eval/_runtime_parity.py:14 — defined here
- `SCHEMA_VERSION` — scripts/eval/_runtime_parity.py:15 — defined here
- `SUPPORTED_TOOLS` — scripts/eval/_runtime_parity.py:16 — defined here
- `SENTINEL` — scripts/eval/_runtime_parity.py:17 — defined here
- `GIT_CONTEXT_VARIABLES` — scripts/eval/_runtime_parity.py:18 — defined here
- `ParityConfigError` — scripts/eval/_runtime_parity.py:26 — defined here
- `AssertionSpec` — scripts/eval/_runtime_parity.py:31 — defined here
- `Control` — scripts/eval/_runtime_parity.py:39 — defined here
- `Fixture` — scripts/eval/_runtime_parity.py:45 — defined here
- `load_fixtures` — scripts/eval/_runtime_parity.py:135 — defined here
- `score_assertions` — scripts/eval/_runtime_parity.py:201 — defined here
- `hash_file` — scripts/eval/_runtime_parity.py:247 — defined here
- `live_files` — scripts/eval/_runtime_parity.py:261 — defined here
- `AGENT_NAME` — scripts/eval/_runtime_parity.py:273 — defined here
- `hash_installed_agent` — scripts/eval/_runtime_parity.py:304 — defined here
- `prepare_workspace` — scripts/eval/_runtime_parity.py:322 — defined here
- `runtime_env` — scripts/eval/_runtime_parity.py:384 — defined here
- `probe_version` — scripts/eval/_runtime_parity.py:419 — defined here
- `verify_worktree_identity` — scripts/eval/_runtime_parity.py:449 — defined here

## Structure
none (python module defining constants, dataclasses, fixture loaders, control validators, workspace preparation, environment setup, and assertion scoring: `REPO_ROOT`, `SCHEMA_VERSION`, `SUPPORTED_TOOLS`, `SENTINEL`, `GIT_CONTEXT_VARIABLES`, `ParityConfigError`, `AssertionSpec`, `Control`, `Fixture`, `_mapping`, `_string`, `_repo_file`, `_relative_path`, `_load_assertion`, `_load_control`, `_load_files`, `load_fixtures`, `_load_fixture`, `score_assertions`, `_validate_controls`, `hash_file`, `_safe_workspace_file`, `live_files`, `AGENT_NAME`, `_installed_agent_bytes`, `hash_installed_agent`, `_install_agent`, `_nested_git_env`, `prepare_workspace`, `_profile_roots`, `runtime_env`, `probe_version`, `verify_worktree_identity`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_runtime_parity.py`, language: Python 3, lines: 476
- documented invocation:
  - "from _runtime_parity import (" — scripts/eval/eval_runtime_parity.py:60
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_runtime_parity.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (support module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls; raises `ParityConfigError` or `RuntimeError` upon configuration or execution validation failures; exits 0 when loaded as a module.
- for validators/gates: can it exit non-zero? no (module library). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, loads fixture specifications, enforces workspace isolation, and executes deterministic scoring.

## Defects — required
none

## Observations
- `_installed_agent_bytes` (lines 276-301) rewrites the agent frontmatter `name:` to `parity` dynamically because both Claude Code and Copilot CLI resolve `--agent <name>` against the YAML frontmatter name rather than the filename (issue #4853).
- `_validate_controls` (lines 230-245) validates that positive controls pass and negative controls fail for every fixture definition at load time, ensuring no unfailable or always-failing assertions enter the evaluation suite.
- `_profile_roots` and `runtime_env` (lines 359-416) intercept `HOME`, `USERPROFILE`, `APPDATA`, `XDG_CACHE_HOME`, `COPILOT_HOME`, and `CLAUDE_CONFIG_DIR`, redirecting them to temporary directories within `.parity-profile` to achieve hermetic execution.
- `verify_worktree_identity` (lines 449-476) ensures that the evaluator runs within the expected git repository worktree and prevents accidental cross-worktree contamination.

## Context cost
16657 bytes (~4164 tokens). Standard library only (`hashlib`, `json`, `os`, `re`, `subprocess`, `dataclasses`, `pathlib`).
