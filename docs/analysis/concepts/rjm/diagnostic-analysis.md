---
package: rjm
name: Diagnostic Analysis
slug: diagnostic-analysis
kind: technique
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

# Diagnostic Analysis

## Definition — verbatim
> "## Diagnostic Analysis" — .claude/skills/retrospective/references/diagnosis-and-actions.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 86 | defined here | Section header in the diagnosis template defining structured outcome evaluation, root cause analysis, evidence collection, and priority classification. |

## Consumes
Session execution trace, tool outputs, error logs, and outcome status.

## Produces
Structured diagnostic evaluation detailing outcome classification, what happened, root causes, evidence, and prioritized findings.

## When applied
Applied during Phase 2 (Diagnosis) of retrospective workflows.

## Sub-concepts
priority-classification

## Part of
diagnosis, retrospective

## Implementation status
clean

## Design notes
Diagnostic Analysis is the core diagnostic technique in rjm retrospectives where an agent methodically evaluates whether a session succeeded or failed, investigates root causes with concrete evidence, and classifies findings into priority tiers.
