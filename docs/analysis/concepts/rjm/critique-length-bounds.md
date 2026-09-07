---
package: rjm
name: Critique Length Bounds
slug: critique-length-bounds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critique Length Bounds

## Definition — verbatim
(used, not defined)

> "## Critique Length Bounds" — .claude/agents/critic.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 147 | defines | Section heading capping plan critiques at 500 words and limiting reported major issues to 5. |
| templates/agents/critic.shared.md | 151 | defines | Shared template section heading specifying word limits and finding density caps for critiques. |

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
defects: missing-path

## Design notes
Section heading defining quantitative length limits and early termination caps for critique documents, not an operational lifecycle concept.
