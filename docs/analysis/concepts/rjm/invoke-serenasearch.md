---
package: rjm
name: Invoke-SerenaSearch
slug: invoke-serenasearch
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Invoke-SerenaSearch

## Definition — verbatim
(used, not defined)

> "$serenaResults = Invoke-SerenaSearch -Query $Query -MaxResults $MaxResults" — .agents/architecture/ADR-037-memory-router-architecture.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 101 | defined here | Internal helper cmdlet in MemoryRouter executing keyword and tag search over Serena memory files. |

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
Invoke-SerenaSearch is an internal PowerShell helper function identifier in ADR-037 rather than an operational lifecycle concept.
