---
package: rjm
name: Memory-First Gate
slug: memory-first-gate
kind: gate
package_phase: rjm:Spec
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory-First Gate

## Definition — verbatim
> "After Step 0 passes, surface the backward-looking context the proposer should have read before drafting requirements." — .claude/commands/spec.md:37

## Also called — verbatim
Step 0.5: Memory-First Gate — .claude/commands/spec.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 32 | used here | Cited as a blocking gate component within the four-tier memory architecture. |
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 12 | defined here | Codified in ADR title and decision as a mandatory blocking quality gate in the specification pipeline. |
| .claude/commands/spec.md | 35 | defined here | Implemented as Step 0.5 in the /spec command surfacing retrospective context prior to drafting requirements. |

## Consumes
Specification proposal context and queries against prior art, retrospectives, and ADR archives.

## Produces
Retrospective architectural context and verification that existing system history has been examined before new requirements are authored.

## When applied
Mandatory blocking step executed during Phase 1 (/spec) immediately after Step 0 (First Principles Gate) and before requirements authoring.

## Sub-concepts
none

## Part of
spec-pipeline

## Implementation status
defects: missing-path, internal-contradiction, doc-drift

## Design notes
The Memory-First Gate enforces Chesterton's Fence at the inception of the development lifecycle. Before drafting new requirements, the proposer must query existing architectural decisions, past retrospectives, and known constraints to understand why current systems were built the way they are. By making this gate blocking in /spec, rjm prevents agents from reinventing wheels, violating existing invariants, or repeating past architectural failures.
