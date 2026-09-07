---
package: rjm
name: Characterization test
slug: characterization-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Characterization test

## Definition — verbatim
> "a test that pins down what the code does today, not what it should do. You write it to lock current behavior so that an unintended change shows up as a test failure." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 16 | defined here | Defined as a test written to capture what code currently does before changes to detect drift. |
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 24 | defined here | Defined as a test pinning down actual current behavior rather than intended specification. |
| .claude/skills/software-engineering-library/SKILL.md | 4 | used here | Listed in trigger description for routing legacy code and testing risk tasks to reference documents. |

## Consumes
Existing codebase behavior, execution entry points or seams, and observed runtime outputs.

## Produces
Automated test assertions locking existing behavior against regressions.

## When applied
Applied before modifying uncovered legacy code, during To Improve fix cycles, or before structural refactoring.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
defects: internal-contradiction

## Design notes
Characterization tests in rjm serve as the foundational safety net for working with legacy code and performing structural refactorings. Instead of asserting what code ought to do according to requirements or docstrings, characterization tests record and assert what the code actually does in its current state. By pinning down baseline behavior, any accidental deviation during restructuring immediately manifests as a failing test, preventing silent behavioral drift.
