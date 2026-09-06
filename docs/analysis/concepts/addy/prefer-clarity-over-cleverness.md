---
package: addy
name: Prefer Clarity Over Cleverness
slug: prefer-clarity-over-cleverness
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Prefer Clarity Over Cleverness

## Definition — verbatim
> "Explicit code is better than compact code when the compact version requires a mental pause to parse." — skills/code-simplification/SKILL.md:61-63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 61 | defined here | Third core principle prioritizing immediate cognitive comprehension over compact or clever one-liners. |

## Consumes
Dense expressions, nested ternaries, chained inline reducers, or obscure idioms.

## Produces
Readable mappings, named intermediate variables, straightforward conditionals, and explicit control flow.

## When applied
When refactoring complex or dense code constructs into readable expressions.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A software design principle asserting that code readability and low cognitive overhead trump brevity, instructing developers and agents to replace dense one-liners with explicit, self-documenting code structures.
