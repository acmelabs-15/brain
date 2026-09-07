---
package: rjm
name: FAIL
slug: fail
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FAIL

## Definition — verbatim
(used, not defined)

> "FAIL" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1095

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 1095 | defined here | Gate verdict emitted when blocking findings count exceeds zero at or above the severity threshold. |
| .claude/skills/review/scripts/validate_findings_scope.py | 54 | used here | Included in review verdict token regular expression for axis status extraction. |
| .claude/skills/review/SKILL.md | 104 | used here | Included in review failure verdicts set triggering overall critical failure. |
| scripts/validation/check_canonical_citations.py | 23 | defined here | Documented hard failure exit condition when strict canonical citation checking is enabled. |

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
defects: doc-drift, script-bug, internal-contradiction, missing-path

## Design notes
`FAIL` is a terminal gate verdict constant across validation scripts and review axes indicating unmitigated blocking defects rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
