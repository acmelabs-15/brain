---
package: rjm
name: CI Concurrency Race
slug: ci-concurrency-race
kind: pattern
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

# CI Concurrency Race

## Definition — verbatim
> "## Fix Patterns: CI Concurrency Race (From Session Analysis)" — docs/autonomous-pr-monitor.md:907
> "**Problem**: `cancel-in-progress: true` in PR validation workflows creates stale CANCELLED check runs that block merge." — docs/autonomous-pr-monitor.md:909

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 907 | defined here | Documents the failure mode where rapid bot events trigger workflow cancellation leading to blocking CANCELLED statuses, with immediate and durable fixes. |

## Consumes
Workflow runs cancelled in-progress by rapid consecutive bot events (e.g. `opened` followed immediately by `edited`).

## Produces
Triggered re-runs of cancelled workflows and workflow configuration fixes (removing `cancel-in-progress` or filtering bot events).

## When applied
Applied when diagnosing pull requests blocked by stale `CANCELLED` status checks on branch protection.

## Sub-concepts
none

## Part of
fix-patterns

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
CI Concurrency Race identifies the race condition where `cancel-in-progress: true` causes bot PR event sequences to cancel earlier check runs that GitHub branch protection then treats as permanent failures, prescribing workflow re-runs to clear the gate.
