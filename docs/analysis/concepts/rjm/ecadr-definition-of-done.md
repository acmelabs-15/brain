---
package: rjm
name: ecADR Definition of Done
slug: ecadr-definition-of-done
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

# ecADR Definition of Done

## Definition — verbatim
(used, not defined)

> "**Also check**: vocabulary precision (no subjective language, ambiguity, or loopholes) and whether the decision meets [ecADR Definition of Done](../../adr-generator/references/ad-quality-frameworks.md) criteria." — .claude/skills/adr-review/references/zimmermann-review-guidance.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 69 | used here | Referenced in the review checklist as the quality benchmark for complete, unambiguous architectural decisions. |

## Consumes
Candidate ADR structure, vocabulary precision, option evaluations, and decision rationale.

## Produces
Verification verdict confirming that an ADR satisfies completion and quality standards.

## When applied
Evaluated during Phase 1 Independent Review alongside the Zimmermann checklist questions.

## Sub-concepts
none

## Part of
zimmermann-review-guidance, adr-review

## Implementation status
defects: missing-path

## Design notes
The architectural decision completion criteria referenced in rjm's review guidance. Derived from Zimmermann's executive code-centric ADR framework, it requires vocabulary precision and objective rationale before an ADR is considered done. Note that the relative link to ad-quality-frameworks.md is an inventory-documented missing-path defect.
