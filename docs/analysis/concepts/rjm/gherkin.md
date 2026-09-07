---
package: rjm
name: Gherkin
slug: gherkin
kind: reference
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

# Gherkin

## Definition — verbatim
(used, not defined)

> "| **Gherkin (Given-When-Then)** | Familiar to BDD practitioners, executable specs | Test-focused, not requirements-focused; verbose | Conflates requirements with test scenarios; doesn't distinguish ubiquitous vs triggered |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:73

## Also called — verbatim
> "Given-When-Then" — .agents/architecture/ADR-032-ears-requirements-syntax.md:73

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 73 | used here | Evaluated as an alternative to EARS in ADR-032 and rejected for conflating requirements with test scenarios. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
A behavior-driven specification syntax evaluated and rejected in ADR-032 in favor of EARS. The decision noted that while Given-When-Then excels for executable test scenarios, it is overly verbose and ill-suited for distinguishing ubiquitous system invariants from triggered requirements.
