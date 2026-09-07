---
package: rjm
name: Hostile Expert
slug: hostile-expert
kind: role
package_phase: rjm:review
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

# Hostile Expert

## Definition — verbatim
> "| **Hostile Expert** | The weakest point a domain expert would attack | The single weakest claim, numbers asserted without a source, tradeoffs waved away ("obviously faster") instead of shown. |" — .claude/agents/critic.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 67 | defines | Persona table row identifying vulnerable claims, unsourced figures, and unsupported trade-offs. |
| templates/agents/critic.shared.md | 71 | defines | Shared template persona row probing technical weaknesses and superficial trade-off analysis. |

## Consumes
Technical arguments, architectural trade-offs, and empirical claims in prose artifacts.

## Produces
Critical challenges against weak assertions, missing citations, and handwaved performance claims.

## When applied
Applied during persona evaluation of written prose artifacts.

## Sub-concepts
none

## Part of
persona-evaluation

## Implementation status
defects: missing-path

## Design notes
A skeptical expert persona that aggressively attacks the weakest technical claims and unsourced figures in a document, demanding rigorous evidence and honest trade-offs.
