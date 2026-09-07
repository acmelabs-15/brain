---
package: rjm
name: Review Anti-Patterns
slug: review-anti-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Review Anti-Patterns

## Definition — verbatim
> "Review Anti-Patterns" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 133 | defines | Section header introducing seven reviewer failure modes and the core principle 'Review like you want to be reviewed.' |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Step 3 of the debate consolidation protocol directing the consolidator to check reviewing agent output against the review anti-patterns and request re-review. |

## Consumes
Review feedback, debate transcripts, critique comments, and agent evaluation output.

## Produces
Detection of dysfunctional review behaviors triggering consolidation flags and mandatory re-review requests.

## When applied
Applied during multi-agent ADR review synthesis and debate consolidation to ensure critique depth and objectivity.

## Sub-concepts
pass-through, copy-edit, siding-dead-end, self-promotion, power-game, offended-reaction, groundhog-day

## Part of
ad-quality-frameworks, adr-review

## Implementation status
clean

## Design notes
Review Anti-Patterns establishes a structured taxonomy of seven counter-productive review stances that undermine peer evaluation. Codified across ADR generator references and the multi-agent debate protocol, it equips consolidation agents with clear criteria to reject rubber-stamps, topic drift, self-promotion, and defensive posturing, preserving the rigor of architectural review.
