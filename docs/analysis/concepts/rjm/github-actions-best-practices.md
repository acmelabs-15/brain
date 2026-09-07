---
package: rjm
name: GitHub Actions Best Practices
slug: github-actions-best-practices
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Actions Best Practices

## Definition — verbatim
> "### 3. GitHub Actions Best Practices" — .claude/skills/review/references/devops.md:112

## Also called — verbatim
> "### GitHub Actions Best Practices" — templates/agents/devops.shared.md:191

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 112 | defined here | Focus area checklist evaluating matrix builds, permissions, caching, SHA pinning, and secret exposures in workflow definitions. |
| templates/agents/devops.shared.md | 191 | defined here | Pipeline standards section detailing best practices such as pinning actions to SHA, using composite actions, matrix builds, caching, and cross-job outputs. |

## Consumes
GitHub Actions workflow configurations (`.github/workflows/*.yml`), composite action definitions, and CI/CD pipeline specifications.

## Produces
DevOps review verdicts, remediation findings, and hardened workflow definitions conforming to repository pipeline standards.

## When applied
Applied during DevOps review of workflow pull requests and when designing or updating CI/CD pipeline configurations.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A core review checklist and pipeline standard in rjm ensuring GitHub Actions workflows maintain strict security baselines through full-commit SHA pinning and minimal permissions, while optimizing pipeline performance through dependency caching and reusable composite actions.
