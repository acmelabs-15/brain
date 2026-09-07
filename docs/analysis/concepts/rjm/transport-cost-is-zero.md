---
package: rjm
name: Transport cost is zero
slug: transport-cost-is-zero
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

# Transport cost is zero

## Definition — verbatim
> "| 7 | Transport cost is zero | Bandwidth costs money; cloud shifts CapEx to OpEx but does not eliminate | Factor cost into architecture decisions |" — .claude/skills/observability/references/distributed-systems-fallacies.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/references/distributed-systems-fallacies.md | 29 | defined here | Primary definition of `Transport cost is zero` within distributed-systems-fallacies.md. |

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
An operational technique or artifact (Transport cost is zero) utilized within the rjm ecosystem to ensure consistency and systematic execution.
