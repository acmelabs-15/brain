---
package: rjm
name: ADR-only
slug: adr-only
kind: pattern
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-only

## Definition — verbatim
> "#### Use **ADR-only** when:" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 86 | defined here | Placement rule defining criteria for decisions documented purely as architectural records. |

## Consumes
Technical design decisions impacting system structure, dependencies, interfaces, or quality attributes.

## Produces
An architectural decision record in `.agents/architecture/` with no associated governance document.

## When applied
Used when a decision is technical, changes infrequently, and requires no ongoing operational compliance enforcement.

## Sub-concepts
none

## Part of
decision-classification-matrix

## Implementation status
defects: missing-path

## Design notes
A placement category for technical decisions that determine system structure, component boundaries, or technology selections but require no active operational policy enforcement. These records are archived immutably in `.agents/architecture/` to preserve historical architectural context.
