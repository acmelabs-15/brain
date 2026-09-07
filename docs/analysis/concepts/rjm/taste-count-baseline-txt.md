---
package: rjm
name: taste_count_baseline.txt
slug: taste-count-baseline-txt
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

# taste_count_baseline.txt

## Definition — verbatim
(used, not defined)

> "Existing debt is recorded in ``taste_count_baseline.txt``, measured with the" — scripts/ci/taste_count_ratchet.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/taste_count_ratchet.py | 13 | used here | File storing the integer baseline ceiling for error-severity taste-lint violations across tracked files. |

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
taste_count_baseline.txt is the filename of a text baseline holding the historical error count ceiling for taste-lints rather than an SDLC lifecycle concept.
