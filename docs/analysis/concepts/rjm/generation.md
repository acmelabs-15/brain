---
package: rjm
name: Generation
slug: generation
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generation

## Definition — verbatim
> "Create artifacts from templates" — .claude/skills/skillforge/references/script-integration-framework.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 79 | defined here | Defines Generation as one of the 7 standard script categories for creating artifacts from templates. |

## Consumes
Templates, input schemas, parameters, and target file paths.

## Produces
Scaffolding, boilerplate files, and generated skill artifacts.

## When applied
When scaffolding new skills, creating boilerplate files, or creating new files from templates.

## Sub-concepts
generation-script-template

## Part of
script-categories

## Implementation status
clean

## Design notes
Generation scripts automate the repetitive creation of skill files, configurations, and test scaffolding from templates, ensuring that generated artifacts follow standardized directory structures and coding conventions while eliminating human error during initial scaffolding.
