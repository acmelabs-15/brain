---
package: matt
name: Context Map
slug: context-map
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Map

## Definition — verbatim
> "# Context Map" — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 39 | defined here | Heading and template definition for CONTEXT-MAP.md mapping contexts and their relationships. |

## Consumes
Identified bounded contexts and their inter-context events and shared types.

## Produces
The `CONTEXT-MAP.md` document at repository root.

## When applied
In multi-context repositories to list contexts, locations, and relationships.

## Sub-concepts
contexts

## Part of
multiple-contexts

## Implementation status
clean

## Design notes
A top-level architectural map document located at repository root in multi-context projects that enumerates individual bounded contexts, their filesystem locations, and the relationships (events, shared types) connecting them.
