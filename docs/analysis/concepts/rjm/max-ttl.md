---
package: rjm
name: MAX_TTL
slug: max-ttl
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MAX_TTL

## Definition — verbatim
(used, not defined)

> "A marker is live only when `expires_at` is in the future relative to reader-now AND `expires_at <= reader-now + MAX_TTL` (15 minutes)." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 89 | defined here | Defined as reader-clock upper bound (15 minutes) preventing forged far-future lease markers. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Constant identifier in ADR-076 bounding valid lease durations against reader-clock time rather than an operational lifecycle concept.
