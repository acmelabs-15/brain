---
package: rjm
name: Dead Code
slug: dead-code
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/planner/resources/default-conventions.md, sha256: 5dc8299234224e9fa75eb71f645a6272f1992c3b1c87eebf5cc83fa5089ffe72}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dead Code

## Definition — verbatim
> "**Dead Code**: No callers, impossible branches, unread variables, unused imports" — .claude/skills/planner/resources/default-conventions.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/default-conventions.md | 44 | defined here | Primary definition of `Dead Code` within default-conventions.md. |
| .claude/skills/software-engineering-library/references/refactoring.md | 65 | defined here | Primary definition of `Dead Code` within refactoring.md. |

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
defects: internal-contradiction

## Design notes
An operational technique or artifact (Dead Code) utilized within the rjm ecosystem to ensure consistency and systematic execution.
