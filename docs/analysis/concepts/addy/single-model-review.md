---
package: addy
name: Single-model review
slug: single-model-review
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

# Single-model review

## Definition — verbatim
> "After the single-model review in Step 3 above, but before RECONCILE, pause and ask:" — skills/doubt-driven-development/SKILL.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 120 | defined here | Identifies the default fresh-context review performed within the primary LLM platform prior to cross-model escalation. |

## Consumes
ARTIFACT and CONTRACT presented to a fresh-context reviewer operating within the same model family.

## Produces
Adversarial critique findings and the mandatory prompt offering cross-model escalation to the user.

## When applied
Executed in Step 3 of every doubt cycle before entering the reconciliation phase.

## Sub-concepts
none

## Part of
doubt-cycle

## Implementation status
clean

## Design notes
`Single-model review` is the baseline adversarial review mechanism performed using a fresh-context subagent of the same model platform; it catches immediate logic defects and assumption gaps while establishing a checkpoint for optional cross-model escalation.
