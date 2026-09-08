---
package: rjm
name: DevOps Agent
slug: devops-agent
kind: role
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DevOps Agent

## Definition — verbatim
> "**DevOps Specialist** for CI/CD pipelines, infrastructure automation, and deployment workflows. Focus on reliability, security, and developer experience." — templates/agents/devops.shared.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/devops.shared.md | 15 | defines | Specialised agent template role for CI/CD pipelines, build automation, and infrastructure workflows. |

## Consumes
CI/CD workflow, pipeline, or infrastructure task description; impact analysis request from milestone-planner; build and test configurations; historical patterns and memories from Serena.

## Produces
Impact analysis deliverable at `.agents/planning/impact-analysis-devops-[feature].md`, infrastructure documentation in `.agents/devops/`, GitHub Actions workflow definitions, learned pattern notes.

## When applied
Invoked for pipeline configuration, infrastructure automation, deployment workflows, or when milestone-planner requests infrastructure impact analysis during planning.

## Sub-concepts
analyze-devops-impact, build-configuration, test-configuration, pipeline-documentation

## Part of
none

## Implementation status
clean

## Design notes
The DevOps Agent is responsible for end-to-end infrastructure automation, build systems, deployment workflows, and CI/CD pipelines. Operating in both planning impact analysis mode and pipeline engineering mode, it ensures that build systems are pinned to commit SHAs, dependencies cached, and infrastructure requirements systematically planned before implementation.
