---
package: rjm
name: Introduce instance delegator
slug: introduce-instance-delegator
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Introduce instance delegator

## Definition — verbatim
> "**Introduce instance delegator**: a static or module-level function makes testing hard because you cannot replace it. Add an instance method that calls the static, and have the legacy code call the instance method. Tests subclass and override the instance method." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 128 | defined here | Defined as wrapping a static or module-level function in an instance method to allow test overriding. |

## Consumes
Static or module-level functions that cannot be replaced or mocked directly in tests.

## Produces
An instance method delegating to the static function, establishing an overridable seam.

## When applied
Applied when legacy code calls static or global methods that hinder test isolation.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A dependency-breaking refactoring that wraps static functions in instance methods, establishing a seam that test suites can override via subclassing.
