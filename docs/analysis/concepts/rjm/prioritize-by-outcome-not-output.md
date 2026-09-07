---
package: rjm
name: Prioritize by outcome, not output
slug: prioritize-by-outcome-not-output
kind: pattern
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Prioritize by outcome, not output

## Definition — verbatim
> "Prioritize by outcome, not output. Challenge scope that does not serve stated user value." — .claude/agents/roadmap.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 12 | defined here | Core behavioral principle directing the roadmap agent to evaluate features by impact rather than deliverables. |

## Consumes
Proposed feature lists, deliverables, and user problem statements.

## Produces
Prioritization decisions favoring measurable impact on user behavior over the sheer volume of code or features shipped.

## When applied
Applied whenever scoring or ranking candidate backlog items.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
Prioritize by outcome, not output establishes that shipping code is a cost, not a benefit. Features are merely outputs; what matters is whether they achieve desired user outcomes. This principle prevents feature-factory behavior by prioritizing minimal solutions that achieve maximal user impact.
