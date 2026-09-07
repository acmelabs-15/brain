---
package: rjm
name: /2-impl
slug: 2-impl
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /2-impl

## Definition — verbatim
> "| `/2-impl` | `/build` | TDD-first, atomic commits, quality scoring |" — docs/workflow-commands.md:214

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 214 | defined here | Documented in comparison table as the legacy implementation command replaced by /build. |

## Consumes
Decomposed tasks or plan steps from legacy planning.

## Produces
Implemented code changes and commit history.

## When applied
Executed following legacy planning to write production code.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
`/2-impl` was the legacy implementation phase slash command in rjm before PR #1611 replaced it with `/build`, introducing test-driven vertical slices, atomic commits, and automated code quality scoring.
