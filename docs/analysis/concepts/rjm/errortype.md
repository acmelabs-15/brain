---
package: rjm
name: ErrorType
slug: errortype
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ErrorType

## Definition — verbatim
> "ErrorType = Literal[" — .claude/skills/orphan-ref-validator/scripts/envelope.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 133 | defined here | Primary definition of `ErrorType` within envelope.py. |
| scripts/error_classification.py | 37 | defined here | Primary definition of `ErrorType` within error_classification.py. |

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
defects: exit-code-mismatch, orphan

## Design notes
An operational technique or artifact (ErrorType) utilized within the rjm ecosystem to ensure consistency and systematic execution.
