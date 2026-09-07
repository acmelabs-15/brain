---
package: rjm
name: Rollback Strategy
slug: rollback-strategy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rollback Strategy

## Definition — verbatim
(used, not defined)

> "Rollback Strategy" — .agents/architecture/ADR-032-ears-requirements-syntax.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 128 | defined here | Section heading specifying exit criteria and reversion actions if EARS adoption fails. |
| .agents/devops/arm-runner-migration-analysis.md | 200 | used here | Section heading providing immediate and gradual rollback procedures for ARM runner migration. |

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
defects: missing-path

## Design notes
A standard document section heading in architecture decision records and migration plans detailing contingency rollback procedures rather than a software development lifecycle concept.
