---
package: rjm
name: disable-model-invocation
slug: disable-model-invocation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# disable-model-invocation

## Definition — verbatim
(used, not defined)

> "disable-model-invocation: true" — .agents/analysis/claude-code-plugin-marketplaces.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 189 | defined here | Demonstrates skill frontmatter attribute disabling model invocation for command or prompt templates. |
| .claude/skills/slashcommandcreator/SKILL.md | 58 | used here | Specifies frontmatter schema property used when authoring custom slash commands that function as pure prompt templates. |

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
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A frontmatter configuration attribute for Claude Code skills and custom slash commands that prevents LLM inference when running pure prompt templates; it is a command configuration property rather than an agent lifecycle concept.
