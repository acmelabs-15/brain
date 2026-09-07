---
package: rjm
name: Windows-based workflows
slug: windows-based-workflows
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Windows-based workflows

## Definition — verbatim
(used, not defined)

> "Windows-based workflows remain unchanged as ARM runners are not available for Windows." — .agents/architecture/ADR-025-github-actions-arm-runners.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 39 | used here | Exempted from ARM runner migration because ARM runners are unavailable for Windows in GitHub Actions. |

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
A descriptive workflow classification designating GitHub Actions workflows requiring Windows execution environments (such as PowerShell or specific OS dependencies), serving as an operational category rather than an agent lifecycle concept.
