---
package: rjm
name: XML structure
slug: xml-structure
kind: pattern
package_phase: rjm:Phase 2: Specification
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# XML structure

## Definition — verbatim
> "Semantic organization for reliable parsing" — .claude/skills/skillforge/references/specification-template.md:12

## Also called — verbatim
> "- **XML structure:** Semantic organization for reliable parsing" — .claude/skills/skillforge/references/specification-template.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 12 | used here | Establishes XML semantic tagging as the standard syntax for structuring skill specifications. |

## Consumes
Specification sections, metadata, requirements, and generation instructions.

## Produces
Machine-parseable, semantically tagged XML documents for skill specifications.

## When applied
When formatting skill specifications and prompt templates for reliable parsing by AI models.

## Sub-concepts
none

## Part of
meta-prompting-principles

## Implementation status
clean

## Design notes
Employs explicit XML tags to delineate specification sections, enabling language models to parse complex instructions and metadata reliably without delimiter confusion.
