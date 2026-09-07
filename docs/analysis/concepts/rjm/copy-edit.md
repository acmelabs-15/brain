---
package: rjm
name: Copy Edit
slug: copy-edit
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

# Copy Edit

## Definition — verbatim
> "Grammar corrections only, no substance" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 138 | defines | Tabulated as a review anti-pattern where comments focus solely on grammar corrections without architectural substance. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as editorial-only critique lacking technical evaluation. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 48 | defines | Tabulated as a review anti-pattern where an agent focuses on markdown syntax, formatting, and typos while ignoring architectural trade-offs. |
| .claude/skills/adr-review/SKILL.md | 253 | applies | Tabulated in the review anti-patterns table as commenting on typos and grammar only rather than substance. |

## Consumes
Review feedback limited strictly to typographical, stylistic, or syntactical edits.

## Produces
Re-review request demanding substantive architectural critique of decision forces and consequences.

## When applied
Detected during review consolidation when an agent's comments address only formatting and grammar while ignoring technical substance.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Copy Edit describes a reviewer who focuses exclusively on formatting, typos, and grammatical polish while completely bypassing the underlying architectural validity and system risks. While clear documentation is necessary, rjm's architecture review process requires evaluators to examine structural forces, trade-offs, and consequences; purely editorial comments trigger a request for deeper technical review.
