---
package: rjm
name: SkillForge validation
slug: skillforge-validation
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SkillForge validation

## Definition — verbatim
> "### Required (Full, for SkillForge validation)" — .claude/skills/CLAUDE.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 37 | used here | Specifies full frontmatter schema requirements (`name`, `version`, `description`, `license`) required to satisfy SkillForge validation. |

## Consumes
Skill definition manifests (`SKILL.md`) and directory structures.

## Produces
Validation verdicts confirming that skill metadata conforms to the full SkillForge specification.

## When applied
Applied when linting, testing, or building skill packages for export or cross-harness deployment.

## Sub-concepts
none

## Part of
validation-rules

## Implementation status
clean

## Design notes
SkillForge validation is an automated quality gate enforcing complete metadata standards on skill definitions. Beyond the minimal name and description required for local Claude usage, SkillForge validation requires version and license fields to guarantee portable distribution across platforms.
