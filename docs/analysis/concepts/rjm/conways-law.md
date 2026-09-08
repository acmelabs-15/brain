---
package: rjm
name: conways-law
slug: conways-law
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# conways-law

## Definition — verbatim
> "Organization structure mirrors architecture" — templates/agents/architect.shared.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 54 | applies | Listed as a secondary legacy and risk architecture principle indicating that organization structure mirrors architecture. |

## Consumes
Organizational structure, communication paths, and service boundaries.

## Produces
Architectural decisions aligned with organizational communication patterns and team boundaries.

## When applied
Referenced during system architecture reviews when evaluating legacy risk, service decomposition, or cross-team interfaces.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Conway's Law serves as an architectural heuristic in `templates/agents/architect.shared.md` reminding system designers that software architecture inevitably reflects organizational communication structures.
