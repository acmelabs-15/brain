---
package: rjm
path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py
type: script
bytes: 8387
unit: inv-rjm-173
in_scope_via: .claude/skills/spec-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py, sha256: b2f5fa9b65615958cab3a8a9a402652e131570e1aacd577eb7e754caa2681ec7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py

## Purpose — required, verbatim
> "Validate spec frontmatter against the canonical spec schema enums." — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:2

## Design intent — required
Provides deterministic Python validation of YAML frontmatter across the three specification artifact types (`requirement`, `design`, `task`) before spec artifacts are persisted or committed. It checks required field presence, enum membership (`status`, `priority`, `category`, `complexity`), and identifier regex patterns (`REQ-\d{3}`, `DESIGN-\d{3}`, `TASK-\d{3}`) against the canonical governance schemas. It specifically addresses LLM drift where models previously hallucinated non-schema enum values (such as `priority: medium`, `category: tooling`, or `status: ready`) by failing loudly with exit code 1, while preserving exit code 2 for CLI configuration or file access errors.

## Phase — required
rjm:spec

## Inputs — required
- File paths passed as command line arguments `FILE [FILE ...]` (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:31).
- YAML frontmatter block within each target markdown file (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:95-125).

## Outputs — required
- Validation status strings printed to stdout (`[PASS] <path>` or `[FAIL] <path>: <error>`) (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:201, 208).
- Usage text printed to stderr on missing arguments (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:193).
- Process exit codes: `0` (all valid), `1` (validation failure), `2` (configuration/read error) (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:27-28, 194, 210-211).

## Invokes — required
- doc spec-schemas.md — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:4

## Invoked by — required
- skill spec-generator — .claude/skills/spec-generator/SKILL.md:48
- skill spec-generator — .claude/skills/spec-generator/SKILL.md:202
- reference spec-schemas.md — .claude/skills/spec-generator/references/spec-schemas.md:16
- script run_generation_eval.py — evals/spec-generator-spike/run_generation_eval.py:33

## Concepts named — required, verbatim
- `canonical spec schema enums` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:2 — defined here
- `canonical-source-mirror rule` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:8 — defined here
- `SpecValidation` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:68 — defined here
- `extract_frontmatter` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:95 — defined here
- `validate_fields` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:141 — defined here
- `validate_file` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:171 — defined here

## Structure
- Module docstring: frontmatter enum validation contracts, S-003/S-004/S-005 references, AGENTS.md exit codes, and CLI usage (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:1-32)
- Imports: annotations, re, sys, dataclass, field (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:34-38)
- Enum constants and patterns: `_STATUS_BY_TYPE`, `_PRIORITY`, `_CATEGORY`, `_COMPLEXITY`, `_ID_PATTERN`, `_REQUIRED`, `_VALID_TYPES`, `_FRONTMATTER_DELIM` (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:42-65)
- `SpecValidation` dataclass: container for file path, error list, config_error flag, and `ok` property (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:68-78)
- `_strip_scalar`: trims surrounding quotes and trailing inline comments (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:80-93)
- `extract_frontmatter`: extracts leading YAML frontmatter into a flat string map (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:95-125)
- `_check_enum`: validates scalar field membership against allowed value sets (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:128-138)
- `validate_fields`: validates type validity, required fields, enums, and ID regex (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:141-168)
- `validate_file`: reads file, extracts frontmatter, and runs field validation (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:171-187)
- `main`: parses CLI arguments, validates files, prints PASS/FAIL output, and returns exit code (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:190-211)
- `if __name__ == "__main__":`: forwards `main()` exit code to `sys.exit()` (.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:214-215)

## Scripts — required if type is script or the skill ships scripts
- **path:** `.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py`
- **language:** Python (python3)
- **lines:** 216
- **documented invocation:**
  - `python3 .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py <file> [<file> ...]` — .claude/skills/spec-generator/SKILL.md:48
  - `validate_spec_frontmatter.py FILE [FILE ...]` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:31
- **executed:** yes
- **actual command run:** `python3 sources/rjm/.claude/skills/spec-generator/scripts/validate_spec_frontmatter.py sources/rjm/.agents/specs/requirements/REQ-001-pr-comment-handling.md sources/rjm/.agents/specs/design/DESIGN-001-pr-comment-processing.md sources/rjm/.agents/specs/tasks/TASK-001-pr-context-scripts.md`
- **abridged stdout:**
```
[PASS] sources/rjm/.agents/specs/requirements/REQ-001-pr-comment-handling.md
[PASS] sources/rjm/.agents/specs/design/DESIGN-001-pr-comment-processing.md
[PASS] sources/rjm/.agents/specs/tasks/TASK-001-pr-context-scripts.md
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: "Exit codes (AGENTS.md contract): 0 = all valid, 1 = one or more validation" — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:27
  - Documented: `| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | Validate generated REQ/DESIGN/TASK frontmatter before reporting completion. | 0 valid, 1 validation failure, 2 configuration or file-read error |` — .claude/skills/spec-generator/SKILL.md:202
  - Actual code paths:
    - `return 2` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:194 (on missing command-line arguments)
    - `return 2` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:210 (on file read error)
    - `return 1 if any_failed else 0` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:211 (returns 1 on validation failures, 0 if all valid)
    - `sys.exit(main())` — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:215 (forwards return code to system exit)
  - Result: Documented exit codes match actual code exit paths exactly.
- **for validators/gates:** Can exit non-zero: exits 1 on schema validation failures (invalid enums, missing required fields, ID regex mismatch) and 2 on configuration/file errors. When executed against existing spec files across `sources/rjm/.agents/specs/`, it exits 1, catching genuine historical frontmatter drift in older spec files (e.g. invalid categories, invalid complexity, and missing fields).
- **does the output match what the documentation claims:** yes, reports `[PASS]` / `[FAIL]` per file with error descriptions and matches documented exit codes.

## Defects — required
none

## Observations
Deterministic pure-Python frontmatter validator that requires only the Python standard library (no PyYAML or external dependencies). Implements a custom lightweight YAML frontmatter parser `extract_frontmatter` that handles scalar fields, comments, and list presence detection.

## Context cost
8,387 bytes (~2,100 tokens). Loads no external files directly.
