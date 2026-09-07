---
package: rjm
name: concern
slug: concern
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

# concern

## Definition — verbatim
> "A **concern** is a set of information that affects the code." — .claude/skills/golden-principles/references/design-separation-of-concerns.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 11 | defined here | Introduced and defined as the fundamental unit of modular decomposition and information scoping. |

## Consumes
Domain requirements, technical features, data access policies, communication channels, and system responsibilities.

## Produces
Distinct modular boundaries, cohesive architectural components, and isolated units of change.

## When applied
Applied during system decomposition, domain modeling, and architectural boundary definition to group cohesive information together.

## Sub-concepts
none

## Part of
separation-of-concerns

## Implementation status
defects: missing-path

## Design notes
In rjm's architecture, a concern is the fundamental atomic unit of system decomposition. By defining a concern as a set of information that affects code, the engineering methodology ensures that distinct operational responsibilities (validation, calculation, persistence, notification) are isolated so that changes to one concern cannot cascade into or destabilize unrelated areas of the system.
