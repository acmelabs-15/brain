---
package: rjm
name: exponential backoff and jitter
slug: exponential-backoff-and-jitter
kind: technique
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

# exponential backoff and jitter

## Definition — verbatim
> "- Are retries bounded, with exponential backoff and jitter?" — .claude/skills/review/references/reliability.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 68 | used here | Reliability review checklist criterion requiring bounded retries with randomized backoff delays. |

## Consumes
Retry scheduling configurations and backoff delay algorithms.

## Produces
Randomized exponential backoff delays preventing thundering herd problems during service degradation.

## When applied
Applied whenever automated retry loops are designed or reviewed for remote service invocations.

## Sub-concepts
none

## Part of
retries

## Implementation status
clean

## Design notes
`exponential backoff and jitter` is a resilience technique combining geometrically increasing retry intervals with randomized timing jitter to prevent synchronized retry storms from overwhelming recovering dependencies.
