---
package: rjm
path: scripts/validation/yaml_utils.py
type: script
bytes: 1132
unit: inv-rjm-310
in_scope_via: scripts/validation/pre_pr.py
aliases: []
memo_inputs:
  - {path: scripts/validation/yaml_utils.py, sha256: 7c66fdec5a468d3dc1ba4ec8eb18af73cd9b9bb878d134309033ab27b7880b68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/yaml_utils.py

## Purpose — required, verbatim
> "YAML frontmatter parsing for validation scripts." — scripts/validation/yaml_utils.py:2

## Design intent — required
Provides a centralized, reusable YAML frontmatter parser function (`_parse_yaml_frontmatter`) for validation scripts across the repository, extracted from `scripts/validation/pre_pr.py` (issue #2223). It parses markdown frontmatter enclosed within leading `---` fences using `yaml.safe_load`, ensuring colon-bearing plain scalars and malformed mappings are detected consistently across all pre-PR validators.

## Phase — required
none

## Inputs — required
Markdown document text string passed to `_parse_yaml_frontmatter`.

## Outputs — required
Parsed dictionary mapping or None if frontmatter is absent or invalid.

## Invokes — required
none

## Invoked by — required
- script yaml_utils — scripts/validation/pre_pr.py:158
- script yaml_utils — scripts/validation/check_adr_lifecycle.py:135
- script yaml_utils — scripts/validation/validate_design_review.py:19
- script yaml_utils — scripts/validation/validate_copilot_agent_frontmatter.py:60

## Concepts named — required, verbatim
- `_parse_yaml_frontmatter` — scripts/validation/yaml_utils.py:18 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/yaml_utils.py`, language: Python, lines: 37
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/validation/yaml_utils.py`
  Stdout: (empty)
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented: none
  Actual exit paths: none in code. The file contains no CLI entry point and no `sys.exit` calls; running as a script imports `yaml`, defines `_parse_yaml_frontmatter`, and exits 0.
- for validators/gates: can it exit non-zero? no (library module). does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims? yes (module executes and defines parser without error).

## Defects — required
none

## Observations
Swallows `yaml.YAMLError` exceptions and returns `None` rather than surfacing parse error details. `validate_copilot_agent_frontmatter.py` notes that it avoids using this helper for detailed reporting for that reason.

## Context cost
1132 bytes (~283 tokens). Imports PyYAML library.
