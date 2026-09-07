---
package: rjm
name: Measure First
slug: measure-first
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Measure First

## Definition — verbatim
> "Identify what's actually used vs. declared" — .claude/agents/janitor.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 76 | defined here | First step of the execution strategy requiring identification of actual usage before modifying code. |

## Consumes
Declared symbols, exports, imports, dependencies, and configuration entries across the codebase.

## Produces
Evidence of active versus unused constructs to establish an accurate baseline before modification.

## When applied
At the onset of any cleanup task before deleting or refactoring any code.

## Sub-concepts
none

## Part of
execution-strategy

## Implementation status
clean

## Design notes
Enforces empirical verification before modifying code. Rather than assuming unreferenced or declared code is safe to delete, Measure First directs agents to trace call sites, analyze runtime usage, and inspect imports, preventing erroneous deletion of dynamically loaded or reflection-invoked assets.
