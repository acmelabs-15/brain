---
package: addy
name: Explore
slug: explore
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Explore

## Definition — verbatim
> "**On Claude Code, use the built-in `Explore` subagent** rather than defining a custom research persona." — references/orchestration-patterns.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 113 | used here | Recommended built-in read-only subagent for implementing research isolation on Claude Code |

## Consumes
Codebase search queries, documentation reading requests, architectural investigation tasks

## Produces
Read-only codebase analysis, call-site listings, and research digests

## When applied
When executing research isolation tasks requiring read-only codebase exploration

## Sub-concepts
none

## Part of
research-isolation, orchestration-patterns

## Implementation status
clean

## Design notes
Explore is Claude Code's built-in read-only subagent persona, running on a fast, cost-efficient model (Haiku) with write tools disabled. In addy's orchestration catalog, it serves as the canonical implementation of research isolation, allowing agents to explore extensive repositories and extract digests without risking unintended file edits or polluting primary context.
