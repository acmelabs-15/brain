---
package: matt
name: turn
slug: turn
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# turn

## Definition — verbatim
(used, not defined)

> "- **Context load**: the cost of always-loaded material on the agent's window: an `AGENTS.md` line, a skill description, anything sitting in context every [turn](https://www.aihero.dev/ai-coding-dictionary/turn) whether or not it fires." — docs/productivity/writing-for-agents.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 19 | used here | Refers to an interaction cycle in an agent session across which persistent context load is repeatedly incurred. |
| external/writing-for-agents.md | 34 | used here | Links turn to the dictionary definition of an agent execution cycle. |

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
An external execution metric from conversational agent harnesses representing a single request-response cycle, classified as name-only per D-023 because it is an agent runtime primitive rather than a package lifecycle concept.
