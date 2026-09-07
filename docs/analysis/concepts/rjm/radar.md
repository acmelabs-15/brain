---
package: rjm
name: RADAR
slug: radar
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: .claude/skills/negotiation/SKILL.md, sha256: 9753ad450c2b3aa5ac0cdda0c7d9a429dd82e7c8227ac35b43eda1bfa8b02e41}
  - {path: .claude/skills/negotiation/references/skills.md, sha256: ae5055eedea0db85458d74da810803dc4defc1a70e885ad31b738513c4965114}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RADAR

## Definition — verbatim
> "Every negotiation analysis follows Read, Analyze, Design, Assess, Review in sequence. Never skip steps." — .claude/skills/negotiation/references/skills.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 65 | defined here | Core analysis protocol specifying the 5-step sequence (Read, Analyze, Design, Assess, Review). |
| .claude/skills/negotiation/references/skills.md | 26 | defined here | Skill specification formally detailing the sequential RADAR protocol steps. |
| .claude/skills/negotiation/SKILL.md | 4 | used here | Frontmatter description citing the RADAR protocol for deal intelligence. |
| templates/agents/negotiation.shared.md | 71 | defined here | Shared template section establishing the mandatory 5-step analysis sequence. |

## Consumes
Offer text, negotiation context, and party positions.

## Produces
Complete 5-phase structured analysis report and human-gated counter draft.

## When applied
Applied systematically across every negotiation analysis; steps may not be skipped.

## Sub-concepts
read-decode, analyze-map-the-zone, design-counter, invisible-disadvantage-check, draft-for-approval

## Part of
negotiation

## Implementation status
defects: orphan

## Design notes
RADAR is the foundational 5-phase protocol (Read, Analyze, Design, Assess, Review) governing all deal intelligence operations in rjm. By mandating a disciplined sequence from decoding terms to human review, it prevents premature countering and guarantees thorough valuation before any commitment.
