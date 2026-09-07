---
package: rjm
name: Subclass and override
slug: subclass-and-override
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

# Subclass and override

## Definition — verbatim
> "**Subclass and override**: when the class is too big to refactor today, subclass it in tests and override only the methods that block your test. Use this as a stepping stone, not a destination." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 129 | defined here | Defined as subclassing a large legacy class in tests to override only the blocking methods. |

## Consumes
A large legacy class whose complete refactoring is currently impractical.

## Produces
A test-only subclass overriding specific blocking methods.

## When applied
Applied when testing a monolithic class as a temporary stepping stone before full architectural redesign.

## Sub-concepts
none

## Part of
dependency-breaking-technique

## Implementation status
clean

## Design notes
A tactical dependency-breaking technique enabling immediate testing of large legacy classes by subclassing them in test suites and overriding specific problematic methods.
