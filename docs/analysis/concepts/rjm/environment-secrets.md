---
package: rjm
name: Environment & Secrets
slug: environment-secrets
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Environment & Secrets

## Definition — verbatim
> "### 6. Environment & Secrets (Build/Pipeline Gaps Only)" — .claude/skills/review/references/devops.md:143

## Also called — verbatim
> "### 6. Environment & Secrets (Build/Pipeline Gaps Only)" — .claude/skills/review/references/devops.md:143

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 143 | defined here | Focus area checklist scrutinizing build- and pipeline-specific secret exposure and consistent environment variable configurations across deployment tiers. |

## Consumes
Workflow files, environment variable declarations, multi-stage deployment configurations (dev/staging/prod), and build matrix setups.

## Produces
DevOps review findings uncovering subtle pipeline credential exposures, such as environment dumps uploaded as artifacts or matrix variables leaking secrets into job names.

## When applied
Applied during DevOps review of workflow and infrastructure changes involving environment configurations, secrets handling, or deployment targets.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A specialized review checklist within rjm's DevOps review axis addressing unique pipeline and build secret vulnerabilities that fall outside the purview of the general security axis, such as environment variable dumps uploaded in artifacts or matrix expansions that leak credentials into runner logs.
