---
package: rjm
name: no-console
slug: no-console
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# no-console

## Definition — verbatim
(used, not defined)

> "| ESLint rule conflicts | Update `.eslintrc` | Override `no-console` for CLI tools |" — .claude/skills/validation-authority/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/validation-authority/SKILL.md | 58 | used here | Cited as an example ESLint rule overridden in configuration for command-line tools. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`no-console` is an ESLint rule identifier prohibiting console logging statements rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
