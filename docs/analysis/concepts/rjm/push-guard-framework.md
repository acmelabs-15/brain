---
package: rjm
name: push-guard framework
slug: push-guard-framework
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# push-guard framework

## Definition — verbatim
> "PR #1887 shipped the push-guard framework built to cut PR review" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 100 | defined here | Automated pre-push validation system implemented in PR #1887 to reduce review iterations. |

## Consumes
Local git commit states, staged diffs, and formatting standards.

## Produces
Pre-push validation verdicts preventing defective commits from reaching CI.

## When applied
Triggered prior to git push operations during agent development workflows.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
The `push-guard framework` is a suite of shift-left validation tools built to verify code quality and contract compliance prior to remote pushes. Although its rollout highlighted the Iteration Paradox, its core components remain integral to rjm's automated quality enforcement.
