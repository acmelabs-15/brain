---
package: matt
name: Test code only
slug: test-code-only
kind: gate
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

# Test code only

## Definition — verbatim
> "**Test code only.** Never use shoehorn in production code." — skills/misc/migrate-to-shoehorn/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 12 | defined here | Core boundary rule strictly prohibiting the use of shoehorn in production code. |

## Consumes
Source files undergoing migration or code review.

## Produces
Enforcement that mock helpers remain strictly confined to test directories.

## When applied
Evaluated during test migration, linting, and code review.

## Sub-concepts
none

## Part of
migrate-to-shoehorn

## Implementation status
clean

## Design notes
An architectural safety gate restricting test utility libraries and loose typing constructs strictly to test code, preventing mock helpers from compromising runtime production type guarantees.
