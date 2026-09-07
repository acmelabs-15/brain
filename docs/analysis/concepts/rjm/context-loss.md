---
package: rjm
name: Context Loss
slug: context-loss
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Loss

## Definition — verbatim
> "Information not preserved" — .claude/skills/retrospective/references/diagnosis-and-actions.md:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 259 | defined here | Root cause failure mode category where critical execution or session state is dropped across handoffs. |

## Consumes
Root cause analysis and Five Whys investigation findings.

## Produces
Failure prevention pattern or memory entity mitigating information dropping across sessions.

## When applied
Applied during retrospective root cause pattern management when diagnosing failures caused by unpreserved context or missing handoff data.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Context Loss identifies a structural failure mode where state or critical decisions fail to carry forward across execution boundaries or agent handoffs. By classifying this failure mode explicitly, the retrospective framework ensures that prevention mechanisms—such as structured handoffs, session logs, and memory persistence—are introduced to prevent recurring state drops.
