---
package: rjm
name: Decision Critique Application
slug: decision-critique-application
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Critique Application

## Definition — verbatim
> "## Decision Critique Application" — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 18 | defined here | Defines the operational guidelines for assessing code change scope boundaries during decision critique. |

## Consumes
Proposed code changes, diffs, refactoring plans, and contextual delivery timelines.

## Produces
Scope boundary assessments distinguishing opportunistic cleanup from scope creep.

## When applied
Applied during decision evaluation when proposed changes include opportunistic refactoring.

## Sub-concepts
boundaries-for-critique, synthesis-guidance

## Part of
boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Decision Critique Application is the structured integration section in reference files that specifies how a general quality or engineering principle is operationalized within the 7-step decision critique workflow.
