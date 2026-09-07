---
package: rjm
name: Blocking I/O on a hot path
slug: blocking-i-o-on-a-hot-path
kind: pattern
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

# Blocking I/O on a hot path

## Definition — verbatim
> "**Blocking I/O on a hot path**: synchronous network calls inside a request loop that should answer in milliseconds." — .claude/skills/software-engineering-library/references/release-it.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 226 | defined here | Defined as a stability anti-pattern where synchronous network or file I/O is embedded directly within latency-critical loops. |

## Consumes
Low-latency request handlers, event loops, and synchronous call chains.

## Produces
Latency spikes, throughput degradation, and caller thread exhaustion.

## When applied
Flagged during code reviews of performance-critical request paths, event loops, and agent turns.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
An anti-pattern where synchronous, blocking network or disk calls are placed directly within execution paths that require millisecond response times. In rjm, asynchronous delegation, pre-fetching, and local caching are used to keep hot paths free of blocking I/O.
