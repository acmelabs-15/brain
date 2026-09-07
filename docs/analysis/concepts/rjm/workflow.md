---
package: rjm
name: Workflow
slug: workflow
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Workflow

## Definition — verbatim
> "| Workflow | `.github/workflows/*.yml` | No logic in YAML (ADR-006); SHA-pinned actions; run changed workflows before push (AGENTS.md Always list) |" — .claude/skills/ai-agents-change-control/SKILL.md:38

## Also called — verbatim
> "| WORKFLOW | `*.yml` in `.github/workflows/` | Full CI/CD review |" — .claude/skills/review/references/devops.md:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 38 | defined here | Classification table row outlining ADR-006 constraints for GitHub workflow files. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 16 | used here | Pattern definition ensuring workflow references are appropriately excluded from orphan checks. |
| .claude/skills/review/references/devops.md | 49 | defined here | DevOps review checklist specifying full CI/CD review for workflow YAML files. |
| .claude/skills/review/references/qa.md | 57 | defined here | QA review checklist mandating that logic invoked by workflow files must be thoroughly tested. |
| docs/workflow-commands.md | 122 | defined here | Workflow command documentation identifying WORKFLOW as a core PR classification category. |

## Consumes
YAML pipeline files in .github/workflows/*.yml and external GitHub Action dependencies.

## Produces
Automated CI/CD build, validation, and release pipelines.

## When applied
Applied whenever GitHub Actions workflows or pipeline definitions are created or updated.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Workflow covers CI/CD automation under .github/workflows/*. Governed by ADR-006, workflows must remain thin dispatchers with zero complex bash/python logic in YAML, full SHA pinning, and local test verification.
