---
package: rjm
name: Validation Checklist
slug: validation-checklist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
  - {path: .claude/skills/planner/resources/diff-format.md, sha256: d94ccdc2bd44f4e5965666c7806a566fc694215a262406436ea07a5c75efb0db}
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation Checklist

## Definition — verbatim
(used, not defined)

> "Validation Checklist" — .agents/governance/PROJECT-CONSTRAINTS.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 162 | defined here | Section heading for the critic agent checklist verifying EARS requirement patterns and YAML front matter. |
| .agents/governance/PROJECT-CONSTRAINTS.md | 230 | defined here | Section heading providing session start validation items for repository governance constraints. |
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 339 | defined here | Section heading outlining prerequisite checks before committing to a design pattern mapping. |
| .claude/skills/planner/resources/diff-format.md | 193 | defined here | Section heading enumerating plan validation criteria prior to finalizing code diffs. |
| .claude/skills/threat-modeling/references/security-least-privilege.md | 117 | defined here | Section heading defining least-privilege verification items for threat modeling components. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 320 | used here | Numbered template section heading structuring final checklist items in threat model documents. |

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
defects: cross-file-contradiction, missing-path

## Design notes
A recurring document and template section heading used across governance, architectural decisions, and planning skills to organize checklist verification items rather than a software development lifecycle concept.
