---
package: addy
name: api-and-interface-design
slug: api-and-interface-design
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/api-and-interface-design.json, sha256: b297745de905b4b40845551acb19c4f91e66141cb1231fda1b760f5abfb157a3}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# api-and-interface-design

## Definition — verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/api-and-interface-design.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/api-and-interface-design.md | 1 | defined here | Summary defining the scope and rules of the api-and-interface-design skill. |
| README.md | 40 | used here | Listed as an example of automatic skill activation when designing an API. |
| skills/git-workflow-and-versioning/SKILL.md | 284 | used here | Referenced for understanding Hyrum's Law when determining breaking API changes. |
| skills/spec-driven-development/SKILL.md | 61 | used here | Referenced for designing boundary contracts between dependent modules in system maps. |

## Consumes
Domain models, functional requirements, and inter-module dependency relationships.

## Produces
Formally specified REST endpoints, GraphQL schemas, and TypeScript interface contracts with explicit error semantics.

## When applied
When designing APIs, establishing module boundaries, or defining public interface contracts.

## Sub-concepts
none

## Part of
addy:Build

## Implementation status
defects: doc-drift, orphan

## Design notes
api-and-interface-design establishes a contract-first discipline for software boundaries and service interfaces. By codifying Hyrum's Law, strict error shapes, and boundary validation into the design process before implementation, it prevents breaking changes, hidden assumptions, and integration failures across consuming modules.
