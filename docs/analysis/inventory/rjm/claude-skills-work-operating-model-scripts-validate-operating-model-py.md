---
package: rjm
path: .claude/skills/work-operating-model/scripts/validate_operating_model.py
type: script
bytes: 12308
unit: inv-rjm-179
in_scope_via: .claude/skills/work-operating-model/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/work-operating-model/scripts/validate_operating_model.py

## Purpose — required, verbatim
> "Validate a work-operating-model JSON document against the v1 schema." — .claude/skills/work-operating-model/scripts/validate_operating_model.py:2

## Design intent — required
Implements automated schema validation for `operating-model.json` documents produced by `work-operating-model`. It enforces the v1.0.0 entry contract (8 top-level keys, ISO date format, valid layer sets, and allowed enum values) while providing robust defense-in-depth against path traversal (CWE-22) and standardizing CLI exit codes under ADR-035.

## Phase — required
rjm:spec

## Inputs — required
- Path to JSON document file or `-` for stdin (.claude/skills/work-operating-model/scripts/validate_operating_model.py:317-319)
- CLI argument `--skip-path-validation` for bypassing path containment during testing (.claude/skills/work-operating-model/scripts/validate_operating_model.py:321-324)

## Outputs — required
- `ok` printed to stdout on successful validation (.claude/skills/work-operating-model/scripts/validate_operating_model.py:348)
- Human-readable validation error messages printed to stderr on schema failure (.claude/skills/work-operating-model/scripts/validate_operating_model.py:345)
- Standardized exit codes (0, 1, 2) (.claude/skills/work-operating-model/scripts/validate_operating_model.py:12-16)

## Invokes — required
none

## Invoked by — required
- skill work-operating-model — .claude/skills/work-operating-model/SKILL.md:75

## Concepts named — required, verbatim
- `work-operating-model` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:2 — used here
- `SCHEMA_VERSION` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:27 — defined here
- `CANONICAL_LAYERS` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:29 — defined here
- `REQUIRED_TOP_LEVEL` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:37 — defined here
- `ALLOWED_INTERVIEW_STATUS` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:48 — defined here
- `DATE_PATTERN` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:56 — defined here
- `ADR-035` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/work-operating-model/scripts/validate_operating_model.py`, language: Python, lines: 354
- documented invocation: `python3 .claude/skills/work-operating-model/scripts/validate_operating_model.py <path-to-json>` — .claude/skills/work-operating-model/SKILL.md:75
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py --help` -> stdout: `usage: validate_operating_model.py [-h] [--skip-path-validation] path...`, exit code: 0
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py -` (with valid document on stdin) -> stdout: `ok`, exit code: 0
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py -` (with missing keys on stdin) -> stderr: `missing required key: rhythms...`, exit code: 1
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py nonexistent_file.json` -> stderr: `error: file not found: nonexistent_file.json`, exit code: 2
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: `0 - Success: document conforms to the schema` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:13, `1 - Validation failure: document violates the schema` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:14, `2 - Invalid usage: bad CLI arguments or unreadable input` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:15
  - Actual exit paths in code:
    - Line 331: `return 2` (FileNotFoundError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:331
    - Line 334: `return 2` (PermissionError / CWE-22 path containment) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:334
    - Line 337: `return 1` (json.JSONDecodeError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:337
    - Line 340: `return 2` (OSError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:340
    - Line 346: `return 1` (validate() returned errors) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:346
    - Line 349: `return 0` (validation clean) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:349
    - Line 353: `sys.exit(main())` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:353
  - Documented exit codes match actual code exits exactly.
- for validators/gates:
  - Can it exit non-zero: yes, exits 1 on invalid JSON or schema violations; exits 2 on missing input or path traversal.
  - Does it fail on the source repo's own default branch: N/A (no sample `operating-model.json` files are committed in `sources/rjm`).
- does the output match what the documentation claims: yes, prints "ok" on valid input and lists human-readable errors on failure.

## Defects — required
none

## Observations
Contains dedicated CWE-22 path traversal prevention logic in `_resolve_path_safely` (lines 249-273), which verifies that any provided path resolves inside the current working directory or upward-located `.git` repository root.

## Context cost
12308 bytes (approx. 3080 tokens).
