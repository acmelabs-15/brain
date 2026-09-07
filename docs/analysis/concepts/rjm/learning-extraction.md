---
package: rjm
name: Learning Extraction
slug: learning-extraction
kind: phase
package_phase: cross-phase
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

# Learning Extraction

## Definition — verbatim
> "Phase 4: Learning Extraction" — .claude/agents/retrospective.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 98 | defined here | Outline heading for Phase 4 distilling session insights into structured knowledge. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 75 | used here | Integration guidance connecting traceability failures directly to learning extraction. |

## Consumes
Diagnosed patterns, action items, and root cause analyses.

## Produces
Structured learning records, atomicity scores, and formatted skillbook candidates.

## When applied
Fifth operational phase (Phase 4) of the retrospective lifecycle.

## Sub-concepts
atomicity-scoring, skillbook-updates, deduplication-check

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Learning Extraction is Phase 4 of the retrospective process. It distills session experiences into modular, reusable learning units, scores their atomicity, and prepares structured skill updates to be permanently merged into the system's memory.
