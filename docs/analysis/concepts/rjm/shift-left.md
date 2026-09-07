---
package: rjm
name: shift-left
slug: shift-left
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
  - {path: .claude/skills/planner/references/design-pit-of-success.md, sha256: c4ff5d944193baea5ecd7c5d5cd000c773ccf709f300a953e8ea17ab634a2064}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shift-left

## Definition — verbatim
> "- Shift Left: move the pit closer to the point of creation" — .claude/skills/planner/references/design-pit-of-success.md:62

## Also called — verbatim
`Shift Left` — CONTRIBUTING.md:726

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 81 | used here | Cited as the guiding principle for preventing scope explosion prior to PR creation. |
| .claude/skills/planner/references/design-pit-of-success.md | 62 | used here | Defined as moving the pit of success closer to the initial point of creation. |
| CONTRIBUTING.md | 726 | used here | Heading describing automated pre-commit and pre-push quality gates. |
| scripts/validation/spec_contradiction.py | 29 | used here | Describes the fast local heuristic check as a shift-left tool reducing remote CI feedback loops. |

## Consumes
Authoring-time constraints, pre-commit hooks, and local validation tools.

## Produces
Early defect discovery before changes reach remote CI or human review.

## When applied
Applied continuously throughout planning, authoring, pre-commit, and pre-PR workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An engineering doctrine and design pattern that relocates validation, linting, specification checks, and governance constraints as close as possible to the point of authoring/creation (pre-commit, local pre-PR, and authoring templates) rather than relying on late, costly post-submission CI or human review cycles.
