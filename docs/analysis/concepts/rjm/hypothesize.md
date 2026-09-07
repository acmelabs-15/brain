---
package: rjm
name: "Hypothesize"
slug: hypothesize
kind: technique
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hypothesize

## Definition — verbatim
> "2. **Hypothesize**: System will maintain steady state during experiment" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 14 | defined here | Step 2 of core chaos engineering principles formulating that system will maintain steady state during experiment. |

## Consumes
Baseline steady-state metrics and operating thresholds.

## Produces
Testable resilience hypothesis predicting steady-state preservation under injected failure conditions.

## When applied
Applied during experiment design after establishing steady state and before injecting failures.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Formulating a concrete hypothesis before running an experiment ensures that chaos engineering operates as a disciplined scientific inquiry rather than unguided disruption. In RJM's reliability framework, the hypothesis explicitly asserts that the target system will maintain nominal steady-state behavior despite the introduction of injected faults.
