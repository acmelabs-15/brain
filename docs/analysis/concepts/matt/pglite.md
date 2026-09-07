---
package: matt
name: PGLite
slug: pglite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PGLite

## Definition — verbatim
(used, not defined)

> "Dependencies that have local test stand-ins (PGLite for Postgres, in-memory filesystem)." — skills/engineering/codebase-design/DEEPENING.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 15 | used here | Cited as an example of a local test stand-in for PostgreSQL dependencies. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`PGLite` is an in-process, WASM-packaged PostgreSQL database engine cited as an example of a local test stand-in for database dependencies; classified as name-only per D-023 because it is a third-party technology identifier rather than an operational lifecycle concept.
