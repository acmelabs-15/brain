---
package: rjm
path: scripts/validation/run_install_parity_ci.py
type: script
bytes: 2854
unit: inv-rjm-302
in_scope_via: .claude/skills/ai-agents-debugging-playbook/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/run_install_parity_ci.py

## Purpose — required, verbatim
> "CI entry point for install-parity validation (ADR-006 thin workflow)." — scripts/validation/run_install_parity_ci.py:2

## Design intent — required
Encapsulates CI git ref resolution, fetch fallbacks, and validator execution for install parity checks into a standalone Python runner per ADR-006 ("Thin Workflows, Testable Modules"). Because complex shell scripts embedded directly in GitHub Actions YAML cannot be tested locally or debugged interactively, the step in `.github/workflows/validate-generated-agents.yml` delegates its logic to this script. The module validates `PR_BASE_REF` (defaulting to `main`), deepens shallow CI clones via `git fetch --depth=200` and `--unshallow`, resolves the proper diff base (prioritizing `PUSH_BEFORE_SHA` on push events, then `origin/<base>`, with `HEAD^` as last resort), and executes `validate_install_parity.py --base <base>`. By handling base resolution robustly in Python, it guarantees consistent parity verification across PRs, pushes, and local developer environments.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `PR_BASE_REF` specifying target base branch (defaults to `main`) — scripts/validation/run_install_parity_ci.py:41
- Environment variable `PUSH_BEFORE_SHA` for push range validation — scripts/validation/run_install_parity_ci.py:15
- Git repository history and references queried via `ci_runner_base.py` functions — scripts/validation/run_install_parity_ci.py:31-36
- Validator script located at `validate_install_parity.py` — scripts/validation/run_install_parity_ci.py:70

## Outputs — required
- Standard output status messages and forwarded validator stdout — scripts/validation/run_install_parity_ci.py:52, 69, 78-79
- Standard error messages on configuration or resolution failure, and forwarded validator stderr — scripts/validation/run_install_parity_ci.py:44-49, 62-66, 72, 80-81
- Exit code 0 when install parity validation passes cleanly — scripts/validation/run_install_parity_ci.py:22, 82
- Exit code 1 when install parity validation detects drift — scripts/validation/run_install_parity_ci.py:22, 82
- Exit code 2 on configuration errors (branch allowlist failure, unresolved base ref, or missing validator) — scripts/validation/run_install_parity_ci.py:22-23, 50, 58, 67, 73

## Invokes — required
- script ci_runner_base.py — scripts/validation/run_install_parity_ci.py:8
- script validate_install_parity.py — scripts/validation/run_install_parity_ci.py:70

## Invoked by — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:56

## Concepts named — required, verbatim
- `install-parity validation` — scripts/validation/run_install_parity_ci.py:2 — defined here
- `ADR-006` — scripts/validation/run_install_parity_ci.py:2 — used here
- `validate-generated-agents.yml` — scripts/validation/run_install_parity_ci.py:4 — used here
- `ci_runner_base.py` — scripts/validation/run_install_parity_ci.py:8 — used here
- `PR_BASE_REF` — scripts/validation/run_install_parity_ci.py:12 — used here
- `PUSH_BEFORE_SHA` — scripts/validation/run_install_parity_ci.py:15 — used here
- `HEAD^` — scripts/validation/run_install_parity_ci.py:18 — used here
- `REPO_ROOT` — scripts/validation/run_install_parity_ci.py:32 — used here
- `fetch_base_ref` — scripts/validation/run_install_parity_ci.py:33 — used here
- `resolve_base` — scripts/validation/run_install_parity_ci.py:34 — used here
- `validate_branch` — scripts/validation/run_install_parity_ci.py:36 — used here
- `main` — scripts/validation/run_install_parity_ci.py:40 — defined here
- `validate_install_parity.py` — scripts/validation/run_install_parity_ci.py:70 — used here

## Structure
- Module docstring and ADR-006 thin workflow specification — scripts/validation/run_install_parity_ci.py:2-24
- Module imports from standard library and ci_runner_base — scripts/validation/run_install_parity_ci.py:26-37
- `main` execution function — scripts/validation/run_install_parity_ci.py:40-83
- CLI entrypoint invocation — scripts/validation/run_install_parity_ci.py:85-86

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/run_install_parity_ci.py`, language: Python, lines: 87
- documented invocation:
  - "uv run python ./scripts/validation/run_install_parity_ci.py" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:56
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
    - "0 clean, 1 drift, 2 config" — scripts/validation/run_install_parity_ci.py:22
    - "Any error during step 1-3 returns 2 with a stderr message." — scripts/validation/run_install_parity_ci.py:23
  - Actual exit paths in code:
    - Exit 0: `return rc` at scripts/validation/run_install_parity_ci.py:82 when validator exits 0
    - Exit 1: `return rc` at scripts/validation/run_install_parity_ci.py:82 when validator exits 1 (install parity drift)
    - Exit 2: `return 2` at scripts/validation/run_install_parity_ci.py:50 (branch allowlist check fails), line 67 (base resolution fails), line 73 (validator script missing); and `return fetch_rc` at line 58 when `fetch_base_ref` fails
- for validators/gates:
  - Can it exit non-zero: yes (exits 2 on invalid branch name, unresolved diff base, or missing validator; exits 1 on install parity drift)
  - Does it fail on the source repo's own default branch: no, cleanly resolves `origin/main` and exits 0 with `install-parity: OK`
- does output match what the documentation claims: yes, resolves diff base against main, invokes validate_install_parity.py, and outputs `install-parity: OK` with exit code 0.

## Defects — required
none

## Observations
- Adheres strictly to ADR-006 ("Thin Workflows, Testable Modules") by keeping YAML workflow files declarative while moving imperative execution logic to Python.
- Leverages shared CI runner logic from `scripts/validation/ci_runner_base.py`.
- Invokes `validate_install_parity.py` with a 120-second timeout.

## Context cost
2854 bytes, 87 lines, ~710 tokens. At runtime, loads `ci_runner_base.py` (8701 bytes) and invokes `validate_install_parity.py` (19455 bytes), total ~31 KB (~7750 tokens).
