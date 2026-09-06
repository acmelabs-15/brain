---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/__init__.py
type: script
bytes: 625
unit: inv-rjm-129
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/__init__.py, sha256: ebb4a94bf99fc336ee0e1f56d79f0b0b38844fa10263a63259a9a92eef0e9a13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/__init__.py

## Purpose — required, verbatim
> "orphan-ref-validator scripts package." — .claude/skills/orphan-ref-validator/scripts/__init__.py:2

## Design intent — required
Marks the `scripts/` directory as an importable Python package within the `orphan-ref-validator` skill while documenting the package layout and test loading contract. It explains that the CLI entrypoint lives in `scan.py` and that the test suite loads modules dynamically via `spec_from_file_location` with file-keyed module names to maintain isolation between the canonical Claude Code installation and the mirrored Copilot CLI test suites in `sys.modules`.

## Phase — required
rjm:build

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill orphan-ref-validator — .claude/skills/orphan-ref-validator/SKILL.md:176

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/__init__.py:2 — used here
- `scan.py` — .claude/skills/orphan-ref-validator/scripts/__init__.py:5 — used here
- `filters.py` — .claude/skills/orphan-ref-validator/scripts/__init__.py:5 — used here
- `test_scan.py` — .claude/skills/orphan-ref-validator/scripts/__init__.py:7 — used here
- `spec_from_file_location` — .claude/skills/orphan-ref-validator/scripts/__init__.py:8 — used here
- `sys.modules` — .claude/skills/orphan-ref-validator/scripts/__init__.py:10 — used here
- `__package__` — .claude/skills/orphan-ref-validator/scripts/__init__.py:12 — used here

## Structure
none (package marker docstring only)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/__init__.py`, language: Python 3, lines: 14
- documented invocation:
  - "`scripts/__init__.py`" — .claude/skills/orphan-ref-validator/SKILL.md:176
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/__init__.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (package initialization file with no CLI entrypoint).
  Actual exit paths in code: exits implicitly with code 0 upon executing docstring (no `sys.exit` or `exit` calls in file).
- for validators/gates: can it exit non-zero? no. Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, acts as a valid package initializer with no runtime errors.

## Defects — required
- `doc-drift` · .claude/skills/orphan-ref-validator/scripts/__init__.py:5 · Docstring claims "the curated kebab denylist lives in ``filters.py``", but `filters.py:181` states the curated denylist was deleted in issue #3726 and replaced with `KNOWN_RETIRED_KEBAB_SKILLS` allowlist.
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:176 · SKILL.md claims `__init__.py` exists so tests can import `from scripts.scan import ...`, but `__init__.py:8-10` documents that tests actually load `scan.py` via `importlib.util.spec_from_file_location` with a file-keyed module name.

## Observations
Provides architectural commentary on the test-isolation mechanism between canonical Claude Code and Copilot CLI mirror suites, warning maintainers not to break the dynamic loader contract without updating both test suites and the `__package__` fallback in `scan.py`.

## Context cost
625 bytes (~156 tokens). Pure package marker file with no imports or dependencies.
