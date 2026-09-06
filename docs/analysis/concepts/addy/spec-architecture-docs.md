---
package: addy
name: Spec / Architecture Docs
slug: spec-architecture-docs
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Spec / Architecture Docs

## Definition — verbatim
> "Load the relevant spec section when starting a feature. Don't load the entire spec if only one section applies." — skills/context-engineering/SKILL.md:82

## Also called — verbatim
`Specs and Architecture` — skills/context-engineering/SKILL.md:80

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 28 | defined here | Level 2 of the context hierarchy, loaded per feature or session |

## Consumes
Feature specifications and architecture documentation.

## Produces
Targeted specification context scoped to the immediate feature under development.

## When applied
Loaded per feature or session when starting implementation work.

## Sub-concepts
none

## Part of
the-context-hierarchy, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The second tier of the Context Hierarchy, representing specification and architecture documents. Context engineering instructs practitioners to load only the specific section of a spec relevant to the current feature rather than whole multi-thousand-word documents, preventing context window saturation.
