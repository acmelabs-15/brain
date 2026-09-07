---
package: rjm
name: host matcher union
slug: host-matcher-union
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

# host matcher union

## Definition — verbatim
(used, not defined)

> "reduce to a known Claude core tool name, so the Copilot host matcher union" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 94 | defined here | Synthesis pattern collapsing individual tool matchers into a single host-level event filter |

## Consumes
Individual hook registrations with distinct tool-name matchers.

## Produces
A consolidated host-level matcher string or regex.

## When applied
Applied during cross-harness hook build generation to avoid spawning child processes when irrelevant tools are called.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
The host matcher union combines distinct tool matchers from multiple fine-grained hook shims into a single consolidated filter at the host boundary, preventing unnecessary dispatcher launches when non-matching tools are invoked.
