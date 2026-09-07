---
package: rjm
name: Recursive Learning Extraction
slug: recursive-learning-extraction
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Recursive Learning Extraction

## Definition — verbatim
> "## Phase 5: Recursive Learning Extraction" — templates/agents/retrospective.shared.md:937

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 109 | defined here | Outline heading for Phase 5 recursively distilling secondary learnings. |
| templates/agents/retrospective.shared.md | 937 | defined here | Phase 5 procedure transforming session learnings into persistent memories until exhausted. |

## Consumes
High-scoring learnings, skillbook candidates, and newly formed memory representations.

## Produces
Exhaustive set of persistent memories bootstrapped from session learnings until recursion termination criteria are met.

## When applied
Final operational phase (Phase 5) of the retrospective lifecycle.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Recursive Learning Extraction is Phase 5 of the retrospective process. It recursively explores secondary insights generated while articulating primary learnings, ensuring that all implicit knowledge required to bootstrap a fresh agent instance is fully captured before closing the session.
