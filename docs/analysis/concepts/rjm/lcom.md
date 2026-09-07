---
package: rjm
name: "LCOM"
slug: lcom
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# LCOM

## Definition — verbatim
(used, not defined)

> "This is a size+definition approximation, not a true LCOM cohesion metric." — .claude/skills/code-qualities-assessment/scripts/assess.py:1085

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 1085 | used here | Cited in _score_cohesion docstring to clarify that cohesion scoring is a heuristic approximation rather than full LCOM. |

## Consumes
Class method definitions, instance variable access graphs, and symbol AST nodes.

## Produces
Object-oriented class cohesion metric quantifying lack of cohesion among methods.

## When applied
Referenced in code quality design discussions and cohesion metric calculations.

## Sub-concepts
none

## Part of
quality-scoring

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`LCOM` (Lack of Cohesion of Methods) is a foundational object-oriented software metric that measures the degree to which methods in a class share field access. In `assess.py`, the author explicitly cites LCOM to document that its fast line-based heuristic (combining line count and definition patterns) is an intentional lightweight proxy rather than an exact AST-derived LCOM calculation. Understanding this distinction prevents false assumptions regarding AST-level metric precision in lightweight agent environments.
