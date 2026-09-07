---
package: rjm
name: Slow Responses and Deadlines
slug: slow-responses-and-deadlines
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Slow Responses and Deadlines

## Definition — verbatim
> "### 5. Slow Responses and Deadlines" — .claude/skills/review/references/reliability.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 84 | defined here | Reliability focus area auditing end-to-end deadline propagation and slow response cancellation. |

## Consumes
Request context objects, deadline configurations, and downstream call hierarchies.

## Produces
Findings identifying missing deadline propagation, resource leaks on expired work, or slow success anti-patterns.

## When applied
Applied during reliability reviews of multi-tier service requests and asynchronous pipeline operations.

## Sub-concepts
none

## Part of
reliability

## Implementation status
clean

## Design notes
`Slow Responses and Deadlines` is a reliability review checklist item verifying that operational deadlines originate at request boundaries and propagate downstream so timed-out tasks cancel promptly and release resources.
