---
package: addy
name: Research isolation
slug: research-isolation
kind: pattern
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

# Research isolation

## Definition — verbatim
> "When a task requires reading large amounts of material that shouldn't pollute the main context, spawn a research sub-agent that returns only a digest." — references/orchestration-patterns.md:98

## Also called — verbatim
`context preservation` — references/orchestration-patterns.md:96

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 96 | defined here | Pattern catalog entry describing the delegation of large-volume document or code analysis to sub-agents to preserve main session context |

## Consumes
Large-volume codebases, documentation repositories, architectural decisions, and targeted search queries

## Produces
Concise synthesized research digest returned to the main session

## When applied
When investigation results are much smaller than the input consumed and the main session needs headroom for downstream work

## Sub-concepts
explore

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Research isolation preserves the primary agent's context window by offloading extensive file scanning, repository exploration, or documentation searches to a temporary sub-agent (such as Claude Code's built-in Explore agent). Returning only a synthesized digest prevents context window pollution, ensuring the lead session retains sufficient cognitive capacity and headroom for critical decision-making and implementation.
