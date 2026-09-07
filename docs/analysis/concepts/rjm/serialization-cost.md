---
package: rjm
name: serialization cost
slug: serialization-cost
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# serialization cost

## Definition — verbatim
(used, not defined)

> "The serialization cost is now O(N^2): every merge re-conflicts the remaining N-1 PRs, and no author can compute the correct target version without inspecting all other open branches." — .agents/architecture/ADR-091-post-merge-version-bot.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 20 | used here | Describes the quadratic throughput degradation of multi-branch integration when scalar version counters force continuous rebasing. |

## Consumes
N concurrently open pull requests contending for shared counter increments.

## Produces
Wasted developer effort, CI re-runs, and integration delays scaling quadratically with queue depth.

## When applied
Assessed when evaluating merge throughput bottlenecks across multi-agent or multi-developer teams.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Integration bottleneck phenomenon where requiring manual updates to monotonic counters forces sequential, serialized PR merging. Every merge invalidates the remaining open PRs, creating an O(N^2) rebasing burden that stalls development velocity.
