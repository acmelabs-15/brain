---
package: rjm
name: Exit Code Standardization
slug: exit-code-standardization
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
  - {path: scripts/detect_test_coverage_gaps.py, sha256: 93f4e168b55812e1cb40e9f907fb5c79dab7b5ea84b805bd60453b4a2c6f7a68}
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit Code Standardization

## Definition — verbatim
(used, not defined)

> "See: ADR-035 Exit Code Standardization" — scripts/detect_skill_violation.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_skill_violation.py | 16 | used here | Cited in docstring as the architectural decision record (ADR-035) standardizing process exit codes. |
| scripts/detect_test_coverage_gaps.py | 11 | used here | Cited in docstring as the architectural standard governing script exit codes. |
| scripts/new_validated_pr.py | 12 | used here | Cited in docstring as the architectural standard governing script exit codes. |
| scripts/normalize_line_endings.py | 11 | used here | Cited in docstring as the architectural standard governing script exit codes. |

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
defects: doc-drift, missing-path, script-bug, orphan

## Design notes
Exit Code Standardization is the title of architecture decision record ADR-035 referenced across Python CLI scripts to specify standardized process exit codes rather than an operational lifecycle concept.
