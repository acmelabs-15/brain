---
package: rjm
path: scripts/validation/rule_activation_coverage_baseline.json
type: script
bytes: 3207
unit: inv-rjm-302
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/rule_activation_coverage_baseline.json

## Purpose — required, verbatim
> "Ratchet of rules and skills that lack an activation scenario. Each id here is allowed to stay uncovered; the gate fails when a rule or skill NOT listed here becomes uncovered. Shrink these lists by adding scenarios; never widen them to route around the gate. This is necessary-not-sufficient: a scenario proves a rule CAN be measured, not that routing to it works." — scripts/validation/rule_activation_coverage_baseline.json:2

## Design intent — required
Establishes a committed baseline ratchet of prompt rules and agent skills currently lacking test activation scenarios. The ratchet mechanism (implemented by `check_rule_activation_coverage.py`) prevents regression in evaluation coverage: any existing rule or skill listed in this baseline is permitted to remain uncovered, but introducing a new rule or skill without an activation scenario—or dropping an existing scenario—triggers a gate failure. Furthermore, contributors are expected to shrink the baseline over time as new activation scenarios are authored, while widening the list is forbidden.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_rule_activation_coverage — scripts/validation/check_rule_activation_coverage.py:82

## Concepts named — required, verbatim
- `_comment` — scripts/validation/rule_activation_coverage_baseline.json:2 — defined here
- `uncovered_rules` — scripts/validation/rule_activation_coverage_baseline.json:3 — defined here
- `uncovered_skills` — scripts/validation/rule_activation_coverage_baseline.json:24 — defined here
- `builder-ethos` — scripts/validation/rule_activation_coverage_baseline.json:4 — used here
- `canonical-source-mirror` — scripts/validation/rule_activation_coverage_baseline.json:5 — used here
- `ci-scripts` — scripts/validation/rule_activation_coverage_baseline.json:6 — used here
- `claude-agents` — scripts/validation/rule_activation_coverage_baseline.json:7 — used here
- `adr-generator` — scripts/validation/rule_activation_coverage_baseline.json:25 — used here
- `adr-review` — scripts/validation/rule_activation_coverage_baseline.json:26 — used here
- `agent-harness-reference` — scripts/validation/rule_activation_coverage_baseline.json:27 — used here

## Structure
- Header comment explaining ratchet policy and constraints — scripts/validation/rule_activation_coverage_baseline.json:2
- List of uncovered rules — scripts/validation/rule_activation_coverage_baseline.json:3
- List of uncovered skills — scripts/validation/rule_activation_coverage_baseline.json:24

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/rule_activation_coverage_baseline.json`, language: JSON, lines: 118
- documented invocation: none (static configuration baseline)
- executed: yes
- actual command run: `python3 -m json.tool scripts/validation/rule_activation_coverage_baseline.json` and `python3 scripts/validation/check_rule_activation_coverage.py`
- abridged stdout:
```
OK: 19 uncovered rule(s) and 91 uncovered skill(s), all within the baseline.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (data file)
  - Actual: N/A (static JSON configuration)
- for validators/gates:
  - Can exit non-zero: N/A (data configuration consumed by `scripts/validation/check_rule_activation_coverage.py`)
  - Does it fail on the source repo's default branch: no, valid JSON; consumed by `check_rule_activation_coverage.py` which exits 0.
- does the output match what the documentation claims: yes, accurately enumerates the 19 uncovered rules and 91 uncovered skills.

## Defects — required
none

## Observations
- Classifies type as `script` per manifest partition table for `scripts/validation/` files.
- Records 19 uncovered rules and 91 uncovered skills, serving as an explicit ratchet floor to track test coverage progress.

## Context cost
3,207 bytes, 118 lines, ~800 tokens.
