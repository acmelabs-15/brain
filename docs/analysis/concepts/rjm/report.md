---
package: rjm
name: Report
slug: report
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Report

## Definition — verbatim
> "Aggregated report per (run_id). DESIGN-004 §5.6." — scripts/eval/_eval_agent_types.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 278 | defined here | Specified under schemaVersion: 1 capturing aggregated run metrics, recall deltas, and bootstrap CIs. |
| scripts/eval/_eval_agent_types.py | 161 | defined here | Defined as the canonical dataclass aggregating run statistics and recommendations per run ID. |
| scripts/eval/README.md | 497 | defined here | Catalogued in prompt optimization loops as the final step scoring the held-out test group. |
| scripts/external_signals/acceptance_criteria.py | 51 | defined here | Defined as a dataclass recording deterministic acceptance criteria validation outcomes. |
| scripts/validation/check_adr_lifecycle.py | 1006 | defined here | Implemented as the `_report` function outputting per-check ratchet tables and regression status. |
| scripts/validation/check_skill_md_portability.py | 1235 | defined here | Implemented as the `_report` function displaying skill frontmatter and hook portability findings. |
| scripts/validation/check_zero_collection_tests.py | 146 | defined here | Defined as a frozen dataclass capturing examined, undeclared, and stale test collection guard status. |
| scripts/validation/run_workflow_local_test.py | 159 | defined here | Defined as the aggregate workflow test execution result dataclass. |
| templates/agents/dependency-auditor.shared.md | 101 | defined here | Defined as Step 4 emitting structured markdown dependency audit findings. |

## Consumes
Individual run records, test outcomes, validator findings, or audit scan data.

## Produces
Structured JSON payloads and human-readable Markdown documents summarizing evaluation or validation results.

## When applied
Emitted upon the completion of evaluation runs, validation gates, and audit workflows.

## Sub-concepts
none

## Part of
eval-agent-vs-baseline, validation

## Implementation status
clean

## Design notes
`Report` is the standardized summary artifact across rjm's test and validation subsystems. Whether representing aggregated evaluation harness metrics, validator findings, or dependency audit results, it provides structured, inspectable evidence of system quality, pass rates, and regression status.
