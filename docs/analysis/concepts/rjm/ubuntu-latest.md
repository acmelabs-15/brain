---
package: rjm
name: ubuntu-latest
slug: ubuntu-latest
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

# ubuntu-latest

## Definition — verbatim
(used, not defined)

> "| `ubuntu-latest` (x64) | $0.008 | Baseline | Default x64 workflows |" — .agents/architecture/ADR-024-github-actions-runner-selection.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 74 | used here | Listed in the runner pricing table as the $0.008/minute baseline runner for default x64 workflows. |
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 37 | used here | Identified as the legacy x64 Linux runner from which workflows are migrated to capture 37.5% cost savings. |
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 44 | used here | Documented in available runners table as the legacy default x64 runner costing 37.5% more than ARM64. |

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
An infrastructure runner image label designating standard GitHub-hosted x64 Linux virtual machines, cited across architecture records to establish cost baselines rather than representing an agent lifecycle concept.
