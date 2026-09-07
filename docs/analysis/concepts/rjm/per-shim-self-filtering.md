---
package: rjm
name: per-shim self-filtering
slug: per-shim-self-filtering
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# per-shim self-filtering

## Definition — verbatim
> "Host matcher union plus per-shim self-filtering." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:385

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 385 | defined here | Architecture pattern delegating precise event filtering to individual shim scripts under broad host matchers |

## Consumes
Consolidated hook dispatcher execution payloads.

## Produces
Early exit 0 when the invoked tool operation falls outside the individual shim's purview.

## When applied
Applied inside individual shim scripts when executed by a consolidated dispatcher.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Per-shim self-filtering complements the host matcher union by having each individual guard script independently inspect tool arguments and exit immediately with code 0 if the call is outside its specific scope.
