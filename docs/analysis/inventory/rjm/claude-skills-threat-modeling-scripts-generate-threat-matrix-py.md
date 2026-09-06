---
package: rjm
path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py
type: script
bytes: 6551
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_threat_matrix.py, sha256: efe078c6f610c0f98a1c52c3fe0ef180e0da08116dcaa84bc582a3efdcd12bb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/scripts/generate_threat_matrix.py

## Purpose — required, verbatim
> "Generate a structured threat matrix document." — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:2

## Design intent — required
Generates a structured threat model markdown template populated with system architecture placeholders (DFD text diagram, components, trust boundaries, data flows), STRIDE category breakdown sections with prompt questions, a threat matrix table, risk summary tables, priority mitigations, and validation checklist.

## Phase — required
rjm:spec

## Inputs — required
`--scope` (string describing system/feature being modeled) and `--output` (Path to destination markdown file).

## Outputs — required
Structured threat model markdown document via `--output`.

## Invokes — required
- script path_safety — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:30

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:186

## Concepts named — required, verbatim
- `STRIDE_CATEGORIES` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:32 — defined here
- `TEMPLATE` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:41 — defined here
- `generate_stride_sections` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:169 — defined here
- `generate_threat_matrix` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:190 — defined here
- `validate_path_no_traversal` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:30 — used here

## Structure
- `def generate_stride_sections` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:169
- `def generate_threat_matrix` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:190
- `def main` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:221

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/threat-modeling/scripts/generate_threat_matrix.py`, language: Python, lines: 256
- documented invocation:
  - "python .claude/skills/threat-modeling/scripts/generate_threat_matrix.py \" — .claude/skills/threat-modeling/SKILL.md:186
  - "python generate_threat_matrix.py --scope \"Auth Service\" --output auth-threats.md" — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:228
- **executed:** yes
- actual command run: `python3 .claude/skills/threat-modeling/scripts/generate_threat_matrix.py --scope "Authentication Service" --output /tmp/auth-threats.md`, abridged stdout:
  ```
  Generated threat matrix: /tmp/auth-threats.md
  Scope: Authentication Service
  STRIDE categories: 6
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "Exit code (0 for success, 1 for failure)" — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:198
    - "0" — .claude/skills/threat-modeling/SKILL.md:337
    - "1" — .claude/skills/threat-modeling/SKILL.md:338
  - actual exit paths:
    - `return 0` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:218
    - `return 1` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:251
    - `sys.exit(main())` — .claude/skills/threat-modeling/scripts/generate_threat_matrix.py:255
- for validators/gates: not a validator or gate; generates threat matrix markdown template.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Generates pre-formatted markdown tables for Components (C001), Trust Boundaries (TB001), Data Flows (DF001), and STRIDE threat items (T001). Applies path traversal validation via `validate_path_no_traversal`.

## Context cost
6551 bytes, ~1640 tokens.
