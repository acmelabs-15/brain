---
package: addy
name: Contract-first design
slug: contract-first-design
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Contract-first design

## Definition — verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 1 | defined here | Highlighted as a core architectural practice for stable interfaces and module boundaries. |

## Consumes
Requirements, interface specifications, module boundary definitions.

## Produces
Formal interface contracts, type definitions, and API specifications.

## When applied
When designing APIs, module boundaries, or public interfaces.

## Sub-concepts
error-semantics, one-version-rule

## Part of
api-and-interface-design

## Implementation status
defects: doc-drift

## Design notes
Contract-first design establishes explicit, validated boundaries and type contracts before writing implementation logic, preventing interface drift and brittle dependencies.
