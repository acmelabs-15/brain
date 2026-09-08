---
package: rjm
name: Model Pin Governance (warn)
slug: model-pin-governance-warn
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Model Pin Governance (warn)

## Definition — verbatim
> "Model Pin Governance (warn)" — scripts/validation/pre_pr_sequence.py:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 348 | defined here | Pre-PR advisory gate wrapping check_model_pins.py to surface unpinned or mismatched model references. |

## Consumes
Model references in agent configurations, workflow files, and ADR-080 model governance rules.

## Produces
Advisory warnings for model pin mismatches and configuration error exits on invalid setups.

## When applied
Executed during the pre-PR validation sequence in warn mode.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Model Pin Governance (warn) is an advisory gate (Issue #3073) implementing ADR-080 model governance locally in warn mode. It alerts contributors to unpinned or mismatched AI model references without blocking local workflow, reserving hard enforcement for CI.
