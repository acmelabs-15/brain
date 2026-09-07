---
package: rjm
name: Autonomous PR Monitoring Prompt
slug: autonomous-pr-monitoring-prompt
kind: template
package_phase: cross-phase
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

# Autonomous PR Monitoring Prompt

## Definition — verbatim
> "# Autonomous PR Monitoring Prompt" — docs/autonomous-pr-monitor.md:1
> "Use this prompt to start an autonomous monitoring session that continuously monitors PRs and proactively fixes issues." — docs/autonomous-pr-monitor.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 1 | defined here | Operating prompt bundle and reference manual specifying the autonomous PR monitoring, triage, remediation, and merge lifecycle. |

## Consumes
GitHub notifications, open PR list, CI check results, review threads, Serena memories, and per-issue handoffs.

## Produces
Triaged PR batches, automated PR reviews, committed CI fixes, thread resolutions, branch updates, and merged pull requests.

## When applied
Applied when initiating an autonomous monitoring agent session to continuously inspect and remediate open pull requests.

## Sub-concepts
pr-triage-protocol, ready-to-merge-definition, per-pr-live-state-re-triage

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Autonomous PR Monitoring Prompt provides an exhaustive operational prompt and runbook for background pull request monitoring, automated CI remediation, review thread lifecycle resolution, and safe merging in high-velocity repositories.
