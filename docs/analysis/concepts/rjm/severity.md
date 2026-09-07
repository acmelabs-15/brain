---
package: rjm
name: Severity
slug: severity
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Severity

## Definition — verbatim
> "Severity = Literal[\"critical\", \"warn\"]" — .claude/skills/orphan-ref-validator/scripts/envelope.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 27 | defined here | Primary definition of `Severity` within envelope.py. |
| .codeql/scripts/test_codeql_config.py | 101 | used here | Referenced and applied in test_codeql_config.py during verification and operational workflows. |
| scripts/validation/pr_description.py | 27 | defined here | Primary definition of `Severity` within pr_description.py. |

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
defects: doc-drift

## Design notes
An operational technique or artifact (Severity) utilized within the rjm ecosystem to ensure consistency and systematic execution.
