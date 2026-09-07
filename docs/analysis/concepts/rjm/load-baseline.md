---
package: rjm
name: load_baseline
slug: load-baseline
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# load_baseline

## Definition — verbatim
> "def load_baseline(path: Path) -> set[str]:" — .claude/skills/orphan-ref-validator/scripts/scan.py:646

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/scan.py | 646 | defined here | Primary definition of `load_baseline` within scan.py. |
| scripts/validation/check_doc_interpreter_portability.py | 437 | defined here | Primary definition of `load_baseline` within check_doc_interpreter_portability.py. |
| scripts/validation/check_rule_activation_coverage.py | 316 | defined here | Primary definition of `load_baseline` within check_rule_activation_coverage.py. |
| scripts/validation/check_ruleset_params_drift.py | 38 | defined here | Primary definition of `load_baseline` within check_ruleset_params_drift.py. |
| scripts/validation/check_skill_md_exec_portability.py | 311 | defined here | Primary definition of `load_baseline` within check_skill_md_exec_portability.py. |
| scripts/validation/check_vendor_portability.py | 162 | defined here | Primary definition of `load_baseline` within check_vendor_portability.py. |
| scripts/validation/portability_common.py | 24 | defined here | Primary definition of `load_baseline` within portability_common.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, orphan

## Design notes
An operational technique or artifact (load_baseline) utilized within the rjm ecosystem to ensure consistency and systematic execution.
