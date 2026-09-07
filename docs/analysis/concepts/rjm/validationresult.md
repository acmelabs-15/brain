---
package: rjm
name: ValidationResult
slug: validationresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: .github/scripts/validate_investigation_claims.py, sha256: 1f0feb2769dc14326138f021a99ada12834bbe4fa94539850b90fdc0c55b233a}
  - {path: scripts/validate_memory_tier.py, sha256: 4f87d202ac44cf05d5246d8261c6fc3a501aeb568f36370317b3f1d833e1e6c0}
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
  - {path: scripts/validation/__init__.py, sha256: 077618dffc4308fc3ffcfa06330b00237d0ce94a188851ed098352ff6a4e83db}
  - {path: scripts/validation/agent_registry.py, sha256: 1fc80c4c6f8e47f82c460cad6e02d91f2fe6766ffea24e7c70f9e5f5b7f07e1b}
  - {path: scripts/validation/models.py, sha256: ab33e91e0a916534208d7d90ca1e1c407a0fc4a1bf3089774c17d6ae449a8e48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ValidationResult

## Definition — verbatim
(used, not defined)

> "class ValidationResult:" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 44 | defined here | Dataclass encapsulating experiment document validation status, messages, errors, warnings, and numerical score. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 23 | defined here | Dataclass representing CVA matrix validation outcomes with error and warning lists. |
| .claude/skills/pre-mortem/scripts/pre-mortem.py | 22 | defined here | Dataclass holding pre-mortem analysis validation results including success flag and issues. |
| .claude/skills/skillforge/references/regression-questions.md | 157 | used here | Referenced in regression testing guidance as standard result envelope for validation operations. |
| .claude/skills/skillforge/references/script-patterns-catalog.md | 83 | defined here | Standard validation script result object pattern documenting check tracking and warning accumulation. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 35 | defined here | Structured dataclass recording threat model validation errors, warnings, and scoring metrics. |
| .github/scripts/validate_investigation_claims.py | 84 | defined here | Result class capturing investigation claim verification passes, failures, and rationale. |
| scripts/validate_memory_tier.py | 49 | defined here | Result dataclass tracking memory tier structural and token budget conformance. |
| scripts/validate_session_json.py | 60 | used here | Imported validation result type used for session format verification. |
| scripts/validation/__init__.py | 6 | used here | Re-exports common ValidationResult model for repository-wide validation scripts. |
| scripts/validation/agent_registry.py | 85 | defined here | Agent definition validation outcome dataclass tracking schema conformance. |
| scripts/validation/models.py | 17 | defined here | Canonical dataclass providing derived `is_valid` boolean from error collection for consistent script results. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
`ValidationResult` is a shared Python dataclass and result object pattern used across validation scripts to encapsulate boolean validity, error lists, and warning diagnostics rather than a lifecycle stage, classified as `name-only` per D-023.
