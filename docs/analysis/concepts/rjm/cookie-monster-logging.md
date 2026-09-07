---
package: rjm
name: cookie-monster logging
slug: cookie-monster-logging
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cookie-monster logging

## Definition — verbatim
> "**Cookie-monster logging**: writing every request body to the log; later, the disk is full and every write blocks." — .claude/skills/software-engineering-library/references/release-it.md:228

## Also called — verbatim
> "cookie-monster logging that fills the disk" — .claude/skills/review/references/observability.md:83

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 228 | defined here | Defined as a stability anti-pattern characterized by writing every request body to the log, eventually exhausting disk space and blocking all subsequent writes. |
| .claude/skills/review/references/observability.md | 83 | used here | Cited during observability review as an anti-pattern to detect and reject when code logs full request bodies or payloads on hot paths. |

## Consumes
High-frequency logging calls, request body serialization points, and disk storage constraints.

## Produces
Review rejections, blocking findings, and recommendations to redact or sample payloads on hot paths.

## When applied
Applied when reviewing logging code paths or designing service telemetry to avoid operational disk exhaustion.

## Sub-concepts
none

## Part of
- signal-without-noise
- stability-anti-patterns

## Implementation status
defects: missing-path

## Design notes
A software reliability anti-pattern in rjm's engineering library describing indiscriminate logging of entire request bodies on high-throughput paths, which rapidly exhausts disk capacity, blocks write operations, and causes cascading service failures.
