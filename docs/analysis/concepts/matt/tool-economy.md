---
package: matt
name: Tool economy
slug: tool-economy
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tool economy

## Definition — verbatim
> "- **Tool economy**: did the agent make expensive tool calls that could be streamlined? Is there any custom tooling (CLI's, MCP's) that is particularly token-inefficient? _Use when_ the agent made an expensive tool call." — skills/in-progress/retro/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 21 | defined here | Retrospective evaluation category assessing whether agent tool calls or custom tooling are token-inefficient. |

## Consumes
Session logs tracking tool invocation history, token consumption, and custom CLI/MCP performance.

## Produces
Recommendations to streamline expensive tool calls or optimize custom tooling token efficiency.

## When applied
> "_Use when_ the agent made an expensive tool call." — skills/in-progress/retro/SKILL.md:21

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
A retrospective evaluation technique focused on tool usage efficiency and context budget preservation. When coding agents execute repetitive or bloated tool calls (such as indiscriminate search or verbose CLI outputs), tool economy audits identify opportunities to streamline calls, filter responses, or rewrite custom MCP tooling to minimize token expenditure and latency.
