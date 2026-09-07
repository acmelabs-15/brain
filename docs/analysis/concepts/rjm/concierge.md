---
package: rjm
name: concierge
slug: concierge
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# concierge

## Definition — verbatim
> "a real signal from real customers. It can be a landing page, a concierge run" — .claude/skills/business-strategy/references/lean-startup.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 42 | defined here | An MVP format where service is manually performed by hand for early customers to test value propositions. |

## Consumes
Service workflow design and manual operational labor to provide direct value to target users.

## Produces
High-fidelity qualitative feedback and customer willingness-to-pay validation without building software.

## When applied
When testing service or workflow value propositions before committing capital to engineering automation.

## Sub-concepts
none

## Part of
minimum-viable-product, lean-startup

## Implementation status
clean

## Design notes
A concierge MVP delivers value to early customers through manual, highly customized human effort rather than automated software. In rjm's framework, this technique allows founders to test whether customers actually care about the solution before incurring software engineering costs.
