---
package: rjm
path: scripts/validation/rule_activation_coverage_baseline.json
type: script
bytes: 3207
unit: inv-rjm-302
in_scope_via: scripts/validation/check_rule_activation_coverage.py
aliases: []
memo_inputs:
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/rule_activation_coverage_baseline.json

## Purpose — required, verbatim
> "Ratchet of rules and skills that lack an activation scenario. Each id here is allowed to stay uncovered; the gate fails when a rule or skill NOT listed here becomes uncovered. Shrink these lists by adding scenarios; never widen them to route around the gate. This is necessary-not-sufficient: a scenario proves a rule CAN be measured, not that routing to it works." — scripts/validation/rule_activation_coverage_baseline.json:2

## Design intent — required
Defines a non-regression ratchet baseline recording all rules and skills in the repository that currently lack automated eval activation scenarios. In rjm's validation architecture, activation coverage ensures that agent rules in `.claude/rules/` and skills in `.claude/skills/` have positive test scenarios in `tests/evals/rule-scenarios/` and `tests/evals/skill-scenarios/`. Rather than blocking all forward development until 100% test scenario coverage is achieved, this baseline establishes an explicit grandfathered ceiling (19 uncovered rules and 91 uncovered skills). The companion validator `scripts/validation/check_rule_activation_coverage.py` fails the CI gate with exit code 1 if any rule or skill not present in this baseline becomes uncovered. The baseline functions as a one-way ratchet: developers may shrink the lists as test scenarios are authored, but widening the lists to bypass coverage requirements is forbidden.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_rule_activation_coverage.py — scripts/validation/check_rule_activation_coverage.py:82

## Concepts named — required, verbatim
- `_comment` — scripts/validation/rule_activation_coverage_baseline.json:2 — defined here
- `uncovered_rules` — scripts/validation/rule_activation_coverage_baseline.json:3 — defined here
- `uncovered_skills` — scripts/validation/rule_activation_coverage_baseline.json:24 — defined here

## Structure
- Ratchet purpose and discipline documentation comment — scripts/validation/rule_activation_coverage_baseline.json:2
- Grandfathered uncovered rules list — scripts/validation/rule_activation_coverage_baseline.json:3-23
- Grandfathered uncovered skills list — scripts/validation/rule_activation_coverage_baseline.json:24-116

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/rule_activation_coverage_baseline.json`, language: JSON, lines: 118
- documented invocation:
  - "Ratchet of rules and skills that lack an activation scenario. Each id here is allowed to stay uncovered; the gate fails when a rule or skill NOT listed here becomes uncovered. Shrink these lists by adding scenarios; never widen them to route around the gate. This is necessary-not-sufficient: a scenario proves a rule CAN be measured, not that routing to it works." — scripts/validation/rule_activation_coverage_baseline.json:2
- executed: yes
- actual command run: `python3 -m json.tool scripts/validation/rule_activation_coverage_baseline.json` (and `python3 scripts/validation/check_rule_activation_coverage.py`)
- abridged stdout:
```
OK: 19 uncovered rule(s) and 91 uncovered skill(s), all within the baseline.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (static JSON configuration)
  - Actual: N/A (static data file; validator returns 0 when all uncovered rules and skills match baseline)
- for validators/gates:
  - Can it exit non-zero: N/A (data configuration consumed by validator `scripts/validation/check_rule_activation_coverage.py`, which exits 1 on ratchet regression and 2 on configuration error)
  - Does it fail on the source repo's own default branch: no, valid JSON matching repository state (19 uncovered rules, 91 uncovered skills)
- does output match what the documentation claims: yes, JSON parses cleanly and validator confirms all uncovered rules and skills remain within baseline limits.

## Defects — required
none

## Observations
- Classified as `script` per manifest partition table for `scripts/validation/` files.
- Protects 19 rules (from `builder-ethos` to `voice`) and 91 skills (from `adr-generator` to `world-model-diagnostic`) under a strict ratchet contract.
- The comment emphasizes that having a scenario is a necessary-not-sufficient condition: it proves a rule can be measured, but does not guarantee routing correctness.

## Context cost
3207 bytes, 118 lines, ~800 tokens.
