---
package: rjm
path: scripts/validation/check_model_pins.py
type: script
bytes: 25301
unit: inv-rjm-280
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_model_pins.py

## Purpose — required, verbatim
> "Governance check for model: pins (ADR-080, issue #2840 criterion 3)." — scripts/validation/check_model_pins.py:2

## Design intent — required
Enforces Architectural Decision Record ADR-080, which bans hardcoded versioned model identifiers in skill, command, and agent definitions across the repository. Unpinned or inconsistently pinned models lead to silent model drift, unexpected cost spikes, and breakage when upstream models retire. The script operates as a "draining ratchet": skills and commands are strictly forbidden from specifying versioned model IDs (only rolling aliases like `sonnet`, `opus`, or `haiku` with an explicit `model-rationale:` priced below the default are permitted), while agents may only specify versioned pins if backed by a valid, unexpired evidence entry in `.agents/governance/model-pin-evidence.json`. Pre-existing legacy pins are grandfathered in `model_pin_baseline.json`, where the count of allowed pins is strictly capped and can only decrease over time.

## Phase — required
rjm:test

## Inputs — required
- CLI flags parsed via `_build_parser()`:
  - `--mode` with choices `warn` and `enforce` (default `warn` — scripts/validation/check_model_pins.py:576-580)
  - `--update-baseline` flag to freeze current pins (scripts/validation/check_model_pins.py:582-585)
  - `--baseline` path (default `model_pin_baseline.json` — scripts/validation/check_model_pins.py:77)
  - `--manifest` path (default `.agents/governance/model-pin-evidence.json` — scripts/validation/check_model_pins.py:10)
- Frontmatter files scanned by `scan_units()`:
  - `.claude/skills/*/SKILL.md` (scripts/validation/check_model_pins.py:83)
  - `.claude/agents/*.md` (scripts/validation/check_model_pins.py:84)
  - `.github/agents/*.md` (scripts/validation/check_model_pins.py:85)
  - `templates/agents/*.shared.md` (scripts/validation/check_model_pins.py:86)
  - `.claude/commands/**/*.md` (scripts/validation/check_model_pins.py:87)
- Data and configuration files:
  - `model_pin_baseline.json` read by `load_baseline()` (scripts/validation/check_model_pins.py:77)
  - `.agents/governance/model-pin-evidence.json` read by `load_manifest()` (scripts/validation/check_model_pins.py:10)
  - `templates/platforms/copilot-cli.yaml` read by `load_tier_map()` (scripts/validation/check_model_pins.py:79)

## Outputs — required
- Standard output reports:
  - `[model-pins] scanned <count> pinned units` (scripts/validation/check_model_pins.py:618)
  - `[model-pins] grandfathered backlog: <count> pin(s) awaiting migration (ADR-080 draining ratchet)` (scripts/validation/check_model_pins.py:621-622)
  - `[model-pins] OK: no new or changed pin violations` (scripts/validation/check_model_pins.py:628)
  - `[model-pins] VIOLATION: <violation>` (scripts/validation/check_model_pins.py:632)
  - `[model-pins] <count> hard violation(s)` (scripts/validation/check_model_pins.py:633)
  - `[model-pins] warn mode: reporting only, exit 0` (scripts/validation/check_model_pins.py:637)
  - `[model-pins] baseline written: <count> pins -> <path>` (scripts/validation/check_model_pins.py:609)
- Standard error diagnostics:
  - `[model-pins] config error: <exc>` (scripts/validation/check_model_pins.py:615)
- Files written (when `--update-baseline` is set):
  - `scripts/validation/model_pin_baseline.json` updated via `write_baseline()` (scripts/validation/check_model_pins.py:569)

## Invokes — required
- script portability_baseline — scripts/validation/check_model_pins.py:46
- script skill_frontmatter — scripts/validation/check_model_pins.py:51
- script _eval_common — scripts/validation/check_model_pins.py:55

## Invoked by — required
- script checks_spec.py — scripts/validation/checks_spec.py:443
- doc SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:325

