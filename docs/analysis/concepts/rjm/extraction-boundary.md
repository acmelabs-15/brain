---
package: rjm
name: extraction boundary
slug: extraction-boundary
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extraction boundary

## Definition — verbatim
> "If the hybrid percentage exceeds 20%, re-evaluate the extraction boundary." — .agents/analysis/adr-045-inventory-audit.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 38 | used here | Quoted from ADR-045 as the governance threshold for determining framework component separation. |

## Consumes
Artifact inventory, dependency graphs, and classification ratios of repository components.

## Produces
A clear architectural boundary dividing shared framework tooling from repository-specific domain logic.

## When applied
Applied when scoping framework extraction initiatives to determine what assets migrate to plugins.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
The extraction boundary establishes the decoupling interface between generic multi-agent capabilities and domain-specific project code, ensuring that extracted plugins remain completely portable and free of hardcoded host paths.
