---
package: rjm
name: GITHUB_WORKSPACE
slug: github-workspace
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_WORKSPACE

## Definition — verbatim
(used, not defined)

> "GITHUB_WORKSPACE       - Workspace root (for package imports)" — .github/scripts/generate_spec_report.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 18 | used here | Documented as workspace root environment variable used for sys.path package imports. |
| .github/scripts/invoke_pr_comment_processing.py | 28 | used here | Read from environment to resolve workspace root for Python module search path setup. |

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
defects: orphan, missing-path, script-bug

## Design notes
`GITHUB_WORKSPACE` is a GitHub Actions runner environment variable identifier specifying the repository workspace directory root rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
