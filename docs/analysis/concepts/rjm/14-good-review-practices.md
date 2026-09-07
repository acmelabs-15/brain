---
package: rjm
name: 14 Good Review Practices
slug: 14-good-review-practices
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# 14 Good Review Practices

## Definition — verbatim
> "## 14 Good Review Practices" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 15 | defined here | Catalog of 14 normative review practices across Scope, Content, and Style categories, adapted from Olaf Zimmermann. |

## Consumes
Review comments, critiques, and reviewer evaluations across ADR debate rounds.

## Produces
Actionable, evidence-based review feedback with prioritized comments.

## When applied
Applied by all reviewing agents when formulating critiques during Phase 1 independent reviews.

## Sub-concepts
reviewer-pledge

## Part of
zimmermann-review-guidance, adr-review

## Implementation status
defects: missing-path

## Design notes
A codified set of review practices adapted from Zimmermann to enforce review quality. Spanning scope discipline, content justification, and professional feedback style, it provides concrete standards that prevent unhelpful or superficial critiques.
