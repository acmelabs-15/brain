---
package: rjm
name: Alignment
slug: alignment
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Alignment

## Definition — verbatim
> "| **Alignment** | Plan serves stated objectives. Scope matches. | Adjacent work sneaking in. Gold-plating. Scope drift. |" — .claude/agents/critic.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 117 | defines | Review axis evaluating whether a plan serves stated objectives and adheres to defined scope. |
| templates/agents/critic.shared.md | 121 | defines | Shared template review axis verifying goal alignment and flagging scope drift. |

## Consumes
Project goals, charter objectives, and proposed plan tasks.

## Produces
Evaluation score (1-5) and findings flagging adjacent work or gold-plating.

## When applied
During plan review and specification evaluation.

## Sub-concepts
none

## Part of
review-axes

## Implementation status
defects: missing-path

## Design notes
A review dimension measuring whether an execution plan strictly supports its stated objectives and stays within approved scope without scope creep or gold-plating.
