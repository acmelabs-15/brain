---
package: matt
name: Double-as
slug: double-as
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

# Double-as

## Definition — verbatim
> "- Double-as (`as unknown as Type`) for intentionally wrong data" — skills/misc/migrate-to-shoehorn/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 18 | defined here | Defines the double-casting idiom used in tests to force intentionally incompatible data. |

## Consumes
Intentionally malformed test inputs or incompatible types.

## Produces
TypeScript compiler silence at the cost of complete loss of type safety.

## When applied
Found in test files attempting to verify negative test cases or invalid inputs.

## Sub-concepts
as-unknown-as-type

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
A TypeScript anti-pattern where a value is cast through unknown (as unknown as Type) to bypass type incompatibility errors, replaced in shoehorn by fromAny().
