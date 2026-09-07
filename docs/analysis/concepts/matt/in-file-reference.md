---
package: matt
name: In-file reference
slug: in-file-reference
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

# In-file reference

## Definition — verbatim
> "2. **In-file reference** is consulted on demand. Often a legitimately flat peer-set (every rule of a review on one rung), which is a fine arrangement, not a smell." — skills/productivity/writing-for-agents/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 34 | defined here | Middle rung of the information hierarchy containing on-demand rules, definitions, and flat peer-sets kept in-file. |

## Consumes
Universal rules, definitions, and constraints required across all execution branches.

## Produces
Inlined reference sections or flat rule peer-sets within the document body.

## When applied
When reference material is consulted on demand across multiple branches and its inlining does not bury sequential steps.

## Sub-concepts
none

## Part of
information-hierarchy

## Implementation status
clean

## Design notes
Occupies the second tier of the information hierarchy. It provides immediately accessible context without disk reads, appropriate for flat rule-sets or universal domain rules, provided it does not dilute the agent's attention on primary procedural steps.
