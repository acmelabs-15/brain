---
package: rjm
name: Research Phase
slug: research-phase
kind: phase
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Research Phase

## Definition — verbatim
> "1. **Research Phase**: Check existing knowledge, fetch URLs, perform web searches" — .claude/commands/research.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 47 | defined here | First phase in the `/research` command, checking local memories and querying external web sources. |

## Consumes
Topic prompt, local repository memories, and search queries.

## Produces
Raw fetched web content, search summaries, and local memory citations.

## When applied
Triggered as the initial operational step of the research workflow.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
The initial data collection stage of rjm's research workflow. It mandates checking internal memory stores before reaching out to external web search or fetching documentation URLs, avoiding redundant external calls and grounding subsequent analysis in existing architectural context.
