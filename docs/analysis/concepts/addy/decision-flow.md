---
package: addy
name: Decision flow
slug: decision-flow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Decision flow

## Definition — verbatim
> "When considering a new orchestrated workflow, walk this flow:" — references/orchestration-patterns.md:345

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 343 | defines | Provides a structured branching logic tree to select between direct invocation, slash commands, sequential execution, and parallel fan-out |

## Consumes
Workflow requirements, task dependencies, repeatability criteria

## Produces
Selection of the minimal compliant orchestration pattern

## When applied
When designing new multi-agent capabilities, commands, or automated workflows

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
A structured decision tree for choosing the simplest valid orchestration architecture for a task. It biases strongly toward zero or minimal orchestration (direct invocation or user-driven commands), reserving parallel fan-out only for independent, repeating sub-tasks.
