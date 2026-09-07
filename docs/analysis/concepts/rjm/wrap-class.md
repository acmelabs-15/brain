---
package: rjm
name: wrap class
slug: wrap-class
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

# wrap class

## Definition — verbatim
> "**Wrap method or wrap class**: a new method or class that calls the existing one and adds behavior before or after. The original is renamed; the new method takes the old name." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 28 | defined here | Defined alongside wrap method as introducing a new wrapper class that delegates to the existing class. |

## Consumes
An existing class whose callers require additional cross-cutting behavior without modifying the underlying class implementation.

## Produces
A decorator-style wrapper class delegating to the original class implementation while adding behavior.

## When applied
Applied when cross-cutting behavior must wrap an entire class or object lifecycle and modifying callers is impractical.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A decorator pattern applied to legacy classes to attach cross-cutting concerns around existing objects without invasive internal edits.
