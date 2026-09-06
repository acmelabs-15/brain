---
package: rjm
path: scripts/validation/validate_agent_catalog.py
type: script
bytes: 2100
unit: inv-rjm-308
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_agent_catalog.py, sha256: b5d78d816710a2c6fdc598425db8df567139033f76ea7c8fda36eaa10672c49c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_agent_catalog.py

## Purpose — required, verbatim
> "Validate docs/agent-catalog.md against templates/agents/*.shared.md." — scripts/validation/validate_agent_catalog.py:2

## Design intent — required
Enforces synchronization between the committed documentation artifact `docs/agent-catalog.md` and the canonical agent definitions in `templates/agents/*.shared.md`. To eliminate duplication of catalog formatting logic and maintain a single source of truth, this script adheres to the canonical generator design pattern: rather than re-implementing catalog generation or markdown parsing, it delegates directly to `build/generate_agent_catalog.py` via its `--check` argument. If any agent template changes without the committed catalog being regenerated, or if the catalog file is missing, the gate exits non-zero to prevent drift from merging in CI or passing pre-PR validation.

## Phase — required
rjm:Verification

## Inputs — required
- Command-line arguments: `argv: Sequence[str] | None = None` (accepted for consistency, ignored) — scripts/validation/validate_agent_catalog.py:34
- Template directory: `templates/agents/*.shared.md` — scripts/validation/validate_agent_catalog.py:2
- Committed documentation: `docs/agent-catalog.md` — scripts/validation/validate_agent_catalog.py:2

## Outputs — required
- Standard error: error diagnostic if templates directory or generator is missing — scripts/validation/validate_agent_catalog.py:45, 51
- Exit code 0: Catalog matches templates — scripts/validation/validate_agent_catalog.py:14
- Exit code 1: Catalog drifted from templates or is missing — scripts/validation/validate_agent_catalog.py:15
- Exit code 2: Configuration error (templates dir missing or generator import failed) — scripts/validation/validate_agent_catalog.py:16, 46, 52
- Exit code 3: External error (template could not be read or parsed) — scripts/validation/validate_agent_catalog.py:17

## Invokes — required
- script generate_agent_catalog — build/generate_agent_catalog.py:11

## Invoked by — required
- script validate_agent_catalog — scripts/validation/pre_pr_sequence.py:77
- script validate_agent_catalog — scripts/validation/checks_spec.py:289
- doc validate_agent_catalog — docs/agent-catalog.md:7

## Concepts named — required, verbatim
- `agent-catalog` — scripts/validation/validate_agent_catalog.py:2 — used here
- `docs/agent-catalog.md` — scripts/validation/validate_agent_catalog.py:2 — used here
- `templates/agents/*.shared.md` — scripts/validation/validate_agent_catalog.py:2 — used here
- `build/generate_agent_catalog.py` — scripts/validation/validate_agent_catalog.py:8 — used here
- `canonical-source-mirror.md` — scripts/validation/validate_agent_catalog.py:10 — used here
- `ADR-035` — scripts/validation/validate_agent_catalog.py:11 — used here
- `EXIT CODES (ADR-035)` — scripts/validation/validate_agent_catalog.py:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_agent_catalog.py`, language: python3, lines: 64
- documented invocation: none (CLI execution via `python3 scripts/validation/validate_agent_catalog.py` referenced in `docs/agent-catalog.md:7`)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `uv run python3 scripts/validation/validate_agent_catalog.py`, stdout: `OK: .../docs/agent-catalog.md matches templates/agents/`, actual exit code: 0
  - Command without dependencies: `python3 scripts/validation/validate_agent_catalog.py`, stderr: `Error: cannot import build/generate_agent_catalog.py: No module named 'yaml'`, actual exit code: 2
- documented exit codes vs. actual exit paths in code:
  - Documented:
    ```
    EXIT CODES (ADR-035):
      0  - Catalog matches the templates.
      1  - Catalog drifted from the templates, or is missing.
      2  - Configuration error (generator or templates directory not found).
      3  - External error (a template could not be read or parsed).
    ```
  - Actual exit paths:
    - `scripts/validation/validate_agent_catalog.py:46`: `return 2` (templates directory missing)
    - `scripts/validation/validate_agent_catalog.py:52`: `return 2` (cannot import generator)
    - `scripts/validation/validate_agent_catalog.py:54`: returns returncode of `generate_agent_catalog.main` (0, 1, 2, or 3)
    - `scripts/validation/validate_agent_catalog.py:63`: `sys.exit(main())`
- for validators/gates: can exit non-zero (exits 1 on drift, 2 on config error, 3 on external/parse error); passes with exit 0 on clean repository checkout
- does the output match what the documentation claims: yes, verifies that catalog matches templates and returns exit code 0

## Defects — required
none

## Observations
Exemplifies single-source-of-truth architecture by reusing `build/generate_agent_catalog.py` in `--check` mode instead of maintaining a second markdown table parser.

## Context cost
2100 bytes (file) + 11521 bytes (invoked `build/generate_agent_catalog.py`), approximately 3400 tokens total.
