---
package: rjm
name: Day Shift
slug: day-shift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Day Shift

## Definition — verbatim
> "**Day Shift (human decision required):** Grill Me interview responses, PRD review, QA gate sign-off, ship decision" — docs/getting-started.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 81 | defined here | Defined alongside Night Shift as the operational pipeline mode requiring human decisions. |

## Consumes
Problem statements, interview queries, PRDs, QA gate reports, and ship reviews.

## Produces
Human-approved interview answers, reviewed PRDs, QA gate sign-offs, and shipping authorizations.

## When applied
> "human decision required" — docs/getting-started.md:85

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Day Shift represents the human-in-the-loop operating paradigm in rjm. It encompasses all lifecycle steps requiring subjective human judgment, architectural direction, or business authorization, distinguishing them from autonomous execution phases.
