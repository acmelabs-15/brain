---
package: rjm
name: Verdict Decision Logic
slug: verdict-decision-logic
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verdict Decision Logic

## Definition — verbatim
> "### Verdict Decision Logic" — .claude/agents/qa.md:575

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 575 | defines | Rules governing APPROVED vs BLOCKED determinations based on five gate steps and confidence scores. |
| templates/agents/qa.shared.md | 536 | defines | Shared template definition for gate verdict determination rules and criteria. |

## Consumes
Step results from all five quality gate checks and evaluated confidence score.

## Produces
Binary verdict (APPROVED or BLOCKED) with blocking issue justifications.

## When applied
Evaluated when synthesizing the final Pre-PR Validation Report.

## Sub-concepts
none

## Part of
pre-pr-validation-report

## Implementation status
clean

## Design notes
The decision rule set used to assign an APPROVED or BLOCKED status in pre-PR quality gating. By establishing deterministic criteria (unanimous passing across all five steps plus high confidence for approval), it removes subjective ambiguity from release readiness assessments.
