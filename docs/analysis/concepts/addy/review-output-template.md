---
package: addy
name: Review Output Template
slug: review-output-template
kind: template
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Review Output Template

## Definition — verbatim
> "## Review Output Template" — agents/code-reviewer.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/code-reviewer.md | 59 | defines | Section heading providing the markdown template structure for code review reports |

## Consumes
Evaluated code review findings and verification results.

## Produces
Standardized review output comprising Review Summary, Findings, and Verification Story.

## When applied
Applied by the `code-reviewer` persona when compiling its final review report.

## Sub-concepts
verification-story

## Part of
senior-code-reviewer

## Implementation status
clean

## Design notes
Enforces a structured markdown format for review reports, ensuring review feedback consistently includes a high-level summary, prioritized findings, and an explicit verification story.
