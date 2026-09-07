---
package: rjm
name: Priority Classification
slug: priority-classification
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Priority Classification

## Definition — verbatim
> "### Priority Classification" — .claude/skills/retrospective/references/diagnosis-and-actions.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 101 | defined here | Section specifying the priority classification table mapping findings to priority tiers, categories, and evidence. |

## Consumes
Diagnostic findings and empirical evidence extracted from session analysis.

## Produces
A prioritized findings table classifying items into P0/P1/P2 tiers and assigning categories (Critical, Success, NearMiss, Efficiency, Gap).

## When applied
Applied during Phase 2 (Diagnosis) after root cause analysis.

## Sub-concepts
none

## Part of
diagnostic-analysis, diagnosis

## Implementation status
clean

## Design notes
Priority Classification assigns explicit urgency ratings (P0, P1, P2) and categories (Critical, Success, NearMiss, Efficiency, Gap) to diagnostic findings, establishing an objective basis for subsequent action planning.
