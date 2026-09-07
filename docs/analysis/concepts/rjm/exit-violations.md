---
package: rjm
name: EXIT_VIOLATIONS
slug: exit-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/ci/ruff_ratchet.py, sha256: 4d1e47b5ae78226bf73fb3d992c619a1884527480dd1fe9d141583a3b92e5bda}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EXIT_VIOLATIONS

## Definition — verbatim
(used, not defined)

> "\"EXIT_VIOLATIONS\"," — .claude/skills/golden-principles/scripts/scan_principles_core.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/scripts/scan_principles_core.py | 27 | defined here | Primary definition of `EXIT_VIOLATIONS` within scan_principles_core.py. |
| .claude/skills/style-enforcement/scripts/check_style.py | 34 | defined here | Primary definition of `EXIT_VIOLATIONS` within check_style.py. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 22 | defined here | Primary definition of `EXIT_VIOLATIONS` within taste_lints.py. |
| scripts/ci/ruff_ratchet.py | 46 | defined here | Primary definition of `EXIT_VIOLATIONS` within ruff_ratchet.py. |
| scripts/validation/check_zero_collection_tests.py | 64 | defined here | Primary definition of `EXIT_VIOLATIONS` within check_zero_collection_tests.py. |

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
defects: doc-drift, exit-code-mismatch, orphan, other, script-bug

## Design notes
A code identifier, type, or architectural heading (`EXIT_VIOLATIONS`) recorded during inventory analysis, classified as `name-only` per D-023.
