---
package: rjm
name: Resolve by interleave
slug: resolve-by-interleave
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Resolve by interleave

## Definition — verbatim
> "| Resource conflict between product and engineering | **Resolve by interleave** (debt that enables features ships first), not by picking sides |" — templates/agents/roadmap.shared.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/roadmap.shared.md | 29 | defined here | Core prioritization technique resolving product vs. engineering conflicts by interleaving debt that enables features. |

## Consumes
Competing backlog items representing engineering technical debt and product feature requests.

## Produces
Sequenced backlog schedule prioritizing enabler technical debt ahead of dependent feature deliverables.

## When applied
Applied by the roadmap agent when arbitrating resource conflicts between product and engineering teams.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: doc-drift

## Design notes
A conflict-resolution heuristic that balances product and engineering priorities by scheduling technical debt work that directly enables planned features immediately before those features, avoiding stagnation or factional gridlock.
