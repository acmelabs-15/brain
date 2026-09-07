---
package: rjm
name: schema_version
slug: schema-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/examples/runtime-parity-fixtures.json, sha256: f2c2c9f31bcf177e248fa48d78771b7326b570df6138f738fbceecb8fa602e2e}
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
  - {path: scripts/validation/adr_lifecycle_baseline.json, sha256: cd19b2354ac9855f1658fe2d56233b96ff6dc7f32fcdde0a0dd0e10376fc2f73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# schema_version

## Definition — verbatim
(used, not defined)

> "schema_version" — .claude/skills/work-operating-model/references/entry-contract.md:9

## Also called — verbatim
> "SCHEMA_VERSION =" — .claude/skills/work-operating-model/scripts/validate_operating_model.py:27

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/entry-contract.md | 9 | defined here | Required root key specifying contract schema version in operating model JSON documents. |
| .claude/skills/work-operating-model/scripts/validate_operating_model.py | 27 | defined here | Constant defining expected schema version for operating model validation. |
| scripts/eval/_eval_agent_types.py | 14 | defined here | Constant defining integer schema version for agent evaluation dataclass payloads. |
| scripts/eval/_model_sweep_core.py | 61 | defined here | Constant setting schema version for model sweep evaluation records. |
| scripts/eval/_runtime_parity.py | 15 | defined here | Constant defining schema version for runtime parity benchmark fixtures. |
| scripts/eval/eval-agent-vs-baseline.py | 37 | used here | Imported from _eval_agent_types to stamp baseline evaluation outputs. |
| scripts/eval/examples/runtime-parity-fixtures.json | 2 | defined here | Top-level property setting schema version for parity test fixture datasets. |
| scripts/metrics/kill_criteria.py | 82 | defined here | Final integer constant setting schema version for drift event serialization. |
| scripts/validation/adr_lifecycle_baseline.json | 2 | defined here | Top-level field setting schema version for ADR baseline threshold configurations. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`schema_version` is a common metadata property name and constant identifier specifying data serialization versions across JSON artifacts and validation scripts, classified as `kind: name-only` per D-023.
