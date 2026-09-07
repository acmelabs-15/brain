---
package: rjm
name: CI Environment Setup
slug: ci-environment-setup
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CI Environment Setup

## Definition — verbatim
> "### CI Environment Setup" — .claude/agents/devops.md:311

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 311 | defined here | Heading defining configuration steps and environment variable assignments for local CI simulation. |

## Consumes
Shell environment (PowerShell or Bash) and build toolchain.

## Produces
Simulated CI process environment (`CI=true`, `GITHUB_ACTIONS=true`, `GITHUB_REF_PROTECTED=false`).

## When applied
Prior to executing local CI simulation builds and tests.

## Sub-concepts
none

## Part of
local-ci-simulation

## Implementation status
defects: missing-path

## Design notes
The environment configuration step of local CI simulation in rjm. It defines explicit PowerShell and Bash commands to export standard CI environment variables, ensuring local build tools and scripts behave identically to remote CI runners.
