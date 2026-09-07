---
package: rjm
name: ADR exceptions
slug: adr-exceptions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR exceptions

## Definition — verbatim
(used, not defined)

> "The broader issue is that ADR exceptions are structurally easier to create than to challenge." — .agents/architecture/ADR-053-adr-exception-criteria.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 35 | used here | Describes the structural asymmetry of governance exceptions and the necessity of rigorous justification. |

## Consumes
An existing architecture decision record, a specific proposed non-compliant implementation, and a Chesterton's Fence analysis.

## Produces
A formal, approved exception entry documented within an ADR and recorded in `.agents/governance/ADR-EXCEPTION-CRITERIA.md`.

## When applied
When an implementation genuinely cannot satisfy an existing ADR mandate and requires explicit architectural authorization to deviate.

## Sub-concepts
- chesterton-s-fence-analysis

## Part of
none

## Implementation status
clean

## Design notes
ADR exceptions are governance deviations that permit specific components or pull requests to bypass established architectural rules. In rjm, informal or undocumented exceptions are strictly prohibited because they create slippery-slope precedents that erode architectural integrity. Instead, ADR exceptions must undergo formal review, include documented Chesterton's Fence analyses, and receive explicit approval from the architect agent.
