---
package: rjm
name: Class Level
slug: class-level
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

# Class Level

## Definition — verbatim
> "### Class Level" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 39 | defined here | Section heading describing Single Responsibility Principle (SRP) separation across cohesive classes. |

## Consumes
Class definitions, encapsulated state, method clusters, and object responsibilities.

## Produces
Distinct single-responsibility classes (e.g., validators, pricing engines, repositories, notification services) with focused collaborators.

## When applied
Applied during object-oriented design and refactoring to ensure every class has exactly one reason to change.

## Sub-concepts
extract-classes

## Part of
levels-of-separation

## Implementation status
defects: missing-path

## Design notes
Class Level separation embodies the Single Responsibility Principle (SRP) within rjm's architecture. Rather than aggregating multiple capabilities into monolithic classes, concerns are partitioned across focused collaborators (such as OrderValidator, PricingEngine, and OrderRepository). This ensures modular testability, simplifies maintenance, and isolates changes to single responsibility domains.
