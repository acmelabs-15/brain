---
package: rjm
name: DESCRIPTION_MAX_LENGTH
slug: description-max-length
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/skillforge/scripts/_constants.py, sha256: 7d95cd0e323d528ee16098e199af1dbf91434ae1e8cd7e2e312e1acecca669b6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DESCRIPTION_MAX_LENGTH

## Definition — verbatim
> "DESCRIPTION_MAX_LENGTH = 1024" — .claude/skills/skillforge/scripts/_constants.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 20 | used here | Cites DESCRIPTION_MAX_LENGTH = 1024 as the hard ceiling enforced on individual skill descriptions. |
| .claude/skills/skillforge/scripts/_constants.py | 65 | defined here | Defines DESCRIPTION_MAX_LENGTH = 1024 constant capping skill frontmatter description lengths. |

## Consumes
Skill frontmatter description fields.

## Produces
Hard validation limit capping any single skill description at 1024 characters.

## When applied
Enforced during skill creation and validation via validate-skill.py.

## Sub-concepts
none

## Part of
description-budget

## Implementation status
defects: unfailable-gate, other

## Design notes
A hard constant in rjm (DESCRIPTION_MAX_LENGTH = 1024) defining the maximum allowable character length for a single skill description. Working alongside the overall description budget, it prevents individual skills from monopolizing standing context with verbose descriptions.
