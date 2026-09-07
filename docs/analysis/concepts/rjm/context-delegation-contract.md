---
package: rjm
name: Context delegation contract
slug: context-delegation-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context delegation contract

## Definition — verbatim
> "The analyst retrieves PR, issue, and CI context directly using the declared" — .claude/agents/analyst.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 172 | defined here | Section heading establishing division of context retrieval between orchestrator and analyst. |
| src/claude/analyst.md | 172 | defined here | Source definition of the context delegation contract. |
| templates/agents/analyst.shared.md | 186 | defined here | Shared analyst template specifying orchestrator versus subagent context retrieval responsibilities. |

## Consumes
Delegation prompts, declared MCP tools, and required investigation inputs.

## Produces
Clear operational boundaries establishing what subagents retrieve autonomously versus what the orchestrator must provide.

## When applied
Applied during agent delegation and when evaluating whether missing evidence blocks analysis.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Context delegation contract establishes explicit tool and responsibility boundaries between the orchestrator and subagents. It defines that subagents autonomously retrieve context via declared read-only MCP tools, while the orchestrator must supply execution outputs (git, builds, shell commands), defining precise failure modes for missing data.
