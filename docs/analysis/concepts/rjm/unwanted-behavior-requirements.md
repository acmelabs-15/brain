---
package: rjm
name: Unwanted Behavior Requirements
slug: unwanted-behavior-requirements
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

# Unwanted Behavior Requirements

## Definition — verbatim
> "Requirements that prevent specific behaviors." — .agents/governance/ears-format.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 127 | defined here | Defined as Pattern 5 of the EARS grammar specifying defensive rules and negative constraints. |

## Consumes
Defect logs, anti-pattern definitions, error states, and safety hazards.

## Produces
Syntactic requirements formatted as `IF [unwanted condition] THEN THE SYSTEM SHALL [preventive action] SO THAT [rationale]`.

## When applied
Applied when defining error handling, guardrails, boundary enforcement, and anti-pattern mitigations.

## Sub-concepts
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
Unwanted behavior requirements define explicit defensive constraints and safety guardrails in rjm. By utilizing the IF ... THEN THE SYSTEM SHALL structure, they mandate concrete preventative actions when undesirable or hazardous conditions emerge (such as blocking raw CLI commands when a skill script exists). Without unwanted behavior requirements, negative constraints and error handling paths are often omitted from specifications.
