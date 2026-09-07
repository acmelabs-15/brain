---
package: matt
name: parallel sub-agents
slug: parallel-sub-agents
kind: pattern
package_phase: matt:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parallel sub-agents

## Definition — verbatim
> "Both axes run as **parallel sub-agents** so they don't pollute each other's context, then this skill aggregates their findings." — skills/engineering/code-review/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/code-review/SKILL.md | 11 | defined here | Architectural execution mechanism in /code-review running Standards and Spec reviews in isolated concurrent sub-agents. |

## Consumes
Diff command, commit list, standards files, or spec documents.

## Produces
Isolated sub-agent review reports for aggregation by the parent skill.

## When applied
During step 4 of `/code-review` when evaluating the diff across both axes.

## Sub-concepts
standards-sub-agent, spec-sub-agent

## Part of
code-review

## Implementation status
defects: doc-drift, cross-file-contradiction, other (from skills/engineering/code-review/SKILL.md: prompts do not restrict recursive sub-agent invocation)

## Design notes
A concurrency and context-isolation pattern in multi-agent orchestration. By dispatching distinct evaluative tasks (such as Standards and Spec reviews) into separate sub-agent sessions in parallel, the parent skill prevents context pollution, token window bloat, and cognitive cross-contamination between differing analytical perspectives.
