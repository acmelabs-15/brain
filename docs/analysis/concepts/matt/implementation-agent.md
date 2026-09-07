---
package: matt
name: implementation agent
slug: implementation-agent
kind: role
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implementation agent

## Definition — verbatim
> "The implementation agent has the most **context pressure**. They are responsible for exploration, writing code, and debugging failures." — skills/in-progress/retro/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 31 | defined here | Defines the primary executing agent responsible for exploring codebases, writing implementations, and resolving test failures. |

## Consumes
Task requirements, repository code, and exploratory tool calls.

## Produces
Code modifications, implementation diffs, and working solutions.

## When applied
Active during the implementation stage of session workflows.

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
The primary execution role responsible for exploring code, generating solutions, and debugging failures under high context pressure. In Matt's architectural model, the implementation agent is deliberately freed from enforcing repository coding standards, which are delegated to the review agent.
