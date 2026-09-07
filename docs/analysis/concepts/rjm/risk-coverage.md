---
package: rjm
name: Risk coverage
slug: risk-coverage
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk coverage

## Definition — verbatim
> "| **Risk coverage** | Failure modes identified. Mitigations specified. | "Unlikely to fail." No kill criteria. No observability plan. |" — .claude/agents/critic.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 119 | defines | Review axis verifying identification of failure modes, kill criteria, and mitigations. |
| .claude/commands/plan.md | 31 | defines | Checklist criterion mandating that all P0 risks have explicit mitigations. |
| templates/agents/critic.shared.md | 123 | defines | Shared template review axis requiring failure modes and mitigations to be specified. |

## Consumes
Risk analyses, technical dependencies, and failure mode enumerations.

## Produces
Risk coverage rating and verification that high-priority risks have actionable mitigations.

## When applied
Evaluated during plan formulation and plan critique.

## Sub-concepts
none

## Part of
review-axes

## Implementation status
defects: missing-path

## Design notes
A planning quality criterion requiring explicit identification of potential failure modes and actionable mitigations for all high-severity risks.
