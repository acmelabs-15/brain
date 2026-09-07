---
package: rjm
name: architect agent
slug: architect-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# architect agent

## Definition — verbatim
(used, not defined)

> "Exceptions that do not include this analysis are rejected by the architect agent." — .agents/architecture/ADR-053-adr-exception-criteria.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 47 | used here | Designated as the authority responsible for reviewing and rejecting non-compliant ADR exception proposals. |
| docs/agent-metrics.md | 57 | used here | Regex pattern in commit analysis measuring invocation rate and coverage of the architect agent. |

## Consumes
ADR proposals, design review requests, architectural trade-offs, and multi-agent debate logs.

## Produces
Architectural decisions, DESIGN-REVIEW synthesis panels, exception verdicts, and decomposition plans.

## When applied
Invoked during system design phases, architectural reviews, ADR evaluations, and complex multi-agent problem decomposition.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The architect agent is an autonomous specialist role responsible for system-wide architectural integrity, governance enforcement, and cross-cutting design synthesis. In rjm's multi-agent framework, the architect agent evaluates proposed architectural changes, conducts structured design reviews, and enforces quality gates that prevent unvetted exceptions or regressions from entering the codebase.
