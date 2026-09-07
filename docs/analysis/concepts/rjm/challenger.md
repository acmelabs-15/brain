---
package: rjm
name: Challenger
slug: challenger
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Challenger

## Definition — verbatim
> "Challenger teaches the buyer something they did not know and reframes their problem." — .claude/skills/business-strategy/references/spin-selling.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/spin-selling.md | 52 | used here | Commercial approach contrasted with SPIN, reframing buyer mental models through teaching. |

## Consumes
Proprietary commercial insights, counter-intuitive domain research, and reframing narratives.

## Produces
Disruption of the buyer's status quo mental model and openness to alternative paradigms.

## When applied
Used when the buyer is trapped in a flawed understanding of their problem and cannot self-diagnose through discovery questions.

## Sub-concepts
none

## Part of
spin-selling

## Implementation status
clean

## Design notes
Challenger represents an insight-led commercial approach that actively teaches prospects rather than passively uncovering stated needs. In rjm, it is contrasted with SPIN to provide a clear decision boundary: lead with Challenger insights when prospects harbor wrong mental models, but rely on SPIN when buyers already grasp their domain reality.
