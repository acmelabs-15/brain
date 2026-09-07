---
package: rjm
name: Phase G3: Generate
slug: phase-g3-generate
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase G3: Generate

## Definition — verbatim
(used, not defined)

> "### Phase G3: Generate" — .claude/skills/adr-generator/SKILL.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 132 | defines | Third phase in ADR generator workflow populating the detected template with gathered content and emitting lifecycle frontmatter. |

## Consumes
Gathered decision facts from G1 and template/path metadata from G2.

## Produces
Complete draft ADR document containing machine-readable YAML frontmatter and formatted decision sections.

## When applied
Executed in adr-generator once research and discovery are complete.

## Sub-concepts
lifecycle-frontmatter

## Part of
adr-generator

## Implementation status
clean

## Design notes
The authoring phase of the ADR generator workflow where gathered context and trade-offs are formatted into the destination template. It ensures machine-readable lifecycle YAML frontmatter is generated with safe defaults (status: proposed, implemented: false, explainer: null) and that prose sections articulate balanced consequences and genuine alternatives.
