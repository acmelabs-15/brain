---
package: rjm
name: Copilot dispatcher
slug: copilot-dispatcher
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Copilot dispatcher

## Definition — verbatim
(used, not defined)

> "retire the Copilot dispatcher per ADR-085" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 24 | used here | Cited in decision summary retiring generated Copilot hook dispatcher machinery. |

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
Runtime dispatcher machinery generated for Copilot CLI hook execution, classified as name-only per D-023 as an infrastructure component rather than a lifecycle concept.
