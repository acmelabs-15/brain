---
package: rjm
name: issue #3902
slug: issue-3902
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue #3902

## Definition — verbatim
(used, not defined)

> "contributors do not need a separate run to find them (issue #3902)." — scripts/ci/taste_count_ratchet.py:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/taste_count_ratchet.py | 252 | used here | Cited in docstring explaining why `list_violations` displays violations on regression so contributors see PR debt immediately. |

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
issue #3902 is an issue tracking identifier documenting priority reporting of PR violations in taste ratchet output rather than an operational lifecycle concept.
