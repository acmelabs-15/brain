---
package: rjm
name: Layer piercing
slug: layer-piercing
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

# Layer piercing

## Definition — verbatim
> "| Layer piercing | UI directly accessing database |" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 65 | defined here | Listed in the common violations table as an architectural violation where presentation tiers bypass intermediaries to access persistence directly. |

## Consumes
Direct data access calls, raw SQL executions, or persistence context queries executed from presentation components or UI controllers.

## Produces
Restored architectural tiering, explicit service layer contracts, and encapsulated persistence operations.

## When applied
Identified during architectural dependency audits, lint checks, and code reviews when upper architectural tiers bypass intermediate domain layers.

## Sub-concepts
none

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
Layer piercing is an architectural anti-pattern in rjm where an outer layer (such as the presentation tier) circumvents business logic to interact directly with backend persistence stores. This bypasses validation rules, transactional boundaries, and authorization checks, creating tight coupling between the user interface and database schemas and rendering business logic untrustworthy.
