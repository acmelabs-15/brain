---
package: rjm
name: Technical Debt Analysis
slug: technical-debt-analysis
kind: artifact
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

# Technical Debt Analysis

## Definition — verbatim
> "### Technical Debt Analysis" — .claude/skills/review/references/architect.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 145 | defined here | Output section header assessing added debt, reduced debt, and net maintainability impact. |

## Consumes
Assessment of shortcuts, workarounds, refactoring, and code cleanup introduced by the diff.

## Produces
Structured metadata reporting debt added (Low/Medium/High), debt reduced (Low/Medium/High), and net architectural impact (Improved/Neutral/Degraded).

## When applied
When reporting the technical debt balance in the output of an architectural review.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
An output section in rjm's architectural review that balances technical debt added against debt paid down, categorizing the net maintainability impact of the change.
