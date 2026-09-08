---
package: rjm
name: NEEDS_DECOMPOSITION
slug: needs-decomposition
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# NEEDS_DECOMPOSITION

## Definition — verbatim
> "more than 10 high-impact refactors apply. Return the top 10 and propose splitting the rest into a follow-up session." — templates/agents/code-simplifier.shared.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/code-simplifier.shared.md | 124 | used here | Failure mode and handoff status returned when candidate refactors exceed 10 items, prompting task splitting. |
| templates/agents/comment-analyzer.shared.md | 120 | used here | Failure mode and handoff status returned when comment findings exceed 10 items, returning top 10 and recommending follow-up decomposition. |

## Consumes
Lists of refactor suggestions or comment triage findings exceeding maximum batch size bounds.

## Produces
Truncated report delivering top 10 prioritized items alongside a formal recommendation to split remaining items into follow-up tasks.

## When applied
Triggered when the volume of valid changes exceeds cognitive and context thresholds (more than 10 items).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A safety valve and scope control gate preventing support agents from generating unwieldy, unreviewable batches of changes by enforcing task decomposition.
