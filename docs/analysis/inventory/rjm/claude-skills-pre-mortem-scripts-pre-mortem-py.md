---
package: rjm
path: .claude/skills/pre-mortem/scripts/pre-mortem.py
type: script
bytes: 9931
unit: inv-rjm-137
in_scope_via: .claude/skills/pre-mortem/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pre-mortem/scripts/pre-mortem.py

## Purpose — required, verbatim
> "Validates that a risk inventory document contains all required sections and calculates aggregate risk statistics." — .claude/skills/pre-mortem/scripts/pre-mortem.py:5-6

## Design intent — required
Automates validation and completeness checks for markdown pre-mortem risk inventory documents. It parses risk entries into structured objects, checks section headers, verifies that high-priority risks have mitigation plans, ensures likelihood/impact numbers are within valid ranges (1-5), and tabulates aggregate risk counts. This provides an automated quality gate preventing incomplete risk assessments from passing without review.

## Phase — required
cross-phase

## Inputs — required
CLI arguments: `--inventory-path <path>` (required), optional flags `--validate`, `--quiet`, `--json`. Consumes markdown files structured as risk inventories.

## Outputs — required
Validation summary to stdout (or JSON object if `--json`), reporting valid/invalid status, error list, warning list, and aggregate statistics table (total risks, critical count, high count, medium count, low count, average score, risks with mitigation, risks with owner). Exits with code 0 (valid), 1 (file/traversal error), or 10 (validation failure).

## Invokes — required
none

## Invoked by — required
- skill pre-mortem — .claude/skills/pre-mortem/SKILL.md:250

## Concepts named — required, verbatim
- `ValidationResult` — .claude/skills/pre-mortem/scripts/pre-mortem.py:22 — defined here
- `Risk` — .claude/skills/pre-mortem/scripts/pre-mortem.py:39 — defined here
- `REQUIRED_SECTIONS` — .claude/skills/pre-mortem/scripts/pre-mortem.py:53 — defined here
- `VALID_CATEGORIES` — .claude/skills/pre-mortem/scripts/pre-mortem.py:63 — defined here
- `VALID_STATUSES` — .claude/skills/pre-mortem/scripts/pre-mortem.py:72 — defined here
- `parse_risk_entry` — .claude/skills/pre-mortem/scripts/pre-mortem.py:75 — defined here
- `validate_inventory` — .claude/skills/pre-mortem/scripts/pre-mortem.py:128 — defined here

## Structure
- ## Classes
- ### ValidationResult
- ### Risk
- ## Constants
- ### REQUIRED_SECTIONS
- ### VALID_CATEGORIES
- ### VALID_STATUSES
- ## Functions
- ### parse_risk_entry
- ### validate_inventory
- ### print_result
- ### main

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/pre-mortem/scripts/pre-mortem.py`, language: Python, lines: 332
- documented invocation: "python3 .claude/skills/pre-mortem/scripts/pre-mortem.py" — .claude/skills/pre-mortem/SKILL.md:250
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path nonexistent.md` → stdout: `Error: File not found: nonexistent.md` → exit 1
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md --validate` → stdout: `PRE-MORTEM RISK INVENTORY VALIDATION ... Status: INVALID ... Errors (2): [ERROR] R1 has invalid likelihood: 0 ...` → exit 10
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path <(cat << 'EOF' ... EOF) --validate` → stdout: `PRE-MORTEM RISK INVENTORY VALIDATION ... Status: VALID ... Total Risks: 4 ...` → exit 0
- documented exit codes vs. actual exit paths in code:
  - Documented in script docstring: `0: Valid inventory with all required fields`, `1: Invalid arguments or file not found`, `10: Validation failed (missing required sections)`
  - Actual exit paths in code: line 279 (`return 1`), line 292 (`return 1`), line 298 (`return 1`), line 306 (`return 1`), line 326 (`return 10`), line 327 (`return 0`), line 331 (`sys.exit(main())`). Note: argparse exits with code 2 for missing required options or unrecognized flags.
- for validators/gates: can exit non-zero (exit 1, exit 2, exit 10). Exits 10 on the source repo's unpopulated template `sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md`.
- does the output match what the documentation claims: yes, formats validation header, status, errors, warnings, and risk statistics as documented.

## Defects — required
- exit-code-mismatch · .claude/skills/pre-mortem/scripts/pre-mortem.py:10 · Script docstring documents exit 1 for invalid arguments, but argparse exits with code 2 when required argument --inventory-path is missing or invalid options are passed.
- other · .claude/skills/pre-mortem/scripts/pre-mortem.py:105 · Mitigation check accepts a single **Prevention:** line without requiring Detection or Response, allowing incomplete Critical/High mitigations to pass validation.

## Observations
Includes explicit CWE-22 path traversal guards checking for prohibited '..' sequences and ensuring relative paths resolve within the current working directory.

## Context cost
9931 bytes, ~2500 tokens. Isolated script.
