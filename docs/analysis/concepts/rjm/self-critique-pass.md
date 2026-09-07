---
package: rjm
name: Self-Critique Pass
slug: self-critique-pass
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Self-Critique Pass

## Definition — verbatim
> "Before finalizing any output (ADR, design review, impact analysis), complete this adversarial self-review. Apply all three steps below." — .claude/agents/architect.md:659

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 657 | defined here | Mandatory 3-step adversarial self-review protocol required before finalizing any architectural output. |
| .claude/agents/implementer.md | 764 | defined here | Post-implementation 4-question self-audit evaluating testability, readability, coupling, and simplicity. |
| templates/agents/architect.shared.md | 774 | defined here | Mandatory 3-step adversarial self-review protocol required before finalizing any architectural output. |
| templates/agents/implementer.shared.md | 753 | defined here | Post-implementation 4-question self-audit evaluating testability, readability, coupling, and simplicity. |

## Consumes
Draft agent deliverables (ADRs, design reviews, impact analyses, code implementations).

## Produces
Weakness identification, remedial improvements, and explicit documentation of unresolved risks.

## When applied
Applied by an agent immediately prior to returning completed work to the orchestrator.

## Sub-concepts
none

## Part of
architect, implementer

## Implementation status
defects: missing-path, doc-drift

## Design notes
Self-Critique Pass is a reflexive quality control technique embedded in specialized agent prompts. Before completing deliverables, agents conduct a structured adversarial self-review—architects systematically identify weaknesses, address them, and surface residual risks, while implementers evaluate testability, intention-revealing naming, and coupling—preventing unexamined flaws from passing downstream.
