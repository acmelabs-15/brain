---
package: matt
name: working memory
slug: working-memory
kind: reference
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# working memory

## Definition — verbatim
(used, not defined)
> "difficulty is the enemy because it eats the working memory you need in order to understand" — external/teach.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/teach.md | 37 | used here | Explains skill architecture designed to offload cognitive tracking and pedagogical state from active working memory. |

## Consumes
Agent context window and operational attention during interaction.

## Produces
Durable external files (learning records) that free active memory space.

## When applied
During complex conversational tasks where tracking state in conversation context risks degraded reasoning.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: orphan, doc-drift, missing-path

## Design notes
Working memory refers to the limited, high-cognitive-load attention capacity within an active agent session. In Matt's productivity skills like teach, offloading state into persistent markdown files (such as learning records and glossaries) prevents context exhaustion and reasoning degradation during multi-turn instruction.
