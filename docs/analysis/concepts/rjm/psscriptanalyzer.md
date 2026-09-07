---
package: rjm
name: PSScriptAnalyzer
slug: psscriptanalyzer
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PSScriptAnalyzer

## Definition — verbatim
(used, not defined)

> "When integrating external validators (PSScriptAnalyzer, markdownlint, ESLint, etc.), respect upstream defaults." — .claude/skills/validation-authority/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 91 | used here | Tabulated with git-diff scoping pattern for evaluating modified PowerShell scripts. |
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 141 | used here | Included in the verification checklist for PowerShell script validation in PR-60. |
| .agents/devops/arm-runner-migration-analysis.md | 45 | used here | Listed among existing tool dependencies when evaluating GitHub Actions ARM runner compatibility. |
| .agents/projects/v0.3.1/PowerShell-migration.md | 281 | used here | Scheduled for retirement in powershell-lint.yml as ruff replaces linting during Python migration. |
| .claude/skills/validation-authority/SKILL.md | 13 | used here | Cited as an external validator whose upstream defaults must be respected. |

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
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
PSScriptAnalyzer is an external static analysis and linting tool for PowerShell code rather than an agent lifecycle concept per D-023.
