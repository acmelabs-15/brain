---
package: rjm
name: getter chain
slug: getter-chain
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# getter chain

## Definition — verbatim
> "- [Tell, Don't Ask](references/design-tell-dont-ask.md) - Detect feature envy and getter chain code smells" — .claude/skills/analyze/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 67 | used here | Code smell pattern identified via Tell, Don't Ask design principles during code quality reviews. |

## Consumes
Object-oriented call sites and method bodies exposing internal state.

## Produces
Identification of feature envy violations and refactoring recommendations to encapsulate behavior on the data-owning object.

## When applied
Identified during deep analysis and code quality evaluation when reviewing component interactions.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`getter chain` denotes the anti-pattern where a caller repeatedly queries an object's internal components to make external decisions, violating Tell, Don't Ask and causing feature envy.
