---
package: rjm
name: Atomicity Rules
slug: atomicity-rules
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Atomicity Rules

## Definition — verbatim
> "## Atomicity Rules" — .claude/agents/skillbook.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/skillbook.md | 45 | defined here | Scoping gate defining atomicity deduction penalties and the 80% acceptance threshold. |
| templates/agents/skillbook.shared.md | 48 | defined here | Shared template section defining atomicity rules and scoring penalties. |

## Consumes
Candidate skill draft statements, rules, and scope proposals.

## Produces
Atomicity scores (0-100%) and rejection or split verdicts for candidates scoring below 80%.

## When applied
Applied before adding or updating any skill in the institutional skillbook repository.

## Sub-concepts
none

## Part of
skillbook-agent

## Implementation status
defects: missing-path

## Design notes
Atomicity Rules establish strict scoping boundaries for institutional memory ('One skill per file. One concept per skill'), penalizing multiple verbs, multiple decision points, compound logic, and context creep below an 80% acceptance threshold.
