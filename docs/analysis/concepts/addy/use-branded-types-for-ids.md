---
package: addy
name: Use Branded Types for IDs
slug: use-branded-types-for-ids
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

# Use Branded Types for IDs

## Definition — verbatim
> "// Prevents accidentally passing a UserId where a TaskId is expected" — skills/api-and-interface-design/SKILL.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 313 | defined here | Recommends TypeScript branded types for entity IDs to prevent cross-assignment |

## Consumes
Primitive string or numeric identifiers.

## Produces
Nominally typed identifier aliases (e.g. `TaskId`, `UserId`) enforced by the TypeScript compiler.

## When applied
When defining domain models and service function signatures that take multiple entity identifiers.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Branded types attach phantom type tags to primitive strings or numbers, transforming structural TypeScript typing into nominal typing for identifiers. This enables the compiler to catch bugs where an identifier for one domain entity is mistakenly passed to a parameter expecting a different entity ID.
