---
package: rjm
name: Decision Log
slug: decision-log
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
  - {path: .claude/skills/planner/resources/plan-format.md, sha256: af8bd8d515dc5c98ef1ba14a6853d58f4f1f3ba81dc923de3689c1eaa296fe43}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Log

## Definition — verbatim
> "| Decision Log | Table of decisions with rationale |" — .claude/skills/execution-plans/SKILL.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 46 | defined here | Required section in execution plans capturing decision records with date, rationale, and alternatives. |
| .claude/skills/planner/resources/plan-format.md | 17 | defined here | Planning context section consumed verbatim by Technical Writer and Quality Reviewer agents. |
| .claude/skills/planner/scripts/planner.py | 42 | defined here | Prompt check enforcing multi-step reasoning chains for major choices and micro-decisions in plan verification. |

## Consumes
Architectural choices, micro-decisions, technical trade-offs, and rejected alternative approaches.

## Produces
Structured decision table capturing choices, multi-step reasoning chains, and evaluated alternatives.

## When applied
Recorded during plan creation and updated continuously as non-trivial technical trade-offs are resolved during execution.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The Decision Log formalizes architectural and implementation trade-offs by recording decisions alongside multi-step reasoning chains. It serves as the single source of truth for downstream agents (such as Technical Writer for code annotations and Quality Reviewer for risk validation), ensuring future maintainers understand why specific choices were made.
