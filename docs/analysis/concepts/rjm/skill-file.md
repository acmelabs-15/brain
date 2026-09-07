---
package: rjm
name: .skill file
slug: skill-file
kind: artifact
package_phase: rjm:Phase 4: Packaging
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/package_skill.py, sha256: 15c5c247f958c4d329d4b440559b118ee80423c7a239dff7654ca753b0a324d7}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# .skill file

## Definition — verbatim
> "package_skill.py - Creates a distributable .skill file" — .claude/skills/skillforge/scripts/package_skill.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/package_skill.py | 3 | defined here | Packaged distribution archive bundling a validated skill directory in zip format for distribution. |
| scripts/validation/check_shipped_skill_routes.py | 196 | defined here | Constant identifying SKILL.md as the defining anchor file designating a directory as a skill. |

## Consumes
Validated skill directory containing SKILL.md, references, scripts, and assets.

## Produces
A distributable `.skill` zip archive file.

## When applied
Applied when packaging validated skills for distribution and marketplace publishing.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, exit-code-mismatch

## Design notes
The distributable bundle format for agent skills in SkillForge. Packaging encapsulates skill instructions, executable scripts, and reference documentation into a portable zip archive for deployment and sharing.
