---
package: rjm
path: scripts/validation/yaml_utils.py
type: script
bytes: 1132
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/yaml_utils.py, sha256: 7c66fdec5a468d3dc1ba4ec8eb18af73cd9b9bb878d134309033ab27b7880b68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/yaml_utils.py

## Purpose — required, verbatim
> "YAML frontmatter parsing for validation scripts." — scripts/validation/yaml_utils.py:2

## Design intent — required
Provides a centralized, reusable YAML frontmatter parser extracted from `pre_pr.py` (issue #2223) to keep pre-PR check runners compact while giving validation gates a single consistent parser. It uses `yaml.safe_load` on the leading `---` delimited block, ensuring frontmatter is parsed with the same YAML engine that downstream agent hosts use so that unquoted colon-bearing scalars or malformed blocks fail immediately in local validation rather than causing silent runtime load errors.

## Phase — required
rjm:test

## Inputs — required
- Markdown text `text: str` passed to `_parse_yaml_frontmatter(text: str)` (scripts/validation/yaml_utils.py:18).

## Outputs — required
- Parsed mapping `dict[str, Any] | None` containing the frontmatter dictionary, or `None` if frontmatter is absent, unclosed, malformed, or not a mapping (scripts/validation/yaml_utils.py:18, 36).

## Invokes — required
none

## Invoked by — required
- script _parse_yaml_frontmatter — scripts/validation/validate_copilot_agent_frontmatter.py:60
- script _parse_yaml_frontmatter — scripts/validation/check_adr_lifecycle.py:135
- script _parse_yaml_frontmatter — scripts/validation/pre_pr.py:158
- script _parse_yaml_frontmatter — scripts/validation/validate_design_review.py:19

## Concepts named — required, verbatim
- `YAML frontmatter` — scripts/validation/yaml_utils.py:2 — defined here
- `_parse_yaml_frontmatter` — scripts/validation/yaml_utils.py:18 — defined here

## Structure
- `_parse_yaml_frontmatter` — scripts/validation/yaml_utils.py:18

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/yaml_utils.py`, language: Python 3, lines: 37
- documented invocation:
  - "from scripts.validation.yaml_utils import _parse_yaml_frontmatter" — scripts/validation/validate_copilot_agent_frontmatter.py:60
- **executed:** yes
- actual command run: `uv run python scripts/validation/yaml_utils.py`, abridged stdout: ``, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (utility module defining parser function without CLI runner or exit codes)
  - actual exit paths: none (module executes top-level imports and function definition, returning 0 on clean import/execution)
- for validators/gates: not a standalone gate; utility library module
- does output match documentation: yes

## Defects — required
none

## Observations
Directly imports `yaml` (PyYAML); executing directly with system `python3` fails with `ModuleNotFoundError: No module named 'yaml'` unless executed within the virtual environment (e.g. via `uv run python`). Returns `None` on any `yaml.YAMLError` to allow callers to treat unparseable blocks as non-mappings.

## Context cost
1132 bytes (~280 tokens). Standalone utility requiring only PyYAML.
