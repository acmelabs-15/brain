---
package: rjm
name: Three-Tier Model Selection Strategy
slug: three-tier-model-selection-strategy
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Three-Tier Model Selection Strategy

## Definition — verbatim
> "### 3. Three-Tier Model Selection Strategy" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 154 | defined here | Architectural strategy partitioning skills across Opus, Sonnet, and Haiku based on task complexity. |

## Consumes
Analysis of skill task complexity, reasoning depth requirements, and invocation frequency.

## Produces
Model tier allocations optimizing repository LLM cost and latency.

## When applied
When assigning model capability tiers to skills and agents (historically via ADR-040; later superseded by ADR-080).

## Sub-concepts
- tier-1-opus
- tier-2-sonnet
- tier-3-haiku

## Part of
none

## Implementation status
clean

## Design notes
The Three-Tier Model Selection Strategy establishes a structured tiering framework in rjm that balances reasoning capability, speed, and API expenditure by mapping heavy multi-agent orchestration to Tier 1 (Opus), standard workflows to Tier 2 (Sonnet), and high-frequency pattern matching to Tier 3 (Haiku).
