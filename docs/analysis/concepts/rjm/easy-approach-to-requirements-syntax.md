---
package: rjm
name: Easy Approach to Requirements Syntax
slug: easy-approach-to-requirements-syntax
kind: technique
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Easy Approach to Requirements Syntax

## Definition — verbatim
> "EARS (Easy Approach to Requirements Syntax) is a structured syntax for writing testable, unambiguous requirements." — .agents/governance/ears-format.md:15

## Also called — verbatim
> "Adopt the EARS (Easy Approach to Requirements Syntax) format as the standard for all formal requirements in the ai-agents project." — .agents/architecture/ADR-032-ears-requirements-syntax.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 43 | defined here | Expanded acronym naming the adopted formal requirements standard. |
| .agents/governance/ears-format.md | 15 | defined here | Formal definition of the requirements syntax used in the specification layer. |

## Consumes
Problem statements, user stories, and feature requirements.

## Produces
Standardized requirement statements across six structural patterns.

## When applied
> "Adopt the EARS (Easy Approach to Requirements Syntax) format as the standard for all formal requirements in the ai-agents project." — .agents/architecture/ADR-032-ears-requirements-syntax.md:43

## Sub-concepts
ears

## Part of
none

## Implementation status
clean

## Design notes
The full title for the EARS requirement syntax framework developed by Alistair Mavin et al. at Rolls-Royce and adopted in ADR-032. It provides a lightweight yet disciplined alternative to informal prose or heavy formal methods, ensuring requirements are testable, traceable, and unambiguous.
