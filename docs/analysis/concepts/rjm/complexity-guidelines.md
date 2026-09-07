---
package: rjm
name: Complexity Guidelines
slug: complexity-guidelines
kind: reference
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Complexity Guidelines

## Definition — verbatim
> "## Complexity Guidelines" — .claude/agents/task-decomposer.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/task-decomposer.md | 128 | defined here | Estimation guideline table mapping code scope and architectural complexity to size tiers. |
| templates/agents/task-decomposer.shared.md | 185 | defined here | Shared template reference table defining complexity guidelines for task sizing. |

## Consumes
Scope assessments, module boundary impact, and file change counts for candidate tasks.

## Produces
Standardized complexity ratings: XS (single function), S (single file), M (multiple files), L (multiple components), XL (cross-cutting).

## When applied
Applied during task decomposition when estimating individual work items to avoid time-based estimates.

## Sub-concepts
none

## Part of
decomposition-process

## Implementation status
clean

## Design notes
Complexity Guidelines define the sizing rubric (XS, S, M, L, XL) based on architectural scope and code surface area rather than time units, anchoring consistent difficulty estimations across decomposed tasks.
