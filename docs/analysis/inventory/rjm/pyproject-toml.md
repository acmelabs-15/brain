---
package: rjm
path: pyproject.toml
type: config
bytes: 12299
unit: inv-rjm-194
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# pyproject.toml

## Purpose — required, verbatim
> "description = \"AI agent orchestration framework\"" — pyproject.toml:4
(no explicit purpose statement; project metadata description)

## Design intent — required
Central project configuration manifest specifying Python packaging metadata, setuptools build system, minimum Python version contract (>=3.14), core runtime dependencies (`anthropic`, `jsonschema`, `markdown-it-py`, `python-frontmatter`, `PyYAML`, `tiktoken`), optional/development dependencies (pytest, bandit, ruff, mypy, semgrep, lefthook), tool configurations (pytest, coverage, bandit, ruff, mypy), and dependency groups for the `ai-agents` orchestration framework. It explicitly establishes strict linting rules, mypy typing standards and per-module debt exemptions, and dependency exclusion/override rules for security and reproducibility under `uv`.

## Phase — required
cross-phase

## Inputs — required
- "requires-python = \">=3.14\"" — pyproject.toml:6
- "dependencies = [" — pyproject.toml:9
- "[project.optional-dependencies]" — pyproject.toml:18
- "[tool.uv]" — pyproject.toml:38
- "[tool.pytest.ini_options]" — pyproject.toml:67
- "[tool.ruff]" — pyproject.toml:97
- "[tool.mypy]" — pyproject.toml:179
- "[dependency-groups]" — pyproject.toml:273

## Outputs — required
- "name = \"ai-agents\"" — pyproject.toml:2
- "version = \"0.1.0\"" — pyproject.toml:3
- "testpaths = [\"tests\"]" — pyproject.toml:68
- "target-version = \"py310\"" — pyproject.toml:105

## Invokes — required
none

## Invoked by — required
- script pyproject.toml — scripts/validation/git_hook_policy.py:77
- template pyproject.toml — templates/agents/dependency-auditor.shared.md:81

## Concepts named — required, verbatim
`ai-agents` — pyproject.toml:2 — defined here
`dependencies` — pyproject.toml:9 — defined here
`dev` — pyproject.toml:19 — defined here
`exclude-newer` — pyproject.toml:41 — defined here
`override-dependencies` — pyproject.toml:42 — defined here
`testpaths` — pyproject.toml:68 — defined here
`safe_push_transport` — pyproject.toml:76 — defined here
`smoke` — pyproject.toml:78 — defined here
`windows_path` — pyproject.toml:79 — defined here
`target-version` — pyproject.toml:105 — defined here
`per-file-ignores` — pyproject.toml:120 — defined here
`disallow_any_generics` — pyproject.toml:184 — defined here
`dependency-groups` — pyproject.toml:273 — defined here

## Structure
# pyproject.toml — pyproject.toml:1
[project] — pyproject.toml:1
[project.optional-dependencies] — pyproject.toml:18
[tool.uv] — pyproject.toml:38
[tool.uv.exclude-newer-package] — pyproject.toml:48
[build-system] — pyproject.toml:59
[tool.setuptools.packages.find] — pyproject.toml:63
[tool.pytest.ini_options] — pyproject.toml:67
[tool.coverage.run] — pyproject.toml:82
[tool.coverage.report] — pyproject.toml:86
[tool.bandit] — pyproject.toml:93
[tool.ruff] — pyproject.toml:97
[tool.ruff.format] — pyproject.toml:108
[tool.ruff.lint] — pyproject.toml:116
[tool.ruff.lint.per-file-ignores] — pyproject.toml:120
[tool.mypy] — pyproject.toml:179
[[tool.mypy.overrides]] — pyproject.toml:187
[[tool.mypy.overrides]] — pyproject.toml:196
[[tool.mypy.overrides]] — pyproject.toml:210
[[tool.mypy.overrides]] — pyproject.toml:214
[[tool.mypy.overrides]] — pyproject.toml:226
[[tool.mypy.overrides]] — pyproject.toml:242
[[tool.mypy.overrides]] — pyproject.toml:255
[dependency-groups] — pyproject.toml:273

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains carefully documented architectural rationale in comments:
- Line 98-105: Explains why `tool.ruff.target-version` is intentionally set to `py310` rather than the higher `requires-python` 3.14 contract (ruff's target-version governs syntax emission and formatting; setting it to 3.14 rewrote portable exception tuples into PEP 758 syntax that failed the 3.10 hook-execution floor gate, issue #3126).
- Line 109-114: Ruff formatter excludes `tests/validation/test_git_hook_policy_causal_restore.py` to preserve split string literals that prevent false triggering of `security-suppressions-staged` pre-push hooks.
- Line 156-164: Explicitly waives lint rules for generated `src/copilot-cli/{hooks,skills}/**/*.py` mirror trees to avoid failing on ~1200 generator-induced violations.
- Line 269-272: Maintains exact dependency parity between `[project.optional-dependencies].dev` and `[dependency-groups].dev` so both `pip install` and `uv sync` produce identical toolchains, guarded by `test_pyproject_dev_deps_parity.py`.

## Context cost
12299 bytes, approximately 3075 tokens.
