---
package: addy
name: Common Anti-Patterns
slug: common-anti-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Common Anti-Patterns

## Definition — verbatim
(used, not defined)
> "| Anti-Pattern | Impact | Fix |" — references/performance-checklist.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 13 | defines | Reference table cataloging frequent full-stack performance bugs, their operational impacts, and standard remediations |

## Consumes
Inefficient code patterns across database queries, connection pooling, caching, rendering, and memory management

## Produces
Concrete remediation recipes mapping symptoms to architectural fixes

## When applied
During code reviews, diagnostic investigations, and performance retrospectives

## Sub-concepts
none

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A diagnostic lookup table summarizing fourteen high-frequency performance antipatterns across database access, caching, browser rendering, and memory lifecycle, pairing each with its operational impact and concrete fix.
