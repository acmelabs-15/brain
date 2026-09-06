---
package: addy
name: Review Speed
slug: review-speed
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Review Speed

## Definition — verbatim
> "Slow reviews block entire teams. The cost of context-switching to review is less than the waiting cost imposed on others." — skills/code-review-and-quality/SKILL.md:249-251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 249 | defined here | Establishes operational cadence norms and turnaround expectations for code reviews. |

## Consumes
Pending review requests and submitted pull requests.

## Produces
Rapid turnaround cycles (within one business day maximum), prioritized initial feedback, and requests to split oversized changesets.

## When applied
When receiving review requests or organizing personal and agent review workflow priorities.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
Operational guidelines emphasizing that team throughput is constrained primarily by latency in review handoffs, establishing a one-business-day response ceiling and prioritizing prompt initial feedback to minimize idle waiting time across contributors.
