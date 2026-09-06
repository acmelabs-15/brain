---
package: addy
name: inline documentation standards
slug: inline-documentation-standards
kind: reference
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# inline documentation standards

## Definition — verbatim
> "Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/documentation-and-adrs.md | 1 | defined here | Outlines documentation standards for in-code comments and type documentation to capture contextual rationale. |

## Consumes
Source code, architectural decisions, complex logic, and non-obvious constraints.

## Produces
Standardized inline docstrings, comments explaining 'why' rather than 'what', and type annotations.

## When applied
> "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5

## Sub-concepts
none

## Part of
documentation-and-adrs

## Implementation status
defects: doc-drift, orphan

## Design notes
Standards specifying that code comments should capture rationale, non-obvious constraints, and domain context rather than restating code syntax. This preserves critical historical context for subsequent agents and engineers navigating the codebase.
