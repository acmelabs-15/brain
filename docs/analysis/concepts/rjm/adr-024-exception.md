---
package: rjm
name: ADR-024 Exception
slug: adr-024-exception
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-024 Exception

## Definition — verbatim
(used, not defined)

> "    # ADR-024 Exception: Windows/macOS runner required for [specific reason]" — .agents/architecture/ADR-024-github-actions-runner-selection.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 104 | defined here | Specified as the required comment annotation format when justifying x64, Windows, or macOS runner overrides. |
| .agents/devops/arm-runner-migration-analysis.md | 54 | used here | Cited and analyzed as an invalid justification in copilot-setup-steps.yml that was scheduled for removal. |

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
A legacy YAML code comment marker used in GitHub Actions workflows to document authorized exemptions from ARM runner policy, functioning as an annotation syntax rather than an agent lifecycle concept.
