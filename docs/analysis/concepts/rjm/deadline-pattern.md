---
package: rjm
name: DEADLINE_PATTERN
slug: deadline-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEADLINE_PATTERN

## Definition — verbatim
(used, not defined)

> "DEADLINE_PATTERN = re.compile" — scripts/ci/establish_ai_review_deadline.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/establish_ai_review_deadline.py | 18 | defined here | Compiled regular expression matching numeric timestamps for deadline validation. |

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
A regex pattern constant validating numeric epoch timestamps rather than an operational lifecycle concept.
