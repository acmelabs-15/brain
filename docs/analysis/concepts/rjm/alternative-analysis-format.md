---
package: rjm
name: Alternative Analysis Format
slug: alternative-analysis-format
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Alternative Analysis Format

## Definition — verbatim
> "### Alternative Analysis Format" — .claude/agents/independent-thinker.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 185 | defines | Template defining Current Approach, Concerns, and Alternatives breakdown structure. |
| templates/agents/independent-thinker.shared.md | 158 | defines | Shared template defining structured alternative analysis reports. |

## Consumes
Current proposed technical approach, identified architectural concerns, and candidate alternative solutions.

## Produces
Comparative evaluation document detailing pros, cons, and tradeoffs across competing designs.

## When applied
Used when presenting structured technical alternatives to a proposed design or architecture.

## Sub-concepts
comparison-matrix

## Part of
independent-thinker

## Implementation status
defects: missing-path

## Design notes
Standardizes how alternative architectural approaches are evaluated against a proposal. It requires articulating concrete concerns with the current approach, followed by symmetric pros, cons, and tradeoffs for each alternative, culminating in a comparison matrix.
