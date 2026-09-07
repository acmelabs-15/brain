---
package: rjm
name: get_diff_line_numbers
slug: get-diff-line-numbers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_diff_line_numbers

## Definition — verbatim
(used, not defined)

> "def get_diff_line_numbers(base: str) -> dict[str, set[int]]:" — .claude/skills/taste-lints/scripts/taste_lints.py:336

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 336 | defined here | Function parsing unified git diff output to map modified file paths to sets of added or changed line numbers. |

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
defects: doc-drift, other

## Design notes
get_diff_line_numbers is a Python function identifier in taste_lints.py extracting changed line numbers from diff hunks rather than a lifecycle concept.
