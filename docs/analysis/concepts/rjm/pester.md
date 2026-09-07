---
package: rjm
name: Pester
slug: pester
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md, sha256: 578d49dd51a0f627f03dcf6b304dc4be8ce35f163748e4334af46d2d02c7f6f4}
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pester

## Definition — verbatim
> "- Pester testing framework" — .agents/devops/arm-runner-migration-analysis.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 154 | used here | Notes that gh CLI skills lose PowerShell Pester testing in favor of bash testing. |
| .agents/architecture/ADR-042-python-migration-strategy.md | 76 | used here | Identifies fragmentation across Pester and pytest as a drawback of a hybrid approach. |
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 122 | used here | Mandates executing Pester test scaffolds and passing verification before PR completion. |
| .agents/devops/arm-runner-migration-analysis.md | 44 | used here | Identifies the Pester testing framework as a proven capability running on ARM runners. |
| .agents/guides/python-for-powershell-developers.md | 376 | used here | Compares PowerShell Pester testing syntax with Python pytest conventions. |
| .agents/projects/v0.3.1/PowerShell-migration.md | 122 | used here | Schedules milestone #1066 to retire Pester and PowerShell linting upon completing Python migration. |
| scripts/README.md | 232 | used here | Details requirements and commands for executing Pester 5.x test suites. |

## Consumes
PowerShell test scripts (*.Tests.ps1) and PowerShell module or script units under test.

## Produces
Test run results, pass/fail assertions, and automated test reports.

## When applied
> "Requires [Pester](https://pester.dev/) 5.x:" — scripts/README.md:232

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Pester was the canonical BDD-style unit and integration testing framework for PowerShell code in rjm. It provided test discovery, assertions (`Should -Be`, `Should -Throw`), and runner infrastructure for validating scripts, modules, and workflows. Following ADR-042's repository-wide migration from PowerShell to Python, Pester was formally retired alongside the PowerShell codebase in favor of pytest.
