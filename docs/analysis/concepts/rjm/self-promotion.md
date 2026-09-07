---
package: rjm
name: Self Promotion
slug: self-promotion
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

# Self Promotion

## Definition — verbatim
> "Reviewer uses review to showcase own knowledge" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 140 | defines | Tabulated as a review anti-pattern where a reviewer uses feedback to showcase personal knowledge rather than help the author. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as an anti-pattern requiring re-review when an agent pushes preferred solutions without objective rationale. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 50 | defines | Tabulated as a review anti-pattern where comments primarily recommend the reviewer's own work or preferred technology without objective rationale. |
| .claude/skills/adr-review/SKILL.md | 255 | applies | Tabulated in the review anti-patterns table as recommending the reviewer's preferred solution without objective rationale. |

## Consumes
Biased review feedback advocating for pet tools or previous personal solutions without objective justification.

## Produces
Neutralization of reviewer bias in favor of objective evaluation against the ADR's explicit decision drivers.

## When applied
Detected when a reviewer aggressively pushes their own preferred framework or prior work rather than evaluating the author's proposal.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Self Promotion occurs when a reviewer uses an architectural critique not to evaluate the decision objectively, but to advertise their own expertise or lobby for their favorite technologies. In rjm, such commentary is recognized as self-serving bias; reviewers are held accountable to evaluate options against the author's defined requirements rather than their own preferences.
