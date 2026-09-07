---
package: rjm
name: inline-body shims
slug: inline-body-shims
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

# inline-body shims

## Definition — verbatim
(used, not defined)

> "Amend REQ-003-007 step 5 so the generator emits **delegate shims**, not inline-body shims." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 103 | used here | Contrasted against proposed delegate shims as the existing generator output mechanism. |

## Consumes
none

## Produces
none

## When applied
> "per-matcher inline-body shim, written by `build/scripts/generate_hooks.py::inject_shim` (line 474). Each shim is a self-contained Python module." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:132

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Self-contained hook wrapper scripts that duplicate the entire hook execution logic within every generated matcher file, eliminating runtime import dependencies at the cost of potential divergence across multi-matcher hooks.
