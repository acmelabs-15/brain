---
package: addy
name: shipping-and-launch
slug: shipping-and-launch
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# shipping-and-launch

## Definition — verbatim
> "Prepares production launches. Use when preparing to deploy to production." — skills/shipping-and-launch/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 2 | used here | Target skill under evaluation for pre-launch gating and release decisions. |
| external/shipping-and-launch.md | 1 | defined here | Web documentation describing pre-launch checklists, staged rollouts, and go/no-go verdicts. |
| README.md | 282 | used here | Cataloged under Ship phase for pre-launch checklists, feature flags, rollouts, and rollbacks. |
| references/definition-of-done.md | 3 | used here | Referenced in definition of done document structure and ship-readiness checklist. |
| references/observability-checklist.md | 91 | used here | Referenced in pre-launch gate section to align telemetry readiness with launch criteria. |
| skills/git-workflow-and-versioning/SKILL.md | 311 | used here | Cross-referenced for release deployment workflows following version tagging. |
| skills/observability-and-instrumentation/SKILL.md | 23 | used here | Differentiated from observability by governing launch checklists and rollback triggers. |

## Consumes
Tested release candidate code, verified build artifacts, rollback procedures, and telemetry.

## Produces
Pre-launch checklist verification, staged rollout configuration, rollback plans, and a go/no-go verdict.

## When applied
> "Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." — skills/shipping-and-launch/SKILL.md:3

## Sub-concepts
pre-launch-checklist, go-or-no-go-verdict, blockers, acknowledged-risks, go, no-go, test-gates

## Part of
none

## Implementation status
clean

## Design notes
In Addy's lifecycle, `shipping-and-launch` governs the final deployment to production, ensuring releases are reversible, observable, and staged. It enforces a strict gate requiring an actionable rollback plan and verified monitoring before deployment proceeds, synthesizing reviewer inputs into an authoritative go/no-go decision. Without this skill, deployments risk rushing untested changes to production under deadline pressure without safety nets.
