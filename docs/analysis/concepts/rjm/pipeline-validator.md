---
package: rjm
name: pipeline-validator
slug: pipeline-validator
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/pipeline-validator/references/error-patterns.md, sha256: 7699be1a64a928f9c8c37a2ff93c740246130ed982eadcc9fd882d268fa8b11b}
  - {path: .claude/skills/windows-image-updater/SKILL.md, sha256: 5b0330798cb4c66b87902f3afb3fd95ca8803dbbaa49a8db04f30154c713e27c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pipeline-validator

## Definition — verbatim
> "name: pipeline-validator" — .claude/skills/pipeline-validator/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pipeline-validator/references/error-patterns.md | 3 | used here | Referenced and applied in error-patterns.md during verification and operational workflows. |
| .claude/skills/pipeline-validator/SKILL.md | 2 | defined here | Primary definition of `pipeline-validator` within SKILL.md. |
| .claude/skills/windows-image-updater/SKILL.md | 173 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An operational technique or artifact (pipeline-validator) utilized within the rjm ecosystem to ensure consistency and systematic execution.
