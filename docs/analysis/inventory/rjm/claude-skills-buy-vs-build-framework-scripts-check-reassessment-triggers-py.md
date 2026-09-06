---
package: rjm
path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py
type: script
bytes: 7719
unit: inv-rjm-96
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py

## Purpose — required, verbatim
> "Detect assumption drift and recommend re-evaluation." — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:3

## Design intent — required
Prevents strategic sourcing decisions from becoming stale by comparing current operational assumptions against baseline metrics recorded in an architectural decision record (ADR). It calculates percentage drift across costs and time horizons, checks for strategic priority shifts (core vs context), vendor viability concerns, team capacity changes, competitive dynamics, regulatory impacts, and technology disruption. If major drift (>20%) or multiple triggers fire, it warns leadership and prescribes running Phase 2 TCO re-evaluation.

## Phase — required
rjm:Decide

## Inputs — required
- `--adr-file`: "ADR markdown file with original assumptions" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:163
- `--current-state`: "JSON file with current state" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:165
- ADR markdown file content parsed via regular expressions:
  - Decision type: parsed via `re.search` for BUILD, BUY, PARTNER, or DEFER (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:39-45)
  - Baseline cost numbers: parsed via `re.findall` for dollar amounts (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:48-50)
  - Time horizon: parsed via `re.search` for year count (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:53-55)
- Current state JSON format consuming fields: `costs`, `time_horizon_years`, `strategic_priority_changed`, `vendor_viability_concerns`, `team_capacity_changed`, `competitive_dynamics_shifted`, `regulatory_changes`, `technology_disruption`, `customer_demand_signal` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:148-158)

## Outputs — required
- Structured text report printed to stdout:
  - "Reassessment Trigger Analysis" banner — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:217
  - "Original Decision:" status header — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:219
  - "Drift Analysis:" breakdown sorted by percentage shift — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:221
  - Triggered rules listing triggered triggers (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:225)
  - "Recommendation:" verdict string ("Assumptions hold, stay course", "Monitor closely, consider re-evaluation", or "Full re-evaluation required") — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:229
- Exit status: code 0 (assumptions hold), 1 (file not found, invalid JSON, or path traversal error), 2 (minor drift <20%), or 3 (major drift >20% or >=3 triggered rules)

## Invokes — required
none

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:245
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:372

## Concepts named — required, verbatim
- `assumption drift` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:3 — defined here
- `DriftAnalysis` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:20 — defined here
- `ADR` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:28 — used here
- `strategic priority` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:78 — used here
- `vendor viability` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:82 — used here
- `team capacity` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:86 — used here
- `reassessment triggers` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:94 — defined here
- `competitive dynamics` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:116 — used here
- `regulatory changes` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:119 — used here
- `technology disruption` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:122 — used here
- `customer demand signal` — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:125 — used here

## Structure
none (python script; functions and classes: `DriftAnalysis`, `parse_adr`, `calculate_drift`, `check_triggers`, `determine_recommendation`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`, language: Python 3, lines: 236
- documented invocation:
  - "python3 scripts/check_reassessment_triggers.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:245
  - "python3 scripts/check_reassessment_triggers.py" — .claude/skills/buy-vs-build-framework/SKILL.md:372
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py --help`
  abridged stdout:
  ```
  usage: check_reassessment_triggers.py [-h] --adr-file ADR_FILE
                                        --current-state CURRENT_STATE

  Detect assumption drift and recommend re-evaluation
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Assumptions hold, stay course" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:6
  - "1: Error (file not found or invalid JSON)" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:7
  - "2: Minor drift (<20%), monitor closely" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:8
  - "3: Major drift (>20%), re-evaluation required" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:9
  Documented in SKILL.md:
  - "0: Assumptions hold, stay course" — .claude/skills/buy-vs-build-framework/SKILL.md:252
  - "10: Minor drift (<20%), monitor closely" — .claude/skills/buy-vs-build-framework/SKILL.md:253
  - "11: Major drift (>20%), re-evaluation required" — .claude/skills/buy-vs-build-framework/SKILL.md:254
  Actual exit paths in code:
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:34) when ADR file is not found.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:188) on ValueError from path traversal security check.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:202) when current-state JSON file is not found.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:205) on JSONDecodeError when parsing current-state file.
  - `sys.exit(exit_code)` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:231) where exit_code is determined by `determine_recommendation`:
    - 3: when `len(triggered) >= 3 or max_drift > 20` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:135)
    - 2: when `len(triggered) >= 1 or max_drift > 10` (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:137)
    - 0: when assumptions hold (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:139)
- for validators/gates: not a gate (monitoring/trigger script). Can exit non-zero (1 on missing files/JSON errors, 2 on minor drift, 3 on major drift).
- does the output match what the documentation claims? Yes, outputs trigger analysis and recommendation; however, exit codes diverge from SKILL.md (script exits 2/3, SKILL.md documents 10/11).

## Defects — required
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:5 · Script docstring documents exit codes 0, 1, 2, 3, whereas `.claude/skills/buy-vs-build-framework/SKILL.md:251-255` documents exit codes 0, 10, 11.
- `exit-code-mismatch` · .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:231 · Actual script exits with code 2 or 3 for drift conditions, whereas SKILL.md documents exit codes 10 and 11.
- `missing-path` · .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:372 · The invocation example in SKILL.md:372-374 cites `--adr-file "architecture/ADR-123-build-payments.md"` and `--current-state "current-state.json"`, neither of which exists in the repository.

## Observations
- Enforces strict path traversal defenses (CWE-22) at lines 170-189, ensuring `--adr-file` and `--current-state` paths resolve within the current working directory (`allowed_base = os.path.abspath(".")`).
- Regex-based ADR parsing makes strong assumptions about ADR document structure: relies on regex matching `## Decision We will (BUILD|BUY|PARTNER|DEFER)` and sums all dollar amounts (`$([0-9,]+)`) found in the file, which conflates initial and ongoing costs into a single sum.

## Context cost
7719 bytes (~1930 tokens). Self-contained Python script importing standard library modules (`argparse`, `json`, `re`, `sys`, `dataclasses`, `os`).
