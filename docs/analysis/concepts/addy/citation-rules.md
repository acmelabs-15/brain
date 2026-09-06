---
package: addy
name: Citation rules
slug: citation-rules
kind: checklist
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Citation rules

## Definition — verbatim
> "**Citation rules:**" — skills/source-driven-development/SKILL.md:165
> "- Full URLs, not shortened" — skills/source-driven-development/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 165 | defined here | Defines mandatory rules for formatting, linking, and quoting documentation citations. |

## Consumes
Official documentation URLs, anchor links, and quoted excerpts.

## Produces
Verifiable citations in code comments and conversational rationale.

## When applied
When implementing framework-specific patterns or justifying architectural decisions during Step 4 of Source-Driven Development.

## Sub-concepts
none

## Part of
source-driven-development

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Standardized citation rules requiring full URLs, deep anchor links, quoted excerpts, and explicit unverified declarations to ensure all agent implementation decisions can be independently verified.
