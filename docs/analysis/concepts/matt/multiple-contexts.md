---
package: matt
name: Multiple contexts
slug: multiple-contexts
kind: pattern
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

# Multiple contexts

## Definition — verbatim
> "**Multiple contexts:** A `CONTEXT-MAP.md` at the repo root lists the contexts, where they live, and how they relate to each other:" — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 36 | defined here | Defines the repository organization pattern where multiple bounded contexts coexist and are indexed by CONTEXT-MAP.md. |

## Consumes
Multiple distinct domain modules or bounded contexts within a single repository.

## Produces
A multi-context directory layout with a root `CONTEXT-MAP.md` pointing to individual context-level `CONTEXT.md` files.

## When applied
When a codebase spans multiple cohesive domain areas that each require their own vocabulary and boundaries.

## Sub-concepts
context-map, contexts

## Part of
domain-modeling

## Implementation status
clean

## Design notes
An architectural repository pattern for systems containing multiple bounded domains, organizing each domain into its own subdirectory with localized glossaries and ADRs, unified via a root context map.
