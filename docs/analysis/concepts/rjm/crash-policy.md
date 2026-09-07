---
package: rjm
name: Crash policy
slug: crash-policy
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

# Crash policy

## Definition — verbatim
> "Crash policy (exit 2 on shim error, exit 0 on no-match, propagate wrapped exit on match) preserved unchanged." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 186 | defined here | Defines exit code behavior when shims encounter internal errors, no-match, or matches. |

## Consumes
none

## Produces
none

## When applied
> "preserve sentinel and crash-policy clauses verbatim" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:198

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A standardized exit code contract for hook execution shims that separates infrastructure configuration failures (exit 2) from non-matching events (exit 0) and target command status.
