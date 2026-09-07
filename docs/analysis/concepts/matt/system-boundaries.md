---
package: matt
name: system boundaries
slug: system-boundaries
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# system boundaries

## Definition — verbatim
> "Mocks are for system boundaries only: external APIs, time, randomness, sometimes the filesystem or the database. Not your own modules." — external/tdd.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 41 | defined here | Identifies system boundaries as the sole legitimate location where mocking may be introduced in tests. |
| skills/engineering/tdd/mocking.md | 3 | defined here | Cited in mocking guidance as the boundary line (external network calls, third-party APIs) qualifying for mocks. |

## Consumes
System architecture and external dependencies.

## Produces
Architectural boundary definitions separating internal modules from third-party or external services.

## When applied
When designing test doubles and deciding whether a collaborator should be mocked or exercised directly.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean (in skills/engineering/tdd/mocking.md; external documentation notes doc-drift and orphan status)

## Design notes
System boundaries define the operational perimeter between code owned by the project and unowned external infrastructure (such as HTTP APIs, clocks, randomness, or storage systems). In Matt's testing philosophy, mocks are strictly restricted to system boundaries, prohibiting mocking internal application modules and preserving the fidelity of integration behavior.
