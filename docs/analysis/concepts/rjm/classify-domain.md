---
package: rjm
name: classify_domain
slug: classify-domain
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: scripts/github_core/comment_classification.py, sha256: c17b44af346cca4f28fdd93db44ebccde3f373ab0142292c50fc0abba2eadf9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# classify_domain

## Definition — verbatim
(used, not defined)

> "def classify_domain(keywords: list[str], content: str) -> list[str]:" — .claude/skills/skillforge/scripts/discover_skills.py:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 257 | defined here | Classifies skills into domain categories based on extracted keywords and content. |
| scripts/github_core/comment_classification.py | 43 | defined here | Classifies PR review comment bodies into categories based on keyword regex matching. |

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
defects: doc-drift, missing-path, orphan

## Design notes
Function identifier implemented in discovery and PR comment classification scripts, classified as name-only per D-023.
