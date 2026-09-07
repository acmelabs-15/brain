---
package: rjm
name: Medium Freedom
slug: medium-freedom
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Medium Freedom

## Definition — verbatim
> "### Medium Freedom (Pseudocode or Parameterized Steps)" — .claude/skills/skillforge/references/degrees-of-freedom.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/degrees-of-freedom.md | 33 | defined here | Defines the medium freedom level using pseudocode and parameterized steps for structured workflows. |

## Consumes
Known-good design patterns, configuration requirements, and parameterized workflow definitions.

## Produces
Parameterized instructions or pseudocode structuring agent execution while permitting situational variation.

## When applied
Applied when a known-good pattern exists but details or configuration vary by user environment.

## Sub-concepts
none

## Part of
degrees-of-freedom

## Implementation status
clean

## Design notes
Medium Freedom establishes structural scaffolding through pseudocode or parameterized guidelines while allowing flexibility in detail execution. It prevents erratic variance in file generation or template structure without imposing brittle hardcoded commands.
