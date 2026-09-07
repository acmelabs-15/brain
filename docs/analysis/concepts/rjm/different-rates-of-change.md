---
package: rjm
name: Different rates of change
slug: different-rates-of-change
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Different rates of change

## Definition — verbatim
> "- **Different rates of change**: Code that changes for different reasons should remain separate" — .claude/skills/golden-principles/references/design-dry-principle.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 63 | defined here | Defined as an exception to DRY where code changing for distinct reasons must remain decoupled. |

## Consumes
Code units undergoing different frequencies, lifecycle stages, or external regulatory drivers of evolution.

## Produces
Architectural boundaries isolating fast-moving experimental logic from slow-moving, stable core algorithms.

## When applied
Applied when reviewing shared abstractions that bundle frequently mutated business rules with rarely changed infrastructure logic.

## Sub-concepts
none

## Part of
when-not-to-dry

## Implementation status
defects: missing-path

## Design notes
Different rates of change is a foundational decoupling heuristic in rjm. When code units that evolve at radically different speeds (e.g., UI display logic versus cryptographic verification) are merged into a shared abstraction to satisfy DRY, every change to volatile logic forces unnecessary testing, deployments, and regression risks on stable components. Preserving separation preserves stability.
