---
package: rjm
name: Persist and Close
slug: persist-and-close
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Persist and Close

## Definition — verbatim
> "## Phase 5: Persist and Close" — .claude/skills/retrospective/references/learning-template.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 104 | defined here | Final phase section of retrospective artifact recording memory persistence results, +/Delta, Delta Triage, and ROTI. |

## Consumes
Extracted learnings scoring >= 70% atomicity and retrospective performance data.

## Produces
Persisted memory records, triaged GitHub issues/backlog items, and ROTI assessment.

## When applied
Executed as the final Phase 5 step of every retrospective workflow.

## Sub-concepts
memory-persistence, closing-activities

## Part of
retrospective

## Implementation status
clean

## Design notes
Persist and Close is the final phase of the retrospective lifecycle. It guarantees that validated high-atomicity learnings are committed to persistent memory stores while simultaneously evaluating the retrospective's own return on investment through structured closing activities.
