---
package: rjm
name: Merge Ordering
slug: merge-ordering
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

# Merge Ordering

## Definition — verbatim
> "## Merge Ordering" — docs/autonomous-pr-monitor.md:889
> "When multiple PRs modify the same file or action, merge order matters." — docs/autonomous-pr-monitor.md:891

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 889 | defined here | Defines sequencing rules for landing overlapping pull requests and dependency updates to minimize merge conflicts. |

## Consumes
File overlap diffs obtained via `gh pr diff {number} --name-only` across candidate land-ready PRs.

## Produces
Prioritized merge sequence landing smaller diffs first and ordering dependency PRs by ascending PR number.

## When applied
Applied before landing a batch of approved pull requests that modify overlapping files or GitHub actions.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Merge Ordering reduces merge conflicts in automated landing pipelines by scheduling smaller diffs before larger ones and processing dependency bumps in ascending creation order.
