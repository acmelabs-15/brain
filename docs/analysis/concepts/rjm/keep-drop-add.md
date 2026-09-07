---
package: rjm
name: Keep/Drop/Add
slug: keep-drop-add
kind: technique
package_phase: rjm:retrospective
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

# Keep/Drop/Add

## Definition — verbatim
> "Adapted from Keep/Drop/Add. Categorize what to do with findings." — .claude/agents/retrospective.md:583

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 583 | used here | Activity for categorizing retrospective findings into concrete agent actions. |
| templates/agents/retrospective.shared.md | 579 | used here | Shared agent prompt defining action classification rules across Keep, Drop, and Add. |

## Consumes
Validated retrospective findings, identified patterns, and diagnostic conclusions.

## Produces
Action decisions categorizing behaviors to reinforce (Keep), obsolete practices to eliminate (Drop), and new capabilities to introduce (Add).

## When applied
Applied during Phase 3 (Generate Insights) to convert findings into actionable operational directives.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Keep/Drop/Add is an action-oriented classification framework that prevents retrospectives from producing vague recommendations. By forcing every finding into a distinct operational bin—continuing what worked, actively dropping what hindered, or adding a missing capability—it yields direct, unambiguous improvements.
