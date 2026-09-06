---
package: rjm
path: .claude/skills/threat-modeling/scripts/validate_threat_model.py
type: script
bytes: 11244
unit: inv-rjm-178
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/threat-modeling/scripts/validate_threat_model.py

## Purpose — required, verbatim
> "Validate a threat model document for completeness." — .claude/skills/threat-modeling/scripts/validate_threat_model.py:2

## Design intent — required
Validates threat model markdown documents produced by autonomous agents or developers against completeness and schema standards. It parses document headings to confirm the presence of mandatory sections (Scope, Architecture Overview, STRIDE Analysis, Threat Matrix, Mitigations), verifies table syntax and STRIDE category designations (S, T, R, I, D, E), checks risk ratings (Critical, High, Medium, Low), and enforces that every Critical or High risk threat has a documented mitigation plan. It also validates component table definitions and performs directory traversal checks via `validate_path_no_traversal`. Without this automated validator, threat models could easily omit critical STRIDE threat vectors or leave high-severity risks unmitigated before architecture sign-off.

## Phase — required
rjm:spec, rjm:plan

## Inputs — required
Command-line positional argument `path` pointing to a threat model markdown document; optional `--json` flag to emit structured JSON validation results.

## Outputs — required
Human-readable validation report written to stdout with error, warning, and info sections, or JSON output if `--json` is supplied. Exit code 0 if all validation checks pass; exit code 10 if validation errors or file access errors are encountered.

## Invokes — required
- script path_safety — .claude/skills/threat-modeling/scripts/validate_threat_model.py:31

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:294

## Concepts named — required, verbatim
- `ADR-047` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:15 — used here
- `COPILOT_PLUGIN_ROOT` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:16 — used here
- `CLAUDE_PLUGIN_ROOT` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:16 — used here
- `validate_path_no_traversal` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:31 — used here
- `ValidationResult` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:35 — defined here
- `REQUIRED_SECTIONS` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:43 — defined here
- `STRIDE_CATEGORIES` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:51 — defined here
- `RISK_LEVELS` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — defined here
- `check_required_sections` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:56 — defined here
- `check_threat_matrix` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:84 — defined here
- `check_mitigations` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:182 — defined here
- `check_components` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:246 — defined here
- `validate_threat_model` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:288 — defined here
- `CWE-22` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:297 — used here
- `main` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:330 — defined here

## Structure
- `class ValidationResult` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:35
- `def check_required_sections` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:56
- `def check_threat_matrix` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:84
- `def check_mitigations` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:182
- `def check_components` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:246
- `def validate_threat_model` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:288
- `def main` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:330

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/threat-modeling/scripts/validate_threat_model.py`, language: Python, lines: 410
- documented invocation:
  - "python .claude/skills/threat-modeling/scripts/validate_threat_model.py \" — .claude/skills/threat-modeling/SKILL.md:294
  - "python scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:331
  - "python .claude/skills/threat-modeling/scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:461
  - "  python validate_threat_model.py auth-threats.md" — .claude/skills/threat-modeling/scripts/validate_threat_model.py:337
  - "  python validate_threat_model.py ./threat-models/payment.md" — .claude/skills/threat-modeling/scripts/validate_threat_model.py:338
- **executed:** yes
- actual command run, abridged stdout, actual exit code:
  - `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md`
    ```
    Validating: sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md
    ============================================================

    INFO:
      [INFO] Section 'Scope' present
      [INFO] Section 'Architecture Overview' present
      [INFO] Section 'STRIDE Analysis' present
      [INFO] Section 'Threat Matrix' present
      [INFO] Section 'Mitigations' present
      [INFO] Found 11 threats
      [INFO] All STRIDE categories addressed
      [INFO] T001 (High): Mitigation documented
      [INFO] T002 (High): Mitigation documented
      [INFO] T003 (High): Mitigation documented
      [INFO] T004 (High): Mitigation documented
      [INFO] T006 (High): Mitigation documented
      [INFO] T007 (High): Mitigation documented
      [INFO] T008 (High): Mitigation documented
      [INFO] T010 (High): Mitigation documented
      [INFO] T011 (High): Mitigation documented
      [INFO] Found 4 components
    ============================================================
    RESULT: PASSED
    ```
    actual exit code: 0
  - `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py nonexistent.md`
    ```
    Validating: nonexistent.md
    ============================================================

    ERRORS:
      [FAIL] File not found: nonexistent.md
    ============================================================
    RESULT: FAILED (1 errors)
    ```
    actual exit code: 10
  - `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py ../../etc/passwd`
    ```
    Validating: ../../etc/passwd
    ============================================================

    ERRORS:
      [FAIL] Path traversal attempt detected in document path: '../../etc/passwd' contains prohibited '..' sequence.
    ============================================================
    RESULT: FAILED (1 errors)
    ```
    actual exit code: 10
- documented exit codes vs. actual exit paths:
  - documented:
    - "| 0 | Success / Validation passed |" — .claude/skills/threat-modeling/SKILL.md:337
    - "| 1 | General failure |" — .claude/skills/threat-modeling/SKILL.md:338
    - "| 10 | Validation failed (missing required elements) |" — .claude/skills/threat-modeling/SKILL.md:339
  - actual exit paths:
    - `return 0 if passed else 10` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:405
    - `sys.exit(main())` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:409
    - (note: exits 0 when passed and 10 on failure, missing file, or traversal; exit code 1 is documented in SKILL.md:338 but not explicitly returned by `main()`)
- for validators/gates:
  - can it exit non-zero? Yes, exits 10 when validation errors occur, file is missing, or path traversal is detected.
  - does it fail on the source repo's own default branch? Exits 0 on `.claude/skills/threat-modeling/templates/threat-model-template.md`.
- does the output match what the documentation claims? Yes.

## Defects — required
- `exit-code-mismatch` · .claude/skills/threat-modeling/scripts/validate_threat_model.py:405 — SKILL.md:338 documents exit code 1 as "General failure", but `validate_threat_model.py` maps all non-passing outcomes directly to exit code 10 via `return 0 if passed else 10`, never explicitly returning 1.

## Observations
Employs strict path sanitization via `validate_path_no_traversal` from `hook_utilities.path_safety` before file operations. Supports machine-readable output with `--json`. Regex matches accommodate variations in markdown heading numbering (e.g. `## 1. Scope` vs `## Scope`).

## Context cost
11244 bytes (~2811 tokens).
