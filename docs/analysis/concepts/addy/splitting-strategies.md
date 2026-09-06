---
package: addy
name: splitting strategies
slug: splitting-strategies
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# splitting strategies

## Definition — verbatim
(used, not defined)
> "Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — external/code-review-and-quality.md:5

## Also called — verbatim
> "**Splitting strategies when a change is too large:**" — skills/code-review-and-quality/SKILL.md:117

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 5 | used here | Highlighted as an essential mechanism for decomposing oversized changes into reviewable units |

## Consumes
Changes or feature branches that exceed acceptable size thresholds (>300–500 lines).

## Produces
Decomposed pull requests split via Stack, By file group, Horizontal layers, or Vertical feature slices.

## When applied
When an implementation change is determined to be too large or cross-cutting for a single review.

## Sub-concepts
none

## Part of
`change-sizing`, `code-review-and-quality`

## Implementation status
clean

## Design notes
Splitting strategies provide structured architectural patterns (stacked changes, file groupings, horizontal stubbing, vertical slicing) to break down large, unwieldy diffs into cohesive, independently functional review units.
