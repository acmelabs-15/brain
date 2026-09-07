---
package: rjm
name: codebase-documenter
slug: codebase-documenter
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# codebase-documenter

## Definition — verbatim
> "name: codebase-documenter" — .claude/skills/codebase-documenter/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/SKILL.md | 2 | defined here | YAML frontmatter name identifying the codebase documentation scaffolding skill. |
| .claude/skills/codebase-documenter/SKILL.md | 14 | defined here | Title heading introducing the documentation scaffolding generator and its operation. |
| .claude/skills/world-model-diagnostic/SKILL.md | 292 | used here | Recommended as follow-on pass after world model diagnostic for engineering organizations. |

## Consumes
Target repository or directory lacking documentation, user confirmation against overwriting existing documentation, and optional target destination paths.

## Produces
Scaffolded markdown documentation starter files (README.md, docs/standards/CODE_COMMENTS.md) populated with bracketed placeholders.

## When applied
Applied when generating documentation scaffolding for a project lacking documentation or structured in the wrong shape, or following an organizational diagnostic.

## Sub-concepts
none

## Part of
cross-phase lifecycle tooling

## Implementation status
clean

## Design notes
A documentation scaffolding skill that creates structured markdown starters with bracketed placeholders for projects that lack documentation, enforcing progressive disclosure and consistent comment standards without overwriting existing files.
