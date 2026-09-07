---
package: rjm
name: Extract interface
slug: extract-interface
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

# Extract interface

## Definition — verbatim
> "**Extract interface**: pull the methods you actually use into an interface or a `Protocol`. Have the legacy class implement it. Now your tests can pass a fake that implements the same interface." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 126 | defined here | Defined as pulling methods into an interface or Protocol to allow tests to substitute fakes. |

## Consumes
A concrete class whose concrete coupling prevents test substitution.

## Produces
An interface or Protocol abstraction and a seam enabling fake/mock injection.

## When applied
Applied when breaking dependencies so test harnesses can pass fakes implementing the interface.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A dependency-breaking refactoring technique that extracts the subset of methods actually used into an abstract interface or Protocol, enabling fake substitution in test suites.
