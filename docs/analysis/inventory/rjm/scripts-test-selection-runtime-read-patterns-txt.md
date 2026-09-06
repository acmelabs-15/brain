---
package: rjm
path: scripts/test_selection/runtime_read_patterns.txt
type: script
bytes: 267
unit: inv-rjm-263
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/test_selection/runtime_read_patterns.txt

## Purpose — required, verbatim
> ".claude/rules/**" — scripts/test_selection/runtime_read_patterns.txt:1 (no explicit purpose statement)

## Design intent — required
Defines the authoritative set of non-import runtime dependency file globs and project configuration paths that must trigger a fail-safe fallback to the full test suite when changed. Because static Python AST analysis only inspects explicit `import` statements, modifications to global prompt rules, tool instructions, test root fixtures, project dependencies, git hook configs, and lint count baselines cannot be detected via module graph traversal alone. This configuration file acts as an externalized dependency ledger read by `scripts/test_selection/select_tests.py`; any working-tree change matching a pattern in this file causes test selection to immediately mandate a full-suite run.

## Phase — required
rjm:test

## Inputs — required
- Pattern definitions: 12 glob expressions identifying files that affect runtime test execution — scripts/test_selection/runtime_read_patterns.txt:1-12

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script runtime_read_patterns.txt — scripts/test_selection/select_tests.py:31

## Concepts named — required, verbatim
- `.claude/rules/**` — scripts/test_selection/runtime_read_patterns.txt:1 — defined here
- `.github/instructions/**` — scripts/test_selection/runtime_read_patterns.txt:2 — defined here
- `src/copilot-cli/instructions/**` — scripts/test_selection/runtime_read_patterns.txt:3 — defined here
- `conftest.py` — scripts/test_selection/runtime_read_patterns.txt:4 — defined here
- `tests/conftest.py` — scripts/test_selection/runtime_read_patterns.txt:5 — defined here
- `pyproject.toml` — scripts/test_selection/runtime_read_patterns.txt:6 — defined here
- `lefthook.yml` — scripts/test_selection/runtime_read_patterns.txt:7 — defined here
- `uv.lock` — scripts/test_selection/runtime_read_patterns.txt:8 — defined here
- `.config/wt.toml` — scripts/test_selection/runtime_read_patterns.txt:9 — defined here
- `scripts/ci/ruff_count_baseline.txt` — scripts/test_selection/runtime_read_patterns.txt:10 — defined here
- `scripts/ci/subprocess_encoding_count_baseline.txt` — scripts/test_selection/runtime_read_patterns.txt:11 — defined here
- `.agents/memory/episodes/**` — scripts/test_selection/runtime_read_patterns.txt:12 — defined here

## Structure
- Runtime read pattern list — scripts/test_selection/runtime_read_patterns.txt:1-12

## Scripts — required if type is script or the skill ships scripts
The file contains plain text glob lines categorized as `type: script` in the manifest by directory convention:
- path: `scripts/test_selection/runtime_read_patterns.txt`, language: text / glob table, lines: 13
- documented invocation: none (read as data by `select_tests.py`)
- **executed:** yes
- actual command run (shell execution attempt):
  ```bash
  bash scripts/test_selection/runtime_read_patterns.txt
  ```
  - actual stdout: (empty)
  - actual stderr: `scripts/test_selection/runtime_read_patterns.txt: line 1: .claude/rules/builder-ethos.md: Permission denied...`
  - actual exit code: 126
- data consumer execution:
  ```bash
  python3 -c "from scripts.test_selection.select_tests import load_runtime_read_patterns; patterns = load_runtime_read_patterns(); print('patterns loaded:', len(patterns))"
  ```
  - actual stdout: `patterns loaded: 12`
  - actual exit code: 0
- documented exit codes: none (data file)
- actual exit paths in code: none (contains no executable code)
- for validators/gates: serves as the fail-safe trigger table for `select_tests.py`

## Defects — required
none

## Observations
- Manifest classification: Categorized as `type: script` due to existing inside `scripts/`, but acts as a line-oriented configuration file.
- Redundant guards: Both `conftest.py` (line 4) and `tests/conftest.py` (line 5) are listed here, while `select_tests.py` also contains a hardcoded fallback check `Path(rel).name == "conftest.py"` at line 139.

## Context cost
267 bytes, ~70 tokens. Standalone text file.
