---
package: rjm
name: "technology disruption"
slug: technology-disruption
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# technology disruption

## Definition — verbatim
> "Technology disruption makes decision obsolete" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 122 | used here | Reassessment trigger rule detecting when architectural obsolescence or breakthrough technologies supersede a prior decision. |

## Consumes
Technology radar assessments, platform obsolescence notices, or breakthrough industry tooling (e.g. AI-assisted generation shifting build economics).

## Produces
Sourcing reconsideration trigger recommending replacement or architectural re-platforming.

## When applied
Checked during technology lifecycle evaluations or following transformative technical breakthroughs.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
An obsolescence guardrail in rjm that triggers when foundational technological paradigms shift (such as LLM capabilities drastically lowering build costs or cloud services rendering bespoke solutions redundant), preventing teams from maintaining legacy investments past their economic shelf life.
