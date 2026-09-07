---
package: rjm
name: delegate shims
slug: delegate-shims
kind: artifact
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

# delegate shims

## Definition — verbatim
> "Amend REQ-003-007 step 5 so the generator emits **delegate shims**, not inline-body shims." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103

## Also called — verbatim
Delegate-shim — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:40
thin delegate shim — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:121

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 103 | defined here | Proposed generator output pattern emitting lightweight shims delegating to canonical bodies. |

## Consumes
none

## Produces
none

## When applied
> "A delegate shim file contains only:" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:105

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
Thin generated wrapper scripts that parse matcher metadata and forward tool hook execution to a single shared implementation body, proposed in ADR-061 to eliminate duplicate bodies across matcher registrations.
