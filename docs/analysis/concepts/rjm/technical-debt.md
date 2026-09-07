---
package: rjm
name: Technical Debt
slug: technical-debt
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Technical Debt

## Definition — verbatim
> "### 6. Technical Debt" — .claude/skills/review/references/architect.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 92 | defined here | Checklist section in architectural review evaluating added or reduced technical debt, TODOs, and sustainability. |

## Consumes
Pull request diff and commit changes showing newly introduced shortcuts, workarounds, or deferred work.

## Produces
Architectural findings and evaluations tracking technical debt balance and sustainability.

## When applied
During Stage-2 architectural review to evaluate whether changes add or reduce technical debt and whether shortcuts are sustainable.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A review dimension in rjm's architecture review axis that tracks whether code modifications accumulate or pay down technical debt, examining shortcuts, unfinished TODOs, and long-term codebase sustainability.
