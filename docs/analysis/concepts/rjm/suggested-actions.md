---
package: rjm
name: Suggested Actions
slug: suggested-actions
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Suggested Actions

## Definition — verbatim
> "## Suggested Actions" — .claude/agents/issue-feature-review.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 109 | defines | Section heading structuring assignees, labels, milestone, and next steps in feature review reports. |

## Consumes
Feature review evaluation outcomes and recommended triage dispositions.

## Produces
Concrete next steps including assigned maintainers, triage labels, milestone targets, and sequential actions.

## When applied
Appended to every completed issue feature review to convert findings into execution.

## Sub-concepts
none

## Part of
issue-feature-review-agent

## Implementation status
clean

## Design notes
The operational bridge converting feature evaluations into repository actions. By specifying assignees, labels, milestone placements, and numbered next steps, it ensures review findings immediately trigger concrete workflows rather than languishing as passive text.
