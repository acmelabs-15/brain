---
package: matt
name: shoehorn
slug: shoehorn
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/migrate-to-shoehorn/SKILL.md, sha256: de4da4c11d924fac79c924b2ee3d2db4a5cb98386eb490a599119463d036ae72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shoehorn

## Definition — verbatim
> "`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives." — skills/misc/migrate-to-shoehorn/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 10 | used here | Defines shoehorn as a tool for passing partial test data while keeping TypeScript satisfied. |

## Consumes
TypeScript test code requiring mock data structures.

## Produces
Type-safe mock arguments bypassing compiler type errors without unsafe type casts.

## When applied
Used in test files to replace manual as assertions with helper functions.

## Sub-concepts
frompartial, fromany, fromexact

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A type-safe testing utility and technique that allows developers to provide partial or mock objects in unit tests while retaining TypeScript type checking on the provided properties.
