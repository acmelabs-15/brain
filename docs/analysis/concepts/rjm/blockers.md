---
package: rjm
name: Blockers
slug: blockers
kind: artifact
package_phase: rjm:plan
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

# Blockers

## Definition — verbatim
> "| Blockers | Current impediments |" — .claude/skills/execution-plans/SKILL.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 48 | defined here | Required plan section listing active impediments, external dependencies, and resolution conditions. |

## Consumes
Unresolved technical hurdles, missing upstream requirements, failing gates, or third-party blockers.

## Produces
Structured documentation of impediments, their impact on plan status, and requirements for unblocking.

## When applied
Updated whenever work cannot proceed normally or when transitioning a plan into the Blocked status.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
The Blockers section captures impediments that halt execution progress. Explicitly recording blockers inside the plan artifact prevents silent task abandonment and ensures impediments are surfaced, communicated, and resolved before work resumes.
