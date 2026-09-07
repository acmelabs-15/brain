---
package: rjm
name: Idempotency sentinels
slug: idempotency-sentinels
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

# Idempotency sentinels

## Definition — verbatim
> "Idempotency sentinels (`# AUTO-GENERATED MATCHER SHIM (REQ-003-007)` at top; `# END MATCHER SHIM` at end)." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 107 | defined here | Specified comment delimiters marking auto-generated matcher shim boundaries. |

## Consumes
none

## Produces
none

## When applied
> "Idempotency sentinels (`# AUTO-GENERATED MATCHER SHIM (REQ-003-007)`, `# END MATCHER SHIM`) preserved unchanged." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:185

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Comment markers placed at the start and finish of generated shim code that enable code generation and stripping tools to inject and update generated sections idempotently without corrupting handwritten code.