## Concepts named — required, verbatim
- `ADR-080` — scripts/validation/check_model_pins.py:2 — used here
- `draining ratchet` — scripts/validation/check_model_pins.py:4 — used here
- `model-rationale` — scripts/validation/check_model_pins.py:8 — used here
- `KEEP_PIN` — scripts/validation/check_model_pins.py:11 — used here
- `model_tiers` — scripts/validation/check_model_pins.py:14 — used here
- `AGENTS.md` — scripts/validation/check_model_pins.py:23 — used here
- `CLAUDE.md` — scripts/validation/check_model_pins.py:90 — used here
- `DEFAULT_MODEL` — scripts/validation/check_model_pins.py:62 — defined here
- `ROLLING_ALIASES` — scripts/validation/check_model_pins.py:64 — defined here
- `MODEL_BEARING_KEYS` — scripts/validation/check_model_pins.py:68 — defined here
- `MANIFEST_MAX_AGE_DAYS` — scripts/validation/check_model_pins.py:71 — defined here
- `Unit` — scripts/validation/check_model_pins.py:94 — defined here
- `CheckReport` — scripts/validation/check_model_pins.py:105 — defined here
- `CWE-22` — scripts/validation/check_model_pins.py:349 — used here
- `CWE-117` — scripts/validation/check_model_pins.py:401 — used here

## Structure
- Governance check for model: pins (ADR-080, issue #2840 criterion 3). (docstring, lines 2-24)
- Imports and module path configuration (lines 26-58)
- Policy constants and configuration paths (lines 62-91)
- Data structures Unit and CheckReport (lines 93-118)
- Tier resolution and pricing comparisons (lines 119-183)
- Frontmatter AST traversal and pin collection (lines 185-326)
- Unit file discovery via scan_units (lines 328-346)
- Manifest validation and security checks (lines 348-392)
- Violation detection and policy evaluation (lines 394-456)
- Baseline and manifest deserialization (lines 458-490)
- Validation engine and baseline persistence (lines 492-571)
- Argument parsing, baseline vetting, and main entry point (lines 573-643)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_model_pins.py`, language: Python, lines: 643
- documented invocation: `"uv run python scripts/validation/check_model_pins.py"` — docs/SKILL-AUTHORING.md:325
- **executed:** yes
- actual command run: `.venv/bin/python scripts/validation/check_model_pins.py --mode enforce`
- abridged stdout:
```
[model-pins] scanned 46 pinned units
[model-pins] grandfathered backlog: 38 pin(s) awaiting migration (ADR-080 draining ratchet)
[model-pins]   backlog: .claude/agents/analyst.md: bare alias 'sonnet' lacks a model-rationale field
...
[model-pins] OK: no new or changed pin violations
```
- **actual exit code:** 0
- documented exit codes:
  - "Exit codes (AGENTS.md): 0 ok, 1 policy violation (enforce mode), 2 config error." — scripts/validation/check_model_pins.py:23
  - actual exit paths:
    - 0: `return 0` at line 610 (`--update-baseline`), line 629 (no violations), line 638 (`--mode warn` with violations)
    - 1: `return 1` at line 636 (`--mode enforce` with violations)
    - 2: `return 2` at line 605 (vetting baseline failed), line 616 (OSError or ValueError during check)
- for validators/gates: can it exit non-zero? Yes, exits 1 on policy violation in enforce mode, 2 on config or baseline integrity errors. Does it fail on the source repo's own default branch? No, exits 0 because existing pins are grandfathered in `model_pin_baseline.json`.
- does the output match what the documentation claims? Yes, reports grandfathered backlog and exits 0 when no new violations exist.

## Defects — required
none

## Observations
Implements a draining ratchet pattern where baseline technical debt is grandfathered under a strict `frozen_count` ceiling that cannot grow. Includes explicit defensive guards against directory traversal (CWE-22) in manifest paths and output injection (CWE-117) when formatting pin keys.

## Context cost
`check_model_pins.py` is 25,301 bytes. Invokes `portability_baseline.py` (5,183 bytes), `skill_frontmatter.py` (9,531 bytes), and `_eval_common.py` (3,412 bytes). Total context cost: ~43,427 bytes (~10,850 tokens).
