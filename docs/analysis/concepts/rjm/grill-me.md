---
package: rjm
name: Grill Me
slug: grill-me
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grill Me

## Definition — verbatim
> "Adversarial interview that walks the design tree before any code; proposes answers from the codebase" — docs/getting-started.md:73

## Also called — verbatim
`requirements-interview` — docs/getting-started.md:73

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 73 | defined here | Defined as Phase 1 of the 7-phase pipeline invoked via `/spec` (requirements-interview) producing a structured PRD. |

## Consumes
Problem statement, user requests, and codebase context.

## Produces
Structured PRD (Problem, User stories, Data model, Acceptance criteria).

## When applied
> "Start here for every non-trivial feature" — docs/getting-started.md:73

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Grill Me is the adversarial requirements discovery phase in rjm. Invoked via `/spec` using the requirements-interview skill, it walks developers through design trade-offs and suggests answers based on the codebase prior to coding, preventing ambiguity and downstream architectural defects.
