---
package: rjm
name: Ask vs Tell
slug: ask-vs-tell
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ask vs Tell

## Definition — verbatim
(used, not defined)

> "## Ask vs Tell" — .claude/skills/analyze/references/design-tell-dont-ask.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 17 | defined here | Compares procedural asking patterns against object-oriented telling invocations. |

## Consumes
Object state inspection and mutation patterns.

## Produces
Encapsulated method calls replacing external state queries.

## When applied
Code review and quality analysis when evaluating object encapsulation and coupling.

## Sub-concepts
feature-envy, getter-chains

## Part of
tell-dont-ask

## Implementation status
defects: missing-path

## Design notes
A core design comparison in rjm's code quality references contrasting procedural querying of object state ("Ask") with object-oriented delegation of behavior ("Tell"). It serves as a foundational analysis heuristic for detecting encapsulation leaks and high coupling across codebase architectures.
