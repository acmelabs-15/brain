---
package: rjm
path: scripts/validate_phase_gates.py
type: script
bytes: 6656
unit: inv-rjm-268
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_phase_gates.py, sha256: c2a815e2ce0a260c4f706854a1879f790b3d2bcd21b628e77cff85e4778aa8de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_phase_gates.py

## Purpose — required, verbatim
> "Validate SPARC development phase gates in session logs." — scripts/validate_phase_gates.py:2

## Design intent — required
Validates that transitions between development phases recorded in session log files (`.agents/sessions/*.json`) satisfy SPARC methodology gate criteria. Verifies that phase progressions move strictly forward through the defined SPARC sequence (`specification` -> `pseudocode` -> `architecture` -> `refinement` -> `completion`), that recorded gate statuses are valid (`passed`, `failed`, `in_progress`, `skipped`), and that entries use valid starting phases. Enforces structured development progression so AI agents do not regress phases or skip validation gates during session execution.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `session_log`: "Path to session log JSON file" — scripts/validate_phase_gates.py:204
- Session log JSON file containing optional `developmentPhase` dictionary with `current` phase string and `history` array of transition objects.

## Outputs — required
- Terminal stdout message: "PASS: Phase gate validation successful" — scripts/validate_phase_gates.py:225
- Terminal stderr messages on validation failures or unexpected exceptions (scripts/validate_phase_gates.py:211, 218, 222, 233)
- Process exit code: 0 on success, 1 on validation failure, 2 on unexpected error (scripts/validate_phase_gates.py:8-10, 212, 223, 226, 234)

## Invokes — required
- script path_validation — scripts/validate_phase_gates.py:28
- script models — scripts/validate_phase_gates.py:29

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SPARC` — scripts/validate_phase_gates.py:2 — used here
- `ADR-035` — scripts/validate_phase_gates.py:12 — used here
- `sparc-methodology.md` — scripts/validate_phase_gates.py:13 — used here
- `VALID_PHASES` — scripts/validate_phase_gates.py:31 — defined here
- `PHASE_ORDER` — scripts/validate_phase_gates.py:39 — defined here
- `VALID_GATE_STATUSES` — scripts/validate_phase_gates.py:47 — defined here
- `VALID_ENTRY_PHASES` — scripts/validate_phase_gates.py:50 — defined here
- `validate_phase_data` — scripts/validate_phase_gates.py:58 — defined here
- `_validate_history` — scripts/validate_phase_gates.py:89 — defined here
- `validate_session_file` — scripts/validate_phase_gates.py:160 — defined here
- `main` — scripts/validate_phase_gates.py:193 — defined here

## Structure
- Shebang and module docstring specifying SPARC phase gate checks and exit codes (scripts/validate_phase_gates.py:1-14)
- Standard library imports, path resolution, and model imports (scripts/validate_phase_gates.py:16-29)
- SPARC phase constants: `VALID_PHASES`, `PHASE_ORDER`, `VALID_GATE_STATUSES`, and `VALID_ENTRY_PHASES` (scripts/validate_phase_gates.py:31-56)
- `validate_phase_data`: schema check on `developmentPhase` structure and delegation to history validation (scripts/validate_phase_gates.py:58-87)
- `_validate_history`: sequential ordering, status validation, entry phase rules, and forward progression checks (scripts/validate_phase_gates.py:89-158)
- `validate_session_file`: file reading, JSON decoding, and optional `developmentPhase` handling (scripts/validate_phase_gates.py:160-191)
- `main`: CLI parser, CWE-22 path validation, output printing, and exit codes (scripts/validate_phase_gates.py:193-227)
- Entry point execution with unexpected error handler (scripts/validate_phase_gates.py:229-235)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validate_phase_gates.py`
- **language:** Python (python3)
- **lines:** 235
- **documented invocation:**
  - `python3 scripts/validate_phase_gates.py <session_log>` (inferred from CLI argument parser at scripts/validate_phase_gates.py:199-206)
- **executed:** yes
- **actual command run:** `.venv/bin/python3 scripts/validate_phase_gates.py .agents/sessions/2026-08-15-session-5021-closure-reproduction-gate.json`
- **abridged stdout:** `PASS: Phase gate validation successful`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: All phase gates valid (or no phase tracking present)" — scripts/validate_phase_gates.py:8
    - "1  - Error: Phase gate validation failed" — scripts/validate_phase_gates.py:9
    - "2  - Error: Unexpected error" — scripts/validate_phase_gates.py:10
  - Actual code paths:
    - `return 0` — scripts/validate_phase_gates.py:226
    - `return 1` — scripts/validate_phase_gates.py:212
    - `return 1` — scripts/validate_phase_gates.py:223
    - `sys.exit(2)` — scripts/validate_phase_gates.py:234
    - `sys.exit(main())` — scripts/validate_phase_gates.py:231
  - Result: Documented exit codes match actual code exit paths.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 on path traversal errors, missing files, malformed JSON, missing required phase fields, invalid gate status, or backward phase ordering; exits 2 on unhandled exceptions.
  - Default branch behavior: Passes with exit code 0 on existing session log `.agents/sessions/2026-08-15-session-5021-closure-reproduction-gate.json`. Exits 1 when given a non-existent path or a traversal path like `../../etc/passwd`.
- **does the output match what the documentation claims:** yes; outputs `PASS: Phase gate validation successful` and exits 0 when session logs have valid or omitted phase gates.

## Defects — required
- orphan · scripts/validate_phase_gates.py:1 · Script is not invoked by any active lifecycle command, hook, CI workflow, or documentation in scope.

## Observations
- Defines the 5 SPARC phases explicitly in `PHASE_ORDER`: `specification`, `pseudocode`, `architecture`, `refinement`, `completion`.
- Allows flexible entry points (`specification`, `architecture`, `refinement`, `completion`) to accommodate targeted tasks such as quick fixes or documentation-only sessions without requiring all prior phases.
- Validates phase progression strictly forward (`current_index < previous_index` triggers an error).
- Phase tracking is optional in session logs: if `developmentPhase` is absent, it returns an empty `ValidationResult` and exits 0 cleanly.

## Context cost
6656 bytes, 235 lines, ~1600 tokens (plus imported `scripts.utils.path_validation` 4486 bytes and `scripts.validation.models` 907 bytes).
