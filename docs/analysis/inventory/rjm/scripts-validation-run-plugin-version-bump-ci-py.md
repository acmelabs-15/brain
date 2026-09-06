---
package: rjm
path: scripts/validation/run_plugin_version_bump_ci.py
type: script
bytes: 2939
unit: inv-rjm-302
in_scope_via: .claude/skills/ai-agents-debugging-playbook/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/run_plugin_version_bump_ci.py

## Purpose — required, verbatim
> "CI entry point for plugin version-bump validation (ADR-006 thin workflow)." — scripts/validation/run_plugin_version_bump_ci.py:2

## Design intent — required
Provides the CI runner module for plugin version validation under ADR-006 ("Thin Workflows, Testable Modules"), called from `.github/workflows/validate-plugin-version-bump.yml`. Under earlier conventions (ADR-079), plugin manifests required manual version bumps when features changed. However, ADR-092 inverted this policy: Claude Code plugin manifests must not contain manual `version` fields because distribution and marketplace pipelines manage version assignments. The check now verifies that no `version` field appears in `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, or `.github/plugin/marketplace.json`. This script moves the shallow git clone unshallowing, `PR_BASE_REF` validation, and diff base resolution out of workflow YAML into Python. Although the diff base no longer alters the validation outcome after ADR-092, base ref resolution remains necessary so shallow CI checkouts can resolve the commit ref where manifests are read.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `PR_BASE_REF` specifying target base branch (defaults to `main`) — scripts/validation/run_plugin_version_bump_ci.py:42
- Environment variable `PUSH_BEFORE_SHA` for push range validation — scripts/validation/run_plugin_version_bump_ci.py:16
- Git repository history and references queried via `ci_runner_base.py` functions — scripts/validation/run_plugin_version_bump_ci.py:32-37
- Validator script `validate_plugin_version_bump.py`  — scripts/validation/run_plugin_version_bump_ci.py:69

## Outputs — required
- Standard output status messages and forwarded validator stdout — scripts/validation/run_plugin_version_bump_ci.py:52, 74, 78-79
- Standard error messages on configuration or resolution failure, and forwarded validator stderr — scripts/validation/run_plugin_version_bump_ci.py:45-49, 62-66, 71, 80-81
- Exit code 0 when plugin version validation passes cleanly — scripts/validation/run_plugin_version_bump_ci.py:19, 82
- Exit code 1 when a manifest carries a forbidden version field — scripts/validation/run_plugin_version_bump_ci.py:19, 82
- Exit code 2 on configuration errors (branch allowlist failure, unresolved base ref, or missing validator) — scripts/validation/run_plugin_version_bump_ci.py:20, 50, 58, 67, 72

## Invokes — required
- script ci_runner_base.py — scripts/validation/run_plugin_version_bump_ci.py:7
- script validate_plugin_version_bump.py — scripts/validation/run_plugin_version_bump_ci.py:69

## Invoked by — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:57

## Concepts named — required, verbatim
- `plugin version-bump validation` — scripts/validation/run_plugin_version_bump_ci.py:2 — defined here
- `ADR-006` — scripts/validation/run_plugin_version_bump_ci.py:2 — used here
- `validate-plugin-version-bump.yml` — scripts/validation/run_plugin_version_bump_ci.py:4 — used here
- `ci_runner_base.py` — scripts/validation/run_plugin_version_bump_ci.py:7 — used here
- `PR_BASE_REF` — scripts/validation/run_plugin_version_bump_ci.py:11 — used here
- `PUSH_BEFORE_SHA` — scripts/validation/run_plugin_version_bump_ci.py:16 — used here
- `HEAD^` — scripts/validation/run_plugin_version_bump_ci.py:16 — used here
- `ADR-092` — scripts/validation/run_plugin_version_bump_ci.py:24 — used here
- `REPO_ROOT` — scripts/validation/run_plugin_version_bump_ci.py:33 — used here
- `fetch_base_ref` — scripts/validation/run_plugin_version_bump_ci.py:34 — used here
- `resolve_base` — scripts/validation/run_plugin_version_bump_ci.py:35 — used here
- `validate_branch` — scripts/validation/run_plugin_version_bump_ci.py:37 — used here
- `main` — scripts/validation/run_plugin_version_bump_ci.py:41 — defined here
- `validate_plugin_version_bump.py` — scripts/validation/run_plugin_version_bump_ci.py:69 — used here

## Structure
- Module docstring and thin workflow contract — scripts/validation/run_plugin_version_bump_ci.py:2-25
- Module imports and runner dependencies — scripts/validation/run_plugin_version_bump_ci.py:27-38
- `main` execution function — scripts/validation/run_plugin_version_bump_ci.py:41-83
- CLI entrypoint invocation — scripts/validation/run_plugin_version_bump_ci.py:85-86

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/run_plugin_version_bump_ci.py`, language: Python, lines: 87
- documented invocation:
  - "python3 scripts/validation/run_plugin_version_bump_ci.py" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:57
- executed: yes
- actual command run: `python3 scripts/validation/run_plugin_version_bump_ci.py`
- abridged stdout:
```
Fetching main for diff base...
Running validate_plugin_version_bump.py against origin/main...
plugin-version-bump: OK
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "0 clean, 1 a manifest carries a ``version`` field, 2 config" — scripts/validation/run_plugin_version_bump_ci.py:19-20
    - "Any error in steps 1-3 returns 2 with a stderr message." — scripts/validation/run_plugin_version_bump_ci.py:20
  - Actual exit paths in code:
    - Exit 0: `return rc` at scripts/validation/run_plugin_version_bump_ci.py:82 when validator exits 0
    - Exit 1: `return rc` at scripts/validation/run_plugin_version_bump_ci.py:82 when validator exits 1 (forbidden version field present)
    - Exit 2: `return 2` at scripts/validation/run_plugin_version_bump_ci.py:50 (branch allowlist check fails), line 67 (base resolution fails), line 72 (validator script missing); and `return fetch_rc` at line 58 when `fetch_base_ref` fails
- for validators/gates:
  - Can it exit non-zero: yes (exits 2 on invalid branch name, unresolved diff base, or missing validator; exits 1 when manifest carries version field)
  - Does it fail on the source repo's own default branch: no, cleanly resolves `origin/main` and exits 0 with `plugin-version-bump: OK`
- does output match what the documentation claims: yes, executes validate_plugin_version_bump.py, reporting `plugin-version-bump: OK` and exiting 0.

## Defects — required
none

## Observations
- Implements ADR-006 thin workflow pattern for `.github/workflows/validate-plugin-version-bump.yml`.
- Notes that after ADR-092 inverted the check, passing the resolved base is retained only for shallow checkout ref resolution and does not alter the verdict.
- Invokes `build/scripts/validate_plugin_version_bump.py` with a 120-second timeout.

## Context cost
2939 bytes, 87 lines, ~730 tokens. At runtime, loads `ci_runner_base.py` (8701 bytes) and invokes `validate_plugin_version_bump.py` (3770 bytes), total ~15.4 KB (~3850 tokens).
