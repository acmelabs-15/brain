---
package: matt
name: Co-location
slug: co-location
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Co-location

## Definition — verbatim
> "**Co-location** is the within-file companion: where the ladder decides _how far down_ a piece sits, co-location decides _what sits beside it_ once there. Keep a concept's definition, rules, and caveats under one heading rather than scattered, so reading one part brings its neighbours with it." — skills/productivity/writing-for-agents/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 41 | defined here | Structural principle mandating that a concept's definition, rules, and caveats be grouped under a single heading. |

## Consumes
Related rules, caveats, and definitions belonging to a single concept.

## Produces
Clustered, cohesive document sections oriented around cohesive concepts.

## When applied
When structuring content within a document to prevent fragmented rules across headings.

## Sub-concepts
none

## Part of
information-hierarchy

## Implementation status
clean

## Design notes
Governs spatial proximity within documents. While progressive disclosure decides the hierarchy level of content, co-location groups a concept's definitions, rules, and edge cases under one heading so an agent reading the topic loads all relevant constraints simultaneously.
