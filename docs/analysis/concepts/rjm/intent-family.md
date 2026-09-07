---
package: rjm
name: Intent family
slug: intent-family
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Intent family

## Definition — verbatim
> "**Intent family.** Match the request against the routing table below. When two" — .claude/skills/autoplan/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 97 | defined here | Classification step in Phase 1 matching incoming requests against the routing table. |

## Consumes
Incoming request text and target repository reconnaissance signals from Phase 0.

## Produces
Classified intent family matching a distinct row in the routing table.

## When applied
During Phase 1: Classify of the autoplan workflow before route selection.

## Sub-concepts
session-protocol-ci-failure, pr-ops

## Part of
autoplan

## Implementation status
clean

## Design notes
Intent family is the primary semantic categorization axis within the autoplan skill. By mapping unstructured natural language requests into explicit, bounded intent families (such as feature development, bug analysis, PR operations, research, or cross-cutting orchestration), autoplan eliminates the need for developers or models to manually navigate catalog listings. The classification enforces a strict specificity heuristic where narrower families supersede broader operational buckets.
