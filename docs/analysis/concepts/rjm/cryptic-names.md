---
package: rjm
name: Cryptic names
slug: cryptic-names
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cryptic names

## Definition — verbatim
> "| Cryptic names | `DoStuff()`, `Process()`, `Handle()` |" — .claude/skills/golden-principles/references/design-programming-by-intention.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 78 | defined here | Listed in the anti-patterns table as obscuring intent through vague identifier names like DoStuff or Process. |

## Consumes
Ambiguous function names, overly generic identifiers, non-descriptive abbreviations, and uninformative labels.

## Produces
Intent-revealing function and variable names that explicitly describe the operation or condition being evaluated.

## When applied
Flagged during peer reviews, AI code analysis, and taste lint evaluations whenever identifiers fail to communicate their specific functional purpose.

## Sub-concepts
naming-conventions

## Part of
programming-by-intention

## Implementation status
defects: missing-path

## Design notes
Cryptic names undermine code self-documentation in rjm by forcing developers and LLM agents to read entire method bodies to deduce their behavior. Generic names like `Process` or `Handle` hide side effects and create cognitive drag. Enforcing intent-revealing naming ensures that call sites convey the exact business or system intent at a glance.
