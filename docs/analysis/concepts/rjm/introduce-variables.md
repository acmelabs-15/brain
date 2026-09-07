---
package: rjm
name: Introduce variables
slug: introduce-variables
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

# Introduce variables

## Definition — verbatim
> "3. **Introduce variables**: Inject failures (network, service, infrastructure)" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 15 | defined here | Step 3 of core chaos engineering principles injecting network, service, or infrastructure failures. |

## Consumes
Validated experiment hypothesis, steady-state baseline, and blast radius containment boundaries.

## Produces
Controlled injection of faults and perturbations into target infrastructure or software components.

## When applied
Applied during experiment execution following baseline verification.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Introducing variables is the active fault-injection step of chaos engineering in RJM. By simulating real-world failures (such as network partitions, service crashes, or resource saturation) under strictly bounded conditions, it tests whether resilience mechanisms function as expected under stress.
