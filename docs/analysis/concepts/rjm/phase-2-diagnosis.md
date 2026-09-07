---
package: rjm
name: "Phase 2: Diagnosis"
slug: phase-2-diagnosis
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 2: Diagnosis

## Definition — verbatim
> "### Phase 2: Diagnosis" — .claude/skills/retrospective/SKILL.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 236 | defined here | Section heading in the generated artifact scaffolding tables for successes, failures, and near misses. |
| .claude/skills/retrospective/SKILL.md | 109 | defined here | Third retrospective phase prioritizing findings and analyzing error patterns before decision making. |

## Consumes
Insights, patterns, and root-cause findings produced in Phase 1.

## Produces
Structured diagnostic tables classifying successes, failures, and near misses with atomicity scores.

## When applied
Applied after Phase 1 insights to categorize and prioritize findings by diagnostic severity.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 2: Diagnosis prioritizes retrospective findings across error patterns, success strategies, and near misses to determine what requires procedural or tooling intervention. By enforcing structured classification of what helped versus what harmed execution, this phase prevents teams from fixing minor symptoms while ignoring critical systemic failures.
