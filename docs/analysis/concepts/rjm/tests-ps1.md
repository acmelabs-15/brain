---
package: rjm
name: Tests.ps1
slug: tests-ps1
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_test_coverage_gaps.py, sha256: 93f4e168b55812e1cb40e9f907fb5c79dab7b5ea84b805bd60453b4a2c6f7a68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tests.ps1

## Definition — verbatim
(used, not defined)

> "Non-blocking WARNING that detects .ps1 files without corresponding .Tests.ps1 files." — scripts/detect_test_coverage_gaps.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_test_coverage_gaps.py | 4 | used here | Named in module docstring as the expected file extension suffix for PowerShell test files. |

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
defects: script-bug

## Design notes
Tests.ps1 is a file naming convention suffix for Pester PowerShell unit tests rather than an SDLC lifecycle concept.
