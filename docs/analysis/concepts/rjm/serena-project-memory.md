---
package: rjm
name: Serena Project Memory
slug: serena-project-memory
kind: artifact
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena Project Memory

## Definition — verbatim
> "### 4A: Serena Project Memory" — .claude/skills/research-and-incorporate/references/workflow.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 312 | defined here | Detailed in Sub-phase 4A as a comprehensive project memory written via `mcp__serena__write_memory`. |

## Consumes
Core insights, key principles, practical guidance, and integration points from the research analysis.

## Produces
A durable Serena memory file at `{topic-slug}-integration`.

## When applied
Created during Sub-phase 4A of Phase 4 (Memory Integration) in research-and-incorporate.

## Sub-concepts
none

## Part of
phase-4-memory-integration, research-and-incorporate

## Implementation status
out-of-scope

## Design notes
A structured project-level memory artifact written to Serena that encapsulates high-level insights, principles, and system integration points for a researched topic. Classified with implementation out of scope as Serena is an external tool and excluded memory system under METHOD §1.2.
