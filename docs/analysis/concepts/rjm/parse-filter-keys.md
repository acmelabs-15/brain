---
package: rjm
name: parse_filter_keys
slug: parse-filter-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflows/determine_should_run_from_filters.py, sha256: a6f201bd6a65cb7033d31e82c0e14b5cb9a30fafdd98006a42e15754c40bdb26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# parse_filter_keys

## Definition — verbatim
(used, not defined)

> "def parse_filter_keys(raw_filter_keys: str) -> list[str]:" — scripts/workflows/determine_should_run_from_filters.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflows/determine_should_run_from_filters.py | 55 | defined here | Helper function that splits comma-separated filter keys into a trimmed string list. |

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
A Python helper function in `scripts/workflows/determine_should_run_from_filters.py` that parses comma-delimited environment variable filter keys, classified as name-only per D-023.
