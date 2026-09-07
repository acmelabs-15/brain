---
package: rjm
name: no auxiliary files
slug: no-auxiliary-files
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# no auxiliary files

## Definition — verbatim
(used, not defined)

> "no auxiliary files" — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 22 | used here | Packaging rule citation prohibiting non-standard files like README.md, LICENSE, and SESSION_HANDOFF.md in skill roots. |

## Consumes
Candidate files in the root directory of a skill.

## Produces
Rejection or deletion of unauthorized auxiliary files outside of SKILL.md, references/, scripts/, and assets/.

## When applied
Applied during skill directory creation, vendoring, and packaging validation.

## Sub-concepts
none

## Part of
skill-creator-compliance

## Implementation status
defects: doc-drift, internal-contradiction, orphan

## Design notes
no auxiliary files is an rjm skill packaging gate derived from the skill-creator specification that strictly prohibits auxiliary documentation files (README, LICENSE, handoffs) at the skill root, restricting contents to SKILL.md, references/, scripts/, and assets/.
