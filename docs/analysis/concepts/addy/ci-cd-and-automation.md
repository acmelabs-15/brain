---
package: addy
name: ci-cd-and-automation
slug: ci-cd-and-automation
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/ci-cd-and-automation.json, sha256: 96676c94258e2ce3e6df37c7488c2ba6b47e51563e6e4a7d903c2296ae766bf9}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ci-cd-and-automation

## Definition — verbatim
> "Shift Left, Faster is Safer, feature flags, quality gate pipelines, failure feedback loops" — README.md:278

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/ci-cd-and-automation.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/deprecation-and-migration.md | 12 | used here | Navigation link to related Ship phase skill in web catalog. |
| external/documentation-and-adrs.md | 12 | used here | Navigation link to related Ship phase skill in web catalog. |
| external/git-workflow-and-versioning.md | 12 | used here | Navigation link to related Ship phase skill in web catalog. |
| external/observability-and-instrumentation.md | 12 | used here | Navigation link to related Ship phase skill in web catalog. |
| external/shipping-and-launch.md | 12 | used here | Navigation link to related Ship phase skill in web catalog. |
| README.md | 278 | used here | Catalogs skill scope, core principles, and triggering conditions under the Ship phase. |
| skills/constraint-driven-development/SKILL.md | 33 | used here | Contrasts constraint setting with building a CI pipeline, delegating pipeline creation to ci-cd-and-automation. |

## Consumes
Build and test configurations, deployment scripts, linting tools, and repository pull request workflows.

## Produces
Automated continuous integration pipelines, quality gate stages, and feedback loops for deployment.

## When applied
When setting up or modifying build, test, and deployment pipelines.

## Sub-concepts
none

## Part of
addy:Ship

## Implementation status
clean

## Design notes
ci-cd-and-automation implements automated quality pipelines and continuous delivery workflows. Grounded in the principles of Shift Left and Faster is Safer, it structures automated checks into progressive gates, ensuring that changes are verified early and feedback is returned rapidly before code reaches production.
