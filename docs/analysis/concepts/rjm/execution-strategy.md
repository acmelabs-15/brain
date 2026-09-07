---
package: rjm
name: Execution Strategy
slug: execution-strategy
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Execution Strategy

## Definition — verbatim
> "## Execution Strategy" — .claude/agents/janitor.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 74 | defined here | Section heading defining the 5-step operational discipline for executing code debt removal. |
| templates/agents/janitor.shared.md | 82 | defined here | Section heading defining the janitor execution workflow across shared templates. |

## Consumes
Scoped cleanup areas and prioritized debt removal tasks.

## Produces
A sequenced execution pipeline: Measure First, Delete Safely, Simplify Incrementally, Validate Continuously, Document Nothing.

## When applied
Whenever the janitor agent executes code cleanup tasks.

## Sub-concepts
measure-first, delete-safely, simplify-incrementally, validate-continuously, document-nothing

## Part of
janitor-agent

## Implementation status
clean

## Design notes
Provides the structured 5-step lifecycle governing how the janitor agent applies debt removal. By enforcing measurement prior to alteration, safe deletion through comprehensive test coverage, incremental refactoring, continuous test validation, and refusal to generate defensive comments, it ensures aggressive simplification without destabilizing the system.
