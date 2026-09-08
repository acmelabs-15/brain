---
package: rjm
name: Status Definitions
slug: status-definitions
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Status Definitions

## Definition — verbatim
(used, not defined)

> "### Status Definitions" — templates/agents/architect.shared.md:484

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 484 | defines | Reference table defining allowable design review verdicts, their semantic meanings, and their blocking status for CI gates. |

## Consumes
Design review evaluations, issue summaries, and architecture recommendations.

## Produces
Machine-parseable status and blocking flag in design review YAML frontmatter.

## When applied
Applied when completing the verdict section of a design review document.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Standardizes the enumerated statuses (`APPROVED`, `NEEDS_CHANGES`, `NEEDS_ADR`, `BLOCKED`, `REJECTED`) and blocking values in design reviews, enabling automated CI pipeline gating.
