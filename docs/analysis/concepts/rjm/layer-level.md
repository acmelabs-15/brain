---
package: rjm
name: Layer Level
slug: layer-level
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Layer Level

## Definition — verbatim
> "### Layer Level" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 50 | defined here | Section heading separating presentation, business logic, and data access tiers. |

## Consumes
Architectural subsystem definitions, user interface controllers, domain business logic, and data persistence layers.

## Produces
Strict tiered architectural boundaries (Presentation, Business Logic, Data Access) with unidirectional dependency flows.

## When applied
Applied during macro-architectural structuring and boundary enforcement to prevent business logic or persistence details from bleeding into presentation layers.

## Sub-concepts
none

## Part of
levels-of-separation

## Implementation status
defects: missing-path

## Design notes
Layer Level separation enforces horizontal architectural partitioning in rjm. By establishing strict boundaries between Presentation, Business Logic, and Data Access, systems prevent UI changes from breaking persistence contracts and keep core business rules decoupled from transport and rendering mechanics.
