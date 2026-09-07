---
package: rjm
name: exponential backoff with jitter
slug: exponential-backoff-with-jitter
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exponential backoff with jitter

## Definition — verbatim
> "Use exponential backoff with jitter. A fixed-interval retry storm synchronizes clients and amplifies the outage." — .claude/skills/software-engineering-library/references/release-it.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 112 | defined here | Mandated retry timing technique preventing synchronized retry storms across distributed clients. |

## Consumes
Transient network errors, throttling signals (429/503), and retry attempt counters.

## Produces
Randomized exponentially increasing wait intervals between subsequent retry attempts.

## When applied
Applied across all automated retry policies for transient, idempotent operations.

## Sub-concepts
none

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
A retry schedule technique that combines exponential increases in wait times with pseudo-random jitter. In rjm, it desynchronizes concurrent agent retries, preventing thundering herds and retry storms that amplify outages against struggling dependencies.
