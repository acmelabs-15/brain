---
package: rjm
name: Quality Gates (Automatic)
slug: quality-gates-automatic
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Gates (Automatic)

## Definition — verbatim
> "### Phase 5: Quality Gates (Automatic)" — .claude/skills/slashcommandcreator/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 144 | defined here | Heading for Phase 5 automated validation step in slash command authoring workflow. |

## Consumes
Implemented slash command file (`.claude/commands/[namespace]/[command].md`).

## Produces
Quality gate verification verdict, lint results, and clean exit code 0.

## When applied
Executed after command file creation to automatically validate frontmatter, arguments, security constraints, length, and markdown linting.

## Sub-concepts
warning

## Part of
5-phase-workflow, slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An automated verification gate running script-based checks against newly created command markdown files to enforce frontmatter schema rules, argument hints, tool security permissions, and markdown formatting before committing.
