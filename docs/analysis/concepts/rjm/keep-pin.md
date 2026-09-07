---
package: rjm
name: KEEP_PIN
slug: keep-pin
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KEEP_PIN

## Definition — verbatim
> "KEEP_PIN -> a specific candidate measurably beats the default; the skill" — scripts/eval/_model_sweep_core.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 364 | used here | Cited as the governance manifest decision authorizing versioned model pins on agent templates. |
| scripts/eval/_model_sweep_core.py | 21 | defined here | Defined in docstring as the evaluation verdict where a candidate model statistically beats the default. |
| scripts/eval/README.md | 410 | defined here | Documented as the sweep verdict requiring bootstrap confidence intervals to exclude zero. |
| scripts/validation/check_model_pins.py | 11 | used here | Enforced as the required manifest decision justifying any versioned model pin on an agent. |

## Consumes
Model sweep evaluation runs, paired bootstrap confidence intervals, and benchmark fixture sets.

## Produces
Formal sweep decision recorded in `.agents/governance/model-pin-evidence.json` authorizing an agent model pin.

## When applied
Applied during model sweep evaluation when comparing candidate models against the harness default to determine whether a pin is justified.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path, script-bug (SKILL-STANDARDS-RECONCILED.md and scripts/eval/README.md defects)

## Design notes
A quality gate and evaluation verdict that authorizes pinning an agent to a specific non-default model version only when empirical sweep data proves a statistically significant performance lead over the default model.
