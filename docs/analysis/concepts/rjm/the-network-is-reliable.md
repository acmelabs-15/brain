---
package: rjm
name: The network is reliable
slug: the-network-is-reliable
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/distributed-systems-fallacies.md, sha256: fe282f7253e66135dea19f5cb22b7bd149bc0c1225e8239459cb9da9c65509b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The network is reliable

## Definition — verbatim
> "| 1 | The network is reliable | Networks fail unpredictably | Cannot distinguish \"request lost\" from \"response lost\"; failure is non-deterministic |" — .claude/skills/observability/references/distributed-systems-fallacies.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/references/distributed-systems-fallacies.md | 23 | defined here | Primary definition of `The network is reliable` within distributed-systems-fallacies.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An operational technique or artifact (The network is reliable) utilized within the rjm ecosystem to ensure consistency and systematic execution.
