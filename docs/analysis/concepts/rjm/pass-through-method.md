---
package: rjm
name: Pass-through method
slug: pass-through-method
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pass-through method

## Definition — verbatim
> "**Pass-through method**: a method that exists only to call a method with the same name and arguments on a collaborator. Remove the layer." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:174

## Also called — verbatim
Pass-through methods — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:69

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 174 | defined here | Defined in anti-patterns as a method that exists solely to forward calls with identical signatures to a collaborator. |

## Consumes
none

## Produces
none

## When applied
Identified during refactoring and design reviews to remove unnecessary intermediary delegation layers.

## Sub-concepts
none

## Part of
shallow-module

## Implementation status
clean

## Design notes
An architectural anti-pattern in rjm indicating a shallow abstraction. When a method simply forwards calls without translation, validation, or behavior modification, the intermediate layer adds maintenance overhead and should be deleted.
