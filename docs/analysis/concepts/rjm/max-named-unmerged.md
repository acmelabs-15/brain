---
package: rjm
name: MAX_NAMED_UNMERGED
slug: max-named-unmerged
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MAX_NAMED_UNMERGED

## Definition — verbatim
(used, not defined)

> "MAX_NAMED_UNMERGED = 5" — scripts/ci/count_ratchet.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 170 | defined here | Constant defining the maximum number of unmerged conflict paths to print by name (5) before summarizing with a count. |

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
A diagnostic formatting threshold constant capping the display of unmerged file paths during git merge conflict handling rather than a lifecycle concept.
