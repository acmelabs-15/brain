---
package: addy
name: Review Checklist
slug: review-checklist
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Review Checklist

## Definition — verbatim
> "The Review Checklist" — skills/code-review-and-quality/SKILL.md:302

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 302 | defined here | Provides a comprehensive markdown review template with sections spanning seven review axes. |

## Consumes
Completed implementation diffs, specifications, automated test outputs, and build verification artifacts.

## Produces
A completed review template document recording findings across Context, Correctness, Readability, Architecture, Security, Performance, and Verification, concluding with a formal Approve or Request changes verdict.

## When applied
At the conclusion of a formal code review to document findings and issue a merge verdict.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A standardized review rubric ensuring that reviewers systematically audit changes across multiple architectural, security, and quality dimensions before granting approval, preventing superficial reviews that only verify passing tests.
