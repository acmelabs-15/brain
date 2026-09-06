---
package: addy
name: boundary validation
slug: boundary-validation
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# boundary validation

## Definition — verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/planning-and-task-breakdown/notifications-spec.md | 9 | used here | Specified as a required implementation rule for preference read/update API endpoints. |
| external/api-and-interface-design.md | 1 | defined here | Highlighted as a core engineering technique for enforcing contract invariants across REST, GraphQL, and module interfaces. |

## Consumes
Input data, schema definitions, and type contracts.

## Produces
Validated data structures or explicit semantic rejection errors at interface boundaries.

## When applied
When receiving input from untrusted clients, external services, or inter-module boundaries before processing.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
An interface engineering technique that validates inputs at the periphery of an application or module, rejecting malformed data before it reaches internal business logic and preventing schema pollution.
