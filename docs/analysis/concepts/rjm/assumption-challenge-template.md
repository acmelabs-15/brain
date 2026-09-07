---
package: rjm
name: Assumption Challenge Template
slug: assumption-challenge-template
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

# Assumption Challenge Template

## Definition — verbatim
> "### Assumption Challenge Template" — .claude/agents/independent-thinker.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 160 | defines | Markdown template schema structuring challenged assumptions, evidence for/against, alternatives, and uncertainty level. |
| templates/agents/independent-thinker.shared.md | 133 | defines | Shared template schema for assumption challenge documentation. |

## Consumes
Explicit or implicit architectural assumptions undergoing challenge.

## Produces
Structured assumption challenge report formatted with Evidence For, Evidence Against, Alternatives, Uncertainty Level, and Recommendation.

## When applied
Used when auditing and documenting challenge findings for specific architectural or system assumptions.

## Sub-concepts
none

## Part of
independent-thinker

## Implementation status
defects: missing-path

## Design notes
Provides a standardized schema for adversarial assumption analysis. By structuring critique into balanced evidence for, evidence against, alternative interpretations, and explicit uncertainty levels, it transforms subjective skepticism into rigorous, reproducible engineering analysis.
