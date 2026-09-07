---
package: rjm
name: Validation and Packaging
slug: validation-and-packaging
kind: phase
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation and Packaging

## Definition — verbatim
> "## Validation and Packaging" — .claude/skills/skillforge/SKILL.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 212 | defined here | Final verification and packaging phase auditing skill structure, frontmatter, scripts, and documentation safety. |

## Consumes
Completed skill directory with SKILL.md, references/, scripts/, and documentation.

## Produces
Validated skill package passing structural linters and documentation safety checks ready for distribution.

## When applied
Applied at the end of the skill creation or modification lifecycle prior to publishing or committing.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Validation and Packaging is the terminal quality and shipping phase of SkillForge in rjm, executing programmatic validators to guarantee structural integrity before distribution.
