---
package: rjm
name: Pester tests
slug: pester-tests
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pester tests

## Definition — verbatim
> "└── tests/               # Optional: Pester tests" — .claude/skills/CLAUDE.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 22 | used here | Designated as optional unit test suites placed in the `tests/` subdirectory of skills. |
| scripts/eval/eval-suite.py | 8 | used here | Cited under ADR-023 as the test mechanism verifying prompt structural changes. |
| scripts/validation/pre_pr.py | 9 | used here | Executed as Step 2 of pre-PR validation running all unit test suites. |

## Consumes
PowerShell test files (`*.Tests.ps1`) and associated script modules.

## Produces
Unit test execution reports and regression pass/fail assertions.

## When applied
Executed during local development, CI runs, and pre-PR validation to verify PowerShell scripts and prompt structural contracts.

## Sub-concepts
none

## Part of
testing

## Implementation status
clean

## Design notes
Pester tests provide automated unit testing and contract verification for PowerShell modules and prompt structures, ensuring that skill logic and parameter validation behave correctly without side effects.
