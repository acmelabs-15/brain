---
package: rjm
name: parse_banned_words
slug: parse-banned-words
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_banned_words

## Definition — verbatim
(used, not defined)

> "def parse_banned_words(rules_text: str) -> set[str]:" — .claude/skills/prose-self-check/scripts/prose_lint.py:1028

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 1028 | defined here | Function parsing backticked tokens under Banned Vocabulary headings in rules text. |

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
defects: doc-drift, other, script-bug

## Design notes
A Python helper function identifier in prose_lint.py that extracts banned vocabulary sets from markdown rule sections.
