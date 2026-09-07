---
package: rjm
name: baseline_at_ref
slug: baseline-at-ref
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

# baseline_at_ref

## Definition — verbatim
(used, not defined)

> "def baseline_at_ref(repo_root: Path, ref: str, baseline: Path) -> int | None:" — scripts/ci/count_ratchet.py:472

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 472 | defined here | Retrieves and parses the baseline violation integer recorded at a specified git ref using git show. |

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
A git helper function extracting historical baseline integers from specified git revisions via git show rather than a lifecycle concept.
