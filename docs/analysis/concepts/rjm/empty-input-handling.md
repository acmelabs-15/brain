---
package: rjm
name: Empty Input Handling
slug: empty-input-handling
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Empty Input Handling

## Definition — verbatim
> "LLMs often add unnecessary structure when none is needed." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:949

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 947 | defined here | Defined as an output control technique preventing models from generating dummy objects or placeholder strings when inputs are empty. |

## Consumes
Tool schemas, parameterless function definitions, and zero-parameter prompt instructions.

## Produces
Empty JSON payloads (`{}`) or blank inputs without dummy keys or placeholder objects.

## When applied
> "This tool takes in no parameters. So leave the input blank or empty." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:954

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Empty Input Handling provides explicit instructions to models on how to invoke tools that take no arguments. Because models instinctively invent placeholder objects like `{"input": ""}` or `{"empty": true}`, this pattern explicitly commands them to leave inputs empty (`{}`) to conform to strict API schemas.
