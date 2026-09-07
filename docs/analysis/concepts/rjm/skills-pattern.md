---
package: rjm
name: skills pattern
slug: skills-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-030-skills-pattern-superiority.md, sha256: 2b4476fb3d8bdabdef259ffe5e1758e9ae519b3575b1d85b21319793202765bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skills pattern

## Definition — verbatim
> "### The Skills Pattern" — .agents/architecture/ADR-030-skills-pattern-superiority.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-030-skills-pattern-superiority.md | 29 | defined here | Architectural pattern defining direct in-context MCP tool access within skills. |

## Consumes
MCP server definitions and skill frontmatter declarations.

## Produces
Direct tool execution capability within current conversational context without subagent spawn latency.

## When applied
> "Instead of delegating to subagents, **skills provide direct MCP tool access** within the current context." — .agents/architecture/ADR-030-skills-pattern-superiority.md:31

## Sub-concepts
allowed-tools

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An architectural pattern providing direct in-context tool execution through skill declarations rather than routing requests through delegated subagents. By circumventing process spawn overhead and context replication, the pattern achieves lower invocation latency while dynamically exposing tool catalogs on demand.
