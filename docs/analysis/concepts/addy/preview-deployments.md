---
package: addy
name: Preview Deployments
slug: preview-deployments
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Preview Deployments

## Definition — verbatim
> "Every PR gets a preview deployment for manual testing:" — skills/ci-cd-and-automation/SKILL.md:197

## Also called — verbatim
`Preview Deployments` — skills/ci-cd-and-automation/SKILL.md:195

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 195 | defined here | Deployment pattern triggering ephemeral preview environments for every pull request |

## Consumes
Pull request branches, hosting provider CLI/token (Vercel, Netlify), and build configuration.

## Produces
Ephemeral preview URL hosting isolated branch deployment for manual verification and testing.

## When applied
Automatically triggered on pull request open and synchronize events before merge.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, Preview Deployments ensure that every pull request generates an isolated, ephemeral web deployment. This allows developers, stakeholders, and automated tools to manually inspect and verify runtime behavior in a production-like cloud environment prior to merging into main.
