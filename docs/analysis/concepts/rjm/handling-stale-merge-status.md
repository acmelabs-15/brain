---
package: rjm
name: Handling Stale Merge Status
slug: handling-stale-merge-status
kind: technique
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

# Handling Stale Merge Status

## Definition — verbatim
> "## Handling Stale Merge Status" — docs/autonomous-pr-monitor.md:623
> "GitHub calculates merge status asynchronously. When all PRs show `mergeable: UNKNOWN`, the status cache is stale." — docs/autonomous-pr-monitor.md:625

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 623 | defined here | Prescribes diagnostic and remediation techniques for identifying and refreshing stale GitHub mergeability status and merge-state caches. |

## Consumes
Stale GitHub merge indicators (`mergeable == UNKNOWN`, `CONFLICTING`, `mergeStateStatus == DIRTY`).

## Produces
Recalculated GitHub mergeability status via direct API queries, local trial merges, or GitHub update-branch API triggers.

## When applied
Applied when PRs report unknown or suspect conflict states despite clean underlying git histories.

## Sub-concepts
none

## Part of
ready-to-merge-definition

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Handling Stale Merge Status provides operational procedures to diagnose and resolve GitHub's asynchronous cache invalidation delays, distinguishing genuine git conflicts from stale server-side state.
