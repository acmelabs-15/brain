---
package: rjm
name: Rule-of-three padding
slug: rule-of-three-padding
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rule-of-three padding

## Definition — verbatim
> "- **Rule-of-three padding**: three parallel adjectives or clauses where one" — .claude/skills/prose-self-check/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 100 | defined here | Defined as a structural tell featuring three parallel adjectives or clauses when one suffices. |

## Consumes
Adjective clusters and triadic clauses in draft prose.

## Produces
Trimmed prose retaining only the single load-bearing descriptive term.

## When applied
Evaluated manually in Layer 2 structural review where syntactic analysis cannot determine semantic necessity.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A stylistic anti-pattern where text uses three parallel modifiers or clauses for rhetorical rhythm when a single specific term carries the actual meaning.
