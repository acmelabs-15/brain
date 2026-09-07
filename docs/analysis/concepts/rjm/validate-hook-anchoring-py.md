---
package: rjm
name: validate_hook_anchoring.py
slug: validate-hook-anchoring-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_hook_anchoring.py

## Definition — verbatim
(used, not defined)

> "`scripts/validation/validate_hook_anchoring.py` still enforces it and now" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:595

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 595 | defined here | Identified as the validation script enforcing the plugin-root anchoring invariant in pre-push and CI |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 38 | used here | Cited in analysis of hook validation tests updated to support zero-tool-use hook states |

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
defects: doc-drift, missing-path

## Design notes
validate_hook_anchoring.py is a validation script path enforcing plugin-root path anchoring rules in hooks; categorized as name-only per D-023.
