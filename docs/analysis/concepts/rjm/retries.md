---
package: rjm
name: Retries
slug: retries
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

# Retries

## Definition — verbatim
> "### 2. Retries" — .claude/skills/review/references/reliability.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 65 | defined here | Focus area checklist auditing retry loops for idempotency, bounds, backoff, and jitter. |

## Consumes
Retry loops, remote invocation handlers, and mutating API calls.

## Produces
Findings flagging unbounded retries, missing backoff/jitter, missing idempotency keys, or inappropriate 4xx retry logic.

## When applied
Applied during reliability reviews of pull requests implementing retry logic or handling transient failures.

## Sub-concepts
exponential-backoff-and-jitter, idempotency-key

## Part of
reliability

## Implementation status
clean

## Design notes
`Retries` is a reliability review checklist ensuring retry logic is safely bounded, incorporates exponential backoff with jitter, respects HTTP error semantics, and guards mutating operations with idempotency keys.
