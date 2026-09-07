---
package: rjm
name: Critical Path
slug: critical-path
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critical Path

## Definition — verbatim
(used, not defined)

> "### Question: What's the critical path?" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:369

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 369 | defined here | Defines the strict sequential ordering of remediation tasks (injection fix, silent failure removal, exit conversions, test verification) that must occur before merge. |

## Consumes
Remediation tasks, dependencies, time estimates, and blocking prerequisites.

## Produces
A prioritized, sequential execution timeline identifying which tasks directly control the earliest completion date.

## When applied
Applied during remediation planning and project triage to eliminate execution bottlenecks and enforce correct sequencing.

## Sub-concepts
none

## Part of
planning-techniques

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Critical Path` identifies the strict, unbroken sequence of interdependent tasks that directly determine when a pull request or release can reach merge readiness, preventing parallel distractions from delaying core blocker remediation.
