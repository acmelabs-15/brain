---
package: addy
name: No nested teams
slug: no-nested-teams
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# No nested teams

## Definition — verbatim
> "No nested teams" — references/orchestration-patterns.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 146 | used here | Platform-enforced constraint preventing teammates in Agent Teams from creating nested teams |

## Consumes
Agent Teams configuration and execution runtime

## Produces
Flat, single-tier peer agent collaboration topologies

## When applied
Enforced continuously during Agent Teams execution

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
The "No nested teams" constraint ensures that members of an Agent Team cannot spawn subordinate teams of their own. This platform-level safeguard blocks multi-tier team hierarchies, preserving transparent peer-to-peer communication and predictable resource consumption during collaborative multi-agent problem solving.
