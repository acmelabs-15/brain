---
package: addy
name: Use Discriminated Unions for Variants
slug: use-discriminated-unions-for-variants
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

# Use Discriminated Unions for Variants

## Definition — verbatim
> "// Consumer gets type narrowing" — skills/api-and-interface-design/SKILL.md:282

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 272 | defined here | Recommends modeling state variants with explicit discriminant fields for compiler type narrowing |

## Consumes
Multi-state domain entities, variant payload structures.

## Produces
Discriminated union type definitions enabling compile-time exhaustive switch matching and type narrowing.

## When applied
When designing TypeScript data types that represent mutually exclusive states or polymorphic variants.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Discriminated unions leverage a common literal tag field to enable TypeScript's compiler to perform exhaustive type narrowing across state variants. This eliminates optional property bloat and runtime type errors by making invalid state combinations unrepresentable.
