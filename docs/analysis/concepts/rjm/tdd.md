---
package: rjm
name: TDD
slug: tdd
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TDD

## Definition — verbatim
> "Implements changes in thin vertical slices with TDD and atomic commits." — docs/workflow-commands.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 2 | used here | Stated in command description as the required discipline for slice implementation. |
| .claude/skills/code-qualities-assessment/SKILL.md | 486 | used here | Cited under code quality timelessness foundations as the historical root of testability. |
| docs/workflow-commands.md | 92 | defined here | Defined in workflow documentation as the test-first implementation methodology for the `/build` command. |

## Consumes
Acceptance criteria numbers and behavior specifications from `/spec` and `/plan`.

## Produces
Failing behavior tests committed alongside minimal passing implementation code.

## When applied
Unconditionally during the `/build` cycle whenever implementing new features, bugfixes, or refactorings in projects with test suites.

## Sub-concepts
none

## Part of
build-command

## Implementation status
defects: doc-drift, missing-path (.claude/skills/code-qualities-assessment/SKILL.md:32, 352); clean in .claude/commands/build.md and docs/workflow-commands.md

## Design notes
Test-Driven Development (TDD) is an unconditional engineering gate in rjm's `/build` command, requiring developers to write a failing test that verifies a specific acceptance criterion before writing any implementation code. This ensures tests express the intended contract rather than merely confirming accidental implementation behavior, while driving decoupled, testable software architectures.
