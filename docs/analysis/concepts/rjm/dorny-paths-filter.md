---
package: rjm
name: dorny/paths-filter
slug: dorny-paths-filter
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dorny/paths-filter

## Definition — verbatim
(used, not defined)

> "1. **Path filtering** (dorny/paths-filter): Reduces unnecessary runs by 60-80%" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md | 188 | used here | Cited as path filtering action reducing unnecessary workflow executions by 60-80%. |
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 99 | used here | Used in CI to gate matrix jobs behind changed-path allowlists to prevent unnecessary full runs. |
| scripts/validation/run_workflow_local_test.py | 684 | used here | Identified in local runner test script as an action that fails under act due to missing .git directory mounts. |

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
defects: cross-file-contradiction, doc-drift

## Design notes
A third-party GitHub Action reference (`dorny/paths-filter`) used in CI workflows to inspect git deltas and conditionally trigger jobs, functioning as an external tool dependency rather than an agent lifecycle concept.
