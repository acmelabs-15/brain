---
package: rjm
path: scripts/validation/traceability.py
type: script
bytes: 19153
unit: inv-rjm-307
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/traceability.py

## Purpose — required, verbatim
> "Validate traceability cross-references between specification artifacts." — scripts/validation/traceability.py:2

## Design intent — required
Enforces end-to-end specification traceability across three-tier engineering artifacts (`requirements/REQ-*.md`, `design/DESIGN-*.md`, and `tasks/TASK-*.md`) according to `.agents/governance/traceability-schema.md`. In multi-agent autonomous software lifecycles, specifications quickly diverge: requirements lack design implementations, tasks are initiated without designs (untraced tasks), designs have no tasks, or related IDs point to non-existent artifacts. This script loads front matter from markdown specs, builds bidirectional cross-reference indices, and evaluates five formal governance rules: forward traceability (Rule 1), backward traceability (Rule 2), complete chain verification (Rule 3), reference validity (Rule 4), and completion status consistency (Rule 5). It supports multiple output formats (`console`, `markdown`, `json`), path traversal security guards, and CI failure thresholds (`--ci`, `--strict`).

## Phase — required
none

## Inputs — required
- CLI option `--specs-path`: Path to the specs directory (env: `SPECS_PATH`, default: `.agents/specs`) — scripts/validation/traceability.py:524
- CLI option `--strict`: Fail on warnings (orphaned specs) (env: `STRICT`) — scripts/validation/traceability.py:529
- CLI option `--format`: Output format (env: `OUTPUT_FORMAT`, default: `console`) — scripts/validation/traceability.py:536
- CLI option `--ci`: CI mode: exit 1 on failures (env: `CI`) — scripts/validation/traceability.py:542
- Specification files in requirements, design, and tasks subdirectories: "TASK-*.md" — scripts/validation/traceability.py:173

## Outputs — required
- Formatted console, markdown, or JSON report on stdout: `Traceability Validation Report` — scripts/validation/traceability.py:362
- Error messages on stderr for path traversal or missing directory: `Specs path not found:` — scripts/validation/traceability.py:473
- Exit code 0: Pass (no errors, or not in CI mode) — scripts/validation/traceability.py:13
- Exit code 1: Logic error (broken references, untraced tasks, or warnings with --strict) — scripts/validation/traceability.py:14
- Exit code 2: Config error (path not found, path traversal detected) — scripts/validation/traceability.py:15

## Invokes — required
- script get_repo_root — scripts/github_core/repo.py:78

## Invoked by — required
- script validate_traceability — scripts/validation/pre_pr_sequence.py:90
- script validate_traceability — scripts/validation/checks_spec.py:75

## Concepts named — required, verbatim
- `_SPEC_ID_RE` — scripts/validation/traceability.py:36 — defined here
- `_RELATED_ID_RE` — scripts/validation/traceability.py:37 — defined here
- `SpecInfo` — scripts/validation/traceability.py:45 — defined here
- `TraceIssue` — scripts/validation/traceability.py:56 — defined here
- `TraceResults` — scripts/validation/traceability.py:66 — defined here
- `AllSpecs` — scripts/validation/traceability.py:79 — defined here
- `parse_yaml_front_matter` — scripts/validation/traceability.py:93 — defined here
- `load_all_specs` — scripts/validation/traceability.py:148 — defined here
- `_RefIndex` — scripts/validation/traceability.py:188 — defined here
- `_build_ref_index` — scripts/validation/traceability.py:195 — defined here
- `_check_task_traceability` — scripts/validation/traceability.py:203 — defined here
- `_check_design_traceability` — scripts/validation/traceability.py:238 — defined here
- `_check_orphaned_requirements` — scripts/validation/traceability.py:264 — defined here
- `_check_complete_chains` — scripts/validation/traceability.py:278 — defined here
- `_check_status_consistency` — scripts/validation/traceability.py:310 — defined here
- `validate_traceability` — scripts/validation/traceability.py:336 — defined here
- `format_console` — scripts/validation/traceability.py:360 — defined here
- `format_markdown` — scripts/validation/traceability.py:394 — defined here
- `format_json` — scripts/validation/traceability.py:436 — defined here
- `validate_specs_path` — scripts/validation/traceability.py:466 — defined here
- `get_repo_root` — scripts/validation/traceability.py:482 — used here
- `build_parser` — scripts/validation/traceability.py:515 — defined here
- `main` — scripts/validation/traceability.py:547 — defined here

