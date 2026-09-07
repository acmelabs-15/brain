---
package: rjm
name: Atomicity Scores
slug: atomicity-scores
kind: technique
package_phase: cross-phase
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

# Atomicity Scores

## Definition — verbatim
> "All learnings scored 0-100% using defined criteria" — .claude/agents/retrospective.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 30 | defined here | Agent requirement specifying 0-100% scoring for all learnings. |

## Consumes
Candidate retrospective learnings, diagnostic statements, and action items.

## Produces
Numerical quality scores (0-100%) reflecting single-concept clarity, context completeness, and actionability.

## When applied
Applied during retrospective learning extraction to grade candidate learnings before acceptance.

## Sub-concepts
atomicity-scoring

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Atomicity Scores represent the quantitative metric evaluating whether an extracted insight represents a singular, self-contained lesson rather than a compound or vague observation. Scoring each item 0-100% against strict criteria prevents ambiguous compound recommendations from entering the knowledge store.
