---
package: matt
name: production code
slug: production-code
kind: artifact
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

# production code

## Definition — verbatim
(used, not defined)

> "**Test code only.** Never use shoehorn in production code." — skills/misc/migrate-to-shoehorn/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/migrate-to-shoehorn/SKILL.md | 12 | used here | Contrasted against test code to define the boundary where shoehorn must never be used. |

## Consumes
Domain logic, architecture specifications, and implementation designs.

## Produces
Deployable, runtime-executed application code.

## When applied
Developed during implementation phases and protected by strict type checking and tests.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The executable application codebase that runs in production environments, distinguished from test harnesses, fixtures, and mock utilities.
