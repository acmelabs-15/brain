---
package: rjm
name: Tool Escalation Policy
slug: tool-escalation-policy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/overview-and-triggers.md, sha256: 663351048ad745ba6e3141bb5d51ed670959475e88412c9a7c304fd37ce46b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tool Escalation Policy

## Definition — verbatim
> "Start with least privilege (`Read`, `Glob`, `Grep`, `Write`, `Edit`)." — .claude/skills/skillforge/references/overview-and-triggers.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/overview-and-triggers.md | 110 | defined here | Section heading outlining least-privilege tool access and conditions for escalating to Bash, WebFetch, WebSearch, or Task. |
| .claude/skills/skillforge/SKILL.md | 100 | defined here | Section heading mandating least privilege tool usage principles for agentic skills. |

## Consumes
Skill operational requirements and tool capability requirements.

## Produces
Restricted tool access configurations matching least-privilege security boundaries.

## When applied
Applied when specifying allowed-tools and selecting tool integrations for agent skills.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
The Tool Escalation Policy enforces least privilege by restricting skills to passive inspection and editing tools by default. Escalation to privileged tools (`Bash`, `WebFetch`, `Task`) requires explicit justification, preventing unnecessary security exposure and unpredictable agent side effects.
