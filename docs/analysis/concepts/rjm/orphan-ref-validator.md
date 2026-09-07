---
package: rjm
name: orphan-ref-validator
slug: orphan-ref-validator
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
  - {path: .claude/skills/orphan-ref-validator/scripts/__init__.py, sha256: ebb4a94bf99fc336ee0e1f56d79f0b0b38844fa10263a63259a9a92eef0e9a13}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: .claude/skills/orphan-ref-validator/scripts/patterns.py, sha256: dfb52ef98707034cd271dbc3877e9fa6d17bfb16a9ac96e2cf121b47c3582410}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/orphan-ref-validator/scripts/walking.py, sha256: c5ec30edde983edb8e7427dbe17f5d866f34515ebdbb2b82a8867f31db8f074e}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# orphan-ref-validator

## Definition — verbatim
> "\"\"\"Orphan-ref validator: detect references to absent entities in structured artifacts." — .claude/skills/orphan-ref-validator/scripts/scan.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/__init__.py | 2 | used here | Referenced and applied in __init__.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 2 | used here | Referenced and applied in counts.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 2 | used here | Referenced and applied in envelope.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 2 | used here | Referenced and applied in filters.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/patterns.py | 2 | used here | Referenced and applied in patterns.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 10 | defined here | Primary definition of `orphan-ref-validator` within scan.py. |
| .claude/skills/orphan-ref-validator/scripts/walking.py | 2 | used here | Referenced and applied in walking.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/SKILL.md | 2 | defined here | Primary definition of `orphan-ref-validator` within SKILL.md. |
| scripts/sync/detect_spec_drift.py | 31 | used here | Referenced and applied in detect_spec_drift.py during verification and operational workflows. |

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
clean

## Design notes
An operational technique or artifact (orphan-ref-validator) utilized within the rjm ecosystem to ensure consistency and systematic execution.
