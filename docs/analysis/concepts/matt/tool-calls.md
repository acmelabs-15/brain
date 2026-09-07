---
package: matt
name: tool calls
slug: tool-calls
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tool calls

## Definition — verbatim
(used, not defined)

> "the agent then burns [tool calls](https://www.aihero.dev/ai-coding-dictionary/tool-call) re-fetching chunks and never reaches the end." — docs/engineering/to-tickets.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 74 | used here | Warns that very large specs cause agents to waste tool calls repeatedly re-fetching chunks. |
| external/to-tickets.md | 62 | used here | External catalog explanation of tool calls wasted when re-fetching oversized specs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An LLM execution mechanism where an agent invokes external environment operations, designated as name-only per D-023 because it represents an AI execution primitive rather than an engineering lifecycle concept.
