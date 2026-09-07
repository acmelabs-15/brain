---
package: rjm
name: multi-matcher shims
slug: multi-matcher-shims
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

# multi-matcher shims

## Definition — verbatim
(used, not defined)

> "Direct `diff` between multi-matcher shims of the same canonical hook produces no output." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 38 | used here | Refers to hooks that have more than one matcher pattern generating distinct shims |

## Consumes
Canonical hook files, multiple pattern configuration entries.

## Produces
Multiple generated hook shims per canonical hook body.

## When applied
When a single hook event must trigger across multiple distinct tool or path matchers.

## Sub-concepts
none

## Part of
hook-matcher-shims

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Multi-matcher shims represent the structural pattern where a single canonical hook script is instantiated as multiple generated shim files corresponding to distinct tool execution matchers. Managing multi-matcher shims without code drift was the central problem addressed by ADR-061.
