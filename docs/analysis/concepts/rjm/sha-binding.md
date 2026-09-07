---
package: rjm
name: SHA-binding
slug: sha-binding
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SHA-binding

## Definition — verbatim
> "SHA-binding holds: HEAD is M only while the reviewed code (X) is HEAD's parent." — .claude/skills/review/scripts/validate_review_marker.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_review_marker.py | 25 | defined here | Technique ensuring review markers remain valid only while the reviewed commit is the marker commit's direct parent. |

## Consumes
A reviewed commit SHA and an empty marker commit.

## Produces
Invalidation of review approval whenever subsequent commits are added to the branch.

## When applied
Enforced by `/ship` pre-flight validation to verify that code has not drifted since `/review`.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
SHA-binding is an architectural technique in rjm that cryptographically tethers review approval to a specific commit SHA via an empty parent-referencing commit, ensuring any subsequent commit automatically invalidates review freshness without requiring central state.
