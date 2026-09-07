---
package: rjm
name: Working with Legacy Code
slug: working-with-legacy-code
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Working with Legacy Code

## Definition — verbatim
> "- [Working with Legacy Code](references/design-legacy-code.md) - Bottom-up refactoring through the Software Hierarchy of Needs" — .claude/skills/analyze/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 65 | used here | Reference document for bottom-up refactoring through the Software Hierarchy of Needs. |
| scripts/eval/software_engineering_library_activation_ci.py | 22 | used here | Eval scenario tracking activation for legacy code refactoring patterns. |
| scripts/eval/software_engineering_library_activation_gate.py | 28 | used here | Managed reference identifier tracked by activation gate. |

## Consumes
Uncovered codebases, tightly coupled legacy components, and refactoring tasks.

## Produces
Characterization test strategies, sprout/wrap method patterns, sensing seams, and strangler application guidance.

## When applied
Loaded on demand when legacy code conditions (untested seams, old file age, lack of test harness) are detected during analysis.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
`Working with Legacy Code` encapsulates Michael Feathers' legacy refactoring principles within `rjm`. It provides prescriptive guidance for safely introducing characterization tests, identifying seams, and incrementally refactoring without broad rewrites.
