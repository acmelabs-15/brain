---
package: addy
name: The Context Hierarchy
slug: the-context-hierarchy
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Context Hierarchy

## Definition — verbatim
> "Structure context from most persistent to most transient:" — skills/context-engineering/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 20 | defined here | Section heading introducing the five-tier persistence structure for agent context |

## Consumes
Project rules files, specifications, codebase source files, error logs, and conversation history.

## Produces
A structured five-tier context model preventing both context starvation and context flooding.

## When applied
When initializing a coding session, configuring rules files, or structuring inputs for an agent task.

## Sub-concepts
spec-architecture-docs, relevant-source-files, error-output-test-results, conversation-history

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A structured framework organizing agent context into five distinct tiers ordered by persistence: Level 1 Rules Files, Level 2 Spec / Architecture Docs, Level 3 Relevant Source Files, Level 4 Error Output / Test Results, and Level 5 Conversation History. This hierarchy balances persistent project conventions against transient task details to maintain model focus.
