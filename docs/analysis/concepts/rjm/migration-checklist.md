---
package: rjm
name: Migration Checklist
slug: migration-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Migration Checklist

## Definition — verbatim
> "### Migration Checklist" — .agents/architecture/ADR-025-github-actions-arm-runners.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 92 | defined here | Checklist specifying runner specification updates and cataloging migrated versus unchanged workflows. |
| .agents/guides/python-cicd-patterns.md | 343 | defined here | Nine-step checklist guiding conversion of PowerShell workflow scripts to Python modules. |
| .agents/projects/v0.3.1/PowerShell-migration.md | 351 | defined here | Per-script six-step checklist enforcing zero-deprecation migration from PowerShell to Python. |

## Consumes
Target migration specifications, legacy script/workflow implementations, and test suites.

## Produces
Systematically converted scripts, workflows, and updated test suites matching new architecture standards.

## When applied
Executed whenever migrating workflows or scripts across runtime platforms (ARM runner migration or PowerShell-to-Python conversion).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A structured procedural checklist standardizing multi-step migration tasks across the repository. In both runner architecture migration (ADR-025) and language transitions (PowerShell to Python), migration checklists enforce discrete verification gates—such as running parallel test suites or verifying identical CLI outputs—ensuring changes do not introduce regressions into CI workflows.
