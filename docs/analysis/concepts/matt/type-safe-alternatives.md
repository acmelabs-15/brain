---
package: matt
name: type-safe alternatives
slug: type-safe-alternatives
kind: pattern
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

# type-safe alternatives

## Definition — verbatim
(used, not defined)

> "It replaces `as` assertions with type-safe alternatives." — skills/misc/migrate-to-shoehorn/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 10 | used here | Explains that shoehorn substitutes type assertions with safe helper functions. |

## Consumes
Unsafe type assertions in test suites.

## Produces
Strongly typed helper invocations checked by the TypeScript compiler.

## When applied
Applied when refactoring test suites to eliminate silent type breakage caused by loose type assertions.

## Sub-concepts
frompartial, fromany

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A design pattern favoring typed helper constructs over brute-force compiler overrides (`as Type` or `as unknown as Type`), preserving type safety even when mocking partial test data.
