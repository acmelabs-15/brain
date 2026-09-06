---
package: matt
name: bounded area
slug: bounded-area
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bounded area

## Definition — verbatim
(used, not defined)

> "`context` is the standing DDD word for a bounded area of the model." — docs/engineering/domain-modeling.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 58 | used here | Cited as the Domain-Driven Design rationale for naming the glossary file CONTEXT.md (referring to a bounded context of the model). |

## Consumes
Domain model boundaries and sub-domain specifications.

## Produces
Scoped vocabulary boundaries mapped in `CONTEXT-MAP.md` and isolated in individual `CONTEXT.md` files.

## When applied
When a codebase spans multiple distinct subdomains that require separate bounded vocabularies.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean in concept definition; relates to multi-context splitting guidance in docs/engineering/domain-modeling.md:55

## Design notes
Eric Evans's Domain-Driven Design concept of a bounded context within a domain model. In Matt's framework, it justifies naming the domain glossary file `CONTEXT.md` rather than `GLOSSARY.md`, aligning with `CONTEXT-MAP.md` which links multiple bounded contexts across a repository.
