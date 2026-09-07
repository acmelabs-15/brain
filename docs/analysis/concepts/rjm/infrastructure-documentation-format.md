---
package: rjm
name: Infrastructure Documentation Format
slug: infrastructure-documentation-format
kind: template
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Infrastructure Documentation Format

## Definition — verbatim
> "Save to: `.agents/devops/`" — .claude/agents/devops.md:465

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 463 | defined here | Specification format for documenting CI/CD pipelines, environments, runners, triggers, jobs, and secret dependencies under `.agents/devops/`. |
| templates/agents/devops.shared.md | 222 | defined here | Shared specification format for documenting CI/CD pipelines and infrastructure components. |

## Consumes
CI/CD configuration files (GitHub workflows, build scripts), deployment environment details.

## Produces
Durable markdown documentation of pipelines, triggers, jobs, runners, and required secrets.

## When applied
Applied when designing, updating, or auditing CI/CD pipelines and DevOps infrastructure.

## Sub-concepts
none

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
Infrastructure Documentation Format establishes a consistent schema for capturing operational knowledge regarding CI/CD pipelines and deployment infrastructure. Storing these under `.agents/devops/` ensures agents and human maintainers can inspect pipeline topologies, triggers, and secret requirements without deciphering raw workflow YAML.