## Structure
- Shebang and module docstring — scripts/validation/traceability.py:1-17
- Path resolution and regex constants — scripts/validation/traceability.py:18-38
- Data classes (SpecInfo, TraceIssue, TraceResults, AllSpecs) — scripts/validation/traceability.py:44-87
- YAML front matter parser (parse_yaml_front_matter) — scripts/validation/traceability.py:93-142
- Specification loader (load_all_specs) — scripts/validation/traceability.py:148-180
- Reference index and validation rules (Rules 1-5) — scripts/validation/traceability.py:187-353
- Output report formatters (console, markdown, json) — scripts/validation/traceability.py:360-460
- Specs path validation and traversal protection (validate_specs_path) — scripts/validation/traceability.py:466-508
- CLI argument parser and main execution runner — scripts/validation/traceability.py:515-573

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/traceability.py`, language: Python 3, lines: 573
- documented invocation:
  - "Validate traceability cross-references between spec artifacts." — scripts/validation/traceability.py:518
- executed: yes
- actual command run: `python3 scripts/validation/traceability.py`
- abridged stdout:
  ```
  Traceability Validation Report
  ==============================

  Stats:
    Requirements: 22
    Designs:      18
    Tasks:        24
    Valid Chains: 15

  WARNINGS (9):
    [Rule 1: Forward Traceability] REQ 'REQ-017' has no DESIGN referencing it (orphaned requirement)
    [Rule 1: Forward Traceability] REQ 'REQ-016' has no DESIGN referencing it (orphaned requirement)
    [Rule 1: Forward Traceability] REQ 'REQ-003' has no DESIGN referencing it (orphaned requirement)
    [Rule 1: Forward Traceability] REQ 'REQ-A01' has no DESIGN referencing it (orphaned requirement)
    [Rule 1: Forward Traceability] REQ 'REQ-019' has no DESIGN referencing it (orphaned requirement)
    [Rule 1: Forward Traceability] REQ 'REQ-015' has no DESIGN referencing it (orphaned requirement)
    [Rule 3: Complete Chain] DESIGN 'DESIGN-017' has no TASK referencing it (orphaned design)
    [Rule 3: Complete Chain] DESIGN 'DESIGN-016' has no TASK referencing it (orphaned design)
    [Rule 3: Complete Chain] DESIGN 'DESIGN-015' has no TASK referencing it (orphaned design)

  INFO (2):
    [Rule 5: Status Consistency] TASK 'TASK-011' is complete but DESIGN 'DESIGN-011' is 'draft'
    [Rule 5: Status Consistency] TASK 'TASK-013' is complete but DESIGN 'DESIGN-013' is 'draft'
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Pass (no errors, or not in CI mode)" — scripts/validation/traceability.py:13
  - "1 - Logic error (broken references, untraced tasks, or warnings with --strict)" — scripts/validation/traceability.py:14
  - "2 - Config error (path not found, path traversal detected)" — scripts/validation/traceability.py:15
  - Actual exit paths in code:
    - line 474: `raise SystemExit(2)` on specs directory not found
    - line 495: `raise SystemExit(2)` on repo-relative path traversal
    - line 506: `raise SystemExit(2)` on cwd-relative path traversal
    - line 566: `return 1` if `args.ci and has_failures`
    - line 568: `return 0` when passed or not in CI mode
    - line 572: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes, exits 1 on traceability errors or strict warnings under `--ci`, and exits 2 on path traversal or missing path
  - does it fail on the source repo's own default branch: under default invocation (`python3 scripts/validation/traceability.py`), it exits 0 reporting 9 warnings; when executed with `--ci --strict` (`python3 scripts/validation/traceability.py --ci --strict`), it exits 1 due to 9 orphaned spec warnings present in `.agents/specs/` on the default branch
- does the output match what the documentation claims: yes, outputs structured reports validating all five traceability rules

## Defects — required
none

## Observations
- Evaluates 5 explicit governance rules: Rule 1 (Forward Traceability), Rule 2 (Backward Traceability), Rule 3 (Complete Chain), Rule 4 (Reference Validity), and Rule 5 (Status Consistency).
- Implements path traversal protection in `validate_specs_path` checking that relative specs paths resolve within repository root via `scripts.github_core.repo.get_repo_root`.
- Supports 3 distinct output formats: `console`, `markdown`, and `json`.

## Context cost
19153 bytes, 573 lines, ~4790 tokens.
