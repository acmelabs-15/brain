---
package: rjm
name: Root Cause Pattern Management
slug: root-cause-pattern-management
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Root Cause Pattern Management

## Definition — verbatim
> "## Root Cause Pattern Management" — .claude/skills/retrospective/references/diagnosis-and-actions.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 103 | defined here | Analytical framework storing recurring root cause patterns across sessions. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 245 | defined here | Reference section defining root cause categories and memory storage patterns. |
| templates/agents/retrospective.shared.md | 812 | defined here | Shared template defining root cause pattern management procedures. |

## Consumes
Root causes identified via Five Whys or Fishbone diagrams.

## Produces
Standardized pattern records categorized into domain areas (spec drift, test gaps, context overflow, prompt ambiguity) stored in memory.

## When applied
Applied following causal analysis to institutionalize failure patterns across sessions.

## Sub-concepts
failure-prevention-matrix

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Root Cause Pattern Management systematically indexes recurring failure archetypes so that downstream agents can reference prior post-mortems. Storing patterns under standardized categories ensures that architectural weaknesses are surfaced during future planning and review phases.
