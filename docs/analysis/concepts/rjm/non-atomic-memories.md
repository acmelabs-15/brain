---
package: rjm
name: Non-atomic memories
slug: non-atomic-memories
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Non-atomic memories

## Definition — verbatim
> ">2000 chars or multiple concepts pollutes graph" — .claude/skills/research-and-incorporate/SKILL.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 153 | defined here | Tabulated as an anti-pattern warning that memories exceeding 2000 characters or containing multiple concepts pollute the knowledge graph. |

## Consumes
Candidate memory entries exceeding length bounds or bundling multiple concepts.

## Produces
Enforcement of the rule requiring one atomic concept per memory entry and a length strictly under 2000 characters.

## When applied
Enforced during Phase 4 (Memory Integration) quality gating and verification checklist.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
Non-atomic memories is an anti-pattern identifying the risk of storing multi-topic or oversized memory entries, which degrade associative retrieval and graph navigation accuracy.
