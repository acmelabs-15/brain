---
package: rjm
name: ignore-file
slug: ignore-file
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

# ignore-file

## Definition — verbatim
(used, not defined)

> "parser.add_argument(\"--ignore-file\", default=\"\", help=\"Path to file with ignore patterns\")" — scripts/detect_test_coverage_gaps.py:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_test_coverage_gaps.py | 133 | defined here | CLI option flag allowing the caller to specify an external file containing custom regex ignore patterns. |

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
ignore-file is a command-line argument identifier in detect_test_coverage_gaps.py for specifying custom exclusion pattern files rather than an SDLC lifecycle concept.
