---
package: rjm
name: grill-me pattern
slug: grill-me-pattern
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# grill-me pattern

## Definition — verbatim
> "Implements the grill-me pattern - ask relentlessly, recommend an answer for every question, and resolve dependencies between decisions one branch at a time." — .claude/skills/requirements-interview/SKILL.md:4

## Also called — verbatim
> "# Requirements Interview (grill-me pattern)" — .claude/skills/requirements-interview/SKILL.md:14

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 4 | defined here | Core interaction pattern implemented by the adversarial requirements interview skill. |

## Consumes
Problem statement, issue description, or draft spec, along with codebase context and ADRs.

## Produces
Structured PRD with testable EARS acceptance criteria and resolved design tree branches.

## When applied
At the start of a feature lifecycle before implementation, triggered by phrases like "interview me on this" or "grill me on the requirements".

## Sub-concepts
question-discipline, circle-of-competence

## Part of
requirements-interview

## Implementation status
clean

## Design notes
The grill-me pattern is an adversarial discovery methodology that elicits clear, testable requirements by walking a design tree branch by branch, offering concrete recommended answers for every question, and resolving decision dependencies depth-first before writing code.
