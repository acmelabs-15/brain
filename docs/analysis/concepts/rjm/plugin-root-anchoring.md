---
package: rjm
name: plugin-root anchoring
slug: plugin-root-anchoring
kind: pattern
package_phase: cross-phase
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

# plugin-root anchoring

## Definition — verbatim
> "Decision item 1 (plugin-root anchoring) still binds every" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 29 | defined here | Specified as immutable Decision item 1 requiring all hook commands to anchor paths to the plugin root |

## Consumes
Hook registration command strings and host plugin root environment variables.

## Produces
Portable hook execution command strings resilient to arbitrary caller working directories.

## When applied
Applied when authoring or generating hook definitions across all supported platforms and harnesses.

## Sub-concepts
copilot-plugin-root

## Part of
plugin-hook-runtime-contract-verification

## Implementation status
defects: doc-drift, missing-path

## Design notes
Plugin-root anchoring is an invariant mandating that every hook script path registered in a plugin manifest must be explicitly prefixed with the host environment's plugin root variable (`${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT}}` or `${CLAUDE_PLUGIN_ROOT}`). Because the host CLI invokes hooks from arbitrary user project working directories rather than the plugin directory, bare relative paths fail to resolve and wedge the host environment.
