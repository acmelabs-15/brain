---
package: matt
name: tracer-bullet vertical slices
slug: tracer-bullet-vertical-slices
kind: technique
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tracer-bullet vertical slices

## Definition — verbatim
> "`to-tickets` breaks a plan, spec, or conversation into a set of **tickets** — tracer-bullet vertical slices, each declaring its **blocking edges**." — CHANGELOG.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 183 | defined here | Formal GLOSSARY definition added in changelog contrasting with horizontal layers |

## Consumes
A feature specification or user story

## Produces
Thin end-to-end tickets that cut through UI, API, logic, and database layers

## When applied
When decomposing feature work into tickets in `/to-tickets`

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
Tracer-bullet vertical slices prioritize building thin, end-to-end functional paths that prove integration across all architectural layers early, preventing the integration risks inherent in horizontal layer-by-layer development.
