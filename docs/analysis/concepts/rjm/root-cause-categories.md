---
package: rjm
name: Root Cause Categories
slug: root-cause-categories
kind: reference
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Root Cause Categories

## Definition — verbatim
> "Standard categories based on common failure modes:" — .claude/agents/retrospective.md:822

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 820 | defined here | Classification scheme grouping failure modes after Five Whys analysis into standard categories. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 249 | defined here | Detailed taxonomy of root cause categories, descriptions, and concrete examples. |

## Consumes
Five Whys causal chains and identified failure points.

## Produces
Standardized classification across six domains: Cross-Cutting Concerns, Fail-Safe Design, Test-Implementation Drift, Premature Validation, Context Loss, and Skill Gap.

## When applied
Applied during Phase 2 (Diagnose & Root Cause) to categorize identified root causes.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Root Cause Categories establish a common vocabulary and indexing schema for system failures. Categorizing failures into standard buckets enables cross-session pattern matching, allowing multi-agent pipelines to detect recurring architectural vulnerabilities across different sessions.
