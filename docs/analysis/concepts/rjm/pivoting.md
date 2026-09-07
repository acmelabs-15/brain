---
package: rjm
name: pivoting
slug: pivoting
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pivoting

## Definition — verbatim
> "If you keep \"pivoting\" weekly with no new evidence: you are guessing, not" — .claude/skills/business-strategy/references/four-steps.md:26

## Also called — verbatim
`pivot` — .claude/skills/business-strategy/references/lean-startup.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/four-steps.md | 26 | defined here | Warns against weekly direction changes executed without empirical falsification evidence. |

## Consumes
Empirical customer evidence contradicting a previously documented business model hypothesis.

## Produces
Targeted modification of a single hypothesis while keeping the remainder of the business model steady.

## When applied
When customer discovery or validation tests fail to confirm a specific guess, prompting a structured re-test.

## Sub-concepts
none

## Part of
four-steps-to-the-epiphany, pivot-or-proceed

## Implementation status
clean

## Design notes
Pivoting is the deliberate act of revising a core business hypothesis in response to empirical market evidence rather than intuition. In the Four Steps framework, highlighting undisciplined "pivoting" warns founders that changing course weekly without rigorous data collection is merely ungrounded guessing.
