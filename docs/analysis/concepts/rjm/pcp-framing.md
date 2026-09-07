---
package: rjm
name: PCP framing
slug: pcp-framing
kind: pattern
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: .claude/skills/negotiation/SKILL.md, sha256: 9753ad450c2b3aa5ac0cdda0c7d9a429dd82e7c8227ac35b43eda1bfa8b02e41}
  - {path: .claude/skills/negotiation/references/skills.md, sha256: ae5055eedea0db85458d74da810803dc4defc1a70e885ad31b738513c4965114}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PCP framing

## Definition — verbatim
> "Draft PCP framing (Perception, Context, Permission) before producing" — .claude/skills/negotiation/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 107 | defined here | Three-part influence technique (Perception, Context, Permission) applied to counter-proposals. |
| .claude/skills/negotiation/references/skills.md | 39 | used here | Design step in the protocol sequence mandating PCP framing before countering. |
| .claude/skills/negotiation/SKILL.md | 52 | used here | Phase 3 directive requiring framing establishment prior to presenting numbers. |

## Consumes
Counter-proposal objectives and evidentiary market data.

## Produces
A sequenced influence structure: 1. Perception (reframe view), 2. Context (normalize via comps), 3. Permission (enable positive response without losing face).

## When applied
Formulated in Step 3 of RADAR prior to putting any counter figure on the table.

## Sub-concepts
none

## Part of
design-counter

## Implementation status
defects: orphan

## Design notes
PCP Framing (Perception, Context, Permission) is a behavioral influence pattern used to construct counter-proposals. By reshaping how the counterpart perceives the problem, normalizing terms with market context, and providing social permission to agree, it ensures counter-offers are received constructively.
