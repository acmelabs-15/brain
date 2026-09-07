---
package: rjm
name: ARM64 runners
slug: arm64-runners
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

# ARM64 runners

## Definition — verbatim
> "**Default to ARM64 runners for all Linux workflows** unless documented architectural constraints exist." — .agents/architecture/ADR-055-github-actions-runner-selection.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 56 | defined here | Mandated default runner architecture for all Linux GitHub Actions workflows. |

## Consumes
GitHub Actions Linux workflow specifications.

## Produces
Reduced execution cost and consistent architecture across CI workflows.

## When applied
In all GitHub Actions Linux workflow definitions unless architectural exceptions are documented.

## Sub-concepts
none

## Part of
github-actions-runner-selection

## Implementation status
clean

## Design notes
Defines ARM64 virtual machines (`ubuntu-24.04-arm`) as the default compute runner environment for GitHub Actions CI/CD workflows, providing a 37.5% per-job cost savings over standard x64 runners.
