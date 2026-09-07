---
package: rjm
name: HookGenerationTransaction
slug: hookgenerationtransaction
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

# HookGenerationTransaction

## Definition — verbatim
(used, not defined)

> "`HookGenerationTransaction`. Orphan event cleanup removes only files whose" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:498

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 498 | defined here | Transaction pattern routing generation, publication, and deletion of hook trees atomically |

## Consumes
Source hook manifests and template definitions.

## Produces
Atomic filesystem updates of generated hook dispatchers, shims, and configuration manifests.

## When applied
Applied during multi-tool build pipelines when compiling and publishing platform-specific hook artifacts.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
HookGenerationTransaction encapsulates transactional filesystem updates during hook generation, ensuring that file creation, orphan cleanup, and manifest publication either complete entirely or roll back cleanly without leaving orphaned shims.
