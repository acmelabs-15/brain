---
package: rjm
name: Premature abstraction
slug: premature-abstraction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Premature abstraction

## Definition — verbatim
> "- **Premature abstraction**: Creating abstractions before finding commonalities" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 41 | used here | Cited in withdrawal rationale as the anti-pattern committed by projecting multi-matcher growth without evidence |
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 61 | defined here | Listed in Common Mistakes as creating abstractions before finding commonalities in actual requirements |
| .claude/skills/golden-principles/references/design-dry-principle.md | 64 | defined here | Listed in DRY violations cautioning to wait until a pattern appears three times before abstracting |
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 177 | defined here | Defined as an architectural red flag adding shallow layers in case they are needed later |

## Consumes
Software architecture proposals, domain models, code duplication assessments.

## Produces
Critical design feedback recommending postponement of abstraction until multiple concrete variants exist.

## When applied
When reviewing proposed abstractions, frameworks, or generalized interfaces.

## Sub-concepts
speculative-generality-smell, rule-of-three

## Part of
golden-principles, cva-analysis, philosophy-of-software-design

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Premature abstraction is a pervasive software design anti-pattern warned against throughout rjm's engineering library (Coplien's CVA analysis, the DRY principle reference, Ousterhout's Philosophy of Software Design, and ADR-061). It occurs when developers introduce architectural layers, indirection, or generalizations based on speculative future needs rather than observed variations, resulting in shallow classes, leaked complexity, and maintenance overhead.
