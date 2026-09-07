---
package: rjm
name: Comprehension refactoring
slug: comprehension-refactoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Comprehension refactoring

## Definition — verbatim
> "you just figured out what a confusing piece of code does. Encode that understanding in names and structure before you forget." — .claude/skills/software-engineering-library/references/refactoring.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 37 | defined here | Defined as encoding newly acquired understanding of confusing code into names and structure. |

## Consumes
Confusing, obscure, or poorly named legacy code that has just been deciphered.

## Produces
Renamed variables/functions and restructured code that explicitly convey intent.

## When applied
Applied immediately upon understanding a confusing piece of code, before the mental model is lost.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Comprehension refactoring in rjm captures hard-won code understanding directly in the codebase. When an engineer or agent reads convoluted code and deciphers its actual mechanics, they immediately refactor variable names, extract functions, or clarify module structures to reflect that mental model. This locks in the comprehension for future maintainers and reduces subsequent cognitive overhead.
