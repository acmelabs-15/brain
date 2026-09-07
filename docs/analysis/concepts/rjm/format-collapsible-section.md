---
package: rjm
name: format_collapsible_section
slug: format-collapsible-section
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_collapsible_section

## Definition — verbatim
(used, not defined)

> "def format_collapsible_section(title: str, content: str) -> str:" — scripts/ai_review_common/issue_triage.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/issue_triage.py | 69 | defined here | Formats a title and content into an HTML details/summary collapsible block for GitHub markdown. |

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
defects: script-bug, other

## Design notes
A Python helper function identifier (format_collapsible_section) constructing HTML details/summary collapsible elements for markdown rendering rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
