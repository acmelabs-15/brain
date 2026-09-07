---
package: rjm
name: Construction
slug: construction
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

# Construction

## Definition — verbatim
> "- **Construction**: Same object creation duplicated" — .claude/skills/golden-principles/references/design-dry-principle.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 19 | defined here | Enumerated as a scope of redundancy where identical object instantiation logic is duplicated across callers. |

## Consumes
Object instantiation expressions, constructor invocations, initialization parameters, and configuration arguments.

## Produces
Factory methods, builder abstractions, dependency injection bindings, and centralized creation routines.

## When applied
Applied during architectural reviews and refactoring when identical complex instantiation sequences or constructor calls appear in multiple call sites.

## Sub-concepts
extract-methods

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Construction redundancy in rjm refers to scattering duplicate object creation and configuration logic across the codebase. When parameters or construction invariants evolve, scattered constructor calls require widespread edits and risk partial updates. Centralizing construction logic into factories or dedicated methods encapsulates instantiation knowledge and safeguards object integrity.
