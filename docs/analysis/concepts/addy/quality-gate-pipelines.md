---
package: addy
name: quality-gate pipelines
slug: quality-gate-pipelines
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# quality-gate pipelines

## Definition — verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 5 | used here | Summarizes core capabilities of the ci-cd-and-automation skill including quality-gate pipelines |
| external/documentation-and-adrs.md | 12 | used here | Cites quality-gate pipelines in the related Ship-phase skills grid for ci-cd-and-automation |
| external/git-workflow-and-versioning.md | 12 | used here | Lists quality-gate pipelines under the related Ship-phase skills card for ci-cd-and-automation |
| external/observability-and-instrumentation.md | 12 | used here | References quality-gate pipelines in the related Ship skills summary |
| external/shipping-and-launch.md | 12 | used here | Mentions quality-gate pipelines in the Ship-phase catalog card for ci-cd-and-automation |

## Consumes
Automated test suites, static analysis linters, security audit scanners, and build configurations.

## Produces
Automated gate validation checks and pass/fail enforcement in CI/CD pipelines before merge or deployment.

## When applied
Applied when setting up or modifying build, test, and deployment automation pipelines in the Ship phase.

## Sub-concepts
`gates`

## Part of
`ci-cd-and-automation`

## Implementation status
defects: doc-drift, orphan

## Design notes
In Addy's lifecycle model, quality-gate pipelines codify automated verification into continuous integration workflows so that tests, type checks, lint rules, and security audits run automatically on every proposed change, ensuring speed and safety compound without manual friction.
