---
package: rjm
name: Object seam
slug: object-seam
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

# Object seam

## Definition — verbatim
> "**Object seam**: pass a different collaborator into the constructor or the function. Preferred when the collaborator is already injected or easy to inject." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 72 | defined here | Defined as passing a different collaborator into a constructor or function to alter behavior without editing in place. |

## Consumes
A constructor or function signature accepting dependencies or collaborators.

## Produces
An injection seam allowing alternative collaborators or fakes to be passed during testing.

## When applied
Preferred when the collaborator is already injected or easy to inject into the constructor or function.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
A seam technique from Michael Feathers leveraging object-oriented polymorphism to pass alternative test collaborators or mocks without editing target production code.
