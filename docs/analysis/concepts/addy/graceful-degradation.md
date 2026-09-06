---
package: addy
name: Graceful degradation
slug: graceful-degradation
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Graceful degradation

## Definition — verbatim
> "Graceful degradation: if any dependency is missing, let the fetch through." — hooks/sdd-cache-pre.sh:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 20 | defined here | Explains policy of allowing tool execution to proceed normally if hook dependencies are absent. |

## Consumes
Missing shell binary dependencies (jq, curl, shasum, sha256sum) or configuration failures.

## Produces
Normal unblocked execution of agent tool calls via exit code 0.

## When applied
Triggered when dependency checks fail at the start of hook execution scripts.

## Sub-concepts
none

## Part of
hooks

## Implementation status
clean

## Design notes
Fault-tolerance pattern ensuring that hook script failures or missing non-critical dependencies exit cleanly with code 0 to allow the underlying agent tool call to proceed rather than aborting the session.
