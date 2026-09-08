---
package: rjm
name: Design Review Frontmatter
slug: design-review-frontmatter
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Design Review Frontmatter

## Definition — verbatim
> "Design Review Frontmatter" — scripts/validation/pre_pr_sequence.py:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 269 | defined here | Pre-PR validation gate executing validate_design_review_frontmatter against design review documents. |
| scripts/validation/pre_pr.py | 12 | used here | Documented as step 5 in the pre-PR validation sequence docstring. |

## Consumes
Design review records and their YAML frontmatter blocks under .agents/architecture/.

## Produces
Pass/fail gate verdict confirming presence, completeness, and passing status of design review frontmatter.

## When applied
Executed during the pre-PR validation sequence prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: doc-drift

## Design notes
Design Review Frontmatter is a validation gate ensuring that architectural design reviews carry structured, complete YAML frontmatter. It validates reviewer identities, review dates, and verdicts, preventing changes with pending, failing, or rejected design reviews from advancing toward merge.
