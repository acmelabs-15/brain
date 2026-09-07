---
package: rjm
name: RICE/KANO prioritization
slug: rice-kano-prioritization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RICE/KANO prioritization

## Definition — verbatim
(used, not defined)

> "**Specialization**: Epic definition, RICE/KANO prioritization, product vision" — .agents/AGENT-SYSTEM.md:616

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 616 | used here | Listed as a primary specialization of the roadmap agent for evaluating and prioritizing epics. |

## Consumes
Feature requests, candidate epics, metric projections, and customer satisfaction classifications.

## Produces
Prioritized epic rankings balancing essential baseline requirements with strategic high-leverage features.

## When applied
> "- Prioritizing backlog" — .agents/AGENT-SYSTEM.md:634

## Sub-concepts
- rice-scoring

## Part of
- roadmap

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md invalid relative paths and missing backlog.md file)

## Design notes
RICE/KANO prioritization in rjm synthesizes quantitative reach/impact/effort calculations with qualitative satisfaction-to-investment curves. By combining RICE numerical scoring with KANO categorization (must-have, performance, delighter, indifferent), the roadmap agent ensures that engineering investment is not wasted on indifferent features and that foundational baseline capabilities precede speculative delighters.
