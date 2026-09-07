---
package: rjm
name: Complexity sizes
slug: complexity-sizes
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity sizes

## Definition — verbatim
> "- **Quantified task estimates**: Use complexity sizes (XS/S/M/L/XL/XXL) with clear guidelines" — .claude/agents/backlog-generator.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/backlog-generator.md | 28 | defined here | Sizing rubric establishing XS through XXL complexity classifications for quantified task estimates. |
| templates/agents/backlog-generator.shared.md | 31 | defined here | Sizing rubric establishing XS through XXL complexity classifications for quantified task estimates. |

## Consumes
Discovered backlog tasks, bug reports, and feature work items.

## Produces
Quantified task size estimates (XS, S, M, L, XL, XXL) determining model selection and decomposition triggers.

## When applied
Applied during backlog generation and work item estimation.

## Sub-concepts
none

## Part of
backlog-generator

## Implementation status
clean

## Design notes
Complexity sizes provides a standardized t-shirt scale (XS, S, M, L, XL, XXL) for estimating task difficulty based on structural scope rather than subjective time estimates. In rjm, these size classifications govern orchestrator model routing (directing smaller tasks to lighter models and larger tasks to high-capacity models) and dictate decomposition thresholds.
