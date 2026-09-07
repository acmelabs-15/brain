---
package: rjm
name: CAP Theorem
slug: cap-theorem
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CAP Theorem

## Definition — verbatim
> "Distributed system trade-offs" — .claude/agents/analyst.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 240 | used here | Listed in decision frameworks table as the guiding theory for distributed system trade-offs. |
| src/claude/analyst.md | 240 | used here | Source copy listing CAP Theorem under decision frameworks. |
| templates/agents/analyst.shared.md | 231 | used here | Shared analyst template incorporating CAP Theorem into framework catalog. |
| templates/agents/architect.shared.md | 56 | used here | Shared architect template citing CAP Theorem for distributed persistence and partition handling. |

## Consumes
Distributed system requirements, network partition characteristics, and consistency constraints.

## Produces
Architectural decisions explicitly balancing consistency, availability, and partition tolerance.

## When applied
Consulted during data architecture and distributed service design when evaluating partition behavior.

## Sub-concepts
none

## Part of
architecture-reasoning-protocol, analyst-agent

## Implementation status
clean

## Design notes
CAP Theorem is a fundamental distributed computing principle referenced in rjm to govern data store and state synchronization design. It requires architects and analysts to explicitly acknowledge that under network partitions, systems must choose between consistency and availability.
