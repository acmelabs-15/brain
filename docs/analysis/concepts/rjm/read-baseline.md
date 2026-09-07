---
package: rjm
name: read_baseline
slug: read-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# read_baseline

## Definition — verbatim
(used, not defined)

> "def read_baseline(path: Path) -> int | None:" — scripts/ci/count_ratchet.py:377

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 377 | defined here | Reads a baseline integer count from a file, returning None if the file is missing or malformed. |
| scripts/validation/check_adr_lifecycle.py | 908 | defined here | Reads ADR lifecycle baseline counts from disk as a dictionary or returns an error string on failure. |

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
A baseline file parser function implemented across validation and CI ratchets to parse recorded ceiling metrics rather than a lifecycle concept.
