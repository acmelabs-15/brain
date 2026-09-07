---
package: rjm
name: _PATH_CHAR
slug: path-char
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_drift.py, sha256: 6b40fae460dc8dfe9dcc290ea47974ca5af1f625d54bcd0d897c62e4d6d41155}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _PATH_CHAR

## Definition — verbatim
(used, not defined)

> "_PATH_CHAR" — scripts/validation/check_skill_md_drift.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 57 | defined here | Regular expression character class constant defining valid file path characters. |

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
defects: doc-drift

## Design notes
A regex character class constant in `scripts/validation/check_skill_md_drift.py` for matching path characters, classified as `name-only` per D-023.
