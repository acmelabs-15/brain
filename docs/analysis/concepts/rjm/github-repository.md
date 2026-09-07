---
package: rjm
name: GITHUB_REPOSITORY
slug: github-repository
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_REPOSITORY

## Definition — verbatim
(used, not defined)

> "GITHUB_REPOSITORY      - Owner/repo slug" — .github/scripts/generate_spec_report.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 12 | used here | Environment variable documented in script docstring providing owner and repo slug. |
| scripts/ai_review_common/workflow.py | 47 | used here | Read from environment to infer repository owner and name in CI execution environments. |
| scripts/ci/spec_extract_refs.py | 11 | used here | Documented as an input environment variable providing the repository slug. |
| scripts/ci/spec_load_content.py | 10 | used here | Documented as an input environment variable used for resolving numeric issue references. |
| scripts/ci/update_needs_split_label.py | 122 | used here | Read from environment to obtain the repository slug for GitHub API queries. |

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
defects: orphan, missing-path, other

## Design notes
`GITHUB_REPOSITORY` is a standard GitHub Actions runner environment variable identifier providing the owner/repository slug rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
