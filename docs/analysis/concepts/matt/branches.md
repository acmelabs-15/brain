---
package: matt
name: branches
slug: branches
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

# branches

## Definition — verbatim
> "(a branch is a distinct case the document handles, so different runs take different paths through it)" — skills/productivity/writing-for-agents/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 14 | defined here | Distinct operational cases encoded in context pointer triggers that steer agents down specific execution paths. |

## Consumes
Document use cases, operational variants, and conditional scenarios.

## Produces
Minimal trigger branches in pointer descriptions and disclosure boundaries for secondary reference material.

## When applied
When drafting context pointer trigger conditions and structuring conditional document disclosure.

## Sub-concepts
none

## Part of
context-pointers

## Implementation status
clean

## Design notes
Defines the conditional pathways through agent instructions. By identifying distinct branches, authors can compress pointer descriptions (one trigger per branch, no synonyms) and separate universal core instructions from path-specific reference material.
