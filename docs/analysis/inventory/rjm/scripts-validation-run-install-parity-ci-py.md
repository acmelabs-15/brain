---
package: rjm
path: scripts/validation/run_install_parity_ci.py
type: script
bytes: 2854
unit: inv-rjm-302
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/run_install_parity_ci.py

## Purpose — required, verbatim
> "CI entry point for install-parity validation (ADR-006 thin workflow)." — scripts/validation/run_install_parity_ci.py:2

## Design intent — required
Implements a testable CI runner wrapper for install-parity validation adhering to ADR-006 ("Thin Workflows, Testable Modules"). GitHub Actions workflow steps can easily become bloated and untestable when shell logic for git fetching, base reference resolution, and error handling is embedded directly inside workflow YAML (`.github/workflows/validate-generated-agents.yml`). This module encapsulates that logic in Python: it securely validates branch names, executes git unshallowing and fetch fallbacks via `ci_runner_base`, determines the correct diff base (`origin/<base>`, `PUSH_BEFORE_SHA`, or `HEAD^`), invokes the underlying `validate_install_parity.py` validator within a 120-second timeout, and forwards its stdout, stderr, and exit code.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `PR_BASE_REF` (target base branch name, defaults to `"main"`) — scripts/validation/run_install_parity_ci.py:12, 41
- Environment variable `PUSH_BEFORE_SHA` (read via `resolve_base` in `ci_runner_base`) — scripts/validation/run_install_parity_ci.py:15, 60
- Git repository history and refs resolved via fetch_base_ref (scripts/validation/run_install_parity_ci.py:56) and resolve_base (scripts/validation/run_install_parity_ci.py:60)
- Target validator script at build/scripts/validate_install_parity.py (scripts/validation/run_install_parity_ci.py:70)

## Outputs — required
- Standard output:
  - Fetch status notification: `Fetching` — scripts/validation/run_install_parity_ci.py:52
  - Execution status notification: `Running validate_install_parity.py against` — scripts/validation/run_install_parity_ci.py:69
  - Forwarded stdout from underlying validator — scripts/validation/run_install_parity_ci.py:79
- Standard error:
  - Branch name allowlist failure diagnostic — scripts/validation/run_install_parity_ci.py:44
  - Diff base resolution failure diagnostic — scripts/validation/run_install_parity_ci.py:62
  - Missing validator script error — scripts/validation/run_install_parity_ci.py:72
  - Forwarded stderr from underlying validator — scripts/validation/run_install_parity_ci.py:81
- Exit codes: 0 (clean), 1 (drift detected), 2 (configuration/resolution/missing validator error), or fetch error code — scripts/validation/run_install_parity_ci.py:22, 23, 50, 58, 67, 73, 82

## Invokes — required
- script ci_runner_base — scripts/validation/run_install_parity_ci.py:31
- script validate_install_parity.py — scripts/validation/run_install_parity_ci.py:70

## Invoked by — required
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:109
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:56

## Concepts named — required, verbatim
- `main` — scripts/validation/run_install_parity_ci.py:40 — defined here
- `PR_BASE_REF` — scripts/validation/run_install_parity_ci.py:12 — used here
- `PUSH_BEFORE_SHA` — scripts/validation/run_install_parity_ci.py:15 — used here
- `HEAD` — scripts/validation/run_install_parity_ci.py:17 — used here
- `ADR-006` — scripts/validation/run_install_parity_ci.py:2 — used here
- `ci_runner_base` — scripts/validation/run_install_parity_ci.py:8 — used here
- `REPO_ROOT` — scripts/validation/run_install_parity_ci.py:32 — used here
- `fetch_base_ref` — scripts/validation/run_install_parity_ci.py:33 — used here
- `resolve_base` — scripts/validation/run_install_parity_ci.py:34 — used here
- `run` — scripts/validation/run_install_parity_ci.py:35 — used here
- `validate_branch` — scripts/validation/run_install_parity_ci.py:36 — used here
- `validate_install_parity.py` — scripts/validation/run_install_parity_ci.py:70 — used here

## Structure
- Module docstring describing behavior, steps, and exit codes — scripts/validation/run_install_parity_ci.py:1
- Imports from __future__, os, sys, and ci_runner_base — scripts/validation/run_install_parity_ci.py:31
- Function `main` implementing fetch fallback, base resolution, and execution — scripts/validation/run_install_parity_ci.py:40
- Entrypoint invocation — scripts/validation/run_install_parity_ci.py:85

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/run_install_parity_ci.py`, language: Python, lines: 87
- documented invocation:
  - "`python3 scripts/validation/run_install_parity_ci.py`" — .claude/skills/ai-agents-generation-and-release/SKILL.md:109
- executed: yes
- actual command run: `python3 scripts/validation/run_install_parity_ci.py`
- abridged stdout:
```
Fetching main for diff base...
Running validate_install_parity.py against origin/main...
install-parity: OK
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - "Exit codes follow the validator's contract: 0 clean, 1 drift, 2 config." — scripts/validation/run_install_parity_ci.py:22
    - "Any error during step 1-3 returns 2 with a stderr message." — scripts/validation/run_install_parity_ci.py:23
  - Actual:
    - line 50: `return 2` (branch name validation failure)
    - line 58: `return fetch_rc` (fetch return code if non-zero)
    - line 67: `return 2` (base ref resolution failure)
    - line 73: `return 2` (validator script missing at `build/scripts/validate_install_parity.py`)
    - line 82: `return rc` (forwarded validator exit code)
    - line 86: `sys.exit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exit code 2 for configuration errors, or forwarded non-zero exit codes from fetch or validator)
  - Does it fail on the source repo's default branch: no, exits 0 with `install-parity: OK`.
- does the output match what the documentation claims: yes, resolves base ref and executes validator cleanly.

## Defects — required
none

## Observations
- Implements ADR-006 by keeping workflow YAML thin and encapsulating CI test logic in Python.
- Uses `int(fetch_base_ref(base_ref))` at line 56 to assert the boundary contract explicitly for mypy when importing through sys.path.

## Context cost
2,854 bytes, 87 lines, ~710 tokens.
