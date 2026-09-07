---
package: rjm
name: Plugin Hook Runtime-Contract Verification
slug: plugin-hook-runtime-contract-verification
kind: technique
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

# Plugin Hook Runtime-Contract Verification

## Definition — verbatim
> "ADR-071: Plugin Hook Runtime-Contract Verification" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 12 | defined here | Heading and subject of architectural decision mandating empirical verification of plugin hook runtime contracts |

## Consumes
Host CLI hook runtime specifications, empirical probe results, and generated hook artifacts.

## Produces
A verified runtime contract, automated runtime-contract test suites, and gating criteria preventing silent launcher failures.

## When applied
Applied before releasing customer-facing generated artifacts or when updating host CLI versions.

## Sub-concepts
plugin-root-anchoring, copilot-plugin-root, fm-11

## Part of
adr-071

## Implementation status
defects: doc-drift, missing-path

## Design notes
Plugin Hook Runtime-Contract Verification is the engineering standard established in ADR-071 to ensure that generated hook artifacts are tested and executed against real host CLIs (Claude Code, GitHub Copilot CLI) under actual runtime conditions rather than relying on assumed or unverified contracts. Without this empirical verification, differences in environment variables and working directories cause catastrophic host launcher wedging.
