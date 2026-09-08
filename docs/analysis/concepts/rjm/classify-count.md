---
package: rjm
name: classify_count
slug: classify-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# classify_count

## Definition — verbatim
(used, not defined)

> "def classify_count(count: int) -> str:" — scripts/validation/pr_commit_count.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_commit_count.py | 116 | defined here | Function mapping an authored commit count to advisory threshold statuses ('ALERT', 'WARNING', or 'OK'). |

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
A helper function identifier in `pr_commit_count.py` mapping commit counts to advisory status tiers, classified as name-only per D-023.
