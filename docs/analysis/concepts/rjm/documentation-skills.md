---
package: rjm
name: Documentation Skills
slug: documentation-skills
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Documentation Skills

## Definition — verbatim
> "### 4. Documentation Skills" — .claude/skills/reflect/references/decision-tree-and-examples.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 127 | defined here | Domain use case capturing documentation patterns, heading hierarchies, example formats, and diagram styles. |

## Consumes
Documentation drafts, style guide feedback, diagrams, and section structuring reviews.

## Produces
Structured observations in `.serena/memories/documentation-observations.md`.

## When applied
During session reflection after writing technical specifications, guides, or README files.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
Domain-specific reflection category tracking technical writing conventions (heading hierarchy, tone, code example format, diagram preferences) to ensure uniform documentation artifacts across agent outputs.
