---
package: rjm
name: Growing
slug: growing
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Growing

## Definition — verbatim
(used, not defined)

> "Growing, Mature, Proficient, Inert, or Harmful from age, intercept count," — .claude/skills/ai-agents-research-frontier/SKILL.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 222 | used here | Listed as the second maturity tier for guards accumulating intercept history and demonstrating positive fitness. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 171 | used here | Cited among the six guard maturity tiers evaluated from telemetry events. |

## Consumes
Accumulated intercept telemetry events demonstrating active, non-trivial rule enforcement across multiple developer sessions.

## Produces
Tier classification advancement moving a validated guard toward Mature status.

## When applied
When automated tier classifiers evaluate guard intercept trends and confirm that a Budding guard has actively prevented errors without excessive false positives.

## Sub-concepts
none

## Part of
maturity-tier

## Implementation status
not-implemented

## Design notes
Growing represents an intermediate maturity tier in rjm's guard governance lifecycle. A guard reaches Growing status when telemetry confirms it actively intercepts real violations while maintaining acceptable precision, proving its utility on real developer workflows before achieving long-term Mature status.
