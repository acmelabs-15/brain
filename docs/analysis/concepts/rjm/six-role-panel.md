---
package: rjm
name: six-role panel
slug: six-role-panel
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# six-role panel

## Definition — verbatim
(used, not defined)

> "Real six-role panel" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 249 | used here | Cites the debate log's six-role review panel that evaluated ADR-099 across specialized seats. |

## Consumes
Draft architectural decision records and debate prompts.

## Produces
Multi-agent review critiques, challenges, and convergence verdicts across six specialized seats.

## When applied
During mandatory ADR review rounds in the `adr-review` skill.

## Sub-concepts
architect, critic, independent-thinker, security, analyst, high-level-advisor

## Part of
adr-review

## Implementation status
clean

## Design notes
Multi-perspective deliberation panel composed of six specialized agent personas (architect, critic, independent-thinker, security, analyst, and high-level-advisor) that executes the Phase 0–4 debate protocol to ensure thorough architectural critique before an ADR is accepted.
