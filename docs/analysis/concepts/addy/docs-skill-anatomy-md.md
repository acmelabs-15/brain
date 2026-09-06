---
package: addy
name: docs/skill-anatomy.md
slug: docs-skill-anatomy-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
  - {path: scripts/validate-skills.js, sha256: 2d6c3d8798af354a4d482efb561571421552805a3f80e398c20a2dbd204134f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/skill-anatomy.md

## Definition — verbatim
(used, not defined)
> "Keep the `SKILL.md` within [docs/skill-anatomy.md](../../docs/skill-anatomy.md), and never duplicate content between skills, reference the other skill instead." — .claude/rules/skills-contributing.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/skills-contributing.md | 13 | used here | Cited as the structural guideline document that all SKILL.md files must follow. |
| scripts/lib/skill-lint.js | 6 | used here | Referenced as the source of truth specification implemented by the skill linter. |
| scripts/validate-skills.js | 6 | used here | Cited in CLI comments as the specification against which skills are validated. |

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
defects: other (scripts/lib/skill-lint.js:1 and scripts/validate-skills.js:16 use CommonJS syntax that fails when root package.json specifies ES module type)

## Design notes
A documentation file path pointing to the repository's specification for skill directory structure, frontmatter schemas, and section conventions, rather than a development lifecycle concept.
