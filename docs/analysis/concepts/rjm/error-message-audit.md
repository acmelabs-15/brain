---
package: rjm
name: Error Message Audit
slug: error-message-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Error Message Audit

## Definition — verbatim
> "Look for actionable guidance in error output (the Elm/Rust/Stripe model: what went wrong, why, how to fix)." — .claude/skills/dx-review/SKILL.md:114-115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 108 | defines | Defined as Step 3 of the audit process evaluating the actionability and clarity of system error responses. |

## Consumes
CLI error outputs from invalid flags, missing arguments, documented API error schemas, and observed failure modes.

## Produces
An Error Messages dimension score (0-10), evidence ratings, and specific error design defect findings.

## When applied
Executed as Step 3 of dx-review to evaluate how effectively error messages guide developers toward resolution.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 3 in rjm's dx-review audit procedure that tests how systems behave when failures occur. Inspired by Elm, Rust, and Stripe error messaging patterns, it audits whether error text clearly explains what failed, why it failed, and how the user can resolve it.
