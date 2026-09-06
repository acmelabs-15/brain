---
package: addy
name: Low
slug: low
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Low

## Definition — verbatim
> "| **Low** | Theoretical risk or defense-in-depth improvement | Schedule for next sprint |" — agents/security-auditor.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 64 | defines | Defines the Low security severity tier (theoretical risk or defense-in-depth improvement) with action to schedule for the next sprint. |
| agents/web-performance-auditor.md | 121 | defines | Defines the Low performance severity tier (best practice gap with minor or speculative impact) to schedule for the next sprint. |

## Consumes
Defects representing minor best-practice gaps or speculative/theoretical concerns.

## Produces
Prioritized backlog items slated for subsequent sprint planning.

## When applied
Applied when classifying issues that do not pose an immediate operational or security threat.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
clean

## Design notes
Low allows audit personas to document defense-in-depth enhancements and best practice improvements without derailing active release or sprint goals.
