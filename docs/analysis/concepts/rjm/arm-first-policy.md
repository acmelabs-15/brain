---
package: rjm
name: ARM-First Policy
slug: arm-first-policy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ARM-First Policy

## Definition — verbatim
> "### ARM-First Policy" — .agents/architecture/ADR-055-github-actions-runner-selection.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 64 | defined here | Mandates that all new workflows use ubuntu-24.04-arm unless documented exceptions apply. |

## Consumes
Pull requests and workflow definitions introducing new GitHub Actions jobs.

## Produces
Enforced adoption of ARM runners across new CI pipelines.

## When applied
When creating or migrating GitHub Actions workflow jobs.

## Sub-concepts
adr-055-exception

## Part of
github-actions-runner-selection

## Implementation status
clean

## Design notes
A policy rule in ADR-055 requiring all newly introduced GitHub Actions workflows to select ARM64 runners unless specific architecture incompatibilities are documented.
