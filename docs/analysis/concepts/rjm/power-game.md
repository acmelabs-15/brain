---
package: rjm
name: Power Game
slug: power-game
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

# Power Game

## Definition — verbatim
> "Hierarchical threats instead of constructive feedback" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 141 | defines | Tabulated as a review anti-pattern substituting hierarchical threats and authority claims for constructive feedback. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as authority claims over evidence requiring re-review. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 51 | defines | Tabulated as a review anti-pattern where an agent threatens authors or brags about experience rather than providing technical arguments. |
| .claude/skills/adr-review/SKILL.md | 256 | applies | Tabulated in the review anti-patterns table as using authority claims instead of technical arguments. |

## Consumes
Review feedback relying on assertions of seniority, rank, or authority instead of technical evidence.

## Produces
Enforced rejection of authority-based assertions, mandating evidence-based technical argumentation.

## When applied
Flagged during review consolidation whenever an agent or reviewer attempts to override technical trade-offs with appeals to authority.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Power Game manifests when a reviewer attempts to dictate decisions through organizational status, seniority, or aggressive posturing rather than offering empirical arguments. In rjm's multi-agent debate protocol, authority claims carry zero evidentiary weight; all architectural conclusions must be justified through requirements traceability, objective benchmarks, and rigorous trade-off analysis.
