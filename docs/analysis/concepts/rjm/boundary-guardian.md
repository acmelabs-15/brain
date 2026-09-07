---
package: rjm
name: Boundary guardian
slug: boundary-guardian
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Boundary guardian

## Definition — verbatim
> "the `architect` agent is the designated reviewer for boundary changes." — .claude/skills/software-engineering-library/references/clean-architecture.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 161 | defined here | Designates the architect agent as the reviewer responsible for approving architectural boundary changes and remediations. |

## Consumes
Proposed boundary changes, reverse-import remediations, leaky-type refactorings, architectural PRs.

## Produces
Architectural review verdicts, boundary approval, or refactoring guidance.

## When applied
When code modifications cross architectural layer seams, introduce new external dependencies, or alter core domain boundaries.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Boundary guardian establishes a specialized governance role—designated to the architect agent—for auditing and approving modifications that cross layer seams in rjm. By enforcing that reverse imports and leaky types receive architectural review, it preserves the integrity of concentric architectural boundaries against accidental erosion.
