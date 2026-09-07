---
package: matt
name: to-prd
slug: to-prd
kind: technique
package_phase: matt:Spec
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# to-prd

## Definition — verbatim
> "It is this skill, renamed in v1.1. \"Spec\" is now the single through-line term, and the old `to-prd` slug is dead; reinstall under the new name." — docs/engineering/to-spec.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-spec.md | 39 | used here | Explains that to-prd was renamed to to-spec in v1.1 to standardize on spec as the single through-line term. |
| external/ask-matt.md | 59 | used here | Changelog reference noting to-prd was renamed to to-spec. |
| external/to-spec.md | 40 | used here | External catalog explanation of the v1.1 rename from to-prd to to-spec. |

## Consumes
Conversation context and codebase understanding from an exploratory discussion.

## Produces
A synthesized specification document published to an issue tracker.

## When applied
Used prior to v1.1 to turn conversation context into a product requirements document or spec.

## Sub-concepts
none

## Part of
to-spec

## Implementation status
clean

## Design notes
`to-prd` was the predecessor skill name for `to-spec` in Matt's toolkit prior to version 1.1. It was retired and renamed to standardize the terminology around "spec" across the entire lifecycle rather than using PRD (Product Requirements Document), aligning the destination document with downstream tickets and test seam specifications.
