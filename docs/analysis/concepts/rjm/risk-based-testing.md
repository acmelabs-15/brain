---
package: rjm
name: Risk-Based Testing
slug: risk-based-testing
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Risk-Based Testing

## Definition — verbatim
> "Prioritize test effort based on risk assessment:" — .claude/agents/qa.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 228 | defined here | Guides test prioritization according to risk factors including user impact, change frequency, complexity, and defect history. |
| templates/agents/qa.shared.md | 218 | defined here | Guides test prioritization according to risk factors including user impact, change frequency, complexity, and defect history. |

## Consumes
Architectural impact analysis, code change frequencies, complexity scores, historical defect clusters.

## Produces
Weighted test strategies focusing testing depth and negative case coverage on high-risk subsystems.

## When applied
Applied during test planning to allocate testing effort proportionally across system components.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
Risk-Based Testing optimizes resource allocation by weighting test depth according to failure impact and probability. By focusing rigorous negative testing and scenario exploration on high-risk surfaces (authentication, payments, complex workflows) while treating low-risk changes lightly, it maximizes defect prevention efficiency within tight delivery windows.
