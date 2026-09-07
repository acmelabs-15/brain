---
package: rjm
name: require_subagent_model
slug: require-subagent-model
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# require_subagent_model

## Definition — verbatim
(used, not defined)

> "the require-subagent-model gate joined the" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 28 | used here | Historical PreToolUse hook shim retired under ADR-097 |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 34 | used here | PreToolUse gate enforcing model selection requirements for subagent dispatch |

## Consumes
Agent dispatch tool calls and subagent model invocation arguments.

## Produces
Pass or block decision enforcing required model tiers for delegated tasks.

## When applied
Applied at PreToolUse prior to executing subagent delegation tools.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
require_subagent_model was a PreToolUse hook gate that verified agent dispatch calls included explicit, cost-effective model selections, which was later retired when rjm eliminated live tool-use hooks in favor of prompt rules.
