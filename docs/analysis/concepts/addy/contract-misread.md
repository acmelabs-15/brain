---
package: addy
name: Contract misread
slug: contract-misread
kind: technique
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

# Contract misread

## Definition — verbatim
> "1. **Contract misread** — reviewer flagged something specifically because the CONTRACT you provided was unclear or incomplete. Fix the contract first, re-classify on the next cycle." — skills/doubt-driven-development/SKILL.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 174 | defined here | First-precedence classification class for adversarial review findings caused by an unclear or incomplete contract |

## Consumes
Reviewer findings from an adversarial doubt cycle, review contract, artifact text.

## Produces
Updated and clarified contract for subsequent review cycles.

## When applied
During Step 4 (RECONCILE) of Doubt-Driven Development when a reviewer's finding stems from ambiguity in the provided contract.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The highest precedence classification in Doubt-Driven Development's finding reconciliation loop. It prevents spurious code changes by recognizing when an adversarial reviewer failed to understand an invariant because the orchestrator failed to state it clearly in the review contract.
