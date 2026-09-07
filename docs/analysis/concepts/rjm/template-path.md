---
package: rjm
name: TEMPLATE_PATH
slug: template-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TEMPLATE_PATH

## Definition — verbatim
(used, not defined)

> "TEMPLATE_PATH = Path(\".github/prompts/post-pr-retrospective.md\")" — scripts/ci/build_retrospective_prompt.py:22

## Also called — verbatim
> "_TEMPLATE_PATH = Path(\".github/prompts/drift-alert-issue.md\")" — scripts/ci/drift_create_alert_issue.py:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_retrospective_prompt.py | 22 | defined here | Constant defining the default path to the post-PR retrospective prompt template. |
| scripts/ci/drift_create_alert_issue.py | 35 | defined here | Constant defining the default path to the drift alert issue prompt template. |

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
defects: orphan

## Design notes
`TEMPLATE_PATH` is a filesystem path configuration constant pointing to prompt markdown template files in CI scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
