---
package: matt
name: Internal collaborators
slug: internal-collaborators
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Internal collaborators

## Definition — verbatim
(used, not defined)
> "- Internal collaborators" — skills/engineering/tdd/mocking.md:13

## Also called — verbatim
> "- Mocking internal collaborators" — skills/engineering/tdd/tests.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 13 | used here | Listed under "Don't mock" as internal components within the same system boundary. |
| skills/engineering/tdd/tests.md | 40 | used here | Highlighted as a primary red flag that couples test assertions to private implementation structure. |

## Consumes
none

## Produces
none

## When applied
During test design, as an explicit negative constraint prohibiting mock injection into internal classes or helper modules.

## Sub-concepts
none

## Part of
bad-tests, implementation-detail-tests

## Implementation status
clean

## Design notes
Internal collaborators are the companion classes, helper modules, and services that reside inside the system boundary under the developer's direct control. Mocking internal collaborators is treated as a major testing anti-pattern in Matt's lifecycle because it binds tests to transient structural details, guaranteeing that internal refactorings break tests even when overall system behavior remains completely intact.
