---
package: rjm
name: Delegate-shim
slug: delegate-shim
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

# Delegate-shim

## Definition — verbatim
(used, not defined)

> "3. **Delegate-shim reintroduces drift one layer deeper.**" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 40 | defined here | Rejected architectural pattern proposing that generated shims delegate execution to an intermediate implementation script |

## Consumes
Canonical hooks, intermediate _impl/ modules, wrapper shims.

## Produces
Two-tier hook dispatch architecture with delegation layers.

## When applied
Evaluated during ADR-061 debate and rejected due to secondary drift risks.

## Sub-concepts
none

## Part of
ADR-061

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The delegate-shim pattern was a proposed architectural pattern in ADR-061 wherein matcher shims would forward execution to a common _impl/invoke_X.py script instead of embedding hook logic inline. It was rejected because it did not eliminate drift, but merely shifted the drift vulnerability one layer deeper into the implementation hierarchy.
