---
package: rjm
name: scan
slug: scan
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# scan

## Definition — verbatim
> "def scan(" — .claude/skills/orphan-ref-validator/scripts/scan.py:744

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/counts.py | 5 | used here | Referenced and applied in counts.py during verification and operational workflows. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 744 | defined here | Primary definition of `scan` within scan.py. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 1161 | defined here | Primary definition of `scan` within prose_lint.py. |
| scripts/maintenance/detect_unlanded_commits.py | 109 | defined here | Primary definition of `scan` within detect_unlanded_commits.py. |
| scripts/validation/check_adr_lifecycle.py | 853 | defined here | Primary definition of `scan` within check_adr_lifecycle.py. |
| scripts/validation/check_doc_interpreter_portability.py | 389 | defined here | Primary definition of `scan` within check_doc_interpreter_portability.py. |
| scripts/validation/check_unreachable_code.py | 108 | defined here | Primary definition of `scan` within check_unreachable_code.py. |
| templates/agents/dependency-auditor.shared.md | 84 | defined here | Primary definition of `scan` within dependency-auditor.shared.md. |

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
defects: doc-drift, orphan

## Design notes
An operational technique or artifact (scan) utilized within the rjm ecosystem to ensure consistency and systematic execution.
