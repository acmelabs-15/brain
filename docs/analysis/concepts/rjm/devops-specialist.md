---
package: rjm
name: DevOps Specialist
slug: devops-specialist
kind: role
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DevOps Specialist

## Definition — verbatim
> "**DevOps Specialist** for CI/CD pipelines, infrastructure automation, and deployment workflows. Focus on reliability, security, and developer experience." — .claude/agents/devops.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 13 | defined here | Core identity definition of the devops agent persona. |
| templates/agents/devops.shared.md | 19 | defined here | Core identity definition of the devops agent in the shared template. |

## Consumes
CI/CD workflow requirements, build specifications, deployment configs, and environment variables.

## Produces
Automated build pipelines, GitHub Actions workflows, local CI simulation scripts, and infrastructure documentation.

## When applied
When automating build/test/release pipelines, managing deployment infrastructure, or performing DevOps impact analysis during planning.

## Sub-concepts
pipeline-standards, pipeline-metrics, local-ci-simulation

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path

## Design notes
The core persona title and operational role for infrastructure and pipeline engineering in rjm. It unites CI/CD pipeline authoring, deployment automation, and build reliability under rigorous standards (such as 12-Factor principles and quantified build-time targets).
