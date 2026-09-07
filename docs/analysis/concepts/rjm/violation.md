---
package: rjm
name: Violation
slug: violation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Violation

## Definition — verbatim
(used, not defined)

> "\"Violation\"," — .claude/skills/golden-principles/scripts/scan_principles_core.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/scripts/scan_principles_core.py | 35 | defined here | Primary definition of `Violation` within scan_principles_core.py. |
| .claude/skills/style-enforcement/scripts/check_style.py | 44 | defined here | Primary definition of `Violation` within check_style.py. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 158 | defined here | Primary definition of `Violation` within taste_lints.py. |
| scripts/detect_skill_violation.py | 86 | defined here | Primary definition of `Violation` within detect_skill_violation.py. |
| scripts/validation/check_adr_lifecycle.py | 195 | defined here | Primary definition of `Violation` within check_adr_lifecycle.py. |
| scripts/validation/check_canonical_citations.py | 90 | defined here | Primary definition of `Violation` within check_canonical_citations.py. |
| scripts/validation/check_ci_dependency_pins.py | 99 | defined here | Primary definition of `Violation` within check_ci_dependency_pins.py. |
| scripts/validation/check_skill_resolver_anchoring.py | 67 | defined here | Primary definition of `Violation` within check_skill_resolver_anchoring.py. |
| scripts/validation/check_skill_skip_clauses.py | 46 | defined here | Primary definition of `Violation` within check_skill_skip_clauses.py. |
| scripts/validation/check_worktree_recipes.py | 130 | defined here | Primary definition of `Violation` within check_worktree_recipes.py. |
| scripts/validation/hook_contracts.py | 91 | defined here | Primary definition of `Violation` within hook_contracts.py. |
| scripts/validation/sha_pinning.py | 52 | defined here | Primary definition of `Violation` within sha_pinning.py. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan, other, script-bug

## Design notes
A code identifier, type, or architectural heading (`Violation`) recorded during inventory analysis, classified as `name-only` per D-023.
