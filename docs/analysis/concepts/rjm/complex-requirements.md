---
package: rjm
name: Complex Requirements
slug: complex-requirements
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complex Requirements

## Definition — verbatim
> "Requirements combining multiple conditions." — .agents/governance/ears-format.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 147 | defined here | Defined as Pattern 6 of the EARS grammar combining triggers, state conditions, and exceptions. |

## Consumes
Multiple interrelated conditions, compound triggers, and exceptional exclusion cases.

## Produces
Syntactic requirements formatted as `WHEN [trigger] AND [additional condition] THE SYSTEM SHALL [action] UNLESS [exception] SO THAT [rationale]`.

## When applied
Applied when specifying sophisticated system workflows where action depends on multiple triggers, state gates, and explicit bypass exceptions.

## Sub-concepts
- when
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
Complex requirements provide a structured syntax for handling multi-variable conditions and exceptions in rjm. By combining WHEN, AND, and UNLESS clauses, they prevent convoluted nested logic while preserving transparent traceability from trigger to action and rationale. Without complex requirements, multi-condition workflows devolve into ambiguous prose.
