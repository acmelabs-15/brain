---
package: rjm
name: Triage Categories
slug: triage-categories
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Triage Categories

## Definition — verbatim
> "Classify every comment into one of three buckets. State the bucket in the finding." — .claude/agents/comment-analyzer.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 34 | defines | Section heading establishing the three comment classification buckets (Preserve, Update, Remove). |
| templates/agents/comment-analyzer.shared.md | 45 | defines | Shared template specification defining the three comment triage buckets. |

## Consumes
Extracted code comments and corresponding implementation code.

## Produces
Categorized comment triage classifications with specific remediation guidance.

## When applied
Applied by the comment-analyzer agent during comment review.

## Sub-concepts
preserve, update, remove, precedence

## Part of
comment-analyzer

## Implementation status
defects: doc-drift

## Design notes
A classification taxonomy used in comment analysis to group comments into Preserve, Update, or Remove buckets based on informational value and accuracy.
