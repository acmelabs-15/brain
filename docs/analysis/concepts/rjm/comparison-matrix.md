---
package: rjm
name: Comparison Matrix
slug: comparison-matrix
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

# Comparison Matrix

## Definition — verbatim
> "## Comparison Matrix" — .claude/agents/independent-thinker.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 204 | defines | Tabular rating structure comparing current proposal against alternatives across defined criteria. |
| templates/agents/independent-thinker.shared.md | 177 | defines | Shared template schema for alternative comparison matrices. |

## Consumes
Evaluated design criteria and rating scores for current and alternative approaches.

## Produces
Multi-dimensional comparison table scoring architectural options side-by-side.

## When applied
Used at the conclusion of an alternative analysis to synthesize tradeoffs into a single view.

## Sub-concepts
none

## Part of
alternative-analysis-format, independent-thinker

## Implementation status
defects: missing-path

## Design notes
A tabular decision tool that arrays candidate architectures against explicit criteria (performance, complexity, maintenance, scalability). It forces evaluators to score competing options side-by-side, preventing one-sided advocacy and illuminating genuine tradeoffs.
