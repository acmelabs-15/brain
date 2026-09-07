---
package: rjm
name: Root Cause Pattern Template
slug: root-cause-pattern-template
kind: template
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

# Root Cause Pattern Template

## Definition — verbatim
> "Add to retrospective artifact when Five Whys identifies root cause:" — .claude/agents/retrospective.md:864

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 862 | defined here | Markdown structure for recording RootCause patterns in retrospective artifacts. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 291 | defined here | Reference template defining Pattern ID, Category, Description, Signals, and Prevention Skill. |

## Consumes
Diagnosed root cause, warning signals, and prevention mechanisms.

## Produces
Standardized RootCause pattern entity (`RootCause-{Category}-{NNN}`) formatted for persistence in Serena memory.

## When applied
Used when a Five Whys analysis successfully isolates a reusable root cause.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Root Cause Pattern Template standardizes the documentation of recurring failure modes into structured entities. By capturing detection signals and linking directly to a prevention skill ID, it ensures that retrospective learnings become machine-readable operational defenses.
