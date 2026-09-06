---
package: addy
name: references/orchestration-patterns.md
slug: references-orchestration-patterns-md
kind: reference
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# references/orchestration-patterns.md

## Definition — verbatim
> "Reference catalog of agent orchestration patterns this repo endorses, plus anti-patterns to avoid." — references/orchestration-patterns.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 23 | references | Cites reference document for multi-agent collaboration patterns |
| commands/ship.toml | 23 | references | Cites reference document for multi-agent collaboration patterns |

## Consumes
Multi-agent collaboration requirements, subagent role definitions, and workflow orchestration commands.

## Produces
Catalog of endorsed patterns (direct invocation, parallel fan-out, sequential pipeline, coordinator-worker) and antipattern rules.

## When applied
Consulted when designing slash commands or multi-agent workflows that coordinate multiple specialized personas.

## Sub-concepts
fan-out-orchestrator

## Part of
addy:Ship

## Implementation status
clean

## Design notes
`references/orchestration-patterns.md` is an authoritative reference document establishing architectural guardrails for multi-agent collaboration. It enforces key orchestration invariants, such as keeping the user or slash command as the sole orchestrator, prohibiting arbitrary persona-to-persona delegation, and requiring flat fan-out structures to prevent unbounded recursion and uncontrolled context inflation.
