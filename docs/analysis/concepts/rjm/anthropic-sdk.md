---
package: rjm
name: Anthropic SDK
slug: anthropic-sdk
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anthropic SDK

## Definition — verbatim
(used, not defined)

> "Anthropic SDK (official Python support, no PowerShell SDK)" — .agents/architecture/ADR-042-python-migration-strategy.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 42 | used here | Cited as official Python-supported SDK driving repository migration away from PowerShell. |

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
clean

## Design notes
Anthropic SDK is an external API client library rather than an agent lifecycle concept per D-023.
