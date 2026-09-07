---
package: rjm
name: Human Review Required
slug: human-review-required
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Human Review Required

## Definition — verbatim
> "## Human Review Required" — .claude/skills/skillforge/references/synthesis-protocol.md:283

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 283 | defined here | Escalation gate triggered after 5 iterations without consensus, presenting remaining disagreements to a human. |

## Consumes
Unresolved disagreements, agent positions, and rationales after 5 failed consensus rounds.

## Produces
Human escalation report outlining four decision options (accept recommendations, accept with limits, or abandon).

## When applied
Triggered at Round 5 when the synthesis panel fails to achieve unanimous consensus.

## Sub-concepts
none

## Part of
iteration-protocol

## Implementation status
defects: doc-drift

## Design notes
A terminal escalation gate in the iteration protocol preventing infinite refinement loops by handing unresolved multi-agent disagreements to a human operator with clear decision options.
