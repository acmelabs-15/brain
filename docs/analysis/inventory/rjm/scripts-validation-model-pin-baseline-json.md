---
package: rjm
path: scripts/validation/model_pin_baseline.json
type: script
bytes: 2463
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/model_pin_baseline.json, sha256: 14db300266121c43d1e8a87f9183072d1fca03d6f6d343af53098bca4df79e7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/model_pin_baseline.json

## Purpose — required, verbatim
> "Frozen ADR-080 model-pin baseline. Draining ratchet: this count must never grow and should shrink each release until empty." — scripts/validation/model_pin_baseline.json:3

## Design intent — required
Serves as the machine-readable baseline and draining ratchet for grandfathered model pins across agent configurations, command definitions, and skill files per ADR-080. By recording the frozen count and specific mapping of unit paths to model tiers (`opus`, `sonnet`, `haiku`), it allows `check_model_pins.py` to enforce that no new model pins are introduced while providing a burn-down tracker to eliminate explicit model pinning across releases.

## Phase — required
cross-phase

## Inputs — required
- Consumed by `scripts/validation/check_model_pins.py` at runtime (scripts/validation/check_model_pins.py:77)

## Outputs — required
- Frozen configuration map specifying grandfathered model assignments (`pins`) and maximum allowed baseline count (`frozen_count`) (scripts/validation/model_pin_baseline.json:4-51)

## Invokes — required
none

## Invoked by — required
- script check_model_pins.py — scripts/validation/check_model_pins.py:77

## Concepts named — required, verbatim
- `ADR-080` — scripts/validation/model_pin_baseline.json:3 — used here
- `Draining ratchet` — scripts/validation/model_pin_baseline.json:3 — defined here
- `frozen_count` — scripts/validation/model_pin_baseline.json:4 — defined here
- `pins` — scripts/validation/model_pin_baseline.json:5 — defined here

## Structure
- Top-level JSON object keys: `schema_version`, `description`, `frozen_count`, `pins` (scripts/validation/model_pin_baseline.json:1-5)
- Agent model pin definitions (scripts/validation/model_pin_baseline.json:6-35)
- Command model pin definitions (scripts/validation/model_pin_baseline.json:36-44)
- Skill model pin definitions (scripts/validation/model_pin_baseline.json:45-51)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/model_pin_baseline.json`
- **language:** JSON
- **lines:** 53
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 -m json.tool scripts/validation/model_pin_baseline.json > /dev/null`
- **actual exit code:** 0
- **abridged stdout:** none (valid JSON)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual code paths: none (JSON data artifact)
  - Result: validates as well-formed JSON.
- **for validators/gates:** static configuration artifact used by `check_model_pins.py` to enforce pin ceilings.
- **does the output match what the documentation claims:** yes, well-formed JSON conforming to schema version 1.

## Defects — required
none

## Observations
- Contains 45 pin entries (30 agents, 9 commands, 6 skills) against a `frozen_count` of 51. The difference reflects progress in the ADR-080 draining ratchet, which permits the pin set to shrink below the frozen ceiling.

## Context cost
2463 bytes, 53 lines, ~600 tokens.
