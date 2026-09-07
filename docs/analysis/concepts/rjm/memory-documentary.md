---
package: rjm
name: memory-documentary
slug: memory-documentary
kind: technique
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# memory-documentary

## Definition — verbatim
(used, not defined)

> "investigating patterns already in memory (use memory-documentary)." — .claude/skills/research-and-incorporate/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 10 | used here | Cited in frontmatter description as the contrasting skill to use when investigating existing memory patterns rather than researching external topics. |

## Consumes
Queries and existing memories stored across memory systems.

## Produces
Cross-system evidence synthesis and documentation of existing memory patterns.

## When applied
Used when exploring patterns already recorded in project memory systems rather than performing new external research.

## Sub-concepts
none

## Part of
memory subsystem

## Implementation status
out-of-scope

## Design notes
A memory inspection and synthesis skill in rjm used for investigating pre-existing patterns across memory stores. Implementation is out of scope per METHOD §1.2 as a memory-prefixed skill.
