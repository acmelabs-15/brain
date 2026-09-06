---
package: matt
name: Triage role
slug: triage-role
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Triage role

## Definition — verbatim
> "A canonical state-machine label applied to an **Issue** during triage (e.g. `needs-triage`, `ready-for-afk`). Each role maps to a real label string in the **Issue tracker** via `docs/agents/triage-labels.md`." — CONTEXT.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 18 | defined here | Defines Triage role as a canonical state-machine label applied to an Issue during triage. |

## Consumes
An issue in an issue tracker undergoing evaluation.

## Produces
A canonical role designation mapped to concrete issue tracker labels.

## When applied
Applied during triage state transitions to maintain unambiguous workflow status on issues.

## Sub-concepts
bug, enhancement, needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Part of
triage

## Implementation status
defects: missing-path, other (CONTEXT.md cites non-existent docs/agents/triage-labels.md path)

## Design notes
An abstract categorization concept in the triage state machine that decouples workflow rules from specific repository tracker labels, mapping canonical states to real label strings.
