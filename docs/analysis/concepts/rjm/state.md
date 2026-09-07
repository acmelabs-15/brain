---
package: rjm
name: State
slug: state
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

# State

## Definition — verbatim
> "- **State**: Same data stored in multiple places" — .claude/skills/golden-principles/references/design-dry-principle.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 15 | defined here | Enumerated as one of the primary scopes of redundancy under the DRY principle. |

## Consumes
Variable declarations, cache stores, persistent records, database tables, and memory structures holding system data.

## Produces
Single authoritative sources of truth, normalized data representations, and consolidated state management paths.

## When applied
Evaluated during design review, data modeling, and refactoring whenever identical data values or entity properties are maintained across multiple runtime or storage locations.

## Sub-concepts
none

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
In rjm's engineering standards, redundancy of state represents a severe threat to consistency where synchronized updates must be maintained across diverging copies. The DRY principle expands beyond syntactic code duplication to target duplicated state, mandating a single authoritative representation to eliminate split-brain synchronization bugs and orphaned records.
