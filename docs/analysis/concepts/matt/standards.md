---
package: matt
name: Standards
slug: standards
kind: gate
package_phase: matt:code-review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Standards

## Definition — verbatim
> "**Standards** asks whether the code follows how this repo writes code." — docs/engineering/code-review.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 3 | defined here | Canonical definition establishing Standards as the review axis asking if code is built right according to repo conventions. |
| external/code-review.md | 25 | defined here | External catalog documentation describing the Standards review axis. |
| skills/engineering/code-review/SKILL.md | 8 | defined here | Skill instructions defining the Standards sub-agent review execution. |

## Consumes
The diff between HEAD and the fixed point, repository standards files (e.g. CODING_STANDARDS.md), and the Fowler smell baseline.

## Produces
A prioritized report of convention breaches and detected code smells with concrete fix suggestions.

## When applied
During the /code-review phase, executed in an isolated sub-agent concurrently with the Spec axis.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (non-deterministic evaluations across runs with no convergence guarantee)

## Design notes
One of the two non-interchangeable evaluation axes in matt's code review architecture. The Standards axis evaluates purely whether code adheres to local conventions and structural quality heuristics. By running in an independent sub-agent completely separated from the Spec axis, Standards findings cannot be diluted or excused by functional correctness, and vice versa.
