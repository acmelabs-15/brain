---
package: addy
name: Large
slug: large
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Large

## Definition — verbatim
> "| **Large** | Multi-machine OK, external services allowed | Minutes | E2E tests, performance benchmarks, staging integration |" — skills/test-driven-development/SKILL.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 171 | defined here | Defines the Large test size category in the resource constraint model. |

## Consumes
Multi-system configurations, external network services, databases, and browser environments.

## Produces
High-confidence end-to-end and performance verification spanning multiple processes and machines.

## When applied
When testing critical end-to-end user workflows, staging environments, and performance benchmarks.

## Sub-concepts
none

## Part of
the-test-pyramid

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A test classification category in the resource constraint model permitting multiple machines and external network services, reserved strictly for critical user journeys and performance benchmarks due to higher execution duration.
