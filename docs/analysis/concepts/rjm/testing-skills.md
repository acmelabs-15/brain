---
package: rjm
name: Testing Skills
slug: testing-skills
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Testing Skills

## Definition — verbatim
> "### 3. Testing Skills" — .claude/skills/reflect/references/decision-tree-and-examples.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 116 | defined here | Domain use case recording testing preferences such as coverage targets, mocking rules, and assertion styles. |

## Consumes
Test writing feedback, test execution results, mocking decisions, and assertion preferences.

## Produces
Structured observations in `.serena/memories/testing-observations.md`.

## When applied
During session reflection following test authoring, test execution, or QA verification.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
Domain-specific reflection category that captures repository testing conventions (coverage thresholds, mocking vs integration boundaries, assertion libraries, naming schemes) to guide subsequent automated test generation.
