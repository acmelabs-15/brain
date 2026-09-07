---
package: rjm
name: Silent Failure
slug: silent-failure
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Silent Failure

## Definition — verbatim
(used, not defined)

> "- A new failure or error path that emits no log, metric, or trace (silent failure)" — .claude/skills/review/references/observability.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 173 | used here | Task 1.3 details remediation of silent failure patterns (`\|\| true`) in GitHub workflow commands. |
| .claude/skills/review/references/observability.md | 128 | used here | Defined as an automatic critical failure trigger when a new error path emits neither log, metric, nor trace. |

## Consumes
Command executions, API requests, or script operations prone to failure.

## Produces
Undetected fault states or unlogged error paths that evade monitoring and review.

## When applied
During code reviews, observability assessments, and remediation passes when evaluating error handling robustness.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
An antipattern where error conditions or command failures are suppressed (e.g., using `|| true` or empty catch blocks) without emitting logs, metrics, or traces, concealing faults from CI and human reviewers.
