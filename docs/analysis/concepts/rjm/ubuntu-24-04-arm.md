---
package: rjm
name: ubuntu-24.04-arm
slug: ubuntu-24-04-arm
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ubuntu-24.04-arm

## Definition — verbatim
(used, not defined)

> "| `ubuntu-24.04-arm` | $0.005 | Better price/performance | ARM-compatible workloads |" — .agents/architecture/ADR-024-github-actions-runner-selection.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 75 | defined here | Defined in runner pricing table as the primary $0.005/minute ARM runner for cost optimization. |
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 37 | defined here | Established as the migration target runner for all 12 Linux-based GitHub Actions workflows. |
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 45 | defined here | Mandated in standing preference hierarchy as the default runner for all Linux workflows. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A GitHub Actions runner platform identifier specifying hosted 64-bit ARM Linux instances on Ubuntu 24.04, functioning as an infrastructure runtime target rather than a development lifecycle concept.
