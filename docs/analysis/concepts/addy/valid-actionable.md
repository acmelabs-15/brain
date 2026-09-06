---
package: addy
name: Valid + actionable
slug: valid-actionable
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

# Valid + actionable

## Definition — verbatim
> "2. **Valid + actionable** — real issue requiring a change to the artifact. Change it, re-loop." — skills/doubt-driven-development/SKILL.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 175 | defined here | Second-precedence classification class for substantive review findings requiring changes to the artifact |

## Consumes
Adversarial review finding, artifact, contract.

## Produces
Corrected artifact modifications and triggers a re-loop through the doubt cycle.

## When applied
During Step 4 (RECONCILE) of Doubt-Driven Development when a reviewer uncovers a genuine defect or edge-case failure under the contract.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
Second-precedence finding category in Doubt-Driven Development representing legitimate defects discovered by fresh-context review. Actioning these findings forces the agent to modify the artifact and re-enter the doubt cycle to verify the correction before committing.
