---
package: rjm
name: SkillCreator
slug: skillcreator
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillCreator

## Definition — verbatim
(used, not defined)

> "- Renamed from SkillCreator to SkillForge" — .claude/skills/skillforge/references/changelog.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 372 | used here | Mentions SkillCreator as an example tool for scaffolding gate-specific agent skills. |
| .claude/skills/skillforge/references/changelog.md | 21 | used here | Records the historical renaming of the framework from SkillCreator to SkillForge. |
| .claude/skills/slashcommandcreator/SKILL.md | 38 | used here | References the 11 mental models inherited from the skillcreator framework. |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
SkillCreator is the obsolete historical identifier for the SkillForge skill scaffolding tool prior to its renaming, classified as name-only per D-023.
