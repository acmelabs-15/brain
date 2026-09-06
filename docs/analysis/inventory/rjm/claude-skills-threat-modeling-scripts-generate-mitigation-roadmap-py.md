---
package: rjm
path: .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py
type: script
bytes: 9837
unit: inv-rjm-177
in_scope_via: .claude/skills/threat-modeling/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py, sha256: 1941714a412d29e03cb5aaca38a66fbff2cbc71e3ff9c7491192f63f73455c4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py

## Purpose — required, verbatim
> "Generate a prioritized mitigation roadmap from a threat model." — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:2

## Design intent — required
Parses a threat model markdown document containing a STRIDE threat matrix table and generates an executive summary and prioritized remediation roadmap markdown document organized into four risk levels (Critical, High, Medium, Low), implementation timeline tiers, and next steps for security review and ticket tracking.

## Phase — required
rjm:spec

## Inputs — required
Markdown file containing a threat model with header `# Threat Model: <scope>` or `## Scope` and a threat matrix markdown table with header `| ID | Element | STRIDE | Threat | Likelihood | Impact | Risk |` via `--input` / `-i` flag.

## Outputs — required
Prioritized mitigation roadmap markdown file via `--output` / `-o` flag.

## Invokes — required
- script path_safety — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:32

## Invoked by — required
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:278

## Concepts named — required, verbatim
- `Threat` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:36 — defined here
- `RISK_ORDER` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:50 — defined here
- `ROADMAP_TEMPLATE` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:52 — defined here
- `parse_threat_matrix` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:129 — defined here
- `categorize_by_risk` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:172 — defined here
- `format_threat_section` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:196 — defined here
- `format_threat_table` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:227 — defined here
- `extract_scope` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:250 — defined here
- `generate_roadmap` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:270 — defined here
- `validate_path_no_traversal` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:32 — used here

## Structure
- `class Threat` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:36
- `def parse_threat_matrix` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:129
- `def categorize_by_risk` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:172
- `def format_threat_section` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:196
- `def format_threat_table` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:227
- `def extract_scope` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:250
- `def generate_roadmap` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:270
- `def main` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:333

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py`, language: Python, lines: 369
- documented invocation:
  - "python .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py \" — .claude/skills/threat-modeling/SKILL.md:278
  - "python generate_mitigation_roadmap.py --input auth-threats.md --output auth-roadmap.md" — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:340
- **executed:** yes
- actual command run: `python3 .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py --input /tmp/auth-threats.md --output /tmp/auth-roadmap.md`, abridged stdout:
  ```
  Generated mitigation roadmap: /tmp/auth-roadmap.md
  Threats processed: 1
    Critical: 0
    High: 1
    Medium: 0
    Low: 0
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "Exit code (0 for success, 1 for failure)" — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:278
    - "0" — .claude/skills/threat-modeling/SKILL.md:337
    - "1" — .claude/skills/threat-modeling/SKILL.md:338
  - actual exit paths:
    - `return 1` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:285
    - `return 0` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:330
    - `return 1` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:364
    - `sys.exit(main())` — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:368
- for validators/gates: not a validator or gate; generates markdown roadmap documents.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Employs `validate_path_no_traversal` from `hook_utilities.path_safety` to mitigate CWE-22 directory traversal risks on both input and output paths. Dynamically locates `lib` directory relative to `__file__` or via `COPILOT_PLUGIN_ROOT`/`CLAUDE_PLUGIN_ROOT`.

## Context cost
9837 bytes, ~2460 tokens.
