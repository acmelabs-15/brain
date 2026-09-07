---
package: rjm
name: Unwanted
slug: unwanted
kind: pattern
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unwanted

## Definition — verbatim
> "| **Unwanted** | IF [condition] THEN THE SYSTEM SHALL [prevent] | Negative requirements |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 53 | defined here | Defined in EARS patterns table as negative requirements following "IF [condition] THEN THE SYSTEM SHALL [prevent]". |

## Consumes
An unwanted behavior, security violation, or error condition.

## Produces
A negative requirement specifying preventive, containment, or error-handling actions.

## When applied
> "| **Unwanted** | IF [condition] THEN THE SYSTEM SHALL [prevent] | Negative requirements |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:53

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
An EARS requirement pattern for defining negative requirements and error prevention, mandating actions the system must take when encountering hazardous or invalid conditions.
