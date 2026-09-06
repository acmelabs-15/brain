---
package: rjm
path: .claude/skills/threat-modeling/scripts/validate_threat_model.py
type: script
bytes: 11244
unit: inv-rjm-178
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/scripts/validate_threat_model.py

## Purpose — required, verbatim
> "Validate a threat model document for completeness." — .claude/skills/threat-modeling/scripts/validate_threat_model.py:2

## Design intent — required
Validates threat model markdown documents for structural and content completeness prior to security sign-off or architectural approval. It ensures that all five core sections (Scope, Architecture Overview, STRIDE Analysis, Threat Matrix, and Mitigations) exist, verifies that the threat matrix table defines valid STRIDE categories (S, T, R, I, D, E) and valid risk levels (Critical, High, Medium, Low), and enforces that every Critical and High risk threat has a corresponding entry in the Mitigations section. Without this validator, security teams and automated pipelines would have to manually audit threat model documents, risking missed attack vectors or unmitigated high-risk vulnerabilities reaching production.

## Phase — required
rjm:spec

## Inputs — required
- CLI positional argument: `path` (path to threat model markdown file)
- CLI optional argument: `--json` (output results as JSON)
- Threat model markdown file on disk

## Outputs — required
- Text formatted validation report to stdout (with ERRORS, WARNINGS, INFO, and RESULT summary)
- JSON formatted validation report to stdout when `--json` is specified
- Process exit code 0 on pass, or 10 on validation failure / error (or 2 on invalid CLI arguments via argparse)

## Invokes — required
- script validate_path_no_traversal — .claude/skills/threat-modeling/scripts/validate_threat_model.py:31

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:294
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:331
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:461

## Concepts named — required, verbatim
- `ValidationResult` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:35 — defined here
- `REQUIRED_SECTIONS` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:43 — defined here
- `STRIDE_CATEGORIES` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:51 — defined here
- `RISK_LEVELS` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — defined here
- `check_required_sections` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:56 — defined here
- `check_threat_matrix` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:84 — defined here
- `check_mitigations` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:182 — defined here
- `check_components` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:246 — defined here
- `validate_threat_model` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:288 — defined here
- `STRIDE` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:4 — used here
- `Threat Matrix` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:47 — used here
- `Mitigations` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:48 — used here
- `Critical` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — used here
- `High` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — used here
- `Medium` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — used here
- `Low` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:53 — used here
- `CWE-22` — .claude/skills/threat-modeling/scripts/validate_threat_model.py:297 — used here

## Structure
none (python script; functions and classes: ValidationResult, check_required_sections, check_threat_matrix, check_mitigations, check_components, validate_threat_model, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/threat-modeling/scripts/validate_threat_model.py`, language: Python 3, lines: 410
- documented invocation:
  - "python validate_threat_model.py auth-threats.md" — .claude/skills/threat-modeling/scripts/validate_threat_model.py:337
  - "python scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:331
  - "python .claude/skills/threat-modeling/scripts/validate_threat_model.py <model.md>" — .claude/skills/threat-modeling/SKILL.md:461
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md`
  abridged stdout:
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
- actual command run (--json): `python3 sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py --json sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md`
  abridged stdout:
  ```json
  {
    "passed": true,
    "results": [
      {
        "passed": true,
        "message": "Section 'Scope' present",
        "severity": "info"
      },
      {
        "passed": true,
        "message": "Found 11 threats",
        "severity": "info"
      },
      {
        "passed": true,
        "message": "All STRIDE categories addressed",
        "severity": "info"
      }
    ]
  }
  ```
  actual exit code: 0
- documented exit codes:
  - "0 | Success / Validation passed" — .claude/skills/threat-modeling/SKILL.md:337
  - "1 | General failure" — .claude/skills/threat-modeling/SKILL.md:338
  - "10 | Validation failed (missing required elements)" — .claude/skills/threat-modeling/SKILL.md:339
  vs. actual exit paths in code:
  - exit 0: `return 0 if passed else 10` at .claude/skills/threat-modeling/scripts/validate_threat_model.py:405 (when `passed` is True, passed to `sys.exit(main())` at line 409)
  - exit 10: `return 0 if passed else 10` at .claude/skills/threat-modeling/scripts/validate_threat_model.py:405 (when `passed` is False, including file not found or path traversal, passed to `sys.exit(main())` at line 409)
  - exit 2: `argparse.ArgumentParser.parse_args()` exits with status code 2 on invalid CLI arguments (e.g. unknown options or missing positional argument `path`). Code does not implement exit 1 for general failure.
- for validators/gates:
  - Can it exit non-zero? Yes, returns exit code 10 when validation checks fail, when the target file does not exist, or when path traversal is detected; exits 2 on argument error.
  - Does it fail on the source repo's own default branch? Exits 0 on valid threat models like `threat-model-template.md` and `.agents/security/threat-models/TM-aspire-skill-review.md`. Fails with exit 10 if given an invalid or nonexistent file.
- does the output match what the documentation claims? Yes, validates the document and prints structured checks or JSON, but exit code 1 is documented in SKILL.md for general failure while the script exits 10 on file-not-found or traversal errors.

## Defects — required
- exit-code-mismatch · .claude/skills/threat-modeling/scripts/validate_threat_model.py:405 · Script returns exit code 10 on any failure (including file-not-found and traversal) and does not implement exit code 1 documented in SKILL.md:338.
- script-bug · .claude/skills/threat-modeling/scripts/validate_threat_model.py:194 · Regex `\| (T\d+) \|.*?\| (Critical|High) \|` matches `High` in the Impact column rather than the Risk column on rows where Impact is High but Risk is Medium (e.g. T003 and T007 in template).
- script-bug · .claude/skills/threat-modeling/scripts/validate_threat_model.py:214 · Heading regex `##\s+\d*\.?\s*Mitigations(.*?)(?=\n##\s+\d|$)` requires subsequent level-2 headings to contain digits, failing to terminate section extraction if subsequent headings are unnumbered.

## Observations
- Protects against CWE-22 directory traversal via `validate_path_no_traversal` imported from `hook_utilities.path_safety`.
- Supports dual CLI modes: human-readable tabular output and structured `--json` output for automated tooling pipelines.
- Evaluates four validation phases: section existence, STRIDE and risk level validity in threat matrix, presence of mitigations for Critical/High threats, and component table completeness.
- Context cost: 11,244 bytes, approximately 2,811 tokens.
