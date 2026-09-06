---
package: addy
name: Resource Design
slug: resource-design
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Resource Design

## Definition — verbatim
> "GET    /api/tasks              → List tasks (with query params for filtering)" — skills/api-and-interface-design/SKILL.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 219 | defined here | Establishes standard REST API resource design patterns for collection, entity, and sub-resource endpoints |

## Consumes
Domain entities, resource hierarchies, relationship definitions.

## Produces
Standardized REST route mappings aligning HTTP verbs (GET, POST, PATCH, DELETE) to collection and member resources.

## When applied
When designing REST API route structures for domain resources and nested sub-resources.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Resource Design organizes API surfaces around nouns and hierarchical resource paths rather than functional actions or verb-based endpoints. It standardizes HTTP verb semantics for collections and sub-resources, ensuring clean architectural boundaries and predictable endpoint navigation.
