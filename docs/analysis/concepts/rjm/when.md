---
package: rjm
name: WHEN
slug: when
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# WHEN

## Definition — verbatim
> "Precondition or trigger" — .agents/governance/ears-format.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 43 | defined here | Tabular definition of the EARS keyword specifying the precondition or trigger event initiating system behavior. |

## Consumes
Identified system events, user actions, or operational state triggers.

## Produces
The triggering clause in an EARS requirement statement.

## When applied
Applied when authoring event-driven and complex requirements in specifications and PRDs.

## Sub-concepts
none

## Part of
- basic-syntax
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
WHEN is the primary temporal trigger keyword in the rjm EARS requirements syntax. It binds system actions to unambiguous events (e.g., "WHEN a PR is opened" or "WHEN the user submits a PR"), ensuring that requirements specify exact entry conditions rather than loose narrative intentions. Without explicit WHEN triggers, specifications leave conditionality implicit and open to divergent agent interpretation.
