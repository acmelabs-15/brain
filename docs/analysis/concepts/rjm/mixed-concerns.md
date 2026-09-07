---
package: rjm
name: Mixed concerns
slug: mixed-concerns
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

# Mixed concerns

## Definition — verbatim
> "| Mixed concerns | Business logic in UI controllers |" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 62 | defined here | Listed in the common violations table where business logic improperly pollutes UI controllers. |

## Consumes
Components entangling presentation logic with business computations, or workflow logic with data access queries.

## Produces
Refactored components adhering to clean layer separation where presentation, domain logic, and persistence reside in separate classes.

## When applied
Flagged during architectural audits, code reviews, and quality gate evaluations when components breach level boundaries by executing unrelated domain tasks.

## Sub-concepts
none

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
Mixed concerns is a foundational violation of separation of concerns in rjm, exemplified by embedding business calculations or persistence queries inside UI controllers. This antipattern hinders automated testing, prevents UI refactoring without touching business logic, and leads to code duplication across different entry points.
