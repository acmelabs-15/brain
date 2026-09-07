---
package: rjm
name: findings.md
slug: findings-md
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# findings.md

## Definition — verbatim
> "findings.md    -> research (not context stuffing)" — .claude/skills/analyze/references/agent-architecture-patterns.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 28 | defined here | Defines findings.md as the repository for research notes outside the agent prompt. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 19 | defined here | Specifies findings.md as the destination for discovery data to prevent context stuffing. |

## Consumes
Code inspection results, API specifications, and architectural investigation notes.

## Produces
Persistent documentation of analysis discoveries external to the prompt context.

## When applied
Updated whenever an agent performs exploration, dependency analysis, or system discovery.

## Sub-concepts
none

## Part of
3-file-planning-pattern

## Implementation status
defects: missing-path

## Design notes
findings.md isolates research findings, technical discoveries, and raw codebase observations from the agent's immediate prompt context. By recording discovered architectural facts into a distinct external file, rjm prevents "context stuffing" while providing a durable reference that can be retrieved as needed.
