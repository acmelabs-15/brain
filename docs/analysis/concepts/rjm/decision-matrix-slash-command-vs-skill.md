---
package: rjm
name: Decision Matrix: Slash Command vs Skill
slug: decision-matrix-slash-command-vs-skill
kind: pattern
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

# Decision Matrix: Slash Command vs Skill

## Definition — verbatim
> "## Decision Matrix: Slash Command vs Skill" — .claude/skills/slashcommandcreator/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 167 | defined here | Section heading presenting the comparative decision rubric between slash commands and skills. |

## Consumes
Workflow complexity attributes (line count, conditional logic, argument substitution, multi-agent coordination).

## Produces
Architectural form-factor recommendation (slash command vs. skill).

## When applied
Applied during Phase 1 Discovery & Analysis when determining the appropriate form factor for prompt automation.

## Sub-concepts
none

## Part of
slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A decision framework in rjm establishing explicit threshold criteria (such as a 200-line limit and presence of multi-agent coordination) to guide authors in choosing between lightweight slash commands and full-featured skills.
