---
package: rjm
name: Getter Chains
slug: getter-chains
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Getter Chains

## Definition — verbatim
(used, not defined)

> "### Getter Chains (Law of Demeter violations)" — .claude/skills/analyze/references/design-tell-dont-ask.md:54

## Also called — verbatim
"Law of Demeter violations" — .claude/skills/analyze/references/design-tell-dont-ask.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 54 | defined here | Identified as anti-pattern violating Law of Demeter through chained property dereferencing. |

## Consumes
Code expressions chaining navigation methods or property getters across multiple object boundaries.

## Produces
Encapsulation refactorings wrapping intermediate object navigation into direct intent methods.

## When applied
Code quality reviews evaluating Law of Demeter compliance and architectural coupling.

## Sub-concepts
none

## Part of
common-violations-to-detect

## Implementation status
defects: missing-path

## Design notes
An anti-pattern and Law of Demeter violation in rjm where callers traverse intermediate object hierarchies via chained property accesses (`customer.Address.City`). Flagging getter chains prevents callers from assuming structural knowledge of transitive collaborators.
