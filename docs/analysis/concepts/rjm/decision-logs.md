---
package: rjm
name: decision logs
slug: decision-logs
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

# decision logs

## Definition — verbatim
> "Manage execution plans as versioned artifacts with progress tracking and decision logs." — .claude/skills/execution-plans/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 4 | defined here | Plural concept in skill description specifying persistent recording of choices and trade-offs. |

## Consumes
Architectural choices, technical trade-offs, and evaluated alternative implementations.

## Produces
Structured tabular records capturing date, decision, rationale, and alternatives considered.

## When applied
Applied whenever a non-trivial architectural or implementation choice is made during planning or execution.

## Sub-concepts
decision-log

## Part of
execution-plans

## Implementation status
clean

## Design notes
Decision logs capture the context, rationale, and rejected alternatives for architectural and technical choices made during execution. Without them, institutional reasoning evaporates once an agent conversation terminates, leading to regressions and repeated debates.
