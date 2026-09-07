---
package: rjm
name: YAML frontmatter
slug: yaml-frontmatter
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# YAML frontmatter

## Definition — verbatim
(used, not defined)

> "The file starts with YAML frontmatter." — docs/SKILL-AUTHORING.md:9

## Also called — verbatim
`Frontmatter Schema` — docs/SKILL-AUTHORING.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/SKILL-AUTHORING.md | 3 | used here | Specified as the required structured configuration header prefixing every skill's `SKILL.md` file. |

## Consumes
Skill attributes including name, description, allowed-tools, and model selection.

## Produces
Parsable YAML header block configuring skill activation triggers and execution constraints.

## When applied
> "Every skill lives in a `SKILL.md` file inside a directory under `.claude/skills/`. The file starts with YAML frontmatter." — docs/SKILL-AUTHORING.md:9

## Sub-concepts
bare-rolling-alias

## Part of
skill-authoring-guide

## Implementation status
clean

## Design notes
YAML frontmatter is the machine-readable configuration header at the top of each `SKILL.md` file in rjm. It defines skill identity, activation descriptions for the model, tool permissions, and model override policies required by the runtime harness.
