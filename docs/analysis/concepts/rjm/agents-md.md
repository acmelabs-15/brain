---
package: rjm
name: AGENTS.md
slug: agents-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/ruff_ratchet.py, sha256: 4d1e47b5ae78226bf73fb3d992c619a1884527480dd1fe9d141583a3b92e5bda}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval_run_rollup.py, sha256: 753a8fee7f7e9c6e8be84160aadeb914cc92a954b39e96c482c0214f422821ae}
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AGENTS.md

## Definition — verbatim
(used, not defined)

> "Operating context: current projects, conventions, gates, tool patterns" — docs/customization.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md | 78 | used here | Cited in post-incident retrospective regarding atomic commit conventions. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 69 | used here | Listed in harness instruction hierarchy as universal fallback configuration. |
| .claude/agents/qa.md | 13 | used here | Autonomy guardrail directive instructing QA agent to apply AGENTS.md autonomy rules. |
| .claude/skills/CLAUDE.md | 4 | used here | Primary reference declaration that root CLAUDE.md and AGENTS.md take precedence. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 513 | used here | Clarifies measurement exclusion of hierarchical CLAUDE.md and AGENTS.md files in passive compliance metrics. |
| .claude/skills/context-optimizer/SKILL.md | 15 | used here | Explains passive context placement benefits of AGENTS.md versus prompt-based skills. |
| .claude/skills/review/scripts/validate_review_marker.py | 34 | used here | Exit code documentation referencing AGENTS.md contract. |
| docs/customization.md | 14 | used here | Customization matrix classifying AGENTS.md as operating context loaded when assuming a role. |
| scripts/ci/check_ai_review_infra_gate.py | 27 | used here | Exit code specification header referencing AGENTS.md conventions. |
| scripts/ci/check_bot_identity.py | 68 | used here | Function docstring citing AGENTS.md exit-code contract for strict authentication failure exits. |
| scripts/ci/ruff_count_ratchet.py | 21 | used here | Exit code contract documentation referencing AGENTS.md standard codes. |
| scripts/ci/ruff_ratchet.py | 19 | used here | Exit code documentation referencing AGENTS.md contract. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 11 | used here | Exit code documentation referencing AGENTS.md contract. |
| scripts/ci/taste_count_ratchet.py | 31 | used here | Exit code documentation referencing AGENTS.md contract. |
| scripts/ci/type_ignore_count_ratchet.py | 23 | used here | Exit code documentation referencing AGENTS.md contract. |
| scripts/eval/_run_persistence.py | 24 | used here | Persistence runner error mapping citing AGENTS.md exit-code contract. |
| scripts/eval/eval_run_rollup.py | 69 | used here | Constant definition comment declaring exit codes follow AGENTS.md contract. |
| scripts/eval/eval_runtime_parity.py | 9 | used here | CLI docstring referencing AGENTS.md exit code taxonomy. |
| scripts/eval/eval-agent-vs-baseline.py | 15 | used here | CLI docstring citing AGENTS.md exit code mapping. |
| scripts/eval/eval-model-panel.py | 16 | used here | Script header documenting AGENTS.md exit codes. |
| scripts/eval/eval-model-sweep.py | 23 | used here | Script docstring describing exit code preservation and mapping per AGENTS.md. |
| scripts/eval/eval-oneshot-vs-shipped.py | 14 | used here | Script header documenting AGENTS.md exit codes. |
| scripts/skill_description_budget.py | 20 | used here | Script docstring citing AGENTS.md exit code standard. |
| scripts/validation/check_model_pins.py | 23 | used here | Script docstring citing AGENTS.md exit code mapping. |
| scripts/validation/run_workflow_local_test.py | 49 | used here | Script docstring referencing exit-code contract in AGENTS.md. |
| scripts/validation/validate_review_marker.py | 34 | used here | Script docstring documenting AGENTS.md exit codes. |
| templates/agents/qa.shared.md | 16 | used here | Autonomy guardrail directive instructing QA agent to apply AGENTS.md autonomy rules. |

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
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
The repository root instructions and contract configuration filename (`AGENTS.md`) rather than an operational lifecycle concept, classified as `name-only` per D-023.
