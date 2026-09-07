---
package: rjm
name: legacy code
slug: legacy-code
kind: pattern
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

# legacy code

## Definition — verbatim
> "Feathers defines legacy code as any code without tests, regardless of age or quality. In ai-agents, the same risk applies to code that has tests but already failed once: a previous worker tried to change it and broke something. Treat both classes the same way." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 4 | defined here | Defined as code lacking tests or code that previously failed or regressed during an automated change attempt. |

## Consumes
Untested code, regression-prone modules, or failure-associated task contexts.

## Produces
Mandatory application of legacy code safety procedures (characterization tests, seams, sprout/wrap patterns).

## When applied
Applied when touching files with low test coverage, files untouched for over six months, or tasks in a To Improve fix cycle.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
In rjm, legacy code is defined pragmatically as code without tests or code that previously failed an automated agent change attempt. This classification triggers a rigorous safety discipline requiring behavioral characterization tests before any code modifications are permitted.
