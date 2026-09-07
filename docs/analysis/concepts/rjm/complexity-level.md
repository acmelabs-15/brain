---
package: rjm
name: Complexity Level
slug: complexity-level
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity Level

## Definition — verbatim
> "2. **Complexity Level**: How many steps/domains are involved?" — docs/task-classification-guide.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 12 | defined here | Defined as the second classification dimension evaluating execution scope across Simple, Multi-Step, and Multi-Domain tiers. |

## Consumes
File scope, cross-cutting dependencies, multi-stage planning requirements, and domain boundaries.

## Produces
Orchestration strategy determining whether work executes via a direct standalone agent, sequential coordination, or multi-domain orchestrator tracks.

## When applied
During task classification to evaluate coordination complexity and determine orchestrator requirements.

## Sub-concepts
none

## Part of
classification-dimensions

## Implementation status
clean

## Design notes
The operational scope dimension in rjm's routing guide that balances coordination efficiency against multi-agent rigor, allowing simple edits to bypass orchestration while ensuring cross-domain changes receive coordinated multi-agent oversight.
