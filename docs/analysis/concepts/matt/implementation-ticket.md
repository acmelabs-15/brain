---
package: matt
name: _implementation_ ticket
slug: implementation-ticket
kind: artifact
package_phase: matt:implementation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# _implementation_ ticket

## Definition — verbatim
(used, not defined)
> "People kept reading a wayfinder ticket as an ordinary _implementation_ ticket — a slice of a build to execute — when wayfinder uses them as **decision tickets**: questions whose resolution is a decision." — CHANGELOG.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 84 | used here | Contrasts wayfinder task tickets with implementation tickets that deliver destination features |
| CONTEXT.md | 16 | used here | Distinguishes wayfinder decision tickets from implementation tickets in vocabulary glossary |

## Consumes
A completed spec, plan, or decomposed task slice from `/to-tickets`

## Produces
Production code changes, passing test suites, and git commits

## When applied
Applied during the implementation phase when building concrete features or bug fixes

## Sub-concepts
none

## Part of
to-tickets, implement

## Implementation status
clean

## Design notes
An implementation ticket in Matt's lifecycle represents an actionable engineering task that delivers a concrete piece of the destination codebase (typically executed via `/implement` and `/tdd`), in contrast to wayfinder decision tickets which exist solely to resolve ambiguity or unblock decisions.
