---
package: rjm
name: check_rollback_procedure
slug: check-rollback-procedure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# check_rollback_procedure

## Definition — verbatim
(used, not defined)

> "def check_rollback_procedure(content: str) -> tuple[bool, list[str]]:" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 159 | defined here | Validates that the rollback section provides executable commands in code blocks and verification steps. |

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
`check_rollback_procedure` is an internal verification function identifier checking for executable code blocks and verification instructions in rollback documentation, classified as `name-only` per D-023.
