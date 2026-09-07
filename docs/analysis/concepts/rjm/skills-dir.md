---
package: rjm
name: skills_dir
slug: skills-dir
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# skills_dir

## Definition — verbatim
> "def skills_dir(repo_root: Path) -> Path:" — .claude/skills/orphan-ref-validator/scripts/counts.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/counts.py | 47 | defined here | Primary definition of `skills_dir` within counts.py. |
| scripts/eval/eval-knowledge-integration.py | 49 | defined here | Primary definition of `skills_dir` within eval-knowledge-integration.py. |
| scripts/eval/eval-rule-activation.py | 1979 | defined here | Primary definition of `skills_dir` within eval-rule-activation.py. |

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
defects: doc-drift

## Design notes
An operational technique or artifact (skills_dir) utilized within the rjm ecosystem to ensure consistency and systematic execution.
