---
package: rjm
name: Resolution Summary Template
slug: resolution-summary-template
kind: template
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Resolution Summary Template

## Definition — verbatim
> "## Resolution Summary Template" — .claude/skills/adr-review/references/issue-resolution.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 174 | defined here | Markdown table template summarizing issue resolution counts across P0, P1, and P2 priorities to validate complete issue accounting. |

## Consumes
Counts of identified, resolved, deferred, and backlogged issues categorized by priority (P0/P1/P2).

## Produces
Issue Resolution Summary markdown table added to final review recommendations.

## When applied
Appended to final recommendations at the conclusion of an ADR review.

## Sub-concepts
none

## Part of
issue-resolution, adr-review

## Implementation status
clean

## Design notes
A verification template that enforces strict accounting for all review findings. By requiring that Count equals Resolved plus Deferred for every priority level—and disallowing any unaddressed P0 issues—it ensures no review findings are silently dropped.
