---
package: rjm
name: file_matches_pattern
slug: file-matches-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# file_matches_pattern

## Definition — verbatim
(used, not defined)

> "def file_matches_pattern(file_path: str, patterns: list[str]) -> bool:" — .claude/skills/steering-matcher/get_applicable_steering.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/get_applicable_steering.py | 49 | defined here | Tests whether a given file path matches any glob pattern in a list by converting each to regex. |

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
defects: orphan, other

## Design notes
`file_matches_pattern` is a Python function in `get_applicable_steering.py` evaluating file paths against glob patterns rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
