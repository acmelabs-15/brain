---
package: rjm
name: Offended Reaction
slug: offended-reaction
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

# Offended Reaction

## Definition — verbatim
> "Takes feedback personally, becomes defensive" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 142 | defines | Tabulated as a review anti-pattern where a participant takes feedback personally and becomes defensive. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as subjective defensive reactions in review output requiring re-review. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 52 | defines | Tabulated as a review anti-pattern where an agent defends a criticized position subjectively (variant: 'Hate To Say I Told You So'). |
| .claude/skills/adr-review/SKILL.md | 257 | applies | Tabulated in the review anti-patterns table as defending a criticized position subjectively rather than objectively. |

## Consumes
Defensive, emotionally reactive, or subjective responses to architectural critique.

## Produces
De-escalation protocol redirecting discussion back to verifiable engineering data and trade-offs.

## When applied
Detected during multi-round debate when an author or reviewing agent reacts defensively to technical critiques.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Offended Reaction occurs when a technical disagreement is treated as a personal slight, leading an author or reviewer to respond with subjective defense, resentment, or 'I told you so' posturing. In rjm, detecting Offended Reaction triggers facilitation to decouple technical artifacts from personal ego, refocusing the debate on objective architecture trade-offs.
