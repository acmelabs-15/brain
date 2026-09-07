---
package: rjm
name: content_findings
slug: content-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/guard_diff.py, sha256: a3745f7b8d93313ff30f1db905d2607694d0b873e95d8b87b6fb1b3e74504d64}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# content_findings

## Definition — verbatim
(used, not defined)

> "def content_findings(" — scripts/guard_diff.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/guard_diff.py | 99 | defined here | Converts line-number findings into content-keyed findings based on normalized line text and occurrence index. |

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
A Python conversion function transforming line-number findings into stable content-keyed finding tuples, classified as name-only per D-023.
