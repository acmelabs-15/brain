---
package: rjm
name: Task(subagent_type="security", prompt="Review infrastructure changes")
slug: task-subagent-type-security-prompt-review-infrastructure-changes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: .claude/skills/security-detection/detect_infrastructure.py, sha256: 81520cf02e43c0bb0325f6ba153a064d22e13d330926138888a3be42ad1afe9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task(subagent_type="security", prompt="Review infrastructure changes")

## Definition — verbatim
(used, not defined)

> "Task(subagent_type=\"security\", prompt=\"Review infrastructure changes\")" — .claude/skills/security-detection/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/detect_infrastructure.py | 192 | used here | Printed command invocation advising user or agent to dispatch security review upon critical file modifications. |
| .claude/skills/security-detection/SKILL.md | 72 | used here | Example CLI invocation block illustrating recommended subagent dispatch command. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Task(subagent_type="security", prompt="Review infrastructure changes") is a subagent dispatch command syntax recommended upon detecting sensitive file modifications rather than an independent lifecycle concept.
