---
package: addy
name: Identify Simplification Opportunities
slug: identify-simplification-opportunities
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

# Identify Simplification Opportunities

## Definition — verbatim
> "Scan for these patterns — each one is a concrete signal, not a vague smell:" — skills/code-simplification/SKILL.md:123-125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 123 | defined here | Step 2 of the simplification process identifying concrete refactoring signals across structural complexity, naming, and redundancy. |

## Consumes
Target code analyzed under Chesterton's Fence to understand existing intent and behavior.

## Produces
Cataloged refactoring opportunities with paired signals and remedies across structural nesting, naming ambiguity, and redundant abstractions.

## When applied
Step 2 in the code simplification workflow before applying any incremental code modifications.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A structured diagnostic technique that scans code for concrete, actionable signals (such as 3+ level nesting, 50+ line functions, generic names, and duplicated logic) to identify specific, high-yield simplification candidates.
