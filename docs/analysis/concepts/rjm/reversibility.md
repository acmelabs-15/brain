---
package: rjm
name: Reversibility
slug: reversibility
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reversibility

## Definition — verbatim
> "5. **Reversibility** - Which steps are hard to undo?" — .claude/commands/plan.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 33 | defined here | Fifth evaluation axis in plan review, identifying actions that cannot easily be undone. |
| .claude/skills/review/references/decision-rigor.md | 83 | defined here | Section heading in decision review establishing evidentiary standards based on reversibility (Type 1 vs Type 2 decisions). |

## Consumes
Architectural decision proposals, schema migrations, and execution step definitions.

## Produces
Classification of changes as easily reversible (two-way door) or irreversible (one-way door), with required contingency plans.

## When applied
Evaluated during plan critique and architectural decision reviews.

## Sub-concepts
none

## Part of
evaluation-axes, decision-rigor

## Implementation status
clean

## Design notes
A core decision and planning lens drawn from two-way door decision theory. Irreversible actions (data migrations, public API contracts, security relaxations) demand high evidentiary standards, risk mitigations, and pre-mortems, whereas easily reversible changes are permitted to proceed with lower friction.
