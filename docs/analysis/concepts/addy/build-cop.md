---
package: addy
name: Build Cop
slug: build-cop
kind: role
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

# Build Cop

## Definition — verbatim
> "Designate someone responsible for keeping CI green. When the build breaks, the Build Cop's job is to fix or revert — not the person whose change caused the break." — skills/ci-cd-and-automation/SKILL.md:300

## Also called — verbatim
`Build Cop Role` — skills/ci-cd-and-automation/SKILL.md:298

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 298 | defined here | Role assignment responsible for keeping CI green and promptly reverting broken builds |

## Consumes
Broken CI build alerts, commit history, and deployment status.

## Produces
Immediate resolution decisions: hotfix patch or git revert to restore green CI status.

## When applied
Continuously during active development sprints; triggered whenever main branch CI builds fail.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, the Build Cop is a designated role responsible for maintaining green CI pipelines. By empowering the Build Cop to immediately fix or revert broken commits rather than waiting for the original author, it prevents broken builds from compounding and blocking the entire engineering team.
