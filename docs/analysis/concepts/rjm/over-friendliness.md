---
package: rjm
name: Over-Friendliness
slug: over-friendliness
kind: pattern
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

# Over-Friendliness

## Definition — verbatim
> "Variant: **Over-Friendliness**, all comments positive and shallow" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 47 | defined here | Identifies a variant of the Pass Through anti-pattern where comments are shallow and uniformly positive without substantive critique. |

## Consumes
Agent reviews that endorse proposals without critical probing or edge-case analysis.

## Produces
Rejection of review output and a demand for substantive re-review addressing the Zimmermann checklist questions.

## When applied
Detected during Phase 2 review auditing when an agent offers only uncritical praise.

## Sub-concepts
none

## Part of
seven-review-anti-patterns, zimmermann-review-guidance

## Implementation status
defects: missing-path

## Design notes
Guards against AI agent sycophancy in architectural reviews. When an agent provides shallow, uncritical endorsements without examining tradeoffs or failure modes, Over-Friendliness flags the review as defective and forces re-evaluation.
