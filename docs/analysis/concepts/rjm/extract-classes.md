---
package: rjm
name: Extract classes
slug: extract-classes
kind: technique
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

# Extract classes

## Definition — verbatim
> "**Extract classes**: When logic is duplicated across classes, use inheritance (if variations of a common concept) or delegation (if shared need resolved in a common way)." — .claude/skills/golden-principles/references/design-dry-principle.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 50 | defined here | Documented remediation technique using inheritance or delegation when logic is duplicated across classes. |

## Consumes
Cross-class duplicate logic, feature clusters, multi-class data clumps, and overgrown god classes.

## Produces
Extracted domain classes, delegate services, base classes, and focused single-responsibility components.

## When applied
Applied during architectural decomposition when redundancy spans multiple classes and cannot be resolved through method extraction within a single class boundary.

## Sub-concepts
none

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Extract classes addresses cross-class structural duplication in rjm. When distinct classes duplicate clusters of methods and state, this technique resolves the redundancy by extracting the commonality into a dedicated collaborator (delegation) or parent type (inheritance). This enforces single responsibility and prevents divergent evolutions across collaborating types.
