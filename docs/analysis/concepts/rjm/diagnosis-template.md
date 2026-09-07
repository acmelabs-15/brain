---
package: rjm
name: Diagnosis Template
slug: diagnosis-template
kind: template
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

# Diagnosis Template

## Definition — verbatim
> "### Diagnosis Template" — .claude/skills/retrospective/references/diagnosis-and-actions.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 83 | defined here | Defines the template structure for diagnostic analysis, outcomes, root causes, evidence, and priority classification. |

## Consumes
Session execution outcomes, event logs, error messages, and root cause findings.

## Produces
Standardized `## Diagnostic Analysis` documentation section in retrospective session reports.

## When applied
Applied during Phase 2 (Diagnosis) of retrospective workflows to record structured findings.

## Sub-concepts
diagnostic-analysis, priority-classification

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Diagnosis Template standardizes the reporting structure for retrospective diagnostic analysis, requiring explicit recording of outcome, narrative description, root cause breakdown, evidence, and prioritized classification.
