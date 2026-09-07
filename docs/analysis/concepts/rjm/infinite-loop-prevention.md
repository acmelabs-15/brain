---
package: rjm
name: Infinite Loop Prevention
slug: infinite-loop-prevention
kind: gate
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Infinite Loop Prevention

## Definition — verbatim
> "**Infinite Loop Prevention:**" — .claude/agents/retrospective.md:1057

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 1057 | defined here | Hard execution bounds governing iterative learning extraction and skillbook agent delegation. |

## Consumes
Iteration counter, total learnings extracted, and marginal novelty between cycles.

## Produces
Forced termination of learning extraction when thresholds (5 iterations, 20 learnings, zero novelty) are breached.

## When applied
Enforced continuously during Phase 5 (Learnings & Memory Extraction) to guard against unbounded reflection cycles.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Infinite Loop Prevention enforces bounded execution during reflective learning loops. By hard-capping iterations to 5 and requiring at least one novel learning per cycle, it ensures that autonomous agents do not get trapped in recursive self-analysis or inflate memory with repetitive learnings.
