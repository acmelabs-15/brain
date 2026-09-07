---
package: rjm
name: Groundhog Day
slug: groundhog-day
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Groundhog Day

## Definition — verbatim
> "Same feedback message repeated without progress" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 143 | defines | Tabulated as a review anti-pattern where the same feedback message is repeated without acknowledging progress. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as re-raising resolved issues across debate rounds. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 53 | defines | Tabulated as a review anti-pattern where an agent repeats the same message across rounds without progress. |
| .claude/skills/adr-review/SKILL.md | 258 | applies | Tabulated in the review anti-patterns table as repeating the same message across rounds without acknowledging progress. |

## Consumes
Repetitive review critiques re-raising previously resolved issues across debate rounds.

## Produces
Termination of redundant debate loops and consolidation of settled decision points.

## When applied
Triggered during multi-turn agent debate when a reviewer persists in re-submitting objections that have already received formal rulings.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Groundhog Day designates a circular review anti-pattern where an agent repeatedly raises the exact same objection across multiple review rounds, ignoring prior compromises, clarifying evidence, or rulings by the presiding architect. In rjm's debate protocol, the consolidator detects Groundhog Day loops and dismisses settled objections, ensuring steady forward progress toward decision finalization.
