---
package: rjm
path: scripts/ci/adr006_run_block_scanner.py
type: script
bytes: 14042
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/adr006_run_block_scanner.py, sha256: ef880b3f5f753654f6ec751498eb3dd2fa2d4581398ab022787367e80fd3306e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/adr006_run_block_scanner.py

## Purpose — required, verbatim
> "ADR-006 run-block scanner: an objective, re-runnable burn-down metric (#3084)." — scripts/ci/adr006_run_block_scanner.py:2

## Design intent — required
Automated scanning and ratcheting utility that enforces ADR-006 ("Thin Workflows, Testable Modules") by preventing business logic from accumulating inside GitHub Actions workflow and action YAML `run:` blocks. Prior to this script, burn-down progress was tracked through non-reproducible manual audits. The scanner parses block scalars (`|` and `>`), filters out comments and pure static output messages (such as English prose in `echo` or `printf` diagnostics), masks non-evaluating quoted heredocs, and flags blocks exceeding a code-line threshold (default 10) that contain logic constructs (conditionals, loops, parsing pipes, command substitutions, variable assignments, or step summary writes). By providing `--max N` (slack ceiling) and `--exact N` (strict ratchet equality), the gate ensures that incremental extractions into standalone Python scripts cannot silently regress or be spent by newly introduced inline workflow logic.

## Phase — required
rjm:test

## Inputs — required
- Repository root path `--root` (defaults to current working directory) — scripts/ci/adr006_run_block_scanner.py:283
- Minimum code-line count threshold `--threshold` (default 10) — scripts/ci/adr006_run_block_scanner.py:285
- Optional slack ceiling limit `--max` — scripts/ci/adr006_run_block_scanner.py:289
- Optional strict ratchet count `--exact` — scripts/ci/adr006_run_block_scanner.py:293
- Output presentation format `--format` (default human) — scripts/ci/adr006_run_block_scanner.py:296
- Target workflow and action files matching `.github/workflows/*.yml`, `.github/workflows/*.yaml`, `.github/actions/*/action.yml` — scripts/ci/adr006_run_block_scanner.py:42-44

## Outputs — required
- Human-readable violation report or formatted JSON document printed to stdout — scripts/ci/adr006_run_block_scanner.py:335
- Process return code indicating scan status: 0 for conforming/clean runs, 1 when exceeding `--max` or mismatching `--exact`, 2 on invalid configuration — scripts/ci/adr006_run_block_scanner.py:36-38

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/adr006_run_block_scanner.py:2 — used here
- `burn-down metric` — scripts/ci/adr006_run_block_scanner.py:2 — defined here
- `ratchet gate` — scripts/ci/adr006_run_block_scanner.py:12 — defined here
- `RunBlock` — scripts/ci/adr006_run_block_scanner.py:171 — defined here
- `is_violation` — scripts/ci/adr006_run_block_scanner.py:250 — defined here
- `scan_repo` — scripts/ci/adr006_run_block_scanner.py:262 — defined here

## Structure
(no section headings in script; top-level constants, helper functions `_blank_static_operands`, `_strip_static_output`, `_mask_quoted_heredocs`, `_strip_static_output_body`, dataclass `RunBlock`, parsing functions `_body_lines`, `_count_code_lines`, `scan_text`, `is_violation`, `_iter_targets`, `scan_repo`, CLI parser `_parse_args`, mismatch messaging `_exact_mismatch_message`, and `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/adr006_run_block_scanner.py`, language: Python, lines: 355
- documented invocation: `python3 scripts/ci/adr006_run_block_scanner.py --root {root}` — scripts/ci/adr006_run_block_scanner.py:302
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/adr006_run_block_scanner.py --root sources/rjm`
- abridged stdout: `ADR-006 run-block violations (> 10 code lines + logic): 0`
- actual exit code: 0
- documented exit codes: `0 ok, 1 over --max or off --exact, 2 config error` — scripts/ci/adr006_run_block_scanner.py:23 vs. actual exit paths:
  - line 322: `return EXIT_CONFIG` (exit code 2)
  - line 325: `return EXIT_CONFIG` (exit code 2)
  - line 328: `return EXIT_CONFIG` (exit code 2)
  - line 346: `return EXIT_OVER_MAX` (exit code 1)
  - line 349: `return EXIT_OVER_MAX` (exit code 1)
  - line 350: `return EXIT_OK` (exit code 0)
  - line 354: `sys.exit(main())`
- for validators/gates: can it exit non-zero? Yes, exits 1 when violations exceed `--max` or deviate from `--exact`, and exits 2 on parameter error. Does it fail on the source repo's own default branch? No, passes with 0 violations under default threshold 10. When tested with `--exact 1`, it exits 1 as expected.
- does the output match what the documentation claims: yes

## Defects — required
- orphan — scripts/ci/adr006_run_block_scanner.py:1 — not invoked by any in-scope file (called from out-of-scope .github/workflows/pr-validation.yml:250)

## Observations
Employs sophisticated false-positive reduction filters: `_mask_quoted_heredocs` ignores heredocs with quoted delimiters (since they represent inert text), `_strip_static_output` and `_strip_static_output_body` blank out unexpanded message strings in `echo` and `printf` commands so natural language words like "if" or "for" do not trip regex keyword matches, and `_LOGIC` regex targets only genuine control structures, pipes, and GitHub Actions output redirections.

## Context cost
14042 bytes (~3500 tokens).
