---
package: rjm
name: _file_matches_patterns
slug: file-matches-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _file_matches_patterns

## Definition — verbatim
(used, not defined)

> "def _file_matches_patterns(file_path: str, patterns: list[str]) -> bool:" — .claude/skills/steering-matcher/scripts/get_applicable_steering.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 56 | defined here | Helper function testing if a file path matches any compiled glob pattern regex. |

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
defects: script-bug, exit-code-mismatch

## Design notes
`_file_matches_patterns` is a private Python helper function in `scripts/get_applicable_steering.py` testing file paths against glob patterns rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
