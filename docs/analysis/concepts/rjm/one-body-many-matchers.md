---
package: rjm
name: One-body-many-matchers
slug: one-body-many-matchers
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# One-body-many-matchers

## Definition — verbatim
(used, not defined)

> "One-body-many-matchers" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 139 | used here | Identified as an architectural alternative considered during requirements planning. |

## Consumes
none

## Produces
none

## When applied
> "M7-T3 captures one-body-many-matchers as the alternative." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:245

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural design pattern where multiple matcher triggers reference a single shared hook execution body, reducing duplicate implementation code across distinct trigger configurations.
