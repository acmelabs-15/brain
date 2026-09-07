---
package: rjm
name: Reassessment Trigger
slug: reassessment-trigger
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reassessment Trigger

## Definition — verbatim
> "**Reassessment Trigger**" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 141 | defined here | Automation concept checking original decision assumptions against current reality to detect drift. |

## Consumes
Baseline ADR assumptions, current operational metrics, actual maintenance costs, and vendor pricing changes.

## Produces
Drift percentage metrics, reassessment recommendations, and mandatory governance re-evaluations.

## When applied
Periodically evaluated post-implementation to detect when foundational assumptions behind an ADR have broken down.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A critical lifecycle governance gate preventing outdated architectural decisions from persisting unchecked. By codifying quantitative drift thresholds (e.g., cost overruns or license hikes), it automatically triggers formal reconsideration when the economic or technical premises of a build/buy choice collapse.
