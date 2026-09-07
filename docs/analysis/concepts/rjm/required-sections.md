---
package: rjm
name: REQUIRED_SECTIONS
slug: required-sections
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# REQUIRED_SECTIONS

## Definition — verbatim
(used, not defined)

> "REQUIRED_SECTIONS = [" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 55 | defined here | List of mandatory markdown section titles and regex patterns required in chaos experiment documents. |
| .claude/skills/pre-mortem/scripts/pre-mortem.py | 53 | defined here | Tuple/list of mandatory sections enforced during pre-mortem document validation. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 43 | defined here | Constant defining required sections for STRIDE threat model document completeness. |
| CONTRIBUTING.md | 244 | defined here | Section header in contributor guidelines enumerating mandatory sections for agent definitions. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`REQUIRED_SECTIONS` is a configuration constant identifier and markdown heading denoting mandatory document sections across validators and contribution guidelines, classified as `name-only` per D-023.
