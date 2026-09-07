---
package: rjm
name: write_baseline
slug: write-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_baseline

## Definition — verbatim
(used, not defined)

> "def write_baseline(path: Path, counts: dict[str, int]) -> None:" — scripts/validation/check_adr_lifecycle.py:956

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 956 | defined here | Writes updated per-check counts as the new baseline ceiling atomically using a temp file. |
| scripts/validation/check_rule_activation_coverage.py | 362 | defined here | Writes baseline uncovered rules and skills payload failing closed on error. |
| scripts/validation/check_skill_md_exec_portability.py | 463 | defined here | Writes exec-path vendor portability ratchet baseline JSON. |
| scripts/validation/check_skill_md_portability.py | 1180 | defined here | Writes vendor portability ratchet baseline JSON with current and marker counts. |
| scripts/validation/check_vendor_portability.py | 517 | defined here | Writes vendor portability baseline file from current offender set. |
| scripts/validation/portability_common.py | 244 | defined here | Writes a sorted portability baseline and prints standard summary output. |

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
defects: doc-drift, other

## Design notes
`write_baseline` is a Python baseline serialization function identifier across multiple validation scripts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
