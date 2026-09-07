---
package: rjm
name: Retrospectives
slug: retrospectives
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Retrospectives

## Definition — verbatim
> "- Retrospectives link back to completed plans" — .claude/skills/execution-plans/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 97 | used here | Integration reference specifying that retrospective reviews link back to completed execution plans. |

## Consumes
Completed execution plan artifacts from `.agents/plans/completed/`, decision logs, and progress metrics.

## Produces
Retrospective analysis reports evaluating execution accuracy, estimation drift, and process improvements.

## When applied
Conducted post-implementation following the successful completion and archiving of an execution plan.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
Retrospectives provide post-execution evaluation by analyzing completed execution plans. Linking retrospectives back to versioned plans enables teams to compare initial estimates and architectural decisions against reality, driving continuous process improvement.
