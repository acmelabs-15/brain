---
package: rjm
name: P1 Deferral Requirements
slug: p1-deferral-requirements
kind: checklist
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

# P1 Deferral Requirements

## Definition — verbatim
> "## P1 Deferral Requirements" — .claude/skills/adr-review/references/issue-resolution.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 17 | defined here | Specifies four mandatory requirements (justification, GitHub issue creation, linking, keyword-rich title) to defer a P1 issue. |

## Consumes
P1 review findings that cannot be resolved immediately during current ADR revision rounds.

## Produces
Documented deferral justification in the debate log, labeled GitHub backlog issue, cross-references to parent ADR, and keyword-rich issue title.

## When applied
Applied whenever an ADR debate panel agrees to defer resolution of a P1 issue rather than blocking ADR approval.

## Sub-concepts
surfacing-mechanism, keyword-based-surfacing, p1-deferral-issue-template

## Part of
issue-resolution, adr-review

## Implementation status
clean

## Design notes
A governance safeguard preventing unresolved high-priority issues from being lost. Because P1 issues represent important architectural concerns, rjm prohibits deferring them without explicit justification, an active GitHub tracking issue, and surfacing triggers that reintroduce them into future agent workflows.
