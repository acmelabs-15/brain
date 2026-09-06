---
package: rjm
path: pyproject.toml
type: config
bytes: 12299
unit: inv-rjm-194
in_scope_via: README.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# pyproject.toml

## Purpose — required, verbatim
> "AI agent orchestration framework" — pyproject.toml:4 (no explicit purpose statement; project description metadata quoted)

## Design intent — required
Defines the canonical packaging metadata, runtime and development dependency specifications, build backend configuration, and tool settings (pytest, coverage, bandit, ruff, mypy) for the `ai-agents` Python project. It enforces the developer runtime floor (`requires-python = ">=3.14"`), core dependencies (Anthropic SDK, jsonschema, markdown-it-py, python-frontmatter, PyYAML, tiktoken), dev dependencies (pytest, bandit, pip-audit, ruff, mypy, semgrep, lefthook), and uv dependency override configurations (including immediate security opt-outs for cryptography CVE-2026-69247 and MCP pins). It manages test execution parameters and markers (`unit`, `integration`, `safe_push_transport`, `security`, `smoke`, `windows_path`), coverage collection roots, and linting rules (setting ruff `target-version = "py310"` to uphold interpreter portability floors while configuring per-file ignores for eval benchmarks, hooks, and generated copilot-cli trees). Without this file, the project would lack a reproducible dependency and verification baseline for Python environments, CI workflows, and pre-commit hooks.

## Phase — required
cross-phase

## Inputs — required
- Python runtime environment (Python >= 3.14 for development runtime floor, pyproject.toml:6).
- Dependency lockfiles and specifications (uv package manager, PyPI dependencies, pyproject.toml:9-36).
- Test corpus in `tests/` directory (pyproject.toml:68).
- Lint targets across `.claude`, `scripts`, `tests`, and `src/copilot-cli` (pyproject.toml:140-177).

## Outputs — required
- Package metadata and distribution packages built via `setuptools.build_meta` (pyproject.toml:60-65).
- Test execution configuration for pytest (pyproject.toml:67-80).
- Coverage analysis reports and configurations (pyproject.toml:82-91).
- Security scanning parameters for bandit (pyproject.toml:93-95).
- Ruff formatting and linting rules (pyproject.toml:97-178).
- Mypy static type checking configurations and module overrides (pyproject.toml:179-268).

## Invokes — required
- doc README.md — pyproject.toml:5

## Invoked by — required
- scripts/validation/check_zero_collection_tests.py — scripts/validation/check_zero_collection_tests.py:15, 211
- scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:77, 128, 4802
- docs/project-structure.md — docs/project-structure.md:83

## Concepts named — required, verbatim
- `requires-python` — pyproject.toml:6 — defined here
- `build-backend` — pyproject.toml:61 — defined here
- `testpaths` — pyproject.toml:68 — defined here
- `addopts` — pyproject.toml:72 — defined here
- `safe_push_transport` — pyproject.toml:76 — defined here
- `smoke` — pyproject.toml:78 — defined here
- `windows_path` — pyproject.toml:79 — defined here
- `target-version` — pyproject.toml:105 — defined here
- `per-file-ignores` — pyproject.toml:120 — defined here
- `warn_return_any` — pyproject.toml:181 — defined here
- `disallow_any_generics` — pyproject.toml:184 — defined here
- `dependency-groups` — pyproject.toml:273 — defined here

## Structure
- [project] — pyproject.toml:1
- [project.optional-dependencies] — pyproject.toml:18
- [tool.uv] — pyproject.toml:38
- [tool.uv.exclude-newer-package] — pyproject.toml:48
- [build-system] — pyproject.toml:59
- [tool.setuptools.packages.find] — pyproject.toml:63
- [tool.pytest.ini_options] — pyproject.toml:67
- [tool.coverage.run] — pyproject.toml:82
- [tool.coverage.report] — pyproject.toml:86
- [tool.bandit] — pyproject.toml:93
- [tool.ruff] — pyproject.toml:97
- [tool.ruff.format] — pyproject.toml:108
- [tool.ruff.lint] — pyproject.toml:116
- [tool.ruff.lint.per-file-ignores] — pyproject.toml:120
- [tool.mypy] — pyproject.toml:179
- [[tool.mypy.overrides]] — pyproject.toml:187
- [dependency-groups] — pyproject.toml:273

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains explicit configuration workarounds for ecosystem and tooling quirks:
1. uv 7-day cooldown override for cryptography (CVE-2026-69247 fixed in 50.0.0) and pins for click and mcp.
2. Dual declaration of dev dependencies under both [project.optional-dependencies].dev and [dependency-groups].dev to satisfy both `uv pip install` and `uv sync`.
3. Intentional divergence between dev interpreter floor (`requires-python = ">=3.14"`) and linter code-generation target (`target-version = "py310"`) to prevent ruff from emitting PEP 758 syntax incompatible with Git hook execution environments.
4. Comprehensive per-file-ignores for ruff and mypy module overrides scoping technical debt and benchmark test files.

## Context cost
12299 bytes, ~3075 tokens.
