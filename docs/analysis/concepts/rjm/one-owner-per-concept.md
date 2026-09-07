---
package: rjm
name: One owner per concept
slug: one-owner-per-concept
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# One owner per concept

## Definition — verbatim
> "- **One owner per concept**: each concept (Session, Agent, Run) has exactly one canonical type in the inner layer. Adapters map to and from that type. Two competing types for the same concept across layers is a sign the boundary is missing." — .claude/skills/software-engineering-library/references/clean-architecture.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 121 | defined here | Boundary protection rule requiring a single canonical inner type per domain concept with adapter mappings. |

## Consumes
Domain concepts and their representations across multiple subsystems.

## Produces
Single canonical inner domain type per concept.

## When applied
Applied when modeling system concepts to prevent competing duplicate types across layers.

## Sub-concepts
none

## Part of
boundary-protection

## Implementation status
clean

## Design notes
One owner per concept guarantees that every core domain entity has exactly one authoritative definition in the inner layer. In rjm, this prevents drift and confusion where different agents or adapters define incompatible versions of sessions, runs, or agent states.
