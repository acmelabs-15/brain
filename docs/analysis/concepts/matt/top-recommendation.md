---
package: matt
name: Top recommendation
slug: top-recommendation
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Top recommendation

## Definition — verbatim
> "The report ends with a **Top recommendation** (the one it would tackle first), and then the skill stops and asks which candidate you want to explore." — docs/engineering/improve-codebase-architecture.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 46 | defined here | Defines Top recommendation as the primary candidate identified in the architectural survey report. |
| external/improve-codebase-architecture.md | 45 | defined here | Explains the Top recommendation highlight concluding the architecture survey. |

## Consumes
A complete set of evaluated and ranked architectural candidates.

## Produces
A singled-out primary candidate presented as the default starting point for human decision-making.

## When applied
At the conclusion of an improve-codebase-architecture survey before prompting user selection.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
The Top recommendation is the single highest-impact candidate highlighted at the end of an architectural survey. Rather than leaving the user with an overwhelming catalog of issues, it provides a clear, actionable default starting point for refactoring.
