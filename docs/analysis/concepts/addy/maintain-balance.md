---
package: addy
name: Maintain Balance
slug: maintain-balance
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

# Maintain Balance

## Definition — verbatim
> "Simplification has a failure mode: over-simplification." — skills/code-simplification/SKILL.md:92-94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 92 | defined here | Fourth core principle warning against over-simplification traps such as aggressive inlining and collapsing abstractions. |

## Consumes
Candidate simplification opportunities and abstraction boundaries.

## Produces
Balanced refactorings that preserve helpful named abstractions, keep unrelated logic decoupled, and avoid premature inlining.

## When applied
When reviewing potential refactorings to ensure changes genuinely improve maintainability rather than merely shaving line counts.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A defensive principle guarding against the failure mode of over-simplification, preventing agents from stripping out modular abstractions, combining unrelated responsibilities, or obsessing over raw line count at the expense of comprehension.
