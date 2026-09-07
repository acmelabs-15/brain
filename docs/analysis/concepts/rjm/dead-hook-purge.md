---
package: rjm
name: "dead-hook purge"
slug: dead-hook-purge
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dead-hook purge

## Definition — verbatim
(used, not defined)

> "Driven by issue #3295 (dead-hook purge) and issue #3197 (vendored-hook ROI review)." — .agents/architecture/ADR-041-codeql-integration.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 23 | used here | Cited as the driving objective for GitHub issue #3295 removing inactive hooks. |

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
An initiative label designating GitHub issue #3295 for removing dead and unregistered hooks from the repository, classified as name-only per D-023.
