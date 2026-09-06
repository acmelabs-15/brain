---
package: addy
name: Known Gotchas
slug: known-gotchas
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Known Gotchas

## Definition — verbatim
> "Document Known Gotchas" — skills/documentation-and-adrs/SKILL.md:137

## Also called — verbatim
> "Inline gotchas" — skills/documentation-and-adrs/SKILL.md:257

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 137 | defined here | Section heading introducing code-level documentation of subtle traps, hydration order, and architectural invariants. |

## Consumes
Fragile initialization sequences, SSR/hydration mismatches, subtle race conditions, or counter-intuitive API behaviors.

## Produces
Explicit inline warning comments alerting future maintainers and autonomous agents to non-obvious failure modes.

## When applied
Applied whenever code contains subtle constraints or traps that the compiler or type system cannot automatically enforce.

## Sub-concepts
none

## Part of
inline-documentation

## Implementation status
clean

## Design notes
`Known Gotchas` documents dangerous edge cases and subtle implementation traps directly next to the code where they occur, preventing autonomous agents and future engineers from accidentally reintroducing known bugs.
