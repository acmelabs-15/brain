---
package: rjm
name: Analyze DevOps Impact
slug: analyze-devops-impact
kind: checklist
package_phase: rjm:plan
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

# Analyze DevOps Impact

## Definition — verbatim
> "- [ ] Assess build pipeline changes needed" — templates/agents/devops.shared.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/devops.shared.md | 60 | defines | Checklist used during the planning phase to identify infrastructure and CI/CD impacts before implementation. |

## Consumes
Impact analysis request from milestone-planner during planning phase.

## Produces
Impact analysis deliverable saved to `.agents/planning/impact-analysis-devops-[feature].md`.

## When applied
Executed when milestone-planner requests impact analysis during the planning phase.

## Sub-concepts
none

## Part of
devops-agent

## Implementation status
clean

## Design notes
A pre-implementation checklist that forces proactive evaluation of pipeline changes, deployment modifications, infrastructure prerequisites, CI/CD performance overhead, and secrets/configuration management requirements before coding begins.
