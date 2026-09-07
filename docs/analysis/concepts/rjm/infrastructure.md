---
package: rjm
name: Infrastructure
slug: infrastructure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Infrastructure

## Definition — verbatim
> "### Infrastructure" — docs/task-classification-guide.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 41 | defined here | Task type category for CI/CD, build scripts, Git hooks, and deployment configurations, routing through analyst, devops, security, critic, and qa agents. |

## Consumes
CI/CD workflows, build scripts, Git hooks, container manifests, and deployment automation files.

## Produces
Validated automation scripts, hardened workflow files, and multi-agent reviewed infrastructure changes.

## When applied
When tasks modify CI/CD pipelines, build configurations, Git hooks, Docker definitions, or deployment pipelines.

## Sub-concepts
none

## Part of
task-type

## Implementation status
clean

## Design notes
An operational task category in rjm establishing mandatory involvement of DevOps and Security agents for all tooling, build, and CI/CD modifications, protecting repository delivery mechanisms from regressions or vulnerabilities.
