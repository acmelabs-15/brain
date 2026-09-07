---
package: rjm
name: Dependency-breaking technique
slug: dependency-breaking-technique
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

# Dependency-breaking technique

## Definition — verbatim
> "**Dependency-breaking technique**: a small refactor whose only purpose is to make the existing code testable. Examples: extract interface, parameterize constructor, introduce instance delegator." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 29 | defined here | Defined as a focused refactoring whose sole purpose is to make existing code testable without altering behavior. |

## Consumes
Code with tight coupling, hard-coded dependencies, or inaccessible collaborators that prevent testing.

## Produces
A seam enabling test substitution and collaborator injection.

## When applied
Applied when finding or creating a seam to write characterization tests prior to modifying legacy code.

## Sub-concepts
extract-interface, parameterize-constructor, introduce-instance-delegator, subclass-and-override, pull-up-dependency

## Part of
none

## Implementation status
clean

## Design notes
A category of minimal, behavior-preserving refactorings designed specifically to decouple dependencies and introduce seams for test harnesses.
