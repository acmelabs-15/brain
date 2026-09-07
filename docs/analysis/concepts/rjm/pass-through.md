---
package: rjm
name: Pass Through
slug: pass-through
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

# Pass Through

## Definition — verbatim
> "Barely read the ADR" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 137 | defines | Tabulated as a review anti-pattern describing reviewers who barely read the ADR and rubber-stamp approval without substance. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as an anti-pattern indicating no substantive findings requiring re-review. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 47 | defines | Tabulated as the first review anti-pattern where an agent rubber-stamps approval with 'looks good' without running analysis. |
| .claude/skills/adr-review/SKILL.md | 252 | applies | Tabulated in the review anti-patterns table as rubber-stamp approval without reading. |

## Consumes
Review agent output containing superficial approval without technical critique.

## Produces
Rejection flag requiring the reviewing agent to execute a rigorous, substantive evaluation.

## When applied
Checked during review consolidation when an agent simply approves without evaluating trade-offs, forces, or risks.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Pass Through occurs when a reviewer or review agent rubber-stamps an architectural decision without critically reading the document or analyzing its consequences. In rjm's multi-agent review architecture, pass-through reviews provide zero quality assurance; the debate consolidator detects this pattern and mandates a re-review addressing the seven core Zimmermann questions.
