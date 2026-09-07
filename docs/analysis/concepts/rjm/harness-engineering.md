---
package: rjm
name: Harness Engineering
slug: harness-engineering
kind: reference
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Harness Engineering

## Definition — verbatim
> "Inspired by [OpenAI Harness Engineering](https://openai.com/index/harness-engineering/):" — .claude/skills/taste-lints/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 12 | used here | Cited as the architectural inspiration for statically enforcing custom taste invariants with agent-readable remediation instructions. |

## Consumes
none

## Produces
none

## When applied
Referenced during agent harness design and static lint development to structure error messages as actionable remediation instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An external engineering methodology and reference from OpenAI that advocates writing custom static linter rules whose diagnostic error messages double as structured prompt injection and remediation instructions for autonomous coding agents.
