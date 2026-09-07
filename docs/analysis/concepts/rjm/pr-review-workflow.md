---
package: rjm
name: PR Review Workflow
slug: pr-review-workflow
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Review Workflow

## Definition — verbatim
> "## PR Review Workflow" — docs/autonomous-pr-monitor.md:28
> "After completing session initialization (if this is a new session), you must check for actionable items that require PR review:" — docs/autonomous-pr-monitor.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 28 | defined here | Defines the workflow for discovering actionable PRs, classifying them by tier, and executing batched reviews. |

## Consumes
GitHub notifications via `gh notify -s` and open pull request list.

## Produces
Batched pull request review executions via `/pr-review` with parallel processing and cleanup flags.

## When applied
Applied after session initialization and before executing main tasks whenever open PRs require review or comment responses.

## Sub-concepts
pr-triage-protocol

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
PR Review Workflow establishes an autonomous procedure for discovering, tiering, and batch-executing pull request reviews, enforcing batch size limits (maximum 8 PRs per invocation) and parallel agent delegation.
