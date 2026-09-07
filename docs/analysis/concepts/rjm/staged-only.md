---
package: rjm
name: staged-only
slug: staged-only
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
  - {path: scripts/detect_test_coverage_gaps.py, sha256: 93f4e168b55812e1cb40e9f907fb5c79dab7b5ea84b805bd60453b4a2c6f7a68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# staged-only

## Definition — verbatim
(used, not defined)

> "parser.add_argument(\"--staged-only\", action=\"store_true\", help=\"Only check git-staged files\")" — scripts/detect_test_coverage_gaps.py:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_skill_violation.py | 359 | defined here | CLI option flag restricting skill violation scanning to git-staged files. |
| scripts/detect_test_coverage_gaps.py | 132 | defined here | CLI option flag restricting PowerShell test coverage verification to git-staged files. |

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
defects: missing-path, script-bug

## Design notes
staged-only is a command-line flag identifier used across pre-commit validation scripts to restrict analysis scope to staged git files rather than an SDLC lifecycle concept.
