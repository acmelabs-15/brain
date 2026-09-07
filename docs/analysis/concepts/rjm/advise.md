---
package: rjm
name: advise
slug: advise
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# advise

## Definition — verbatim
> "used by `PermissionRequest`, requires exactly one decision" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:436

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 436 | defined here | Hook dispatcher execution mode for PermissionRequest requiring exactly one decision producer |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 319 | defined here | Requirement specifying advise mode for PermissionRequest event shims |

## Consumes
Host permission request payloads and registered policy decision scripts.

## Produces
Structured permission decision (`allow`, `deny`, or fallback).

## When applied
Applied during PermissionRequest events when evaluating tool execution permissions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
Advise is an architectural execution mode within rjm's hook dispatcher that delegates permission-evaluation decisions to exactly one registered producer script, converting tool-level authorization checks into structured host directives.
