---
package: rjm
name: WARN
slug: warn
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# WARN

## Definition — verbatim
(used, not defined)

> "4. Produces per-gate verdicts: PASS, WARN, or CRITICAL_FAIL" — docs/workflow-commands.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/scan.py | 19 | used here | Referenced and applied in scan.py during verification and operational workflows. |
| .claude/skills/review/references/decision-rigor.md | 126 | used here | Referenced and applied in decision-rigor.md during verification and operational workflows. |
| .claude/skills/review/references/devops.md | 248 | used here | Referenced and applied in devops.md during verification and operational workflows. |
| .claude/skills/review/references/observability.md | 116 | used here | Referenced and applied in observability.md during verification and operational workflows. |
| .claude/skills/review/references/qa.md | 232 | used here | Referenced and applied in qa.md during verification and operational workflows. |
| .claude/skills/review/scripts/validate_findings_scope.py | 12 | used here | Referenced and applied in validate_findings_scope.py during verification and operational workflows. |
| .claude/skills/review/SKILL.md | 33 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |
| docs/workflow-commands.md | 125 | defined here | Primary definition of `WARN` within workflow-commands.md. |

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
defects: doc-drift, missing-path

## Design notes
A code identifier, type, or architectural heading (`WARN`) recorded during inventory analysis, classified as `name-only` per D-023.
