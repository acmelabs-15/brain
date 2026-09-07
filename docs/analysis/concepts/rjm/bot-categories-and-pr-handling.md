---
package: rjm
name: Bot Categories and PR Handling
slug: bot-categories-and-pr-handling
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

# Bot Categories and PR Handling

## Definition — verbatim
> "## Bot Categories and PR Handling" — docs/autonomous-pr-monitor.md:843
> "The PR maintenance script classifies PRs by author category to determine appropriate action:" — docs/autonomous-pr-monitor.md:845

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 843 | defined here | Partitions pull requests by author classification (agent-controlled, mention-triggered, review-bot, human) to guide automated handling. |

## Consumes
Pull request author identity and automated bot metadata.

## Produces
Author-category triage classification directing direct response, mention-triggering, feedback synthesis, or human escalation.

## When applied
Applied when triaging pull requests authored or reviewed by automated bot accounts.

## Sub-concepts
renovate-pr-handling, copilot-pr-handling

## Part of
pr-triage-protocol

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Bot Categories and PR Handling partitions pull requests by author category to ensure that bot-authored PRs are handled with appropriate automated remediation while human-authored work is protected from unrequested modification.
