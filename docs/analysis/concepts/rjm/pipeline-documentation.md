---
package: rjm
name: Pipeline Documentation
slug: pipeline-documentation
kind: template
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

# Pipeline Documentation

## Definition — verbatim
> "[What this pipeline does]" — templates/agents/devops.shared.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/devops.shared.md | 226 | defines | Standard documentation template for recording pipeline purpose, triggers, jobs, runners, secrets, and workarounds in `.agents/devops/`. |

## Consumes
Pipeline workflow definitions, runner parameters, required secrets, and known workarounds.

## Produces
Pipeline documentation artifacts saved to `.agents/devops/`.

## When applied
When creating or updating CI/CD workflows and infrastructure automation.

## Sub-concepts
none

## Part of
devops-agent

## Implementation status
clean

## Design notes
Standardized markdown format stored in `.agents/devops/` documenting purpose, triggers, jobs, runners, steps, outputs, required secrets, and known issues with workarounds for automated pipelines.
