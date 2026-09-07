---
package: rjm
name: PRD to Spec
slug: prd-to-spec
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

# PRD to Spec

## Definition — verbatim
> "Formalizes the PRD into durable REQ/DESIGN/TASK files; runs analyst gap-check and critic pre-mortem" — docs/getting-started.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 74 | defined here | Defined as Phase 2 of the 7-phase pipeline formalizing a PRD into durable REQ/DESIGN/TASK specifications. |

## Consumes
Structured PRD produced during the Grill Me phase after resolving open interview questions.

## Produces
`.agents/specs/requirements/REQ-NNN-*.md`, `DESIGN-NNN-*.md`, `TASK-NNN-*.md`.

## When applied
> "After the interview resolves all open questions" — docs/getting-started.md:74

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
PRD to Spec is the specification formalization phase in rjm. It takes a raw PRD from the requirements interview and decomposes it into structured, durable specification documents while executing automated analyst gap checks and critic pre-mortem reviews to ensure requirements integrity.
