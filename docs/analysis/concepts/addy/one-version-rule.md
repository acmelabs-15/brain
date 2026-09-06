---
package: addy
name: One-Version Rule
slug: one-version-rule
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# One-Version Rule

## Definition — verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Also called — verbatim
"Contract-first design, Hyrum's Law, One-Version Rule, error semantics, boundary validation" — README.md:255

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 1 | defined here | Cited as a core design principle for stable module interfaces and dependencies. |
| README.md | 255 | used here | Listed in the Build phase catalog summary for api-and-interface-design. |

## Consumes
Dependency and interface specifications.

## Produces
Single-version dependency alignment across modules without fragmented version support.

## When applied
When designing APIs, public interfaces, or managing module dependencies.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
defects: doc-drift

## Design notes
The One-Version Rule mandates maintaining a single canonical version of an internal interface or dependency across a codebase, eliminating parallel legacy code paths and version fragmentation.
