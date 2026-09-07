---
package: rjm
name: "assumption drift"
slug: assumption-drift
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# assumption drift

## Definition — verbatim
> "Detect assumption drift and recommend re-evaluation." — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:3

## Also called — verbatim
`assumption drift` — .claude/skills/buy-vs-build-framework/SKILL.md:242

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 3 | defined here | Script purpose docstring declaring automated detection of variance between baseline ADR assumptions and reality. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 242 | defined here | Tool reference description specifying drift detection across costs, timelines, and strategic priorities. |

## Consumes
Baseline metrics recorded in an Architecture Decision Record and telemetry/state reports from current operations.

## Produces
Percentage deviation metrics across cost, timeline, and strategic factors, along with actionable re-evaluation triggers.

## When applied
Continuously or periodically monitored during post-decision operation to ensure original rationale remains valid.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc, missing-path

## Design notes
A lifecycle surveillance concept ensuring that architectural and strategic sourcing decisions do not remain static when real-world conditions shift. By measuring delta between baseline estimates and observed operational facts, assumption drift triggers timely reassessment before sunk-cost fallacy takes hold.
