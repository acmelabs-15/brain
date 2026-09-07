---
package: rjm
name: Published Language
slug: published-language
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Published Language

## Definition — verbatim
> "- **Context Map**: the explicit description of how bounded contexts relate (Customer-Supplier, Conformist, Shared Kernel, Partnership, Open Host Service, Published Language)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 57 | defined here | Applies the Domain-Driven Design Published Language pattern to standardize verifier output schemas |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 24 | defined here | Defines Published Language within the context map relationship catalog of Domain-Driven Design |

## Consumes
Inter-context communication requirements across independent subsystems, verifiers, or tools.

## Produces
Shared, documented schema and vocabulary agreed upon across bounded contexts as an interchange standard.

## When applied
Applied when designing interfaces between disparate verifiers, dispatchers, and tools to maintain clean boundaries without direct coupling.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Published Language is a Domain-Driven Design integration pattern providing a well-documented, standard translation schema used by multiple bounded contexts to exchange information. In rjm's architecture, adopting Published Language (such as standardizing `fetched_pages_complete` across all GitHub verifier scripts) ensures seamless gate evaluation without tight coupling between the dispatcher and individual verifiers.
