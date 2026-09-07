---
package: rjm
name: Ready-to-Merge Definition
slug: ready-to-merge-definition
kind: gate
package_phase: rjm:ship
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

# Ready-to-Merge Definition

## Definition — verbatim
> "## Ready-to-Merge Definition" — docs/autonomous-pr-monitor.md:56
> "A PR is ready to merge ONLY when ALL of the following hold:" — docs/autonomous-pr-monitor.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 56 | defined here | Defines the mandatory four-condition gate (up to date branch, all required checks passing, all threads addressed, executable mergeStateStatus) required to merge a PR. |

## Consumes
GitHub branch sync state, required CI check results, review thread resolution logs, and GitHub `mergeStateStatus`.

## Produces
Merge readiness verdict authorizing auto-merge enablement or direct squash merge execution.

## When applied
Applied prior to enabling auto-merge or executing a direct merge on any pull request.

## Sub-concepts
mergestatestatus, auto-merge

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Ready-to-Merge Definition enforces a strict four-condition quality gate preventing premature or broken merges by verifying branch freshness, passing required checks, complete thread resolution, and executable merge status.
