---
package: rjm
name: "inherited debt"
slug: inherited-debt
kind: pattern
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

# inherited debt

## Definition — verbatim
(used, not defined)

> "Gate on change, not on inherited debt." — .claude/skills/code-qualities-assessment/scripts/assess.py:1043

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 1043 | used here | Core design rationale in check_regression docstring mandating that gating evaluate deltas rather than pre-existing debt. |

## Consumes
Historical codebase maintainability flaws and pre-existing quality metric deficits present at the merge base revision.

## Produces
Isolation of prior architectural deficiencies so they do not block active pull requests touching legacy files.

## When applied
Applied during regression mode evaluation in `assess.py` when scoring modified files against their base revision.

## Sub-concepts
none

## Part of
regression

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`inherited debt` refers to legacy technical debt, poor cohesion, tight coupling, or lack of testability that pre-dates the current feature branch. In rjm's regression gate philosophy, failing developers for modifying a legacy file with low existing quality scores creates perverse incentives to avoid touching legacy code or refactoring adjacent components. By gating on change deltas rather than inherited debt, `assess.py` allows incremental work in debt-laden files while strictly forbidding further degradation.
