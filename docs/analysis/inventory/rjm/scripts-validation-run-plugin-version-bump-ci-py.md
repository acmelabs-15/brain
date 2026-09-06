---
package: rjm
path: scripts/validation/run_plugin_version_bump_ci.py
type: script
bytes: 2939
unit: inv-rjm-302
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/run_plugin_version_bump_ci.py

## Purpose — required, verbatim
> "CI entry point for plugin version-bump validation (ADR-006 thin workflow)." — scripts/validation/run_plugin_version_bump_ci.py:2

## Design intent — required
Implements a CI wrapper for plugin version-bump validation adhering to ADR-006 ("Thin Workflows, Testable Modules") and ADR-092. The workflow step in `.github/workflows/validate-plugin-version-bump.yml` delegates shallow clone fetch recovery, base ref resolution, and validator execution to this module to keep CI YAML minimal and reproducible locally. The underlying validator checks that plugin manifests (`plugin.json`, `marketplace.json`) do not carry a `version` field (per ADR-092, which inverted earlier version-bump requirements). This runner validates the branch name, performs shallow fetch recovery, resolves the diff base, invokes `validate_plugin_version_bump.py` with a 120-second timeout, and forwards the validator's output and exit code.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `PR_BASE_REF` (target base branch name, defaults to `"main"`) — scripts/validation/run_plugin_version_bump_ci.py:11, 42
- Environment variable `PUSH_BEFORE_SHA` (read via `resolve_base` in `ci_runner_base`) — scripts/validation/run_plugin_version_bump_ci.py:16, 60
- Git repository history and refs resolved via fetch_base_ref (scripts/validation/run_plugin_version_bump_ci.py:56) and resolve_base (scripts/validation/run_plugin_version_bump_ci.py:60)
- Target validator script at build/scripts/validate_plugin_version_bump.py (scripts/validation/run_plugin_version_bump_ci.py:69)

## Outputs — required
- Standard output:
  - Fetch status notification: `Fetching` — scripts/validation/run_plugin_version_bump_ci.py:52
  - Execution status notification: `Running validate_plugin_version_bump.py against` — scripts/validation/run_plugin_version_bump_ci.py:74
  - Forwarded stdout from underlying validator — scripts/validation/run_plugin_version_bump_ci.py:79
- Standard error:
  - Branch name allowlist failure diagnostic — scripts/validation/run_plugin_version_bump_ci.py:45
  - Diff base resolution failure diagnostic — scripts/validation/run_plugin_version_bump_ci.py:62
  - Missing validator script error — scripts/validation/run_plugin_version_bump_ci.py:71
  - Forwarded stderr from underlying validator — scripts/validation/run_plugin_version_bump_ci.py:81
- Exit codes: 0 (clean), 1 (manifest carries forbidden version field), 2 (configuration/resolution/missing validator error), or fetch error code — scripts/validation/run_plugin_version_bump_ci.py:19, 20, 50, 58, 67, 72, 82

## Invokes — required
- script ci_runner_base — scripts/validation/run_plugin_version_bump_ci.py:32
- script validate_plugin_version_bump.py — scripts/validation/run_plugin_version_bump_ci.py:69

## Invoked by — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:57
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:86

## Concepts named — required, verbatim
- `main` — scripts/validation/run_plugin_version_bump_ci.py:41 — defined here
- `PR_BASE_REF` — scripts/validation/run_plugin_version_bump_ci.py:11 — used here
- `PUSH_BEFORE_SHA` — scripts/validation/run_plugin_version_bump_ci.py:16 — used here
- `HEAD` — scripts/validation/run_plugin_version_bump_ci.py:16 — used here
- `ADR-006` — scripts/validation/run_plugin_version_bump_ci.py:2 — used here
- `ADR-092` — scripts/validation/run_plugin_version_bump_ci.py:24 — used here
- `ci_runner_base` — scripts/validation/run_plugin_version_bump_ci.py:7 — used here
- `REPO_ROOT` — scripts/validation/run_plugin_version_bump_ci.py:33 — used here
- `fetch_base_ref` — scripts/validation/run_plugin_version_bump_ci.py:34 — used here
- `resolve_base` — scripts/validation/run_plugin_version_bump_ci.py:35 — used here
- `run` — scripts/validation/run_plugin_version_bump_ci.py:36 — used here
- `validate_branch` — scripts/validation/run_plugin_version_bump_ci.py:37 — used here
- `validate_plugin_version_bump.py` — scripts/validation/run_plugin_version_bump_ci.py:69 — used here

## Structure
- Module docstring describing behavior, steps, ADR-092 rationale, and exit codes — scripts/validation/run_plugin_version_bump_ci.py:1
- Imports from __future__, os, sys, and ci_runner_base — scripts/validation/run_plugin_version_bump_ci.py:32
- Function `main` implementing fetch fallback, base resolution, and execution — scripts/validation/run_plugin_version_bump_ci.py:41
- Entrypoint invocation — scripts/validation/run_plugin_version_bump_ci.py:85

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/run_plugin_version_bump_ci.py`, language: Python, lines: 87
- documented invocation:
  - "`python3 scripts/validation/run_plugin_version_bump_ci.py`" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:57
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
    - "Exit codes follow the validator: 0 clean, 1 a manifest carries a ``version``` — scripts/validation/run_plugin_version_bump_ci.py:19
    - "field, 2 config. Any error in steps 1-3 returns 2 with a stderr message." — scripts/validation/run_plugin_version_bump_ci.py:20
  - Actual:
    - line 50: `return 2` (branch name validation failure)
    - line 58: `return fetch_rc` (fetch return code if non-zero)
    - line 67: `return 2` (base ref resolution failure)
    - line 72: `return 2` (validator script missing at `build/scripts/validate_plugin_version_bump.py`)
    - line 82: `return rc` (forwarded validator exit code)
    - line 86: `sys.exit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exit code 2 for configuration errors, or forwarded non-zero exit codes from fetch or validator)
  - Does it fail on the source repo's default branch: no, exits 0 with `plugin-version-bump: OK`.
- does the output match what the documentation claims: yes, resolves base ref and executes validator cleanly.

## Defects — required
none

## Observations
- Implements ADR-006 thin workflow and reflects the ADR-092 policy change where version fields are disallowed in plugin manifests rather than required to be incremented.
- Passes the resolved diff base through to the validator even though under ADR-092 base comparisons no longer alter the version presence verdict.

## Context cost
2,939 bytes, 87 lines, ~730 tokens.
