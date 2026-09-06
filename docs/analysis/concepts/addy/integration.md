---
package: addy
name: Integration
slug: integration
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Integration

## Definition — verbatim
> "Change works with the rest of the system, not just in isolation" — references/definition-of-done.md:38

## Also called — verbatim
`INTEGRATION` — skills/ci-cd-and-automation/SKILL.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/definition-of-done.md | 37 | defined here | Standing Definition of Done checklist section ensuring changes work with the rest of the system, migrations, flags, and backward compatibility |
| skills/ci-cd-and-automation/SKILL.md | 41 | defined here | Pipeline gate in the automated CI quality gate pipeline running API and database integration tests before merge |

## Consumes
Implemented code changes, database migrations, configuration updates, and service dependency interfaces

## Produces
Verification that a change integrates seamlessly with existing system components, schemas, and APIs without regressions

## When applied
Applied per-feature during Definition of Done verification and automatically during CI pipeline execution on every pull request

## Sub-concepts
none

## Part of
definition-of-done, quality-gate-pipeline

## Implementation status
clean

## Design notes
Integration in addy bridges isolated unit verification and full production deployment. As a standing checklist dimension in the Definition of Done and an automated stage in the CI Quality Gate Pipeline, it ensures that changes account for database migrations, configuration dependencies, feature flags, and backward compatibility across service boundaries rather than merely passing local tests in isolation.
