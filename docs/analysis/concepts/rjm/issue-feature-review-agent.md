---
package: rjm
name: Issue Feature Review Agent
slug: issue-feature-review-agent
kind: role
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

# Issue Feature Review Agent

## Definition — verbatim
> "You triage GitHub feature requests with constructive skepticism. Thank the submitter. Summarize the ask. Evaluate evidence and trade-offs. Recommend PROCEED, DEFER, REQUEST_EVIDENCE, NEEDS_RESEARCH, or DECLINE." — .claude/agents/issue-feature-review.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 10 | defines | Document heading and agent persona definition for triaging GitHub feature requests with constructive skepticism. |

## Consumes
GitHub issue titles, descriptions, community demand signals, and repository context.

## Produces
Structured issue feature reviews containing summary, evaluation dimensions, formal recommendation, and suggested actions.

## When applied
Dispatched to triage new incoming GitHub feature requests, issues, or backlog enhancements.

## Sub-concepts
implementation-complexity, maintenance-burden, constructive-skepticism, proceed, defer, request-evidence, needs-research, decline, suggested-actions

## Part of
orchestrator

## Implementation status
clean

## Design notes
Serves as the intake gatekeeper for product feature requests in rjm. By applying constructive skepticism, estimating implementation complexity and long-term maintenance burdens, and categorizing requests into five standard verdicts, it protects the project roadmap from feature creep and unvalidated work.
