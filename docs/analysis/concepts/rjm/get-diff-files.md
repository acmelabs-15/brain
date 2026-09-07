---
package: rjm
name: get_diff_files
slug: get-diff-files
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

# get_diff_files

## Definition — verbatim
(used, not defined)

> "def get_diff_files(base: str) -> list[str]:" — .claude/skills/taste-lints/scripts/taste_lints.py:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 255 | defined here | Function resolving list of changed files from git diff against a base branch while preventing CWE-88 argument injection. |

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
get_diff_files is a Python function identifier in taste_lints.py retrieving changed files from git diff rather than a lifecycle concept.
