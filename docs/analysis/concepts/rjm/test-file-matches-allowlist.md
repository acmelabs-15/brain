---
package: rjm
name: test_file_matches_allowlist
slug: test-file-matches-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# test_file_matches_allowlist

## Definition — verbatim
(used, not defined)

> "def test_file_matches_allowlist(file_path: str) -> bool:" — scripts/modules/investigation_allowlist.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 45 | defined here | Defines predicate function checking if a file path matches any investigation allowlist pattern. |

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
clean

## Design notes
A Python helper function identifier checking file paths against allowlist patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
