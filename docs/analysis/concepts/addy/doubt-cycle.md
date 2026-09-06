---
package: addy
name: Doubt cycle
slug: doubt-cycle
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Doubt cycle

## Definition — verbatim
> "Doubt cycle:" — skills/doubt-driven-development/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 54 | defined here | Checklist defining the five repeatable steps (CLAIM, EXTRACT, DOUBT, RECONCILE, STOP) of doubt-driven development. |

## Consumes
A non-trivial code modification, architectural proposal, or unverified factual assertion.

## Produces
A vetted artifact, reconciled findings, documented trade-offs, or escalation to the user.

## When applied
Followed whenever executing doubt-driven development against a non-trivial decision.

## Sub-concepts
artifact

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The `Doubt cycle` breaks adversarial verification into five discrete, auditable steps (CLAIM, EXTRACT, DOUBT, RECONCILE, STOP), preventing cognitive shortcuts and ensuring that every non-trivial decision is systematically isolated, challenged, and reconciled.
