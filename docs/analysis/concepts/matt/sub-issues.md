---
package: matt
name: sub-issues
slug: sub-issues
kind: artifact
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sub-issues

## Definition — verbatim
(used, not defined)

> "On GitHub the tickets weren&#x27;t created as sub-issues of the spec issue." — external/to-tickets.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-tickets.md | 55 | used here | Identifies a GitHub integration limitation where tickets fail to be attached as native sub-issues of the parent spec issue. |

## Consumes
A parent specification issue and decomposed child ticket issues.

## Produces
Hierarchical parent-child tracking relationships on issue trackers supporting native sub-issues.

## When applied
Applied when publishing decomposed tickets derived from a specification issue on GitHub.

## Sub-concepts
none

## Part of
to-tickets, issue tracker

## Implementation status
defects: doc-drift

## Design notes
An issue tracker organizational construct representing hierarchical child tickets linked under a parent specification issue, enabling teams to track decomposed vertical slices as coherent parts of a feature specification.
