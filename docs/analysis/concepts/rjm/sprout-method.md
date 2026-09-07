---
package: rjm
name: Sprout method
slug: sprout-method
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

# Sprout method

## Definition — verbatim
> "**Sprout method or sprout class**: new behavior added in a new method or new class, called from a single new line in the legacy code. The legacy code is barely touched." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 27 | defined here | Defined as a technique where new behavior is added in a new method called from a single line in legacy code. |

## Consumes
An existing codebase or function lacking sufficient test coverage where new functionality must be introduced.

## Produces
A newly authored, fully tested method invoked from a single new line in the legacy function.

## When applied
Applied when adding new behavior to a function that is hard to test in place, and the new behavior is conceptually distinct.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A legacy code modification technique from Michael Feathers allowing developers and agents to introduce new functionality safely into poorly tested code with minimal edits to the original function.
