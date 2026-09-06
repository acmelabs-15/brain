---
package: addy
name: "staged rollouts"
slug: staged-rollouts
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# staged rollouts

## Definition — verbatim
> "### Staged Rollouts" — skills/ci-cd-and-automation/SKILL.md:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/shipping-and-launch.md | 1 | defined here | Listed in page metadata as a core progressive delivery technique. |
| skills/ci-cd-and-automation/SKILL.md | 229 | defines | Provides the deployment pipeline diagram detailing staging verification, production promotion, and error monitoring windows. |

## Consumes
Automated test passing builds, staging environment verification, and canary routing rules.

## Produces
Incremental traffic shift to new releases with automated error observation windows.

## When applied
Applied during production releases in the Ship phase to limit the blast radius of unexpected regressions.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
A deployment strategy dividing release rollout into discrete stages (e.g. staging -> canary -> 25% -> 100%) separated by observation windows, allowing teams to catch issues before all users are affected.
