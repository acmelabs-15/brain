---
package: rjm
name: skills-pattern-superiority
slug: skills-pattern-superiority
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skills-pattern-superiority

## Definition — verbatim
(used, not defined)

> "- Prior art: ADR-030 (skills-pattern-superiority) establishes that skills give" — .agents/architecture/ADR-064-commands-to-skills-migration.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 83 | used here | Cited from ADR-030 as the architectural precedent establishing that skills provide lower overhead and better tool access than subagents. |

## Consumes
Tool invocation requirements, agent overhead metrics, and execution context constraints.

## Produces
Architectural preference favoring skill-based execution models over heavy subagent delegations.

## When applied
Applied during architectural design and workflow decomposition when deciding between skills and subagents.

## Sub-concepts
none

## Part of
architecture-principles

## Implementation status
defects: doc-drift

## Design notes
`skills-pattern-superiority` is an architectural precedent established in ADR-030. It recognizes that skills provide direct, scoped tool access with significantly lower latency and token overhead compared to spawning subagents. By preferring skills as the primary unit of capability packaging, rjm keeps workflows fast, lightweight, and tightly integrated into the agent's main loop.
