---
package: rjm
name: validate-plugin-manifests
slug: validate-plugin-manifests
kind: gate
package_phase: rjm:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate-plugin-manifests

## Definition — verbatim
(used, not defined)

> "hooks, `validate-plugin-manifests` (2026-05-05), checks schema, not path" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 150 | used here | Cited in incident analysis as an existing CI schema gate that lacked runtime path execution verification |

## Consumes
Plugin manifest files and hook configurations.

## Produces
Validation pass/fail status for plugin manifest schemas.

## When applied
Triggered in CI on pull requests or commits modifying plugin manifest definitions and hooks.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
validate-plugin-manifests is a continuous integration workflow gate in rjm designed to check JSON schema validity and structural completeness of plugin manifests. ADR-071 identifies that schema validation alone is insufficient to prevent runtime breakage, necessitating paired runtime-contract execution verification.
