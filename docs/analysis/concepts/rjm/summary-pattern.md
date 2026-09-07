---
package: rjm
name: _SUMMARY_PATTERN
slug: summary-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/comment_classification.py, sha256: c17b44af346cca4f28fdd93db44ebccde3f373ab0142292c50fc0abba2eadf9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SUMMARY_PATTERN

## Definition — verbatim
(used, not defined)

> "_SUMMARY_PATTERN = re.compile(" — scripts/github_core/comment_classification.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/comment_classification.py | 37 | defined here | Compiled regular expression matching summary, overview, and change headings in review comments. |

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
defects: orphan

## Design notes
A compiled regular expression pattern for detecting markdown summary and overview headings in review comments, classified as name-only per D-023.
