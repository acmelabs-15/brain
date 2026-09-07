---
package: rjm
name: get_verdict_emoji
slug: get-verdict-emoji
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_verdict_emoji

## Definition — verbatim
(used, not defined)

> "def get_verdict_emoji(verdict: str) -> str:" — scripts/ai_review_common/issue_triage.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 47 | used here | Cited as an exported helper function from the verdict library for formatting findings tables. |
| .github/scripts/generate_spec_report.py | 35 | used here | Imported to format status emojis in PR comment validation reports. |
| scripts/ai_review_common/issue_triage.py | 59 | defined here | Defines function mapping verdict string tokens to display emojis. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
verdict-library

## Implementation status
defects: missing-path, doc-drift, orphan, script-bug, other

## Design notes
`get_verdict_emoji` is a Python utility function identifier mapping verdict string tokens to visual display emoji characters, classified as name-only per D-023.
